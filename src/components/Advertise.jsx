import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Sparkles, TrendingUp } from "lucide-react";

export default function AdVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.7]);

  return (
    <div className="relative py-28 overflow-hidden">
      {/* 🔥 Background Aurora */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50" />
      <motion.div
        className="absolute top-0 left-0 w-[120%] h-[120%] bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating glowing orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 150,
            height: 150,
            background: ["#FF6B35", "#F7931E", "#FDC830", "#C94B4B"][i % 4],
            top: `${20 + i * 10}%`,
            left: `${(i * 15) % 90}%`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="relative mx-6 sm:mx-12 lg:mx-auto max-w-7xl px-4"
        style={{ y, opacity }}
      >
        {/* 🔥 Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-orange-200/40 mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Featured Experience
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Rajasthan Like Never Before
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A cinematic journey into colors, traditions, and timeless beauty.
          </p>
        </div>

        {/* 🔥 Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Shiny sweep border effect */}
          <motion.div
            className="absolute -inset-[3px] rounded-3xl overflow-hidden"
            animate={{
              background: [
                "linear-gradient(90deg, #FF6B35, #FDC830, #F7931E, #FF6B35)",
                "linear-gradient(180deg, #FDC830, #FF6B35, #F7931E, #FF6B35)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Main video box */}
          <motion.div
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
          >
            {/* Overlay Play Button */}
            {!isPlaying && (
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 backdrop-blur-sm"
                onClick={() => setIsPlaying(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  {/* Glowing pulse */}
                  <motion.div
                    className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-70"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.4, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-12 h-12 text-white ml-2" fill="white" />
                  </div>
                </motion.button>
              </motion.div>
            )}

            {/* YouTube Video */}
            <iframe
              className="w-full h-full relative z-10"
              src={`https://www.youtube.com/embed/nF3icHV6TnU?autoplay=${
                isPlaying ? 1 : 0
              }&mute=0&controls=1&rel=0&modestbranding=1`}
              title="Ad Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>

          {/* Floating stats (Glassmorphism) */}
          <motion.div
            className="hidden lg:block absolute -left-24 top-1/3 bg-white/40 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/20"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-700">Views</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute -right-24 bottom-1/3 bg-white/40 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-700">Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 🔥 Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundPosition: "200% center" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-[length:200%_200%] animate-gradientMove text-white font-bold rounded-full shadow-lg transition-all duration-500"
          >
            Explore More Content
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
