import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Crown, Shield, Zap, Gift, TrendingUp, Award, Star } from "lucide-react";

import tree from "../assets/tree_bg.png";
import doc from "../assets/doc.png";

const successStories = [
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    color: "#EDA536",
    icon: Shield,
  },
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    color: "#BA5C9E",
    icon: Gift,
  },
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    color: "#41C45C",
    icon: TrendingUp,
  },
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    color: "#EA2774",
    icon: Award,
  },
];

export default function PaidInfoSection() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-pink-50 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-orange-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
          </motion.div>
        ))}

        {/* Decorative Trees (optional - subtle) */}
        <motion.img
          src={tree}
          alt=""
          className="absolute bottom-0 left-0 w-40 opacity-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img
          src={tree}
          alt=""
          className="absolute bottom-0 right-0 w-40 opacity-10 scale-x-[-1]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-orange-200/50 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="w-5 h-5 text-orange-500" />
            </motion.div>
            <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Premium Membership
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Benefits of Paid User
            </span>
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
          >
            Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through user-centered problem solving. A/B testing compares different design variations.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 w-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-8"
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, idx) => {
            const IconComponent = story.icon;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Glow */}
                <motion.div
                  className="absolute -inset-1 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${story.color}, ${story.color}80)`,
                  }}
                />

                {/* Card */}
                <div
                  className="relative h-full flex flex-col overflow-hidden shadow-xl"
                  style={{
                    borderTopLeftRadius: "2px",
                    borderTopRightRadius: "30px",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "2px",
                    background: story.color,
                  }}
                >
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />

                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl" />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Icon Badge */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-20 h-20 rounded-xl overflow-hidden mb-4 shadow-lg"
                    >
                      <img 
                        src={doc}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-white font-black text-lg mb-3 leading-tight">
                      {story.name}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-sm leading-relaxed flex-1">
                      {story.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-4 flex items-center gap-2 text-white font-bold text-sm"
                    >
                      <span>Learn More</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-tl-3xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group/btn px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-black rounded-full shadow-2xl overflow-hidden"
            style={{ borderRadius: "5px 30px 5px 30px" }}
          >
            {/* Animated shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              <Zap className="w-5 h-5" fill="currentColor" />
              Upgrade to Premium Now
              <Sparkles className="w-5 h-5" />
            </span>
          </motion.button>
          
          <p className="text-gray-600 text-sm mt-4">
            Join 10,000+ premium members enjoying exclusive benefits
          </p>
        </motion.div>
      </div>
    </section>
  );
}