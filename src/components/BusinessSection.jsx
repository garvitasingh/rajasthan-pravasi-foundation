import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar, Users } from "lucide-react";

import mandalaBg from "../assets/mandala.png";
import sampleImg from "../assets/Frame 20.png";

export default function FeaturedEvent() {
  const businesses = [
    {
      name: "SHRI RIDDHI PROPERTIES",
      category: "REAL ESTATE AGENTS",
      description:
        "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
      location: "Gurgaon, Haryana",
      image: sampleImg,
      date: "Dec 15, 2025",
      attendees: "250+",
    },
    {
      name: "SHRI RIDDHI PROPERTIES",
      category: "REAL ESTATE AGENTS",
      description:
        "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
      location: "Gurgaon, Haryana",
      image: sampleImg,
      date: "Dec 18, 2025",
      attendees: "180+",
    },
    {
      name: "SHRI RIDDHI PROPERTIES",
      category: "REAL ESTATE AGENTS",
      description:
        "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
      location: "Gurgaon, Haryana",
      image: sampleImg,
      date: "Dec 22, 2025",
      attendees: "320+",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mandala Pattern */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 opacity-5"
        >
          <img src={mandalaBg} alt="" className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 opacity-5"
        >
          <img src={mandalaBg} alt="" className="w-full h-full" />
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-orange-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${
                ["#FF6B35", "#F7931E", "#FDC830", "#FF1493"][i % 4]
              }, ${["#FF8C42", "#FFA07A", "#FFD700", "#DB7093"][i % 4]})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 60, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-orange-200/50 mb-6"
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Featured Events
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover exciting opportunities to connect, learn, and grow with our community
          </p>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative corner elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t-4 border-l-4 border-orange-300/50 rounded-tl-3xl" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-4 border-r-4 border-pink-300/50 rounded-br-3xl" />

          <div
            className="relative bg-gradient-to-br from-white/80 via-orange-50/50 to-pink-50/50 backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-12"
            style={{
              borderRadius: "60px 10px 60px 10px",
            }}
          >
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
              {businesses.map((biz, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-[32px] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                  />

                  <div
                    className="relative bg-white shadow-lg overflow-hidden h-full flex flex-col"
                    style={{
                      borderRadius: "30px 2px 30px 2px",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    {/* Image with overlay */}
                    <div className="relative overflow-hidden h-52">
                      <motion.img
                        src={biz.image}
                        alt={biz.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        style={{ borderRadius: "28px 0 0 0" }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Date badge */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-2"
                      >
                        <Calendar className="w-3 h-3 text-orange-500" />
                        <span className="text-xs font-bold text-gray-800">{biz.date}</span>
                      </motion.div>

                      {/* Attendees badge */}
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg flex items-center gap-1"
                      >
                        <Users className="w-3 h-3 text-white" />
                        <span className="text-xs font-bold text-white">{biz.attendees}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
                          {biz.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {biz.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                        {biz.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
                        >
                          READ
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                        
                        <div className="flex items-center gap-1 text-gray-700 text-xs font-bold">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span>{biz.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-3xl" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(239, 90, 15, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black px-10 py-4 shadow-xl flex items-center gap-3"
                style={{ borderRadius: "30px 5px 30px 5px" }}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative z-10">VIEW ALL ARTICLES</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}