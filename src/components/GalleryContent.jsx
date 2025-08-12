import React from "react";
import mandala from "../assets/mandala.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import GradientButton from "../components/GradientButton";

const galleryItems = [
  { img: img1, text: "IMAGE 01 DESCRIPTION" },
  { img: img2, text: "IMAGE 01 DESCRIPTION" },
  { img: img3, text: "IMAGE 01 DESCRIPTION" },
  { img: img4, text: "IMAGE 01 DESCRIPTION" },
  { img: img1, text: "IMAGE 01 DESCRIPTION" },
  { img: img2, text: "IMAGE 01 DESCRIPTION" },
  { img: img3, text: "IMAGE 01 DESCRIPTION" },
  { img: img4, text: "IMAGE 01 DESCRIPTION" },
  { img: img1, text: "IMAGE 01 DESCRIPTION" },
  { img: img2, text: "IMAGE 01 DESCRIPTION" },
  { img: img3, text: "IMAGE 01 DESCRIPTION" },
  { img: img4, text: "IMAGE 01 DESCRIPTION" },
];

export default function GalleryContent() {
  return (
    <div className="relative w-full">
      {/* Mandala background */}
      <img
        src={mandala}
        alt="mandala"
        className="absolute top-1/2 left-1/2 w-[980px] h-[980px] -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none"
      />
      
      {/* Title */}
      <h2 className="text-center text-orange-500 text-3xl font-bold mt-10">
        Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 relative z-10">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-3 flex flex-col items-center"
            style={{
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "2px",
              borderBottomRightRadius: "30px",
              borderBottomLeftRadius: "2px",
            }}
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-[85%] object-cover rounded-t-[20px] rounded-tr-[2px]"
            />
            <p className="mt-2 text-center font-semibold text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6 mb-16">
        <GradientButton
          width="150px"
          height="50px"
          borderRadius="2px 30px 2px 30px"
        >
          <h4
            style={{
              lineHeight: 1,
              fontWeight: 600,
              fontSize: "16px",
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
