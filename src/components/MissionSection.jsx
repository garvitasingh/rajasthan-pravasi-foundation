import React from "react";
import camelIcon from "../assets/camel_right_small.png"; // small camel icon

const missionPoints = [
  {
    title: "Connecting NRRs to their Roots:",
    description:
      "Strengthening cultural, emotional, and heritage ties with Rajasthan.",
  },
  {
    title: "A Continuous Engagement:",
    description:
      "Serving as a direct communication bridge between NRRs, the Rajasthan government, and its agencies.",
  },
  {
    title: "Socio-Economic Integration:",
    description:
      "Encouraging NRR participation in Rajasthan's development and investment opportunities.",
  },
  {
    title: "Support & Welfare:",
    description:
      "Assisting NRRs during crises, addressing concerns, and informing them about government schemes.",
  },
  {
    title: "Student Assistance & Health Support:",
    description:
      "Guiding NRR students in new cities and ensuring access to essential health facilities.",
  },
  {
    title: "Building NRR Networks:",
    description:
      "Connecting NRRs within cities and globally to foster community and collaboration.",
  },
  {
    title: "Events & Gatherings:",
    description:
      "Organising cultural events to strengthen NRR connections and bring the essence of Rajasthan to you, wherever you are.",
  },
  {
    title: "Cultural Showcase:",
    description:
      "Highlighting Rajasthan's vibrant events and traditions through social media, keeping NRRs connected to their home.",
  },
];

export default function MissionSection() {
  return (
    <section 
    className="mx-12 bg-gradient-to-b from-orange-500 to-orange-700 text-white py-16 px-6 rounded-t-[50px]"
    style={{
    background: "linear-gradient(0.42deg, rgba(252, 238, 227, 0.1) 0.35%, rgba(230, 138, 87, 0.6) 50.94%, #DB580F 96.76%)"
  }}
    >
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission</h2>
        <p className="text-base md:text-lg leading-relaxed">
          The Rajasthan Pravasi Foundation strengthens ties with its diaspora,
          preserving and promoting the essence of Rajasthani heritage while
          encouraging their active involvement in the state's economic, social
          and cultural development.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {missionPoints.map((point, index) => (
          <div
            key={index}
            className="bg-white h-[215px] w-[283px] text-black rounded-2xl shadow-md p-6 relative text-center"
            style={{
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "2px",
              borderBottomLeftRadius: "2px",
              borderBottomRightRadius: "30px",
            }}
          >
            <h3 className="font-bold text-orange-600 mb-2">{point.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {point.description}
            </p>

            {/* Camel Icon */}
            <img
              src={camelIcon}
              alt="camel"
              className="absolute bottom-2 left-2 w-6 h-6"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
