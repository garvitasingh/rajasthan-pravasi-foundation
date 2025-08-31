import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  placeholder,
  onChange,
  value,
  filterValue,
  onFilterChange,
}) {
  return (
    <div className="flex items-center gap-3 w-full">
      {/* Input */}
      <div className="flex-1 relative">
        <input
          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white shadow-sm 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                     transition placeholder-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>

      {/* Search Button */}
      <button
        className="h-11 w-11 flex items-center justify-center rounded-xl 
                   bg-gradient-to-r from-blue-600 to-blue-500 
                   text-white shadow-md hover:from-blue-700 hover:to-blue-600 
                   transition duration-200"
      >
        <FiSearch size={20} />
      </button>

      {/* Filter Dropdown */}
      <select
        className="ml-2 w-48 px-4 py-2.5 rounded-xl border border-gray-300 bg-white 
                   shadow-sm text-gray-700 cursor-pointer
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                   transition"
        value={filterValue}
        onChange={(e) => onFilterChange?.(e.target.value)}
      >
        <option value="">Filter By</option>
        <option value="name">Name</option>
        <option value="address">Address</option>
        <option value="occupation">Occupation</option>
      </select>
    </div>
  );
}
