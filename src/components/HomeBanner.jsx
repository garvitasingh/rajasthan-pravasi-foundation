// src/components/HomeBanner.jsx
import React from "react";
import { motion } from "framer-motion";

import HomeBannerImg from "../assets/home_banner.png";
import camel_right_small from "../assets/camel_right_small.png";
import camel_left from "../assets/camel_left.png";

export default function HomeBanner() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={HomeBannerImg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(120deg, rgba(255,165,0,0.5), rgba(255,69,0,0.5))",
              "linear-gradient(120deg, rgba(255,140,0,0.5), rgba(255,20,147,0.5))",
              "linear-gradient(120deg, rgba(0,128,255,0.5), rgba(255,140,0,0.5))",
            ],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute inset-0 mix-blend-multiply"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg"
        >
          Welcome to Rajasthan Pravasi Foundation
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 max-w-2xl text-sm sm:text-lg md:text-xl text-gray-100 leading-relaxed"
        >
          Empowering the community with culture, heritage, and innovation.  
          Join us in preserving Rajasthan’s vibrant legacy while shaping a brighter future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 flex gap-4"
        >
          <button className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all shadow-md">
            Learn More
          </button>
          <button className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-white text-orange-600 font-semibold hover:bg-gray-200 transition-all shadow-md">
            Donate Now
          </button>
        </motion.div>
      </div>

      {/* Floating Camels */}
      <motion.img
        src={camel_left}
        alt="Camel Left"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-6 left-10 w-12 sm:w-16 md:w-20 opacity-90"
      />
      <motion.img
        src={camel_right_small}
        alt="Camel Right"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
        className="absolute bottom-6 right-10 w-10 sm:w-14 md:w-18 opacity-90"
      />
    </div>
  );
}
