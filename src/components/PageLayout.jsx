// src/components/PageLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";

export default function PageLayout({ children, fullWidth = false }) {
  return (
    <div className="w-full">
      {/* Navbar */}

      {/* Page Content */}
      {fullWidth ? (
        <div className="w-full px-[30px]">{children}</div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 py-12">{children}</div>
      )}

      <Footer />
    </div>
  );
}
