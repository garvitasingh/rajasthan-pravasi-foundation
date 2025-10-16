// import React from "react";
// import GradientButton from "./GradientButton";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const handleClick = () => {
//     window.location.pathname = "/home";
//   };

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
//       {/* Background image - already applied from parent CSS (hero-content-max) */}
//       <div className="absolute inset-0 bg-black/50" />{" "}
//       {/* Overlay for readability */}
//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* "Welcome to" animated */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-italianno text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
//           style={{ lineHeight: 1, fontWeight: 400 }}
//         >
//           Welcome to
//         </motion.h2>

//         {/* Main title animated */}
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="font-italianno text-white mt-4 text-5xl sm:text-6xl md:text-[88px] lg:text-[110px] leading-tight drop-shadow-lg"
//           style={{ fontWeight: 400 }}
//         >
//           Rajasthan Pravasi Foundation
//         </motion.h1>

//         {/* CTA Button animated */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-12 flex justify-center"
//         >
//           <GradientButton
//             width="260px"
//             height="72px"
//             borderRadius="2px 30px 2px 30px"
//             onClick={handleClick}
//           >
//             <span className="text-lg font-semibold tracking-wide">
//               GET STARTED
//             </span>
//           </GradientButton>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import GradientButton from "./GradientButton";
import { motion } from "framer-motion";
import { getHeroSlides } from "../api/heroSlideApi";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = () => {
    window.location.pathname = "/home";
  };

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const result = await getHeroSlides();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setHeroData(result.data[0]); // 🟢 Using the first slide for Hero section
        } else {
          setHeroData(null);
        }
      } catch (err) {
        setError("Failed to load hero section content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return (
      <section className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-600 text-lg font-medium">
        Loading hero section...
      </section>
    );
  }

  if (error || !heroData) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-600 text-lg font-medium">
        {error ? error : "No hero content available."}
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background image (from API) */}
      {heroData.image && (
        <img
          src={`http://31.97.231.85:2700${heroData.image}`}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

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

        {/* Title (from API) */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-italianno text-white mt-4 text-5xl sm:text-6xl md:text-[88px] lg:text-[110px] leading-tight drop-shadow-lg"
          style={{ fontWeight: 400 }}
        >
          {heroData.title}
        </motion.h1>

        {/* Subtitle (from API) */}
        {heroData.subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-gray-100 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
          >
            {heroData.subtitle}
          </motion.p>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
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
