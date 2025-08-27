import React from "react";
import tree from "../assets/tree_bg.png"; // replace with left side tree image
import profileImg from "../assets/profile.png"; // replace with actual profile photo

const successStories = [
  {
    name: "LAKSHMI MITTAL",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FF77E9] to-[#480073]", // pink to purple
  },
  {
    name: "LAKSHMI MITTAL",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FFC830] to-[#480073]", // orange to purple
  },
  {
    name: "LAKSHMI MITTAL",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FF77E9] to-[#480073]", // pink to purple
  },
  {
    name: "LAKSHMI MITTAL",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FFC830] to-[#480073]", // orange to purple
  },
];

export default function SuccessStories({ hasTree = true }) {
  return (
    <section className="w-full py-20 relative">
      {/* Left tree decoration */}
      <div className="relative z-10 max-w-[1220px] mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Left Tree */}
          {hasTree && (
            <img
              src={tree}
              alt="Left Tree"
              className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain"
            />
          )}
          <div className="flex-1 text-center px-6 md:px-12">
            <div style={{ height: "80px" }} />
            <h2
              className="text-orange-500 mb-6"
              style={{
                fontFamily: "Italianno, cursive",
                fontWeight: 400,
                fontSize: "60px",
              }}
            > 
              Our Success Stories
            </h2>
            {!hasTree && (
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-poppins font-normal max-w-3xl mx-auto">
              Color theory influences user emotions and brand perception. Data
              visualization helps users understand complex information.
            </p>
            )}            <div style={{ height: "20px" }} />
 
          </div>
          {/* Right Tree */}
          {hasTree && (
            <img
              src={tree}
              alt="Right Tree"
              className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain"
            />
          )}
        </div>
      </div>
      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {successStories.map((story, idx) => (
          <div
            key={idx}
            className={`text-white p-6 rounded-[30px] shadow-xl`}
            style={{
              borderTopLeftRadius: "2px",
              borderTopRightRadius: "30px",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "2px",
              background: `linear-gradient(to bottom, ${story.gradient
                .replace("from-[#", "#")
                .replace("] to-[#", ", #")
                .replace("]", "")})`,
            }}
          >
            {/* Profile Image */}
            <img
              src={profileImg}
              alt={story.name}
              className="w-20 h-20 rounded-md object-cover mb-4"
            />

            {/* Content */}
            <h3 className="font-bold text-lg">{story.name}</h3>
            <p className="text-sm mt-1">{story.address}</p>
            <p className="text-sm mt-4 leading-relaxed">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
