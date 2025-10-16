// src/components/AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import foun1 from "../assets/Frame 16.png";
import foun2 from "../assets/Frame 17.png";
import foun3 from "../assets/Frame 18.png";
import foun4 from "../assets/Frame 19.png";
import AboutFoundationStructure from "./PersonAbout";

const stats = [
  { value: "1,00,000+", label: "Pravasi Engaged Since 2015", color: "#EDA536" },
  { value: "9+ YEARS", label: "of Service in India", color: "#BA5C9E" },
  { value: "50+ Cities", label: "India & Dubai also", color: "#41C45C" },
  { value: "500+", label: "Active Whatsapp Groups", color: "#06ACFF" },
  { value: "10,000+", label: "Volunteers", color: "#EA2774" },
];

const engagements = {
  images: [
    { src: foun1, alt: "Connecting Rajasthanis", radius: "rounded-tl-sm rounded-tr-[30px] rounded-br-sm rounded-bl-[30px]" },
    { src: foun2, alt: "Maati Ro Sandesh", radius: "rounded-tl-[30px] rounded-tr-sm rounded-br-[30px] rounded-bl-sm" },
    { src: foun3, alt: "Digital Connect", radius: "rounded-tl-[30px] rounded-tr-sm rounded-br-[30px] rounded-bl-sm" },
    { src: foun4, alt: "Cultural Programs", radius: "rounded-tl-sm rounded-tr-[30px] rounded-br-sm rounded-bl-[30px]" },
  ],
  contents: [
    {
      title: "Connecting Rajasthanis – Virtually and Beyond",
      description:
        "We engage with NRIs and Pravasi Rajasthani communities through virtual conferences, in-person meetings, and festival celebrations.",
    },
    {
      title: "Maati Ro Sandesh",
      description:
        "A collection of successful stories, documentaries, and achievements of Rajasthanis in all fields like business, sports, etc.",
    },
    {
      title: "Digital Connect for NRRs",
      description:
        "Through digital tools and monthly e-meets, we keep the global Pravasi Rajasthani community informed and united, sharing stories of progress and opportunities.",
    },
  ],
};

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div className="w-full bg-white text-gray-800 overflow-hidden">

      {/* === Who We Are === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#FFF6EF] py-16 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#DB580F] mb-6">
          Who We Are
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          The Rajasthan Pravasi Foundation is a collective of proud Rajasthanis
          across India and the world, dedicated to preserving our culture,
          supporting our people, and promoting the welfare of the global
          Rajasthani community through unity, compassion, and service.
        </p>
      </motion.section>

      {/* === Why Us === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#DB580F] mb-10">
          Why Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Trusted Network of Rajasthanis Worldwide",
            "Transparent and Community-Driven Operations",
            "Active Engagement in Social & Cultural Initiatives",
            "Dedicated Support for Pravasi Families",
          ].map((point, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border border-orange-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-800 font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === Objectives === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gradient-to-t from-orange-100 to-white py-16 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#DB580F] text-center mb-8">
          Our Objectives
        </h2>
        <ul className="max-w-4xl mx-auto list-disc text-gray-700 text-lg leading-relaxed pl-6 space-y-3">
          <li>Promote socio-cultural unity among Rajasthanis globally.</li>
          <li>Provide welfare and crisis support to Pravasi families.</li>
          <li>Encourage economic and developmental participation in Rajasthan.</li>
          <li>Preserve and promote Rajasthani culture and heritage.</li>
        </ul>
      </motion.section>

      {/* === Add spacing between sections === */}
      <div className="py-8" />

      {/* === Rajasthan Pravasi Foundation Body (PersonAbout) === */}
      <AboutFoundationStructure />

      {/* === Engagement With Diaspora === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#EF5C10] mb-10 text-center">
          Engagement With Diaspora
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10">
          {/* Left - images */}
          <div className="grid grid-cols-2 gap-[4px]">
            {engagements.images.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`h-44 md:h-52 w-full object-cover ${img.radius}`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          {/* Right - text */}
          <div className="flex flex-col justify-center space-y-8">
            {engagements.contents.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <h4 className="font-bold text-xl mb-2 text-[#DB580F]">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === Foundation Chapters === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl max-w-6xl mx-auto p-10 mb-16"
        style={{
          background:
            "linear-gradient(0.42deg, rgba(252, 238, 227, 0.2) 0.35%, rgba(230, 138, 87, 0.6) 50.94%, #DB580F 96.76%)",
        }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Rajasthan Pravasi Foundation Chapters
        </h3>
        <p className="text-center text-white/90 mb-10 max-w-3xl mx-auto">
          These chapters foster interaction with the Rajasthani diaspora and
          encourage their participation in Rajasthan’s socio-economic
          development.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg p-5 h-[180px] flex flex-col items-center justify-center shadow-lg"
              style={{
                backgroundColor: item.color,
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "2px",
                borderBottomRightRadius: "30px",
                borderBottomLeftRadius: "2px",
              }}
            >
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
