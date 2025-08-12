 // src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import bgImage from "../assets/hawa-mahal.png";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        aria-hidden="true"
      />
      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(20,45,100,0.85),rgba(20,45,100,0.15))]" />
      {/* Bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 hero-overlay-bottom" />
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <Hero />
        </main>
      </div>
    </div> 
  );
}
