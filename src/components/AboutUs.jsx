import React from "react";
import mandala from "../assets/mandala.png";
import tree from "../assets/tree_bg.png";
import whoWeAre from "../assets/about.png"; // 👈 your NGO image

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
      <div className="relative z-10 max-w-[1220px] mx-auto">
        <div className="flex-1 text-center px-6 md:px-12">
          <h2
            className="text-orange-500 mb-6"
            style={{
              fontWeight: 700,
              fontSize: "40px",
            }}
          >
            About Us
          </h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-poppins font-normal max-w-3xl mx-auto">
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
        {/* Row Layout: Left Tree | Title + Desc | Right Tree */}
        <div className="flex items-center justify-between relative">
          {/* Left Tree */}
          <img
            src={tree}
            alt="Left Tree"
            className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain"
          />
          <div className="flex-1 text-center px-6 md:px-12">
                    <div style={{ height: "100px" }} /> 
            <h2
              className="text-orange-500 mb-6"
              style={{
                fontFamily: "Italianno, cursive",
                fontWeight: 400,
                fontSize: "60px",
              }}
            >
              Who we are
            </h2>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-poppins font-normal max-w-3xl mx-auto">
              Color theory influences user emotions and brand perception. Data
              visualization helps users understand complex information. Design
              thinking fosters innovation through user-centered problem solving.
              A/B testing compares different design variations to optimize
              performance. Interaction design defines.
            </p>
          </div>

          {/* Right Tree */}
          <img
            src={tree}
            alt="Right Tree"
            className="w-[140px] md:w-[160px] lg:w-[180px] object-contain"
          />
        </div>

        {/* NGO Image (Below Row) */}
        <div className="mt-12 md:mt-16">
          <div className="overflow-hidden rounded-[20px] shadow-xl">
            <img
              src={whoWeAre}
              alt="NGO representation"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
