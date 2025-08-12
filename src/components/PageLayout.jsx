// src/components/PageLayout.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ bgImage, children }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <div 
        className="relative h-[400px] overflow-hidden rounded-b-[100px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: `center ${offsetY * 0.2}px`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/70 to-black"></div>
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {children}
      </div>

      <Footer />
    </div>
  );
}
