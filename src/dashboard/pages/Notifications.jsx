import React from "react";
import ProfileCard from "../components/ProfileCard";
import { HiOutlineCube } from "react-icons/hi";

const items = new Array(8).fill(0).map((_, i) => ({
  id: i,
  title:
    "Information Architecture Organizes Content In A Way That Makes Sense To Users. User Personas Represent",
  time: "12th June 2025 | 12:32",
}));

export default function Notifications() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">All Notification</h2>
      <div className="rounded-lg border bg-white p-3">
        <input
          className="w-full rounded border px-3 py-2"
          placeholder="Search"
        />
      </div>

      <div className="rounded-xl border bg-white">
        <ul className="divide-y">
          {items.map((n) => (
            <li key={n.id} className="flex items-center gap-4 p-4">
              <div className="grid h-12 w-12 place-items-center rounded border">
                <HiOutlineCube size={20} />
              </div>
              <div className="flex-1">
                <p className="leading-5">{n.title}</p>
                <p className="mt-1 text-xs text-gray-500">{n.time}</p>
              </div>
              <button className="px-2 py-1 rounded border hover:bg-slate-50">•••</button>
            </li>
          ))}
        </ul>
      </div>

      {/* On small screens show the identity card below */}
      <div className="lg:hidden">
        <ProfileCard />
      </div>
    </div>
  );
}
