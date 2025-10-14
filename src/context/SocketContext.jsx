import { createContext, useContext, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

// Create the context
const SocketContext = createContext(null);

// Custom hook to access socket
export const useSocket = () => useContext(SocketContext);

// Provider component
export const SocketProvider = ({ children }) => {
  // Memoize to ensure only one socket instance
  const socket = useMemo(() => {
  return io("http://31.97.231.85:2700", {
    transports: ["websocket", "polling"], // fallback included
    reconnection: true,
  });
}, []);

useEffect(() => {
  socket.on("connect", () => console.log("✅ Connected:", socket.id));
  socket.on("connect_error", (err) => console.error("❌ Connection Error:", err));
  socket.on("disconnect", () => console.log("⚠️ Disconnected"));

  return () => {
    socket.off("connect");
    socket.off("connect_error");
    socket.off("disconnect");
  };
}, [socket]);

  // Clean up socket on unmount
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
