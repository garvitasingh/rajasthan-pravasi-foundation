 
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiPathDistance, GiIndianPalace, GiLotus } from "react-icons/gi";
import Footer from "./Footer"; 

const tiles = [
  {
    icon: <GiPathDistance size={40} className="text-[#DB580F]" />,
    title: "Migration History",
    points: [
      "Rajasthan has a rich and vibrant migration history spanning centuries.",
      "Rajasthani people have traveled across India and the world as traders, artisans, soldiers, and entrepreneurs.",
      "They have carried the rich legacy of their homeland while contributing significantly to the regions they settled.",
      "Historic trade routes of Marwar and Shekhawati, as well as modern global business hubs, showcase the widespread influence of the Rajasthani diaspora.",
      "Despite migration, deep emotional and cultural ties to Rajasthan continue to thrive.",
    ],
  },
  {
    icon: <GiLotus size={40} className="text-[#DB580F]" />,
    title: "Cultural Heritage",
    points: [
      'Rajasthan, often called "The Land of Kings," is renowned for its unique cultural identity.',
      "Music, dance, and crafts — from the sarangi and ghoomar to intricate artistry — reflect the state’s heritage.",
      "Values of valor, hospitality, and creativity shape the everyday life and traditions of Rajasthan.",
      "The Rajasthani Pravasi community actively preserves and promotes this heritage globally.",
      "Festivals, cultural events, and artistic exchanges ensure Rajasthan’s vibrant traditions reach worldwide audiences.",
    ],
  },
  {
    icon: <GiIndianPalace size={40} className="text-[#DB580F]" />,
    title: "Tourism Legacy",
    points: [
      "Tourism in Rajasthan is a celebration of art, history, and life itself.",
      "Majestic forts, royal palaces, expansive deserts, and timeless folk traditions attract millions of visitors each year.",
      "The state’s blend of ancient heritage and warm hospitality makes it one of India’s most cherished destinations.",
      "Through the Rajasthan Pravasi Foundation, global Rajasthani communities are connected with tourism and investment opportunities in the state.",
      "These initiatives nurture pride in shared heritage and promote cultural and economic engagement.",
    ],
  },
];

export default function OurRoots() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-white via-[#FFF8F3] to-white py-20 px-6 sm:px-12 md:px-20 flex flex-col items-center overflow-hidden">
        {/* soft radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#DB580F]/10 rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-[#DB580F] mb-16 tracking-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Roots
        </motion.h2>

        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
          {tiles.map((tile, idx) => (
            <motion.div
              key={tile.title}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-[#DB580F33] via-transparent to-transparent transition-all duration-500 hover:from-[#DB580F55]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + idx * 0.15 }}
            >
              <motion.div
                className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_40px_rgba(219,88,15,0.08)] transition-all duration-500 hover:shadow-[0_12px_50px_rgba(219,88,15,0.18)]"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
              >
                <div className="mb-4 drop-shadow-sm">{tile.icon}</div>
                <h3 className="text-xl font-semibold text-[#DB580F] mb-4">
                  {tile.title}
                </h3>

                <ul className="text-gray-700 text-sm sm:text-base space-y-2 list-disc list-inside text-left">
                  {tile.points.slice(0, 3).map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Show button only when collapsed */}
                {expanded !== idx && (
                  <motion.button
                    className="mt-5 text-[#DB580F] text-sm font-medium hover:underline focus:outline-none"
                    onClick={() => setExpanded(idx)}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn more ↓
                  </motion.button>
                )}

                {/* Expanded content (same text style) */}
                <AnimatePresence>
                  {expanded === idx && (
                    <motion.div
                      className="overflow-hidden mt-3 w-full"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <ul className="text-gray-700 text-sm sm:text-base space-y-2 list-disc list-inside text-left">
                        {tile.points.slice(3).map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      {/* Show less only below expanded text */}
                      <motion.button
                        className="mt-5 text-[#DB580F] text-sm font-medium hover:underline focus:outline-none"
                        onClick={() => setExpanded(null)}
                        whileHover={{ scale: 1.05 }}
                      >
                        Show less ↑
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-lg sm:text-xl font-medium text-gray-700 mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-2xl mr-2">✨</span>
          <span className="italic font-semibold text-[#DB580F]">
            “Our past is our strength — and through our roots, we continue to rise.”
          </span>
        </motion.p>
      </section>
      <Footer /> {/* <-- Add Footer here */}
    </>
  );
}
