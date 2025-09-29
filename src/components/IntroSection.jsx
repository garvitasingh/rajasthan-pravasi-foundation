import React from "react";
import mandalaBg from "../assets/mandala.png";
import hawaMahal from "../assets/hawa-mahal.png";
import theme from "../common/theme";

export default function IntroSection() {
  return (
    <div className="relative flex flex-col items-center text-center py-12">
      {/* Mandala Background */}
      <img
        src={mandalaBg}
        alt="mandala"
        className="absolute top-1/2 left-1/2 w-[980px] h-[980px] -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none"
      />

      {/* Title */}
      <h2 className={`text-3xl font-bold ${theme.colors.primary} mb-6`}>
        What is Pravasi Rajasthan?
      </h2>

      <p
        className={`${theme.colors.paragraph} text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-poppins font-normal max-w-3xl mx-auto`}
      >
        Color theory influences user emotions and brand perception. Data
        visualization helps users understand complex information. Design
        thinking fosters innovation through user-centered problem solving.
        A/B testing compares different design variations to optimize
        performance. Interaction design defines.
      </p>

      {/* Image Card with Gradient Overlay */}
      <div className="relative w-[700px] rounded-2xl overflow-hidden shadow-lg mt-12 md:mt-16">
        <img
          src={hawaMahal}
          alt="Hawa Mahal"
          className="w-full h-[400px] object-cover"
        />

        {/* Bottom Gradient Overlay */}
        <div className={`absolute inset-0 ${theme.colors.overlay}`} />

        {/* Play Button */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            className={`flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full shadow-lg ${theme.colors.buttonGradient}`}
          >
            <span
              className={`${theme.colors.playIconBg} ${theme.colors.playIconText} rounded-full p-2`}
            >
              ▶
            </span>
            CLICK TO PLAY VIDEO
          </button>
        </div>
      </div>
    </div>
  );
}
