'use client';
import React from "react";
import { motion } from "framer-motion";
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

const MemberCard = ({ member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 100, damping: 12 }}
    className="w-[100%] relative bg-white/80 backdrop-blur-md border border-orange-100/50 rounded-3xl shadow-lg hover:shadow-2xl p-2 flex flex-col items-center text-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-orange-50/30 to-transparent opacity-70" />
    <img
      src={member.image}
      alt={member.name}
      className="w-48 h-48 object-cover rounded-2xl shadow-md z-10 relative mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-900 z-10 relative">
      {member.name}
    </h3>
    <span className="mt-2 bg-orange-500 text-white text-xs font-medium px-4 py-1 rounded-full shadow-sm z-10 relative">
      {member.role}
    </span>
    <p className="mt-3 text-sm text-gray-700 leading-relaxed z-10 relative">
      {member.description}
    </p>
  </motion.div>
);

const FoundationStructure = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${rajasthaniBg})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-orange-900/10" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg mb-16"
        >
          Rajasthan Pravasi Foundation Structure
        </motion.h2>

        {/* Founder Section */}
        <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/85 backdrop-blur-md border border-orange-100/50 rounded-3xl shadow-xl p-6 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-orange-50/40 to-transparent opacity-60 rounded-3xl" />
            <img
              src={members[0].image}
              alt={members[0].name}
              className="w-full h-64 object-cover rounded-2xl mb-4 z-10 relative shadow-md"
            />
            <h3 className="font-semibold text-xl text-gray-900 z-10 relative">
              {members[0].name}
            </h3>
            <span className="bg-orange-500 text-white px-4 py-1.5 text-sm rounded-full inline-block mt-2 shadow-sm z-10 relative">
              {members[0].role}
            </span>
            <p className="text-gray-700 mt-3 text-sm leading-relaxed z-10 relative">
              {members[0].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="h-[100%] relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all"
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

        {/* All Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.slice(1).map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationStructure;
