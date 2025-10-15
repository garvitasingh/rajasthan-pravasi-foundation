import React, { useContext, useState } from "react";
import { useSocket } from "../../hooks/useSocket";
import { AppContext } from "../../context/AppContext";

const threads = [
  { id: "u1", name: "Amit Yadav" },
  { id: "u2", name: "Fateh Education" },
  { id: "u3", name: "StoryStream Support" },
];

export default function Chat() {
  const { user } = useContext(AppContext);
  const currentUser = {
    _id: user?._id,
    username: "Amit Yadav",
    photoUrl: "/avatar.png",
  };

  const {
    isConnected,
    onlineUsers,
    messages,
    typingUsers,
    sendMessage,
    sendTypingStatus,
  } = useSocket(currentUser);

  const [text, setText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSend = () => {
    if (selectedUser && text.trim()) {
      sendMessage(selectedUser.id, text);
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

      <div className="grid grid-cols-1 lg:grid-cols-[22rem_1fr] gap-4">
        {/* Threads List */}
        <div className="rounded-xl border bg-white overflow-hidden">
          <ul className="divide-y">
            {threads.map((t) => (
              <li
                key={t.id}
                onClick={() => setSelectedUser(t)}
                className={`flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 ${
                  selectedUser?.id === t.id ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-200">🪷</div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-gray-500">
                      {onlineUsers.some((u) => u.userId === t.id)
                        ? "Online"
                        : "Offline"}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="rounded-xl border bg-white flex flex-col">
          <div className="flex-1 px-4 pb-4 space-y-3 overflow-y-auto">
            {selectedUser ? (
              messages
                .filter(
                  (msg) =>
                    msg.senderId === selectedUser.id ||
                    msg.receiverId === selectedUser.id
                )
                .map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[60%] rounded-2xl px-3 py-2 my-2 ${
                      msg.senderId === currentUser._id
                        ? "bg-blue-100 ml-auto"
                        : "bg-slate-100"
                    }`}
                  >
                    {msg.message}
                  </div>
                ))
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
