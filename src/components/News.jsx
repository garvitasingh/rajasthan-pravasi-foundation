import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import buildingImg from "../assets/building.png";
import { getNews } from "../api/newsApi";

const IMAGE_BASE_URL = "http://31.97.231.85:2700";

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await getNews();
        if (result.success && Array.isArray(result.data)) {
          setNewsData(result.data);
        } else {
          setNewsData([]);
        }
      } catch (err) {
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Helper to format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Glow Backgrounds */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              News & Updates
            </span>
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {loading ? (
            <div className="col-span-full text-center text-gray-700 py-8">
              Loading news...
            </div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500 py-8">
              {error}
            </div>
          ) : newsData.length === 0 ? (
            <div className="col-span-full text-center text-gray-700 py-8">
              No news available.
            </div>
          ) : (
            newsData.map((news) => (
              <div
                key={news._id}
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border hover:border-orange-400"
              >
                <img
                  src={
                    news.image?.startsWith("http")
                      ? news.image
                      : news.image
                      ? `${IMAGE_BASE_URL}${news.image}`
                      : buildingImg
                  }
                  alt="News"
                  className="w-full h-[220px] object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 tracking-wide">
                    {formatDate(news.date)}
                  </p>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {news.about}
                  </p>

                  {/* Tag */}
                  <div className="mt-5">
                    <button
                      onClick={() => setSelectedNews(news)}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
                    >
                      {(news.category || "GENERAL").toUpperCase()}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View Button */}
        <div className="flex justify-center items-center mt-16">
          <button className="w-[175px] h-[60px] bg-gradient-to-r from-orange-500 to-orange-600 rounded-[20px] flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-105 transition">
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
                src={
                  selectedNews.image?.startsWith("http")
                    ? selectedNews.image
                    : selectedNews.image
                    ? `${IMAGE_BASE_URL}${selectedNews.image}`
                    : buildingImg
                }
                alt={selectedNews.title}
                className="w-full h-[250px] object-cover rounded-xl"
              />
              <h2 className="text-2xl font-semibold text-gray-800">
                {selectedNews.title}
              </h2>
              <p className="text-sm text-gray-500">
                {formatDate(selectedNews.date)}
              </p>
              <p className="text-gray-700 leading-relaxed">{selectedNews.about}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
