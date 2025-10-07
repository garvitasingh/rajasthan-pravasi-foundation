import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import foun1 from "../assets/foun1.png";
import foun2 from "../assets/foun2.png";
import foun3 from "../assets/foun3.png";
import foun4 from "../assets/foun4.png";
import foun5 from "../assets/foun5.png";
import rajasthaniBg from "../assets/person_img.jpg";

const members = [
  {
    name: "GYAN SINGH PEELWA",
    role: "FOUNDER, DIRECTOR",
    description: "Digital Gyan Technologies Pune, Jaipur, Dubai",
    image: foun1,
    highlight: true,
  },
  {
    name: "MAHANT PRATAP PURI",
    role: "BOARD OF MEMBER",
    description:
      "Member of the Rajasthan Legislative Assembly- Pokaran (Jaisimer)",
    image: foun2,
  },
  {
    name: "LALIT K. PANWAR",
    role: "GUARDIANS",
    description:
      "Former Secretary RPSC, Former Secretary Tourism and Minority Department Member of Rajasthan Migrant Advisory Committee",
    image: foun3,
  },
  {
    name: "POONAM KHULARIYA",
    role: "BOARD OF MEMBER",
    description:
      "Young Entrepreneur and Owner of BNP Interiors, Mumbai from Seelwa, Nokha",
    image: foun4,
  },
  {
    name: "MAGRAJ RATHI",
    role: "BOARD OF MEMBER",
    description:
      "MD/CEO: Mahesh Nagari Multistate Co-op Society Ltd. Pune\nPresident: Samast Rajasthani Samaj Sangh Pune",
    image: foun5,
  },
];

const MemberCard = ({ member }) => {
  return (
    <motion.div
  className="relative bg-white/80 backdrop-blur-md border border-orange-100/50 rounded-3xl shadow-xl overflow-hidden flex flex-row items-center p-6 transition-all duration-300 hover:shadow-2xl hover:bg-white/95 hover:border-orange-300 flex-shrink-0 w-[100%] sm:w-[1%] md:w-[35%] lg:w-[45%]"
  whileHover={{ scale: 1.05 }}
>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/40 to-transparent opacity-60" />
      
      {/* Image on the left */}
      <img
        src={member.image}
        alt={member.name}
        className="w-64 h-64 object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 flex-shrink-0"
      />
      
      {/* Content on the right */}
      <div className="ml-6 flex flex-col justify-center text-left flex-1">
        <h3 className="text-lg font-semibold text-gray-900 z-10 relative">
          {member.name}
        </h3>
        <span className="mt-2 inline-block bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm z-10 relative w-fit">
          {member.role}
        </span>
        <p className="mt-2 text-xs text-gray-600 leading-relaxed z-10 relative">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

const FoundationStructure = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="py-24 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url(${rajasthaniBg})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-orange-900/10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-16 text-center tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rajasthan Pravasi Foundation Structure
        </motion.h2>

        {/* Top Founder Section */}
        <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-12 items-start mb-20">
          <motion.div
            className="relative bg-white/80 backdrop-blur-md border border-orange-100/50 rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl hover:bg-white/95 transition-all duration-300"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-orange-50/40 to-transparent opacity-60" />
            <img
              src={members[0].image}
              alt={members[0].name}
              className="w-full h-60 rounded-2xl mb-4 object-cover shadow-md"
            />
            <h3 className="font-semibold text-xl text-gray-900 z-10 relative">
              {members[0].name}
            </h3>
            <span className="bg-orange-500 text-white px-4 py-1.5 text-sm rounded-full inline-block mt-2 shadow-sm z-10 relative">
              {members[0].role}
            </span>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed z-10 relative">
              {members[0].description}
            </p>
          </motion.div>

          <motion.div
            className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl hover:bg-white/95 transition-all duration-300"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-50/30 to-transparent opacity-60" />
            <h2 className="text-4xl font-bold text-gray-900 z-10 relative">
              Gyan Singh Rathore
            </h2>
            <p className="text-orange-600 text-3xl font-semibold mt-2 z-10 relative">
              Chairman
            </p>
            <div className="mt-4 h-1 w-32 bg-orange-500 rounded-full z-10 relative" />
            <p className="mt-6 text-gray-700 text-lg leading-loose z-10 relative">
              Gyan Singh Rathore, the founder of Rajasthan Pravasi Foundation,
              is deeply passionate about supporting Rajasthani people across
              India. His vision is to help families in times of need, especially
              when they are far from home. Rajasthan Pravasi Foundation is a
              community-driven initiative offering financial assistance to
              Rajasthani families in case of an untimely loss.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Carousel Section - Shows 3 cards per frame */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>
          )}

          <motion.div
            ref={carouselRef}
            className="overflow-x-scroll flex gap-6 scrollbar-hide px-4"
            onScroll={checkScrollability}
          >
            {members.slice(1).map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundationStructure;