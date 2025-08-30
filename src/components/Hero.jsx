import React from "react";
import GradientButton from "./GradientButton";
import { motion } from "framer-motion";

export default function Hero() {
  const handleClick = () => {
    window.location.pathname = "/home";
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background image - already applied from parent CSS (hero-content-max) */}
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Overlay for readability */}
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* "Welcome to" animated */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-italianno text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ lineHeight: 1, fontWeight: 400 }}
        >
          Welcome to
        </motion.h2>

        {/* Main title animated */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-italianno text-white mt-4 text-5xl sm:text-6xl md:text-[88px] lg:text-[110px] leading-tight drop-shadow-lg"
          style={{ fontWeight: 400 }}
        >
          Rajasthan Pravasi Foundation
        </motion.h1>

        {/* CTA Button animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <GradientButton
            width="260px"
            height="72px"
            borderRadius="2px 30px 2px 30px"
            onClick={handleClick}
          >
            <span className="text-lg font-semibold tracking-wide">
              GET STARTED
            </span>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
