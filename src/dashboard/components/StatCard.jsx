import React from "react";

export default function StatCard({ title, value, tone = "blue" }) {
  const tones = {
    blue: "from-blue-500 via-blue-600 to-indigo-600",
    green: "from-green-400 via-emerald-500 to-teal-600",
    orange: "from-orange-400 via-red-500 to-pink-600",
  };

  return (
    <div
      className={`bg-gradient-to-br ${tones[tone]} text-white rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-center items-center text-center`}
    >
      <p className="opacity-80 text-sm font-medium tracking-wide">{title}</p>
      <p className="mt-3 text-5xl font-extrabold drop-shadow-lg">{value}</p>
    </div>
  );
}
