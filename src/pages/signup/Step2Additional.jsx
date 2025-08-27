import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LayoutLeftArtwork from "../../components/LayoutLeftArtwork";
import ProgressTabs from "../../components/ProgressTabs";
import { SelectInput, TextInput } from "../../components/Inputs";
import userPreview from "../../assets/user-preview.png"; // optional placeholder

export default function Step2Additional() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    bloodGroupEn: "B+",
    bloodGroupHi: "बी+",
    occupation: "Private Employee",
    company: "",
    designation: "Sales Head",
    photoFile: null 
  });

  function next(e) {
    e.preventDefault();
    sessionStorage.setItem("signup.step2", JSON.stringify(form));
    nav("/signup/step-3");
  }

  return (
    <LayoutLeftArtwork showProgress={<ProgressTabs step={2} />}>
      <h2 className="text-3xl font-bold text-blue-900 mb-1">Create New Profile</h2>
      <p className="text-gray-600 mb-6">Additional Details</p>

      <form onSubmit={next} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput label="Blood Group" hint="खून समूह" value={form.bloodGroupEn}
            onChange={(e)=>setForm({...form, bloodGroupEn: e.target.value})}>
            {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(g=>(
              <option key={g} value={g}>{g}</option>
            ))}
          </SelectInput>

          <SelectInput label="Blood Group (Hindi)" hint="बी+" value={form.bloodGroupHi}
            onChange={(e)=>setForm({...form, bloodGroupHi: e.target.value})}>
            {["ए+","ए-","बी+","बी-","एबी+","एबी-","ओ+","ओ-"].map(g=>(
              <option key={g} value={g}>{g}</option>
            ))}
          </SelectInput>
        </div>

        {/* Photo */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Upload Photo/फोटो अपलोड करें</label>
          <label className="w-full flex items-center gap-3 border rounded px-3 py-2 cursor-pointer hover:bg-gray-50">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e)=>setForm({...form, photoFile: e.target.files?.[0] || null})}
            />
            <img
              src={form.photoFile ? URL.createObjectURL(form.photoFile) : userPreview}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-gray-600">Browse Photo</span>
          </label>
        </div>

        <SelectInput
          label="Occupation Type"
          hint="कृपया व्यवसाय का प्रकार चुनें"
          value={form.occupation}
          onChange={(e)=>setForm({...form, occupation: e.target.value})}
        >
          <option>Private Employee</option>
          <option>Government Employee</option>
          <option>Business</option>
          <option>Student</option>
          <option>Other</option>
        </SelectInput>

        <TextInput
          label="Company Name"
          hint="कृपया अपनी कंपनी का नाम दर्ज करें"
          placeholder="Labsandcodes pvt. ltd."
          value={form.company}
          onChange={(e)=>setForm({...form, company: e.target.value})}
        />

        <SelectInput
          label="Designation"
          hint="पदनाम"
          value={form.designation}
          onChange={(e)=>setForm({...form, designation: e.target.value})}
        >
          <option>Sales Head</option>
          <option>Manager</option>
          <option>Director</option>
          <option>Engineer</option>
          <option>Other</option>
        </SelectInput>

        <div className="flex justify-between mt-4">
          <Link to="/signup/step-1" className="px-6 py-3 border rounded hover:bg-gray-50">BACK</Link>
          <button className="px-6 py-3 bg-[#96469C] text-white rounded shadow hover:bg-[#7c3d82]">NEXT</button>
        </div>
      </form>
    </LayoutLeftArtwork>
  );
}
