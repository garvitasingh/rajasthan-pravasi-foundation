import React from "react";
import mandala from "../assets/mandala.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import GradientButton from "../components/GradientButton";

const galleryItems = [
  { img: img1, text: "IMAGE 01 DESCRIPTION" },
  { img: img2, text: "IMAGE 02 DESCRIPTION" },
  { img: img3, text: "IMAGE 03 DESCRIPTION" },
  { img: img4, text: "IMAGE 04 DESCRIPTION" },
  { img: img1, text: "IMAGE 05 DESCRIPTION" },
  { img: img2, text: "IMAGE 06 DESCRIPTION" },
  { img: img3, text: "IMAGE 07 DESCRIPTION" },
  { img: img4, text: "IMAGE 08 DESCRIPTION" },
  { img: img1, text: "IMAGE 09 DESCRIPTION" },
  { img: img2, text: "IMAGE 10 DESCRIPTION" },
  { img: img3, text: "IMAGE 11 DESCRIPTION" },
  { img: img4, text: "IMAGE 12 DESCRIPTION" },
];

export default function GalleryContent() {
  return (
    <div className="relative w-full">
      {/* Mandala Background */}
      <img
        src={mandala}
        alt="mandala"
        className="absolute top-1/2 left-1/2 w-[980px] h-[980px] -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none"
      />

      {/* Title */}
      <h2 className="text-center text-orange-600 text-4xl font-extrabold mt-14 drop-shadow-sm">
        Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-[2px_30px_2px_30px] overflow-hidden group"
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <p className="mt-3 mb-4 text-center font-semibold text-gray-700 text-sm px-3">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6 mb-20">
        <GradientButton
          width="170px"
          height="55px"
          borderRadius="8px 30px 8px 30px"
        >
          <h4
            style={{
              lineHeight: 1,
              fontWeight: 600,
              fontSize: "18px",
              color: "#fff",
            }}
          >
            VIEW ALL
          </h4>
        </GradientButton>
      </div>
    </div>
  );
}
