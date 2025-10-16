// import React from "react";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import banner1 from "../assets/home_banner.png";
// import banner2 from "../assets/person_img.jpg";
// import banner3 from "../assets/business_img.jpg";

// export default function HomeBanner() {
//   const bannerImages = [banner1, banner2, banner3];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     pauseOnHover: false,

//     appendDots: (dots) => (
//       <div
//         style={{
//           position: "absolute",
//           bottom: "25px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           zIndex: 30,
//         }}
//       >
//         <ul className="flex gap-2">{dots}</ul>
//       </div>
//     ),

//     customPaging: (i) => (
//       <div
//         className="dot w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-70 transition-all duration-300"
//       ></div>
//     ),
//   };

//   return (
//     <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
//       <Slider {...settings} className="relative h-full custom-slider">
//         {bannerImages.map((img, index) => (
//   <div key={index} className="relative h-[500px] sm:h-[600px]">
//     {/* Background Image */}
//     <img
//       src={img}
//       alt={`Banner ${index + 1}`}
//       className="absolute inset-0 w-full h-full object-cover"
//     />

//     {/* 🔹 Black Overlay for Opacity */}
//     <div className="absolute inset-0 bg-black/20 z-10" />

//     {/* Animated gradient overlay (optional, above image but below content) */}
//     <motion.div
//       animate={{
//         background: [
//           "linear-gradient(120deg, rgba(255,165,0,0.5), rgba(255,69,0,0.5))",
//           "linear-gradient(120deg, rgba(255,140,0,0.5), rgba(255,20,147,0.5))",
//           "linear-gradient(120deg, rgba(0,128,255,0.5), rgba(255,140,0,0.5))",
//         ],
//       }}
//       transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//       className="absolute inset-0 mix-blend-multiply z-10"
//     />

//     {/* Centered Content */}
//     <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
//       <motion.h1
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg"
//       >
//         Welcome to Rajasthan Pravasi Foundation
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 1 }}
//         className="mt-4 max-w-2xl text-sm sm:text-lg md:text-xl text-gray-100 leading-relaxed"
//       >
//         Empowering the community with culture, heritage, and innovation.  
//         Join us in preserving Rajasthan’s vibrant legacy while shaping a brighter future.
//       </motion.p>

//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         className="mt-6 flex gap-4"
//       >
//         <button className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all shadow-md">
//           Join Us
//         </button>
//       </motion.div>
//     </div>
//   </div>
// ))}

//       </Slider>

//       {/* Add custom styles for active dot */}
//       <style jsx global>{`
//         .custom-slider .slick-dots li {
//           margin: 0 6px;
//         }
//         .custom-slider .slick-dots li button:before {
//           display: none;
//         }
//         .custom-slider .slick-dots li div {
//           width: 12px;
//           height: 12px;
//         }
//         .custom-slider .slick-dots li.slick-active div {
//           width: 30px;
//           height: 10px;
//           border-radius: 9999px;
//           background: linear-gradient(to right, #ff7b00, #ff1493);
//           opacity: 1;
//           transition: all 0.3s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// src/components/HomeBanner.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHeroSlides } from "../api/heroSlideApi";

export default function HomeBanner() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="dot w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-70 transition-all duration-300"></div>
    ),
  };

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const result = await getHeroSlides();
        if (result.success && Array.isArray(result.data)) {
          setSlides(result.data);
        } else {
          setSlides([]);
        }
      } catch (err) {
        setError("Failed to load slides. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[500px] sm:h-[600px] bg-gray-100 text-gray-600 text-lg font-medium">
        Loading banners...
      </div>
    );
  }

  if (error || slides.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] sm:h-[600px] bg-gray-100 text-gray-600 text-lg font-medium">
        {error ? error : "No banners available."}
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      <Slider {...settings} className="relative h-full custom-slider">
        {slides.map((slide, index) => (
          <div key={slide._id || index} className="relative h-[500px] sm:h-[600px]">
            {/* Background Image */}
            <img
              src={`http://31.97.231.85:2700${slide.image}`}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 z-10" />

            {/* Animated gradient */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(120deg, rgba(255,165,0,0.5), rgba(255,69,0,0.5))",
                  "linear-gradient(120deg, rgba(255,140,0,0.5), rgba(255,20,147,0.5))",
                  "linear-gradient(120deg, rgba(0,128,255,0.5), rgba(255,140,0,0.5))",
                ],
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 mix-blend-multiply z-10"
            />

            {/* Text content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-4 max-w-2xl text-sm sm:text-lg md:text-xl text-gray-100 leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-6 flex gap-4"
              >
                <button className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all shadow-md">
                  Join Us
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Dot styling */}
      <style jsx global>{`
        .custom-slider .slick-dots li {
          margin: 0 6px;
        }
        .custom-slider .slick-dots li button:before {
          display: none;
        }
        .custom-slider .slick-dots li div {
          width: 12px;
          height: 12px;
        }
        .custom-slider .slick-dots li.slick-active div {
          width: 30px;
          height: 10px;
          border-radius: 9999px;
          background: linear-gradient(to right, #ff7b00, #ff1493);
          opacity: 1;
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
