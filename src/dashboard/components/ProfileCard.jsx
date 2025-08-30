import React, { useContext } from "react";
import logo from "../../assets/logo2.png";
import avatar from "../../assets/avatar.png";
import { AppContext } from "../../context/AppContext";

export default function ProfileCard() {
  const { user, backendUrl } = useContext(AppContext);
  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <div className="relative p-5 bg-gradient-to-r from-[#96469C] via-blue-900 to-black">
        <div className="absolute inset-0 opacity-40" />

        <div className="relative mt-5 rounded-lg bg-white/95 p-4 text-xs">
          <div className="relative flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-15 rounded bg-white p-2" />
            <div className="ml-auto">
              <img
                src={user?.photoUrl ? `${backendUrl}${user?.photoUrl}` : avatar}
                alt="profile"
                className="h-12 w-12 rounded-md object-cover"
              />
            </div>
          </div>
          <p className="font-semibold">PR00001</p>
          <div className="mt-1 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[11px] text-gray-500">NAME</p>
              <p className="text-sm font-semibold">{user?.nameEn}</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Blood Group</p>
              <p className="text-sm font-semibold">{user?.bloodGroupEn}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-center gap-2 px-4">
        <button className="rounded-md bg-[#96469C] text-white px-3 py-1 text-sm">
          Front
        </button>
        <button className="rounded-md bg-white text-gray-700 px-3 py-1 text-sm border border-gray-300">
          Back
        </button>
      </div>
      {/* details */}
      <div className="p-4 text-sm leading-5">
        <Section title="Personal Details">
          <Row k="Name" v={user?.nameEn} />
          <Row k="Email" v={user?.email} />
          <Row k="Contact no" v={user?.phone} />
          <Row k="Blood Group" v={user?.bloodGroupEn} />
        </Section>

        {/* <Section title="Aadhar Details">
          <Row k="Number" v="1234 5678 9012" />
        </Section> */}

        <Section title="Address">
          <Row k="Permanent" v={user?.addressPermanentEn} />
          <Row k="Current" v={user?.addressCurrentEn} />
        </Section>

        <Section title="Organization">
          <Row k="Organization" v={user?.occupationCompanyEn} />
          <Row k="Job Title" v={user?.occupationDesignationEn} />
          <Row k="Experience" v="15+ years" />
        </Section>

        <button className="mt-3 w-full rounded-md bg-[#96469C] py-2 text-white">
          Download
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-4">
      <p className="font-semibold text-blue-800">{title}</p>
      <div className="mt-2 space-y-1">{children}</div>
    </div>
  );
}
function Row({ k, v }) {
  return (
    <div className="flex gap-2">
      <p className="w-32 shrink-0 text-gray-600">{k}:</p>
      <p className="text-gray-800">{v}</p>
    </div>
  );
}
