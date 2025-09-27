// src/components/HomeBanner.jsx
import React from "react";
import HomeBannerImg from "../assets/home_banner.png";
import camel_right_small from "../assets/camel_right_small.png";
import camel_left from "../assets/camel_left.png";

export default function HomeBanner() {
  return (
    <div className="w-full mb-80">
      {/* Hero Section */}
      <div className="relative w-full">
        {/* First Image (Background) */}
        <img
          src={HomeBannerImg}
          alt="Hero Background"
          className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
        />

        {/* Second Image (Overlapping Card) */}
        <div
          className="absolute left-1/2 bottom-0 w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 
                     transform -translate-x-1/2 translate-y-[250px] sm:translate-y-[200px] md:translate-y-[240px] 
                     bg-white/70 rounded-2xl md:rounded-3xl shadow-lg 
                     p-4 sm:p-6 md:p-8 text-center"
        >
          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">
            Welcome to <br />
            Rajasthan Pravasi Foundation
          </h2>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Color theory influences user emotions and brand perception. Data
            visualization helps users understand complex information. Design
            thinking fosters innovation through user-centered problem solving.
            A/B testing compares different design variations to optimize
            performance. Interaction design defines
          </p>

          {/* Bottom Camels */}
          <img
            src={camel_right_small}
            alt="Camel Left"
            className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-6 sm:w-8 md:w-10 h-auto"
          />
          <img
            src={camel_left}
            alt="Camel Right"
            className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-6 sm:w-8 md:w-10 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
