import React from "react";
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
    image: { foun: foun1 },
    highlight: true,
  },
  {
    name: "MAHANT PRATAP PURI",
    role: "BOARD OF MEMBER",
    description:
      "Member of the Rajasthan Legislative Assembly- Pokaran (Jaisimer)",
    image: { foun: foun2 },
  },
  {
    name: "LALIT K. PANWAR",
    role: "GUARDIANS",
    description:
      "Former Secretary RPSC, Former Secretary Tourism and Minority Department Member of Rajasthan Migrant Advisory Committee",
    image: { foun: foun3 },
  },
  {
    name: "POONAM KHULARIYA",
    role: "BOARD OF MEMBER",
    description:
      "Young Entrepreneur and Owner of BNP Interiors, Mumbai from Seelwa, Nokha",
    image: { foun: foun4 },
  },
  {
    name: "MAGRAJ RATHI",
    role: "BOARD OF MEMBER",
    description:
      "MD/CEO: Mahesh Nagari Multistate Co-op Society Ltd. Pune\nPresident: Samast Rajasthani Samaj Sangh Pune",
    image: { foun: foun5 },
  },
];

const MemberCard = ({ member }) => {
  return (
    <div
      className="bg-[#fff2e9] md:w-[283px] h-[440px] rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-2"
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
        className="object-cover rounded-xl"
        style={{
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "2px",
          borderBottomLeftRadius: "2px",
          borderBottomRightRadius: "30px",
        }}
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
        <h2 className="sm:text-2xl md:text-4xl font-bold text-[#EF5C10] mb-10">
          Rajasthan Pravasi Foundation Structure
        </h2>

        <div className="grid md:grid-cols-[20%_80%] gap-6 items-start mb-12">
          {/* Left Card */}
          <div
            className="bg-[#fff2e9] md:w-[283px] h-[440px] shadow-lg rounded-2xl p-2 text-center"
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
              className="w-full h-64 rounded-xl mb-3 object-cover"
            />
            <h3 className="font-bold text-lg">{members[0].name}</h3>
            <span className="bg-orange-500 text-white px-3 py-1 text-xs rounded-full inline-block mt-2">
              {members[0].role}
            </span>
            <p className="text-gray-600 mt-3 text-sm">
              {members[0].description}
            </p>
          </div>

          {/* Right Content */}
          <div className="text-start bg-white rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Gyan Singh Rathore
            </h2>
            <p className="text-orange-600 text-2xl font-bold mt-1">Chairman</p>
            <p className="mt-4 text-gray-750 text-xl font-semibold leading-relaxed">
              Gyan Singh Rathore, the founder of Rajasthan Pravasi Foundation,
              is deeply passionate about supporting Rajasthani people across
              India. His vision is to help families in times of need, especially
              when they are far from home. Rajasthan Pravasi Foundation is a
              community-driven initiative offering financial assistance to
              Rajasthani families in case of an untimely loss. With a small
              monthly subscription, the initiative provides support and is
              backed by the Rajasthani government, ensuring peace of mind and
              fostering a sense of belonging among Rajasthani families
              nationwide.
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
