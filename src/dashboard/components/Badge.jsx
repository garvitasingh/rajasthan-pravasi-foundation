import React from "react";

export default function Badge({ children }) {
  return (
    <span className="inline-block rounded bg-slate-200 px-3 py-1 text-xs font-semibold">
      {children}
    </span>
  );
}
 