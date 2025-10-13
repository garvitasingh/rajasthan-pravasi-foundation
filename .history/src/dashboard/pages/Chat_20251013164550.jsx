import React, { useEffect, useState } from "react";
import { useSocket } from "../../context/SocketContext";

const threads = new Array(8).fill(0).map((_, i) => ({
  id: i,
  from: "Fateh Education",
  tag: "Sponsored  UK/Ireland",
  line2: "Admissions Day",
  date: "May 31",
}));

export default function Chat() {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!socket) return;

    // 🔹 Check socket connection
    if (socket.connected) {
      console.log("✅ Socket connected");
      setIsConnected(true);
    }

    socket.on("connect", () => {
      console.log("✅ Socket connected to server:", socket.id);
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected");
      setIsConnected(false);
    });

    // 🔹 Listen for incoming messages
    socket.on("online-users", (data) => {
      console.log("📩 Online users:", data);
      setMessages((prev) => [...prev, data]);
    });

    // Cleanup
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("online-users");
    };
  }, [socket]);

  const sendMessage = () => {
    if (!socket || !isConnected) {
      console.warn("⚠️ Socket not connected — cannot send message");
      return;
    }

    if (text.trim()) {
      socket.emit("send_message", { text, time: new Date().toLocaleTimeString() });
      setText("");
    }
  };

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

      <div className="rounded-lg border bg-white p-3">
        <input className="w-full rounded border px-3 py-2" placeholder="Search" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[22rem_1fr] gap-4">
        {/* thread list */}
        <div className="rounded-xl border bg-white overflow-hidden">
          <ul className="divide-y">
            {threads.map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between p-4 hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-200">
                    🪷
                  </div>
                  <div>
                    <p className="font-medium">{t.from}</p>
                    <p className="text-xs text-gray-500">{t.tag}</p>
                    <p className="text-xs text-gray-500">{t.line2}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{t.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* chat window */}
        <div className="rounded-xl border bg-white flex flex-col">
          <div className="mx-auto my-3 rounded-full border px-4 py-1 text-xs text-gray-600">
            12/05/2025
          </div>

          <div className="flex-1 px-4 pb-4 space-y-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="max-w-[70%] rounded-2xl bg-slate-100 px-3 py-2"
              >
                {JSON.stringify(msg)}
              </div>
            ))}
          </div>

          <div className="border-t p-3 flex items-center gap-3">
            <input
              className="flex-1 rounded border px-3 py-2"
              placeholder="Write a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
