import React from "react";
import tree from "../assets/tree_bg.png"; // replace with left side tree image
import doc from "../assets/doc.png"; // replace with actual profile photo

const successStories = [
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FF77E9] to-[#480073]", // pink to purple,
    color: "#EDA536"
  },
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FFC830] to-[#480073]", // orange to purple
    color: "#BA5C9E"
  },
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FF77E9] to-[#480073]", // pink to purple
    color: "#41C45C"
  },
  {
    name: "CLAIM YOUR POLICY OF INR 5 LAKHS",
    address: "22, Dr. APJ Abdul Kalam Road",
    description:
      "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
    gradient: "from-[#FFC830] to-[#480073]", // orange to purple
    color: "#EA2774"
  },
];

export default function PaidInfoSection() {
  return (
    <section className="w-full relative">
      {/* Left tree decoration */}
      <div className="relative z-10 max-w-[1220px] mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Left Tree */}

          {/* <img
            src={tree}
            alt="Left Tree"
            className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain"
          /> */}

          <div className="flex-1 text-center px-6 md:px-12">
            <div style={{ height: "80px" }} />
            <h2
              className="text-[#EF5C10] sm:text-2xl md:text-4xl mb-6"
              style={{
                // fontFamily: "Italianno, cursive",
                fontWeight: 700,
              }}
            >
              Benefits of paid user
            </h2>

            <p className="text-gray-700 font-semibold mb-6 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose font-poppins font-normal max-w-3xl mx-auto">
             Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through user-centered problem solving. A/B testing compares different design variations.
            </p>
            <div style={{ height: "20px" }} />
          </div>
          {/* Right Tree */}

          {/* <img
            src={tree}
            alt="Right Tree"
            className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain"
          /> */}
        </div>
      </div>
      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {successStories.map((story, idx) => (
          <div
            key={idx}
            className={`text-white p-4 rounded-[30px] shadow-xl`}
            style={{
              borderTopLeftRadius: "2px",
              borderTopRightRadius: "30px",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "2px",
              // background: `linear-gradient(to bottom, ${story.gradient
              //   .replace("from-[#", "#")
              //   .replace("] to-[#", ", #")
              //   .replace("]", "")})`,
              background: `${story.color}`
            }}
          >
            {/* Profile Image */}
            <img 
              src={doc}
              alt={story.name}
              className="w-20 h-20 rounded-md object-cover mb-4"
            />

            {/* Content */}
            <h3 className="font-bold text-lg">{story.name}</h3>
            <p className="text-sm mt-4 leading-relaxed">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
