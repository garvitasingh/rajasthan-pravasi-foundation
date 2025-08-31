import React, { useContext } from "react";
import logo from "../../assets/logo2.png";
import avatar from "../../assets/avatar.png";
import { AppContext } from "../../context/AppContext";
import {
  FiDownload,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

export default function ProfileCard() {
  const { user, backendUrl } = useContext(AppContext);

  return (
    <div className="rounded-2xl border bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="relative p-6 bg-gradient-to-r from-[#96469C] via-blue-900 to-black text-white">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="logo"
            className="h-10 bg-white/90 rounded-md p-1"
          />
          <img
            src={user?.photoUrl ? `${backendUrl}${user?.photoUrl}` : avatar}
            alt="profile"
            className="h-24 w-24 rounded-full object-cover border-4 border-[#96469C] shadow-lg"
          />
        </div>

        {/* ID & Name */}
        <div className="mt-4">
          <p className="text-xs text-gray-200">Pravasi ID</p>
          <p className="text-lg font-bold tracking-wide">PR00001</p>
          <p className="mt-1 font-medium text-white text-xl">{user?.nameEn}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 px-6 -mt-4 relative z-10">
        <button className="rounded-full bg-[#96469C] text-white px-4 py-1.5 text-sm shadow hover:bg-[#7e3c82] transition">
          Front
        </button>
        <button className="rounded-full bg-white text-gray-700 px-4 py-1.5 text-sm border shadow hover:bg-gray-50 transition">
          Back
        </button>
      </div>

      {/* Details */}
      <div className="p-6 text-sm leading-6">
        <Section title="Personal Details">
          <Row icon={<FiUser />} label="Name" value={user?.nameEn} />
          <Row icon={<FiMail />} label="Email" value={user?.email} />
          <Row icon={<FiPhone />} label="Contact" value={user?.phone} />
          <Row
            icon={<FiUser />}
            label="Blood Group"
            value={user?.bloodGroupEn}
          />
        </Section>

        <Section title="Address">
          <Row
            icon={<FiMapPin />}
            label="Permanent"
            value={user?.addressPermanentEn}
          />
          <Row
            icon={<FiMapPin />}
            label="Current"
            value={user?.addressCurrentEn}
          />
        </Section>

        <Section title="Organization">
          <Row
            icon={<FiBriefcase />}
            label="Company"
            value={user?.occupationCompanyEn}
          />
          <Row
            icon={<FiBriefcase />}
            label="Designation"
            value={user?.occupationDesignationEn}
          />
          <Row icon={<FiBriefcase />} label="Experience" value="15+ years" />
        </Section>

        <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-[#96469C] py-2 text-white font-medium shadow hover:bg-[#7e3c82] transition">
          <FiDownload /> Download
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-5">
      <p className="font-semibold text-gray-800 border-b pb-1 mb-2">{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Row({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[#96469C]">{icon}</span>
      <p className="w-28 text-gray-600 font-medium">{label}:</p>
      <p className="flex-1 text-gray-900">{value || "N/A"}</p>
    </div>
  );
}
