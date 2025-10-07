import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import buildingImg from "../assets/building.png";

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsData = [
    {
      id: 1,
      title: "Rajasthan High Court Issues Major Crime Verdict",
      date: "12 JULY, 2025",
      tag: "CRIME",
      content: `The Rajasthan High Court has issued a major verdict related to organized crime...
      This decision is expected to set a strong precedent for future cases in the state.
      Detailed judgment mentions reforms in district-level investigations.
      This case, spanning over 3 years, involved multiple agencies and has drawn public attention.`,
      image: buildingImg,
    },
    {
      id: 2,
      title: "Udaipur Police Cracks Smuggling Case",
      date: "20 AUGUST, 2025",
      tag: "CRIME",
      content: `Udaipur police have successfully cracked a high-profile smuggling case involving rare artifacts...
      The accused were caught during a night raid in the outskirts of Udaipur.`,
      image: buildingImg,
    },
    {
      id: 3,
      title: "Jaipur Cyber Crime Unit Busts Fraud Network",
      date: "5 SEPTEMBER, 2025",
      tag: "CRIME",
      content: `Jaipur cybercrime unit has uncovered an interstate network running fake online job scams.
      Over 20 people have been arrested and multiple bank accounts frozen.`,
      image: buildingImg,
    },
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Glow Backgrounds */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-[#EF5C10] relative inline-block">
            News & Updates
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-orange-500 rounded-full animate-pulse"></span>
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border hover:border-orange-400"
            >
              <img
                src={news.image}
                alt="News"
                className="w-full h-[220px] object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{news.title}</h3>
                <p className="text-xs text-gray-500 mt-1 tracking-wide">{news.date}</p>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {news.content}
                </p>

                {/* Tag */}
                <div className="mt-5">
                  <button
                    onClick={() => setSelectedNews(news)}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
                  >
                    {news.tag}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Button */}
        <div className="flex justify-center items-center mt-16">
          <button className="w-[175px] h-[68px] bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h4 className="font-semibold text-lg leading-none">VIEW</h4>
          </button>
        </div>
      </div>

      {/* Slide-in Panel */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-[#EF5C10]">Full News</h3>
              <button
                onClick={() => setSelectedNews(null)}
                className="text-gray-500 hover:text-orange-600 transition text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-[250px] object-cover rounded-xl"
              />
              <h2 className="text-2xl font-semibold text-gray-800">{selectedNews.title}</h2>
              <p className="text-sm text-gray-500">{selectedNews.date}</p>
              <p className="text-gray-700 leading-relaxed">{selectedNews.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
