import React from "react";

export default function ProgressTabs({ step }) {
  const steps = ["Personal", "Additional Details", "Address Info"];
  return (
    <div className="mb-6">
      <div className="flex gap-6 text-sm font-medium text-gray-500">
        {steps.map((label, i) => {
          const active = step === i + 1;
          return (
            <div key={label} className="flex items-center gap-2">
              <span
                className={
                  "h-2 w-2 rounded-full " +
                  (active ? "bg-[#96469C]" : "bg-gray-300")
                }
              />
              <span className={active ? "text-blue-900" : ""}>{label}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 h-1 w-full bg-gray-200 rounded">
        <div
          className="h-1 bg-[#96469C] rounded transition-all"
          style={{ width: `${(step - 1) * 50}%` }}
        />
      </div>
    </div>
  );
}
