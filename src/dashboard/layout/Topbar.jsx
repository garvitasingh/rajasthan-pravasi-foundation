import React, { useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import LanguageDropdown from "../components/LanguageDropdown";

export default function Topbar({ onMenuClick, onLanguageChange }) {
  // keep selected language in localStorage so it persists
  const [lang, setLang] = useState(() => localStorage.getItem("app.lang") || "en");

  useEffect(() => {
    localStorage.setItem("app.lang", lang);
    onLanguageChange?.(lang); // bubble up for i18n providers if needed
  }, [lang, onLanguageChange]);

  return (
    <header className="rounded-lg bg-gradient-to-r from-[#96469C] to-[#7c3d82] text-white">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2">
        {/* Left: menu + location */} 
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <button
            className="mr-1 inline-flex lg:hidden items-center justify-center rounded-md bg-white/15 p-2"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <HiOutlineBars3 size={22} />
          </button>
          <HiOutlineLocationMarker size={18} />
          <span className="font-medium">Gurgaon, Haryana</span>
        </div>

        {/* Right: language dropdown + user */} 
        <div className="flex items-center gap-3">
          <LanguageDropdown value={lang} onChange={setLang} />
          <div className="flex items-center gap-2 rounded bg-white/15 px-2 py-1">
            <img src={avatar} className="h-8 w-8 rounded-full object-cover" alt="User" />
            <span className="hidden sm:inline">Ajay Raj</span>
          </div>
        </div>
      </div>
    </header>
  );
}
