import React from "react";

export function TextInput({ label, hint, ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">
        {label}{hint && <span className="text-gray-500">/{hint}</span>}
      </label>
      <input
        {...props}
        className={
          "w-full border rounded px-3 py-2 outline-none " +
          "focus:ring-2 focus:ring-[#96469C]"
        }
      />
    </div>
  );
}

export function SelectInput({ label, hint, children, ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">
        {label}{hint && <span className="text-gray-500">/{hint}</span>}
      </label>
      <select
        {...props}
        className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#96469C] bg-white"
      >
        {children}
      </select>
    </div>
  );
}

export function OTP4({ value = "", onChange }) {
  const parts = (value || "").padEnd(4, " ").slice(0,4).split("");
  const handle = (idx) => (e) => {
    const v = e.target.value.replace(/\D/g, "").slice(-1);
    const arr = [...parts];
    arr[idx] = v || " ";
    onChange?.(arr.join("").replace(/\s/g, ""));
    if (v && e.target.nextElementSibling) e.target.nextElementSibling.focus();
  };
  return (
    <div className="flex gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <input
          key={i}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          className="w-12 h-12 text-center border rounded outline-none focus:ring-2 focus:ring-[#96469C]"
          value={parts[i].trim()}
          onChange={handle(i)}
        />
      ))}
    </div>
  );
}
