import React from "react";

export default function Membership() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Membership Plan</h2>

      <div className="max-w-md rounded-2xl border bg-white p-5">
        <p className="text-xl font-bold">Premium Membership</p>
        <p className="mt-1 text-sm text-gray-600">
          Unlock Exclusive Benefits and features
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">👤 Individual</span>
          <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">💳 Rs99/month</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm">
          <li>✔ 1 user account</li>
          <li>✔ 10 transactions per month</li>
          <li>✔ Members chat free</li>
          <li>✔ Contact all members</li>
          <li>✔ Send private messages</li>
        </ul>

        <button className="mt-5 w-full rounded-md bg-green-600 py-2 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
