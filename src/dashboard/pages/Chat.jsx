import React, { useContext, useEffect, useState } from "react";
import { useSocket } from "../../hooks/useSocket";
import { AppContext } from "../../context/AppContext";

export default function Chat() {
  const { user } = useContext(AppContext);

  const {
    isConnected,
    onlineUsers,
    messages: socketMessages,
    sendMessage,
    sendTypingStatus,
  } = useSocket(user);

  const [text, setText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  // ✅ Fetch chat list from backend
  useEffect(() => {
    if (!user?._id) return;

    const fetchChatList = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://31.97.231.85:2700/api/chat/list/${'68d024f8d9e7b94ed5a02d64'}`
        );
        const data = await res.json();

        if (data.success && data.chatList) {
          const formatted = data.chatList.map((chat) => {
            const last = chat.lastMessage;
            return {
              id: last.userId,
              name: last.name,
              hindiName: last.hindiName,
              photoUrl: last.photoUrl,
              lastMessage: last.message,
              unreadCount: chat.unreadCount,
            };
          });
          setThreads(formatted);
        } else {
          console.error("Failed to load chat list:", data.message);
        }
      } catch (err) {
        console.error("Error fetching chat list:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChatList();
  }, [user?._id]);

  // ✅ Fetch chat history on user select
  const fetchChatHistory = async (receiverId) => {
    if (!user?._id) return;
    try {
      setHistoryLoading(true);
      const res = await fetch(
        `http://31.97.231.85:2700/api/chat/history?senderId=${user._id}&receiverId=${receiverId}&page=1&limit=100`
      );
      const data = await res.json();
      if (data.success) {
        setChatHistory(data.data.messages);
      } else {
        console.error("Failed to fetch history:", data.message);
      }
    } catch (err) {
      console.error("Error fetching chat history:", err);
    } finally {
      setHistoryLoading(false);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setChatHistory([]); // clear previous history
    fetchChatHistory(user.id);
  };

  const handleSend = () => {
    if (selectedUser && text.trim()) {
      sendMessage(selectedUser.id, text);
      setChatHistory((prev) => [
        ...prev,
        {
          senderId: user._id,
          receiverId: selectedUser.id,
          message: text,
          messageType: "text",
          timestamp: new Date().toISOString(),
        },
      ]);
      setText("");
    }
  };

  const combinedMessages = [
    ...chatHistory,
    ...socketMessages.filter(
      (m) =>
        (m.senderId === selectedUser?.id &&
          m.receiverId === user?._id) ||
        (m.senderId === user?._id &&
          m.receiverId === selectedUser?.id)
    ),
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        Messaging{" "}
        <span
          className={`w-2 h-2 rounded-full ${
            isConnected ? "bg-green-500" : "bg-red-500"
          }`}
          title={isConnected ? "Connected" : "Disconnected"}
        ></span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[22rem_1fr] gap-4">
        {/* Threads List */}
        <div className="rounded-xl border bg-white overflow-y-auto max-h-[70vh]">
          {loading ? (
            <div className="p-4 text-gray-400 text-center">Loading chats...</div>
          ) : threads.length === 0 ? (
            <div className="p-4 text-gray-400 text-center">
              No chats available
            </div>
          ) : (
            <ul className="divide-y">
              {threads.map((t) => {
                const isOnline = onlineUsers.some((u) => u.userId === t.id);
                return (
                  <li
                    key={t.id}
                    onClick={() => handleSelectUser(t)}
                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 ${
                      selectedUser?.id === t.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={`http://31.97.231.85:2700${t.photoUrl}`}
                          alt={t.name}
                          className="h-10 w-10 rounded-full object-cover bg-slate-200"
                        />
                        <span
                          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                            isOnline ? "bg-green-500" : "bg-gray-400"
                          }`}
                        ></span>
                      </div>
                      <div>
                        <p className="font-medium">{t.name}</p>
                        <p className="text-xs text-gray-500">
                          {t.lastMessage || "No messages yet"}
                        </p>
                      </div>
                    </div>
                    {t.unreadCount > 0 && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                        {t.unreadCount}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Chat Window */}
        <div className="rounded-xl border bg-white flex flex-col overflow-y-auto max-h-[70vh]">
          <div className="flex-1 px-4 pb-4 space-y-3 overflow-y-auto">
            {selectedUser ? (
              historyLoading ? (
                <div className="text-gray-400 text-center py-10">
                  Loading messages...
                </div>
              ) : combinedMessages.length > 0 ? (
                combinedMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[60%] rounded-2xl px-3 py-2 my-2 ${
                      msg.senderId === user._id
                        ? "bg-blue-100 ml-auto"
                        : "bg-slate-100"
                    }`}
                  >
                    {msg.message}
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-center py-10">
                  No messages yet
                </div>
              )
            ) : (
              <div className="text-gray-400 text-center py-20">
                Select a user to start chatting
              </div>
            )}
          </div>

          {selectedUser && (
            <div className="border-t p-3 flex items-center gap-3">
              <input
                className="flex-1 rounded border px-3 py-2"
                placeholder="Write a message..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  sendTypingStatus(selectedUser.id, true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button
                onClick={handleSend}
                className="rounded bg-blue-600 px-4 py-2 text-white"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
