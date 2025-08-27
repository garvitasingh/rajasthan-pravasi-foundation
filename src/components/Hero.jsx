import React from "react";
import GradientButton from "./GradientButton";

/**
 * Hero.jsx
 * - Centered hero with two script lines
 * - "Welcome to" uses Italianno as you requested
 * - The large title uses the same Italianno script for cohesion
 * - GET STARTED uses the exact gradient and glow via .btn-gradient
 */
export default function Hero() {
  const handleClick = () => {
    window.location.pathname = "/home";
  };

  return (
    <section className="w-full text-center px-6 hero-content-max">
      {/* Container limits width for better typographic control */}
      <div className="max-w-5xl mx-auto">
        {/* "Welcome to" - Italianno font, italic look (size tuned) */}
        <div className="mt-12">
          <h2
            className="font-italianno hero-script text-white text-4xl sm:text-5xl md:text-6xl"
            style={{ lineHeight: 1, fontWeight: 400, fontSize: "96px" }}
          >
            Welcome to
          </h2>
        </div>

        {/* Main title - big script style */}
        <div className="mt-4">
          <h1
            className="font-italianno hero-script text-white text-5xl sm:text-6xl md:text-[88px] lg:text-[110px] leading-tight"
            style={{
              letterSpacing: "0px",
              lineHeight: 1,
              fontWeight: 400,
              fontSize: "96px",
            }}
          >
            Rajasthan Pravasi Foundation
          </h1>
        </div>
 
        {/* CTA */}
        <div className="mt-10 flex items-center justify-center">
          <GradientButton
            width="254px"
            height="68px"
            borderRadius="2px 30px 2px 30px"
            onClick={handleClick}
          >
            <h4 style={{ lineHeight: 1, fontWeight: 600, fontSize: "20px" }}>
              GET STARTED
            </h4>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
  