import { createContext, useContext, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const socket = useMemo(() => {
    return io("http://31.97.231.85:2700", {
      reconnection: true,
      withCredentials: true, // helps with CORS and handshake
    });
  }, []);

  useEffect(() => {
    socket.on("connect", () => console.log("✅ Connected:", socket.id));
    socket.on("connect_error", (err) => console.error("❌ Connection Error:", err.message));
    socket.on("disconnect", (reason) => console.log("⚠️ Disconnected:", reason));

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
