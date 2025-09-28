import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Image, Phone, HelpCircle } from "lucide-react"; // 👈 icons import
import logo from "../assets/logo2.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: <Home size={18} /> },
    { label: "About Us", path: "/about", icon: <Info size={18} /> },
    { label: "Gallery", path: "/gallery", icon: <Image size={18} /> },
    { label: "Contact", path: "/contact", icon: <Phone size={18} /> },
    { label: "FAQ", path: "/faq", icon: <HelpCircle size={18} /> },
  ];

  const linkCls = (path) =>
    `relative flex items-center gap-2 pb-1 transition-colors duration-200 ${
      location.pathname === path
        ? "text-[#96469C] font-semibold md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-[2px] md:after:bg-white md:after:rounded-full"
        : "opacity-90 hover:opacity-100"
    }`;

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between z-30 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 active:scale-105">
        <img
          src={logo}
          alt="Rajasthan Pravasi Logo"
          className="h-12 object-contain"
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`text-black ${linkCls(
              item.path
            )} flex items-center gap-2`}
          >
            {item.icon}
            {/* Text flip animation */}
            <span className="relative overflow-hidden h-6 group">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {item.label}
              </span>
              <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {item.label}
              </span>
            </span>
          </Link>
        ))}

        <Link
  to="/login"
  className="ml-2 flex items-center justify-center z-40 border border-orange-500 text-orange-500 bg-white"
  style={{ width: 100, height: 40, borderRadius: 20 }}
>
  LOGIN
</Link>


        <button
          className="btn-login ml-2 flex items-center justify-center z-40 bg-[#96469C] text-white "
          style={{ width: 100, height: 40, borderRadius: 20 }}
          onClick={() => (window.location.href = "/signup")}
        >
          JOIN US
        </button>
      </div>

      {/* Mobile:  */}
      <button
        className="md:hidden inline-flex items-center justify-center rounded-md bg-white/15 text-white p-2"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
      </button>

      {/* Mobile Menu*/}
      <AnimatePresence mode="wait">
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 bg-white w-64 max-w-[80%] h-full shadow-xl z-50"
            >
              {/* Close button  */}
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setOpen(false)}
              >
                <HiOutlineXMark size={24} />
              </button>

              <div className="flex flex-col pt-16 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`py-3 text-lg flex items-center gap-2 ${linkCls(
                      item.path
                    )}`}
                    onClick={() => setOpen(false)} // 👈 smooth close on navigation
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}

                <div className="border-t my-4" />

                {/* buttons */}
                <Link
                  to="/login"
                  className="w-full grid place-items-center rounded-full bg-[#96469C] text-white h-10 mb-3"
                  onClick={() => setOpen(false)}
                >
                  LOGIN
                </Link>

                <Link
                  to="/signup"
                  className="w-full grid place-items-center rounded-full border border-[#96469C] text-[#96469C] h-10"
                  onClick={() => setOpen(false)}
                >
                  JOIN US
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
