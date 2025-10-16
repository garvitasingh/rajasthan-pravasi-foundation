// import React from "react";
// import { motion } from "framer-motion";
// import camelIcon from "../assets/camel_right_small.png";
// import rajasthaniBg from '../assets/hawa-mahal.png'; // Add this import for the new background

// const missionPoints = [
//   {
//     title: "Connecting NRRs to their Roots:",
//     description:
//       "Strengthening cultural, emotional, and heritage ties with Rajasthan.",
//   },
//   {
//     title: "A Continuous Engagement:",
//     description:
//       "Serving as a direct communication bridge between NRRs, the Rajasthan government, and its agencies.",
//   },
//   {
//     title: "Socio-Economic Integration:",
//     description:
//       "Encouraging NRR participation in Rajasthan's development and investment opportunities.",
//   },
//   {
//     title: "Support & Welfare:",
//     description:
//       "Assisting NRRs during crises, addressing concerns, and informing them about government schemes.",
//   },
//   {
//     title: "Student Assistance & Health Support:",
//     description:
//       "Guiding NRR students in new cities and ensuring access to essential health facilities.",
//   },
//   {
//     title: "Building NRR Networks:",
//     description:
//       "Connecting NRRs within cities and globally to foster community and collaboration.",
//   },
//   {
//     title: "Events & Gatherings:",
//     description:
//       "Organising cultural events to strengthen NRR connections and bring the essence of Rajasthan to you, wherever you are.",
//   },
//   {
//     title: "Cultural Showcase:",
//     description:
//       "Highlighting Rajasthan's vibrant events and traditions through social media, keeping NRRs connected to their home.",
//   },
// ];

// export default function MissionSection() {
//   return (
//     <section
//     className="relative overflow-hidden py-20 px-6 sm:px-8 lg:px-12"
//     >
//       {/* Gradient desert sky background */}
//       <div 
//       className="absolute inset-0 bg-gradient-to-t from-orange-200 via-orange-400 to-[#DB580F]"
//       // style={{
//       //       backgroundImage: `url(${rajasthaniBg})`,
//       //       backgroundSize: 'cover',
//       //       backgroundPosition: 'center',
//       //       backgroundRepeat: 'no-repeat',
//       //     }}
//       />

//       {/* Rising sun */}
//       <motion.div
//         className="absolute top-10 right-10 w-32 h-32 rounded-full bg-yellow-300 blur-2xl opacity-70"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />

//       {/* Moving caravan silhouette */}
//       <motion.div
//         className="absolute bottom-12 left-[-20%] text-7xl text-black/50 whitespace-nowrap"
//         animate={{ x: ["-20%", "120%"] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//       >
//         🐪🐪🐪🐪🐪
//       </motion.div>

//       {/* Floating dust particles */}
//       {[...Array(10)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-yellow-200 rounded-full opacity-30"
//           initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 600 }}
//           animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
//           transition={{
//             repeat: Infinity,
//             duration: 6 + Math.random() * 4,
//             delay: i * 0.5,
//           }}
//         />
//       ))}

//       {/* Title */}
//       <motion.div
//         initial={{ y: 60, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.9 }}
//         viewport={{ once: true }}
//         className="text-center max-w-4xl mx-auto mb-16 relative z-10"
//       >
//         <motion.h2
//           animate={{ y: [0, -5, 0] }}
//           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
//         >
//           Mission
//         </motion.h2>
//         <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
//           The Rajasthan Pravasi Foundation strengthens ties with its diaspora,
//           preserving and promoting the essence of Rajasthani heritage while
//           encouraging their active involvement in the state's economic, social,
//           and cultural development.
//         </p>
//       </motion.div>

//       {/* Mission Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
//         {missionPoints.map((point, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.12, duration: 0.7 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05, rotateY: 6, rotateX: -3 }}
//             className="relative rounded-3xl p-6 text-center shadow-xl 
//                        bg-white/80 backdrop-blur-xl 
//                        border border-orange-200/40 hover:border-orange-400/70
//                        transition-all duration-500"
//           >
//             {/* Camel with glow */}
//             <motion.div
//               className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full 
//                          bg-gradient-to-tr from-orange-300 to-yellow-200 shadow-md"
//               animate={{ y: [0, -6, 0] }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//             >
//               <motion.img
//                 src={camelIcon}
//                 alt="camel"
//                 className="w-10 h-10"
//                 animate={{ rotate: [0, 5, -5, 0] }}
//                 transition={{ repeat: Infinity, duration: 6 }}
//               />
//             </motion.div>

//             <h3 className="font-bold text-xl text-orange-700 mb-3">
//               {point.title}
//             </h3>
//             <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//               {point.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// src/components/MissionSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import camelIcon from "../assets/camel_right_small.png";
import rajasthaniBg from "../assets/hawa-mahal.png";
import { getMissionCards } from "../api/missionApi";

export default function MissionSection() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const result = await getMissionCards();
        if (result.success && Array.isArray(result.data)) {
          setMissions(result.data);
        } else {
          setMissions([]);
        }
      } catch (err) {
        setError("Failed to load missions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  return (
    <section className="relative overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
      {/* 🔸 Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-200 via-orange-400 to-[#DB580F]" />

      {/* 🔸 Rising Sun Animation */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-yellow-300 blur-2xl opacity-70"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* 🔸 Moving Caravan */}
      <motion.div
        className="absolute bottom-12 left-[-20%] text-7xl text-black/50 whitespace-nowrap"
        animate={{ x: ["-20%", "120%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        🐪🐪🐪🐪🐪
      </motion.div>

      {/* 🔸 Floating Dust Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-200 rounded-full opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 600,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: 6 + Math.random() * 4,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* 🔸 Section Heading */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16 relative z-10"
      >
        <motion.h2
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
        >
          Mission
        </motion.h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
          The Rajasthan Pravasi Foundation strengthens ties with its diaspora,
          preserving and promoting the essence of Rajasthani heritage while
          encouraging their active involvement in the state's economic, social,
          and cultural development.
        </p>
      </motion.div>

      {/* 🔸 Loading / Error / No Data */}
      {loading ? (
        <div className="text-center text-white text-lg font-medium relative z-10">
          Loading missions...
        </div>
      ) : error ? (
        <div className="text-center text-red-100 text-lg font-medium relative z-10">
          {error}
        </div>
      ) : missions.length === 0 ? (
        <div className="text-center text-white text-lg font-medium relative z-10">
          No mission data available.
        </div>
      ) : (
        /* 🔸 Mission Cards Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
          {missions.map((mission, index) => (
            <motion.div
              key={mission._id || index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 6, rotateX: -3 }}
              className="relative rounded-3xl p-6 text-center shadow-xl 
                         bg-white/80 backdrop-blur-xl 
                         border border-orange-200/40 hover:border-orange-400/70
                         transition-all duration-500"
            >
              {/* 🐪 Camel Icon */}
              <motion.div
                className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full 
                           bg-gradient-to-tr from-orange-300 to-yellow-200 shadow-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <motion.img
                  src={camelIcon}
                  alt="camel"
                  className="w-10 h-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                />
              </motion.div>

              {/* 🟠 Dynamic Title & Subtitle */}
              <h3 className="font-bold text-xl text-orange-700 mb-3">
                {mission.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {mission.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
