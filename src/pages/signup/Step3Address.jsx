import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutLeftArtwork from "../../components/LayoutLeftArtwork";
import ProgressTabs from "../../components/ProgressTabs";
import {TextInput } from "../../dashboard/components/Inputs";

export default function Step3Address() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    currentEn: "",
    currentHi: "", 
    permanentEn: "",
    permanentHi: ""
  });

  function submit(e) {
    e.preventDefault();
    // Collect all steps and send:
    const step1 = JSON.parse(sessionStorage.getItem("signup.step1") || "{}");
    const step2 = JSON.parse(sessionStorage.getItem("signup.step2") || "{}");
    const payload = { ...step1, ...step2, ...form };
    console.log("Signup payload", payload); // TODO: call API
    sessionStorage.removeItem("signup.step1");
    sessionStorage.removeItem("signup.step2");
    nav("/dashboard");
  }

  return (
    <LayoutLeftArtwork showProgress={<ProgressTabs step={3} />}>
      <h2 className="text-3xl font-bold text-blue-900 mb-1">Create New Profile</h2>
      <p className="text-gray-600 mb-6">Address Info</p>

      <form onSubmit={submit} className="flex flex-col gap-4">
        <TextInput
          label="Current Address"
          hint="वर्तमान पता"
          placeholder="D-45, 2nd Floor..."
          value={form.currentEn}
          onChange={(e)=>setForm({...form, currentEn: e.target.value})}
        />

        <TextInput
          label="वर्तमान पता"
          hint="(Hindi)"
          placeholder="डी-45, दूसरी मंज़िल..."
          value={form.currentHi}
          onChange={(e)=>setForm({...form, currentHi: e.target.value})}
        />

        <TextInput
          label="Permanent Address"
          hint="स्थायी पता"
          placeholder="Flat No. 203, Shree Ganesham..."
          value={form.permanentEn}
          onChange={(e)=>setForm({...form, permanentEn: e.target.value})}
        />

        <TextInput
          label="स्थायी पता"
          hint="(Hindi)"
          placeholder="फ्लैट नं. 203, श्री गणेशम्..."
          value={form.permanentHi}
          onChange={(e)=>setForm({...form, permanentHi: e.target.value})}
        />

        <div className="flex justify-between mt-4">
          <Link to="/signup/step-2" className="px-6 py-3 border rounded hover:bg-gray-50">BACK</Link>
          <button className="px-6 py-3 bg-[#96469C] text-white rounded shadow hover:bg-[#7c3d82]">
            SIGNUP
          </button>
        </div>
      </form>
    </LayoutLeftArtwork>
  );
}
