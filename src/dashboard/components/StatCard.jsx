import React from "react";

export default function StatCard({ title, value, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
  };
  return (
    <div className={`${tones[tone]} text-white rounded-xl px-6 py-6`}>
      <p className="opacity-90 text-sm">{title}</p>
      <p className="mt-2 text-4xl font-extrabold">{value}</p>
    </div>
  );
}
 