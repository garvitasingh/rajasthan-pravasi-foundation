'use client';
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import mandala from "../assets/mandala.png";
import { getGalleryItems } from "../api/galleryApi";
import Loader from "../common/Loader";

const IMAGE_BASE_URL = "http://31.97.231.85:2700";

export default function GalleryContent() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mandalaControls = useAnimation();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const result = await getGalleryItems();
        if (result.success && Array.isArray(result.data)) {
          setGalleryItems(result.data);
        } else {
          setGalleryItems([]);
        }
      } catch (err) {
        setError("Failed to load gallery. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();

    // Mandala gentle sway animation loop
    const animateMandala = async () => {
      while (true) {
        await mandalaControls.start({
          rotate: [0, 360],
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
          transition: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        });
      }
    };
    animateMandala();
  }, [mandalaControls]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.img
          src={mandala}
          alt="mandala"
          animate={mandalaControls}
          className="w-[500px] h-[500px] opacity-[0.07] blur-[1px]"
          style={{
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mt-14"
      >
        Gallery
      </motion.h2>

      {/* Loader centered on page */}
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
          {error ? (
            <div className="col-span-full text-center text-red-500 py-8">
              {error}
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="col-span-full text-center text-gray-700 py-8">
              No gallery items available.
            </div>
          ) : (
            galleryItems.map((item, idx) => (
              <motion.div
                key={item._id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="group bg-white/80 backdrop-blur-sm shadow-lg border border-orange-100 hover:shadow-orange-200/70 rounded-[2px_30px_2px_30px] overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden relative">
                  <motion.img
                    src={
                      item.image?.startsWith("http")
                        ? item.image
                        : `${IMAGE_BASE_URL}${item.image}`
                    }
                    alt={item.title}
                    className="w-full h-52 object-cover px-2 pt-2 rounded-[2px_30px_2px_30px] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Title */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mt-3 mb-4 text-center font-semibold text-gray-700 text-sm px-3"
                >
                  {item.title}
                </motion.p>
              </motion.div>
            ))
          )}
        </div>
      )}

      {/* View All Button */}
      <div className="flex justify-center mt-6 mb-20">
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(239,90,15,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative w-[165px] h-[58px] rounded-[8px_30px_8px_30px] bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-lg shadow-md overflow-hidden"
        >
          <span className="relative z-10">VIEW ALL</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </div>
    </div>
  );
}
