import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutLeftArtwork from "../../components/LayoutLeftArtwork";
import ProgressTabs from "../../components/ProgressTabs";
import { TextInput } from "../../dashboard/components/Inputs";

export default function Step1Personal() {
  const [form, setForm] = useState({
    firstName: "",
    firstNameHi: "",
    email: "",
    password: "",
    confirm: "",
    phone: "",
    otp: ""
  });
  const nav = useNavigate();

  function next(e) {
    e.preventDefault();
    // save to temp storage (optional)
    sessionStorage.setItem("signup.step1", JSON.stringify(form));
    nav("/signup/step-2");
  }

  return (
    <LayoutLeftArtwork showProgress={<ProgressTabs step={1} />}>
      <h2 className="text-3xl font-bold text-blue-900 mb-1">Create New Profile</h2>
      <p className="text-gray-600 mb-6">Personal</p>

      <form onSubmit={next} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Name"
            hint="नाम"
            placeholder="Ajay Raj"
            value={form.firstName}
            onChange={(e)=>setForm({...form, firstName: e.target.value})}
          />
          <TextInput
            label="Name (Hindi)"
            hint="नाम"
            placeholder="अजय राज"
            value={form.firstNameHi}
            onChange={(e)=>setForm({...form, firstNameHi: e.target.value})}
          />
        </div>

        <TextInput
          label="Email"
          hint="ईमेल"
          type="email"
          placeholder="ajayraj@gmail.com"
          value={form.email}
          onChange={(e)=>setForm({...form, email: e.target.value})}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Password"
            hint="पासवर्ड"
            type="password"
            value={form.password}
            onChange={(e)=>setForm({...form, password: e.target.value})}
          />
          <TextInput
            label="Confirm Password"
            hint="पासवर्ड की पुष्टि कीजिये"
            type="password"
            value={form.confirm}
            onChange={(e)=>setForm({...form, confirm: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end">
          <TextInput
            label="Phone Number"
            hint="फ़ोन नंबर"
            placeholder="+91 9999999999"
            value={form.phone}
            onChange={(e)=>setForm({...form, phone: e.target.value})}
          />
          <button type="button" className="px-4 py-2 border rounded hover:bg-gray-50">
            Resend
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-3 md:items-center">
          <span className="text-sm text-gray-700">OTP/ओटीपी</span>
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <input
                key={i}
                inputMode="numeric"
                maxLength={1}
                className="w-12 h-12 text-center border rounded outline-none focus:ring-2 focus:ring-[#96469C]"
                onChange={(e)=>{
                  const v = e.target.value.replace(/\D/g,"").slice(-1);
                  const str = (form.otp || "").padEnd(4," ");
                  const arr = str.split("");
                  arr[i] = v;
                  const next = arr.join("").replace(/\s/g,"");
                  setForm({...form, otp: next});
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">Login</Link>
          <button className="px-6 py-3 bg-[#96469C] text-white rounded shadow hover:bg-[#7c3d82]">
            NEXT
          </button>
        </div>
      </form>
    </LayoutLeftArtwork>
  );
}
