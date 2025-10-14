// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark, HiChevronDown } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Image, Phone, HelpCircle, Camera, ListTodo } from "lucide-react";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Yeh array batata hai ki kin pages par Activities tab active dikhe
  const activitiesPaths = [
    "/activities",
    "/pravasi-sambal-yojana",
    "/initiatives",
    "/investment-sectors"   
  ];

  const navItems = [
    { label: "Home", path: "/", icon: <Home size={18} /> },
    { label: "About Us", path: "/about", icon: <Info size={18} /> },
    { label: "Gallery", path: "/gallery", icon: <Image size={18} /> },
    { label: "Media & Blog", path: "/media-blog", icon: <Camera size={18} /> },
   
    { label: "Contact", path: "/contact", icon: <Phone size={18} /> },
    { label: "FAQ", path: "/faq", icon: <HelpCircle size={18} /> },
    
    { label: "Our Roots", path: "/our-roots", icon: <Info size={18} /> },
  
  ];
  // Function to determine if a link is active
  // Activities ke liye alag logic hai kyunki uske multiple sub-pages hain
  const linkCls = (path, isActivities) =>
    `relative flex items-center gap-2 pb-1 transition-colors duration-200 ${
      (isActivities
        ? activitiesPaths.includes(location.pathname)
        : location.pathname === path)
        ? "font-semibold text-[#DB580F] md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-full md:after:h-[2px] md:after:bg-[#DB580F] md:after:rounded-full"
        : "opacity-90 hover:opacity-100 text-black"
    }`;

  // Activities dropdown items
  const activitiesDropdown = [
    {
      label: "Activities of RPF",
      path: "/activities",
      type: "internal",
    },
    {
      label: "Pravasi Sambal Yojana",
      path: "/pravasi-sambal-yojana",
      type: "internal",
    },
    {
      label: "Rajasthan Govt. Initiatives",
      path: "/initiatives",
      type: "internal",
    },
    {
      label: "Explore Investment Sectors in Rajasthan",    
      path: "/investment-sectors",                        
      type: "internal",
    },
    {
      label: "Rising Rajasthan",
      path: "https://rising.rajasthan.gov.in/",
      type: "external",
    },
    {
      label: "Pravasi Divas",
      path: "https://rising.rajasthan.gov.in/pravasi-divas",
      type: "external",
    },
  ];

  return (
    <nav className="w-full px-3 sm:px-4 md:px-10 py-3 md:py-2 flex items-center justify-between z-30 relative shadow-lg bg-white">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 active:scale-105">
        <img
          src={logo}
          alt="Rajasthan Pravasi Logo"
          className="h-10 sm:h-12 object-contain"
        />
      </Link>

      {/* Desktop Nav */}
      
      
      <div className="hidden md:flex ml-10 items-center gap-6">

        
        {navItems.slice(0, 7).map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`text-black ${linkCls(item.path)} flex items-center gap-2`}
          >
            {item.icon}
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

        {/* Activities Dropdown (hover) */}
        <div
          className="relative group"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button
            className={`flex items-center gap-2 text-black font-semibold px-2 py-1 rounded-md transition-colors duration-200 ${
              dropdown ? "bg-orange-50" : ""
            } ${linkCls("/activities", true)}`}
            style={{ background: "none", border: "none", outline: "none" }}
          >
            <ListTodo size={18} className={location.pathname === "/activities" ? "text-[#DB580F]" : "text-black"} />
            <span className="relative overflow-hidden h-6 group">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                Activities
              </span>
              <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                Activities
              </span>
            </span>
            <HiChevronDown
              size={18}
              className={`transition-transform duration-300 ${dropdown ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {dropdown && (
              <motion.ul
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-orange-100 z-50 py-2"
              >
                {activitiesDropdown.map((item) =>
                  item.type === "external" ? (
                    <li key={item.label}>
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-5 py-3 text-gray-800 hover:bg-orange-50 hover:text-[#DB580F] transition-colors duration-200 font-medium"
                      >
                        {item.label}
                        <svg
                          className="ml-2 w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 7l-10 10M17 17V7H7"
                          />
                        </svg>
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="flex items-center px-5 py-3 text-gray-800 hover:bg-orange-50 hover:text-[#DB580F] transition-colors duration-200 font-medium"
                        onClick={() => setDropdown(false)}
                      >
                        {item.label}
                        {(item.label === "Activities of RPF" || item.label === "Pravasi Sambal Yojana") && (
                          <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold">
                            New
                          </span>
                        )}
                      </Link>
                    </li>
                  )
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <Link
          to="/login"
          className="ml-2 flex items-center justify-center border-2 border-orange-500 text-orange-500 font-semibold bg-white hover:bg-orange-50 transition"
          style={{ width: 100, height: 40, borderRadius: 20 }}
        >
          LOGIN
        </Link>

        <button
          className="ml-2 flex items-center justify-center bg-[#DB580F] text-white hover:bg-[#DB580F] transition"
          style={{ width: 100, height: 40, borderRadius: 20 }}
          onClick={() => (window.location.href = "/signup")}
        >
          JOIN US
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden inline-flex items-center justify-center rounded-md text-black p-2"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 bg-white w-64 max-w-[80%] h-full shadow-xl z-50"
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setOpen(false)}
              >
                <HiOutlineXMark size={24} />
              </button>

              <div className="flex flex-col pt-16 px-6">
                {/* Mobile nav items */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`py-3 text-base sm:text-lg flex items-center gap-2 ${linkCls(
                      item.path
                    )}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}

                {/* Activities Dropdown for mobile */}
                <div className="mt-2">
                  <div className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <ListTodo size={18} className="text-[#DB580F]" />
                    Activities
                  </div>
                  <ul>
                    {activitiesDropdown.map((item) =>
                      item.type === "external" ? (
                        <li key={item.label}>
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-[#DB580F] rounded transition"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ) : (
                        <li key={item.label}>
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-[#DB580F] rounded transition"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                            {(item.label === "Activities of RPF" || item.label === "Pravasi Sambal Yojana") && (
                              <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold">
                                New
                              </span>
                            )}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="border-t my-4" />

                {/* Mobile buttons */}
                <Link
                  to="/login"
                  className="w-full grid place-items-center rounded-full bg-[#DB580F] text-white h-10 mb-3"
                  onClick={() => setOpen(false)}
                >
                  LOGIN
                </Link>

                <Link
                  to="/signup"
                  className="w-full grid place-items-center rounded-full border border-[#DB580F] text-[#DB580F] h-10"
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
