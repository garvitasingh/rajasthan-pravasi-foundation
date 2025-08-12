import React from "react";
import { Link, useLocation } from "react-router-dom";
import GradientButton from "./GradientButton";
import logo from "../assets/logo.png"; // put your logo in src/assets

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between z-20">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Rajasthan Pravasi Logo"
          className="h-12 object-contain"
        />
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`text-white transition-opacity duration-200 ${
              location.pathname === item.path
                ? "underline underline-offset-4"
                : "opacity-95 hover:opacity-80"
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* LOGIN Button */}
        <Link
          to="/login"
          className="btn-login ml-4 flex items-center justify-center"
          style={{
            width: "100px",
            height: "40px",
            borderRadius: "20px",
          }}
        >
          LOGIN
        </Link>

        {/* JOIN US Gradient Button */}
        <GradientButton
          width="100px"
          height="40px"
          borderRadius="20px"
          className="ml-3"
        >
          JOIN US
        </GradientButton>
      </div>
    </nav>
  );
}
