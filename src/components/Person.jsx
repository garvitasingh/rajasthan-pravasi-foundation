import React from "react";
import foun1 from "../assets/foun1.png"
import foun2 from "../assets/foun2.png"
import foun3 from "../assets/foun3.png"
import foun4 from "../assets/foun4.png"
import foun5 from "../assets/foun5.png"

const members = [
  {
    name: "GYAN SINGH PEELWA",
    role: "FOUNDER, DIRECTOR",
    description: "Digital Gyan Technologies Pune, Jaipur, Dubai",
    image: {foun: foun2},
    highlight: true,
  },
  {
    name: "MAHANT PRATAP PURI",
    role: "BOARD OF MEMBER",
    description:
      "Member of the Rajasthan Legislative Assembly- Pokaran (Jaisimer)",
    image: {foun: foun3},
  },
  {
    name: "LALIT K. PANWAR",
    role: "GUARDIANS",
    description:
      "Former Secretary RPSC, Former Secretary Tourism and Minority Department Member of Rajasthan Migrant Advisory Committee",
    image: {foun: foun4},
  },
  {
    name: "POONAM KHULARIYA",
    role: "BOARD OF MEMBER",
    description:
      "Young Entrepreneur and Owner of BNP Interiors, Mumbai from Seelwa, Nokha",
    image: {foun: foun5},
  },
  {
    name: "MAGRAJ RATHI",
    role: "BOARD OF MEMBER",
    description:
      "MD/CEO: Mahesh Nagari Multistate Co-op Society Ltd. Pune\nPresident: Samast Rajasthani Samaj Sangh Pune",
    image: {foun: foun4},
  },
];

const FounderCard = ({ member }) => {
  return (
    <div className="bg-[#fff2e9] rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center p-5 w-full md:w-3/4">
      {/* Left: Image */}
      <div className="w-full md:w-1/3">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-60 object-cover rounded-md"
        />
      </div>
      {/* Right: Text */}
      <div className="w-full md:w-2/3 md:pl-6 text-center md:text-left mt-4 md:mt-0">
        <h3 className="text-lg font-bold text-black">{member.name}</h3>
        <span className="mt-2 inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {member.role}
        </span>
        <p className="mt-3 text-sm text-gray-700 whitespace-pre-line">
          {member.description}
        </p>
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
  return (
    <div 
    className="bg-[#fff2e9] w-[283px] h-[440px] rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-5"
        style={{
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "2px",
              borderBottomLeftRadius: "2px",
              borderBottomRightRadius: "30px",
            }}
    >
      <img
        src={member.image.foun}
        alt={member.name}
        className="w-full h-56 object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-bold text-black">{member.name}</h3>
      <span className="mt-2 inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        {member.role}
      </span>
      <p className="mt-3 text-sm text-gray-700 whitespace-pre-line">
        {member.description}
      </p>
    </div>
  );
};

export default function FoundationStructure() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-10">
          Rajasthan Pravasi Foundation Structure
        </h2>

        <div className="grid md:grid-cols-3 gap-6 items-start mb-12">
        {/* Left Card */}
        <div 
        className="bg-[#fff2e9] w-[283px] h-[440px] shadow-lg rounded-2xl p-4 text-center"
        style={{
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "2px",
              borderBottomLeftRadius: "2px",
              borderBottomRightRadius: "30px",
            }}
        >
          <img
            src={foun1}
            alt={members[0].name}
            className="rounded-xl mb-3 w-full h-64 object-cover"
          />
          <h3 className="font-bold text-lg">{members[0].name}</h3>
          <span className="bg-orange-500 text-white px-3 py-1 text-xs rounded-full inline-block mt-2">
            {members[0].role}
          </span>
          <p className="text-gray-600 mt-3 text-sm">{members[0].company}</p>
        </div>

        {/* Right Content (2 columns span) */}
        <div className="md:col-span-2 text-start bg-white rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Gyan Singh Rathore
          </h2>
          <p className="text-orange-600 font-semibold mt-1 underline">
            Chairman
          </p>
          <p className="mt-4 text-gray-850 text-xl leading-relaxed">
            Gyan Singh Rathore, the founder of Rajasthan Pravasi Foundation, is
            deeply passionate about supporting Rajasthani people across India.
            His vision is to help families in times of need, especially when
            they are far from home. Rajasthan Pravasi Foundation is a
            community-driven initiative offering financial assistance to
            Rajasthani families in case of an untimely loss. With a small monthly
            subscription, the initiative provides support and is backed by the
            Rajasthani government, ensuring peace of mind and fostering a sense
            of belonging among Rajasthani families nationwide.
          </p>
        </div>
      </div>

        {/* Other members row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {members.slice(1).map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
