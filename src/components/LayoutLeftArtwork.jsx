import React from "react";
import mandala from "../assets/mandala.png";
import palace from "../assets/palace.png";
import logo from "../assets/logo2.png"; // use the same logo everywhere

export default function LayoutLeftArtwork({ children, showProgress }) {
  return (
    <div className="flex min-h-screen">
      {/* Left */}
      <div className="w-full lg:w-1/2 relative flex flex-col items-center bg-white px-6 md:px-12 py-10 overflow-hidden">
        {/* faint mandala */}
         <img
          src={mandala}
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute left-0 top-0 h-full opacity-5"
          style={{
            width: "100%",
            objectFit: "cover",
            objectPosition: "right",
            left: "-40%",
            top: 0,
            transform: "none",
            clipPath: "inset(0 0 0 40%)"
          }}
        />
        <div className="w-full max-w-md z-10">
          <img src={logo} alt="Rajasthan Pravasi Foundation" className="w-56 mb-8" />
          {showProgress}
          {children}
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:block lg:w-1/2">
        <img src={palace} alt="Hawa Mahal" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
