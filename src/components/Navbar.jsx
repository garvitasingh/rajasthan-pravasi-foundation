import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import GradientButton from "./GradientButton";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  // Close the mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on outside click / Esc
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const linkCls = (path) =>
    `transition-opacity duration-200 ${
      location.pathname === path
        ? "underline underline-offset-4"
        : "opacity-95 hover:opacity-80"
    }`;

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between z-20 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Rajasthan Pravasi Logo" className="h-12 object-contain" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link key={item.label} to={item.path} className={`text-white ${linkCls(item.path)}`}>
            {item.label}
          </Link>
        ))}

        <Link
          to="/login"
          key="login"
          className="btn-login ml-2 flex items-center justify-center z-40 bg-[#96469C] text-white"
          style={{ width: 100, height: 40, borderRadius: 20 }}
        >
          LOGIN
        </Link>

        <GradientButton
          width="100px"
          height="40px"
          borderRadius="20px"
          className="ml-2 z-40"
          onClick={() => { window.location.href = "/signup"; }}
        >
          JOIN US
        </GradientButton>
      </div>

      {/* Mobile: menu button */}
      <button
        className="md:hidden inline-flex items-center justify-center rounded-md bg-white/15 text-white p-2"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
      </button>

      {/* Mobile: dropdown panel */}
      {open && (
        <div
          ref={panelRef}
          className="absolute left-0 right-0 top-full mt-2 mx-4 rounded-lg border border-white/20 bg-white/95 text-gray-900 shadow-lg backdrop-blur md:hidden"
        >
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-4 py-3 text-sm ${location.pathname === item.path ? "text-[#96469C] font-semibold" : "hover:bg-black/5"}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t my-2" />

            <div className="flex items-center gap-3 px-4 pb-4">
              <Link
                to="/login"
                className="flex-1 grid place-items-center rounded-full bg-[#96469C] text-white h-10"
              >
                LOGIN
              </Link>
              <button
                onClick={() => (window.location.href = "/signup")}
                className="flex-1 grid place-items-center rounded-full border border-[#96469C] text-[#96469C] h-10"
              >
                JOIN US
              </button>
            </div>
          </div>
        </div> 
      )}
    </nav>
  );
}
