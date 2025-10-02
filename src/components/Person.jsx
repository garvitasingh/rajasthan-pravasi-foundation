import React from 'react';
import { motion } from 'framer-motion';
import foun1 from '../assets/foun1.png';
import foun2 from '../assets/foun2.png';
import foun3 from '../assets/foun3.png';
import foun4 from '../assets/foun4.png';
import foun5 from '../assets/foun5.png';
import rajasthaniBg from '../assets/hawa-mahal.png'; // Add this import for the new background

const members = [
  {
    name: 'GYAN SINGH PEELWA',
    role: 'FOUNDER, DIRECTOR',
    description: 'Digital Gyan Technologies Pune, Jaipur, Dubai',
    image: foun1,
    highlight: true,
  },
  {
    name: 'MAHANT PRATAP PURI',
    role: 'BOARD OF MEMBER',
    description: 'Member of the Rajasthan Legislative Assembly- Pokaran (Jaisimer)',
    image: foun2,
  },
  {
    name: 'LALIT K. PANWAR',
    role: 'GUARDIANS',
    description:
      'Former Secretary RPSC, Former Secretary Tourism and Minority Department Member of Rajasthan Migrant Advisory Committee',
    image: foun3,
  },
  {
    name: 'POONAM KHULARIYA',
    role: 'BOARD OF MEMBER',
    description: 'Young Entrepreneur and Owner of BNP Interiors, Mumbai from Seelwa, Nokha',
    image: foun4,
  },
  {
    name: 'MAGRAJ RATHI',
    role: 'BOARD OF MEMBER',
    description:
      'MD/CEO: Mahesh Nagari Multistate Co-op Society Ltd. Pune\nPresident: Samast Rajasthani Samaj Sangh Pune',
    image: foun5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const MemberCard = ({ member }) => {
  return (
    <motion.div
      className="relative bg-white/80 backdrop-blur-md border border-orange-100/50 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-2xl hover:bg-white/95 hover:border-orange-300"
      variants={cardVariants}
      whileHover={{ scale: 1.05, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-orange-50/40 to-transparent opacity-60" />
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-60 object-cover rounded-2xl mb-4 shadow-md transition-transform duration-300 hover:scale-105"
      />
      <motion.h3
        className="text-xl font-semibold text-gray-900 z-10 relative"
        variants={textVariants}
      >
        {member.name}
      </motion.h3>
      <motion.span
        className="mt-2 inline-block bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm transition-colors duration-300 hover:bg-orange-600 z-10 relative"
        variants={textVariants}
      >
        {member.role}
      </motion.span>
      <motion.p
        className="mt-3 text-sm text-gray-600 leading-relaxed z-10 relative"
        variants={textVariants}
      >
        {member.description}
      </motion.p>
    </motion.div>
  );
};

const FoundationStructure = () => {
  return (
    <section
      className="py-24 min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${rajasthaniBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-orange-900/10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-16 text-center tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Rajasthan Pravasi Foundation Structure
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-12 items-start mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative bg-white/80 backdrop-blur-md border border-orange-100/50 rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl hover:bg-white/95 transition-all duration-300"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05, rotate: -0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-orange-50/40 to-transparent opacity-60" />
            <img
              src={members[0].image}
              alt={members[0].name}
              className="w-full h-60 rounded-2xl mb-4 object-cover shadow-md"
            />
            <motion.h3
              className="font-semibold text-xl text-gray-900 z-10 relative"
              variants={textVariants}
            >
              {members[0].name}
            </motion.h3>
            <motion.span
              className="bg-orange-500 text-white px-4 py-1.5 text-sm rounded-full inline-block mt-2 shadow-sm hover:bg-orange-600 transition-colors duration-300 z-10 relative"
              variants={textVariants}
            >
              {members[0].role}
            </motion.span>
            <motion.p
              className="text-gray-600 mt-3 text-sm leading-relaxed z-10 relative"
              variants={textVariants}
            >
              {members[0].description}
            </motion.p>
          </motion.div>

          <motion.div
            className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl hover:bg-white/95 transition-all duration-300"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', type: 'spring', stiffness: 80 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-transparent opacity-60" />
            <motion.h2
              className="text-4xl font-bold text-gray-900 z-10 relative"
              variants={textVariants}
            >
              Gyan Singh Rathore
            </motion.h2>
            <motion.p
              className="text-orange-600 text-3xl font-semibold mt-2 z-10 relative"
              variants={textVariants}
            >
              Chairman
            </motion.p>
            <motion.div
              className="mt-4 h-1 w-32 bg-orange-500 rounded-full z-10 relative"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              className="mt-6 text-gray-700 text-lg leading-loose z-10 relative"
              variants={textVariants}
            >
              Gyan Singh Rathore, the founder of Rajasthan Pravasi Foundation, is deeply passionate about
              supporting Rajasthani people across India. His vision is to help families in times of need,
              especially when they are far from home. Rajasthan Pravasi Foundation is a community-driven
              initiative offering financial assistance to Rajasthani families in case of an untimely loss.
              With a small monthly subscription, the initiative provides support and is backed by the
              Rajasthani government, ensuring peace of mind and fostering a sense of belonging among
              Rajasthani families nationwide.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {members.slice(1).map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FoundationStructure;