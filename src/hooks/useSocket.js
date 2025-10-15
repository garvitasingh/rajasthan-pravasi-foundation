import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

export const useSocket = (currentUser) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    if (!currentUser?._id) return;

    // ⚙️ Create new socket connection
    const socketInstance = io("http://31.97.231.85:2700", {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      autoConnect: true,
    });

    setSocket(socketInstance);

    // ✅ When connected
    socketInstance.on("connect", () => {
      console.log("✅ Connected to socket server");
      setIsConnected(true);

      socketInstance.emit("join", {
        userId: currentUser._id,
        username: currentUser.username,
        photoUrl: currentUser.photoUrl || null,
      });
    });

    // 🟢 On join success
    socketInstance.on("joinSuccess", (data) => {
      console.log("🎉 Joined:", data);
      setOnlineUsers(data.onlineUsers || []);
    });

    // 🧑‍🤝‍🧑 User online
    socketInstance.on("userOnline", (user) => {
      setOnlineUsers((prev) => {
        if (prev.some((u) => u.userId === user.userId)) return prev;
        return [...prev, user];
      });
    });

    // 🔴 User offline
    socketInstance.on("userOffline", (user) => {
      setOnlineUsers((prev) => prev.filter((u) => u.userId !== user.userId));
    });

    // 💬 Message received
    const handleMessage = (msg) => {
      console.log("📥 Message received:", msg);
      setMessages((prev) => [...prev, msg]);
    };

    socketInstance.on("receiveMessage", handleMessage);
    socketInstance.on("newMessage", handleMessage);

    // 🟡 Typing events
    socketInstance.on("userTyping", (data) => {
      setTypingUsers((prev) => {
        if (data.isTyping) {
          if (prev.some((u) => u.senderId === data.senderId)) return prev;
          return [...prev, data];
        } else {
          return prev.filter((u) => u.senderId !== data.senderId);
        }
      });
    });

    // 🔴 On disconnect
    socketInstance.on("disconnect", () => {
      console.log("❌ Disconnected from socket");
      setIsConnected(false);
    });

    // 🧹 Cleanup on unmount or user change
    return () => {
      console.log("🧹 Cleaning up socket listeners");
      socketInstance.off("connect");
      socketInstance.off("joinSuccess");
      socketInstance.off("userOnline");
      socketInstance.off("userOffline");
      socketInstance.off("receiveMessage");
      socketInstance.off("newMessage");
      socketInstance.off("userTyping");
      socketInstance.off("disconnect");
      socketInstance.disconnect();
    };
  }, [currentUser?._id]);

  // ✉️ Send a message
  const sendMessage = (receiverId, message) => {
    if (!socket || !message.trim()) return;
    const msg = {
      senderId: currentUser._id,
      receiverId,
      message,
      messageType: "text",
      tempId: Date.now(),
    };
    socket.emit("sendMessage", msg);
    setMessages((prev) => [...prev, { ...msg, isLocal: true }]);
  };

  // ⌨️ Send typing status
  const sendTypingStatus = (receiverId, isTyping) => {
    if (!socket) return;

    socket.emit("typing", {
      senderId: currentUser._id,
      receiverId,
      isTyping,
    });

    // Auto stop typing after 3 seconds
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("typing", {
        senderId: currentUser._id,
        receiverId,
        isTyping: false,
      });
    }, 3000);
  };

  return {
    socket,
    isConnected,
    onlineUsers,
    messages,
    typingUsers,
    sendMessage,
    sendTypingStatus,
  };
};
