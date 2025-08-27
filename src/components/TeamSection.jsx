import React from "react";
import mandala from "../assets/mandala.png";
import memberImg from "../assets/member.png";
import SuccessStories from "./SuccessStories";

export default function TeamSection() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Mandala Background */}
      <img
        src={mandala}
        alt="mandala"
        className="absolute top-1/2 left-1/2 w-[980px] h-[980px] -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2
          className="text-center text-orange-500 mb-16"
          style={{
            fontFamily: "Italianno, cursive",
            fontWeight: 400,
            fontSize: "60px",
          }}
        >
          Meet the team
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-white p-3 flex flex-col items-center"
                style={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "2px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "2px",
            boxShadow: "4px 4px 30px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Member Image */}
              <img 
                src={memberImg} 
                alt="Team member"
                className="w-full h-[280px] object-cover rounded-t-[20px] rounded-tr-[2px]"
              />

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  SANDEEP SINGH
                </h3> 
                <p className="text-sm text-gray-500 mt-1">12 JULY, 2025</p>

                <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                  Color theory influences user emotions and brand perception.
                  Data visualization helps users understand complex information.
                  Design thinking fosters innovation through user-centered
                  problem solving.
                </p>

                {/* Tag */}
                <div className="mt-5">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-md">
                    CRIME
                  </span>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
      <SuccessStories hasTree={true} /> 
    </section>
  );
}
  