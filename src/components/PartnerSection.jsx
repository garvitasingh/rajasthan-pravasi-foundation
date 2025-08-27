import React from "react";
import partnerLogo from "../assets/partner_logo.png"; // replace with your actual logo

export default function PartnersSection() {
  const partners = Array(8).fill(partnerLogo); // Example: 8 partner cards

  return (
    <section className="w-full py-16 md:py-5 relative">
      {/* Heading */}
      <h2
        className="text-center text-orange-500 mb-12"
        style={{
          fontFamily: "Italianno, cursive",
          fontWeight: 400,
          fontSize: "60px",
        }}
      >
        Our Partners
      </h2> 

      {/* Partner Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {partners.map((logo, i) => (
          <div 
            key={i}
            className="flex items-center justify-center bg-white"
            style={{
              width: "287px",
              height: "120px",
              borderTopLeftRadius: "2px",
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "2px",
              borderBottomLeftRadius: "30px",
              border: "1px solid rgba(159, 171, 191, 0.5)",
              boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={logo}
              alt="Partner Logo"
              className="object-contain max-h-[80px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
