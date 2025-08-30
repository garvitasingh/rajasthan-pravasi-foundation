import React from "react";
import mandala from "../assets/mandala.png";
import tree from "../assets/tree_bg.png";
import whoWeAre from "../assets/about.png";

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Mandala Background */}
      <img
        src={mandala}
        alt="mandala"
        className="absolute top-1/2 left-1/2 w-[980px] h-[980px] -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1220px] mx-auto px-6 md:px-12">
        {/* About Us Heading */}
        <div className="text-center mb-12">
          <h2 className="text-orange-600 text-4xl md:text-5xl font-extrabold mb-6 tracking-wide drop-shadow-sm">
            About Us
          </h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-poppins max-w-3xl mx-auto">
            Pravasi Rajasthan is a community-driven initiative aimed at helping
            Rajasthani families living across India. We understand the emotional
            and financial burden that comes with the loss of a loved one,
            especially when far from home. With a small monthly subscription, we
            ensure that your family receives financial support in case of an
            untimely passing.
            <br />
            The initiative is further backed by the Rajasthan government,
            offering you peace of mind no matter where life takes you. Beyond
            financial security, Pravasi Rajasthan fosters a sense of belonging
            among Rajasthani families spread across India.
          </p>
        </div>

        {/* Row Layout: Left Tree | Who we are | Right Tree */}
        <div className="flex items-center justify-between relative">
          {/* Left Tree */}
          <img
            src={tree}
            alt="Left Tree"
            className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain opacity-80"
          />

          {/* Who We Are Text */}
          <div className="flex-1 text-center px-6 md:px-12">
            <div className="h-[80px]" />
            <h2
              className="text-orange-500 mb-6"
              style={{
                fontFamily: "Italianno, cursive",
                fontWeight: 400,
                fontSize: "64px",
              }}
            >
              Who we are
            </h2>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-poppins max-w-3xl mx-auto">
              Color theory influences user emotions and brand perception. Data
              visualization helps users understand complex information. Design
              thinking fosters innovation through user-centered problem solving.
              A/B testing compares different design variations to optimize
              performance. Interaction design defines seamless user experience.
            </p>
          </div>

          {/* Right Tree */}
          <img
            src={tree}
            alt="Right Tree"
            className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain opacity-80"
          />
        </div>

        {/* NGO Image (Below Row) */}
        <div className="mt-14 md:mt-20">
          <div className="overflow-hidden rounded-[25px] shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <img
              src={whoWeAre}
              alt="NGO representation"
              className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
