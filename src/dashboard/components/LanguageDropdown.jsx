import React, { useEffect, useRef, useState, useCallback } from "react";
import { HiOutlineGlobeAlt, HiOutlineChevronDown, HiOutlineCheck } from "react-icons/hi2";

const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (Hindi)" },
];

export default function LanguageDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  const current = LANGS.find(l => l.code === value) || LANGS[0];

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (!panelRef.current || !btnRef.current) return;
      if (
        panelRef.current.contains(e.target) ||
        btnRef.current.contains(e.target)
      ) return;
      setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const handleSelect = useCallback((code) => {
    onChange?.(code);
    setOpen(false);
  }, [onChange]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-2 rounded-md bg-white/15 pl-2 pr-2 sm:pr-3 py-1.5 text-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        title="Change language"
      >
        <HiOutlineGlobeAlt size={18} />
        <span className="hidden sm:inline">{current.label}</span>
        <HiOutlineChevronDown size={16} className="hidden sm:inline" />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="listbox"
          tabIndex={-1}
          className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-md border border-white/20 bg-white/95 text-gray-900 shadow-lg backdrop-blur"
        >
          {LANGS.map((l) => {
            const selected = l.code === current.code;
            return (
              <button
                key={l.code}
                role="option"
                aria-selected={selected}
                className={
                  "flex w-full cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-[#96469C]/10 " +
                  (selected ? "font-medium" : "")
                }
                onClick={() => handleSelect(l.code)}
              >
                <span className="flex items-center gap-2">
                  <HiOutlineGlobeAlt size={16} />
                  {l.label}
                </span>
                {selected && <HiOutlineCheck size={16} className="text-[#96469C]" />}
              </button>
            );
          })} 
        </div>
      )}
    </div>
  );
}
