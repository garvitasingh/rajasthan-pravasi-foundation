'use client';
import React from "react";
import { motion } from "framer-motion";
import foun1 from "../assets/foun1.png";
import foun2 from "../assets/foun2.png";
import foun3 from "../assets/foun3.png";
import foun4 from "../assets/foun4.png";
import foun5 from "../assets/foun5.png";

const members = [
  {
    name: "GYAN SINGH PEELWA",
    role: "FOUNDER, DIRECTOR",
    description: "Digital Gyan Technologies Pune, Jaipur, Dubai",
    image: foun1,
  },
  {
    name: "MAHANT PRATAP PURI",
    role: "BOARD OF MEMBER",
    description:
      "Member of the Rajasthan Legislative Assembly - Pokaran (Jaisimer)",
    image: foun2,
  },
  {
    name: "LALIT K. PANWAR",
    role: "GUARDIAN",
    description:
      "Former Secretary RPSC, Former Secretary Tourism and Minority Department, Member of Rajasthan Migrant Advisory Committee",
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
      "MD/CEO: Mahesh Nagari Multistate Co-op Society Ltd. Pune, President: Samast Rajasthani Samaj Sangh Pune",
    image: foun5,
  },
];

const MemberCard = ({ member }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 150, damping: 12 }}
    className="group relative bg-white/70 backdrop-blur-md border border-orange-100 rounded-2xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-orange-300 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
    {member.image && (
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-28 h-28 object-cover rounded-full shadow-md z-10 relative mb-4 border border-orange-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    )}
    <h3 className="text-lg font-semibold text-gray-900 z-10 relative tracking-wide">
      {member.name}
    </h3>
    <span className="mt-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs font-medium px-4 py-1 rounded-full shadow-sm z-10 relative">
      {member.role}
    </span>
    <p className="mt-3 text-sm text-gray-700 leading-relaxed z-10 relative">
      {member.description}
    </p>
  </motion.div>
);

const AboutFoundationStructure = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden px-6 bg-gradient-to-t from-orange-100  to-white  ">
      {/* {/* Layered Gradient Backgrounds */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,150,0.35),transparent_70%)]" /> */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,150,180,0.25),transparent_80%)]" /> */}
      

      <div className="relative z-20 container mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"
        >
          Rajasthan Pravasi Foundation
        </motion.h2>

        {/* Founder Section */}
        <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg border border-orange-100 rounded-3xl shadow-lg overflow-hidden relative p-6"
          >
            <img
              src={members[0].image}
              alt={members[0].name}
              className="w-full h-72 object-cover rounded-2xl mb-4 border border-orange-100"
            />
            <h3 className="text-2xl font-bold text-gray-900">
              {members[0].name}
            </h3>
            <p className="text-sm bg-gradient-to-r from-orange-400 to-pink-400 text-white inline-block px-4 py-1 rounded-full mt-2 mb-4">
              {members[0].role}
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              {members[0].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white/70 backdrop-blur-md border border-orange-100 rounded-3xl p-10 shadow-md"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Gyan Singh Rathore
            </h2>
            <p className="text-orange-600 text-xl font-medium mt-2">
              Chairman
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full" />
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Gyan Singh Rathore, founder of Rajasthan Pravasi Foundation, is
              devoted to supporting Rajasthani communities across India. His
              mission is to empower families in times of hardship, especially
              those far from home. The Foundation extends compassionate support
              and financial aid to families during unforeseen loss.
            </p>
          </motion.div>
        </div>

        {/* Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {members.slice(1).map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFoundationStructure;
