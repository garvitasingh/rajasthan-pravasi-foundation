import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ placeholder, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 border rounded-lg overflow-hidden">
        <input
          className="w-full px-4 py-2 outline-none"
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
      <button className="h-10 w-10 grid place-items-center rounded-lg bg-blue-600 text-white">
        <FiSearch size={18} />
      </button>
      <input
        className="ml-2 w-40 border rounded-lg px-3 py-2"
        placeholder="Filter"
      />
    </div>
  );
}
 