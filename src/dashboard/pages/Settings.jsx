import React, { useEffect, useState } from "react";
import { TextInput, SelectInput } from "../components/Inputs"; // from earlier shared components
import avatarPlaceholder from "../../assets/avatar.png";

const BLOOD_EN = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];
const BLOOD_HI = ["ए+","ए-","बी+","बी-","एबी+","एबी-","ओ+","ओ-"];
const OCCUPATIONS = ["Private Employee","Government Employee","Business","Student","Other"];
const DESIGNATIONS = ["Sales Head","Manager","Director","Engineer","Other"];

export default function Settings() {
  // Imagine this comes from your API:
  const [form, setForm] = useState({
    // Personal
    firstName: "",
    firstNameHi: "",
    email: "",
    phone: "",

    // Photo
    photoFile: null,
    photoPreview: "",

    // Additional
    bloodGroupEn: "",
    bloodGroupHi: "",
    occupation: "",
    company: "",
    designation: "",

    // Address
    currentEn: "",
    currentHi: "",
    permanentEn: "",
    permanentHi: "",
  });

  // Change password (separate payload)
  const [pwd, setPwd] = useState({
    current: "",
    next: "",
    confirm: ""
  });

  // Prefill from session or API (stubbed)
  useEffect(() => {
    // If you saved interim signup in sessionStorage earlier:
    const s1 = JSON.parse(sessionStorage.getItem("signup.step1") || "{}");
    const s2 = JSON.parse(sessionStorage.getItem("signup.step2") || "{}");
    const profile = {
      firstName: s1.firstName || "Ajay Raj",
      firstNameHi: s1.firstNameHi || "अजय राज",
      email: s1.email || "ajay123@gmail.com",
      phone: s1.phone || "+91-9999999999",
      bloodGroupEn: s2.bloodGroupEn || "B+",
      bloodGroupHi: s2.bloodGroupHi || "बी+",
      occupation: s2.occupation || "Private Employee",
      company: s2.company || "Labsandcode",
      designation: s2.designation || "Sales Head",
      currentEn: "D-45, 2nd Floor, Ardee City, Sector 52, Gurgaon, Haryana 122003",
      currentHi: "डी-45, दूसरी मंज़िल, अर्डी सिटी, सेक्टर 52, गुरुग्राम, हरियाणा 122003",
      permanentEn: "Flat No. 203, Shree Ganesham Residency, Budhsinghpura, Sanganer, Jaipur - 302011",
      permanentHi: "फ्लैट नं. 203, श्री गणेशम् रेजिडेंसी, बुढ़सिंहपुरा, सांगानेर, जयपुर - 302011",
      photoPreview: "",
    };
    setForm((f) => ({ ...f, ...profile }));
  }, []);

  function update(key, val) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  function onSelectPhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    update("photoFile", file);
    const url = URL.createObjectURL(file);
    update("photoPreview", url);
  }

  function onSaveProfile(e) {
    e.preventDefault();
    // Build payload for profile update (excluding passwords)
    const payload = { ...form };
    delete payload.photoPreview;
    // TODO: call your API: PATCH /me  (use FormData if photoFile exists)
    console.log("SAVE PROFILE", payload);
    alert("Profile saved (stub). Wire this to your API.");
  }

  function onChangePassword(e) {
    e.preventDefault();
    if (!pwd.current || !pwd.next) return alert("Please fill all password fields.");
    if (pwd.next !== pwd.confirm) return alert("New password and confirm do not match.");
    // TODO: call your API: POST /me/change-password
    console.log("CHANGE PASSWORD", pwd);
    alert("Password change submitted (stub). Wire this to your API.");
    setPwd({ current: "", next: "", confirm: "" });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-blue-900">Profile Settings</h2>

      {/* PERSONAL + PHOTO */}
      <form onSubmit={onSaveProfile} className="grid gap-6 lg:grid-cols-2">
        {/* Personal */}
        <section className="rounded-xl border bg-white p-5 space-y-5">
          <h3 className="text-base font-semibold text-gray-800">Personal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Name"
              hint="नाम"
              placeholder="Ajay Raj"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
            />
            <TextInput
              label="Name (Hindi)"
              hint="नाम"
              placeholder="अजय राज"
              value={form.firstNameHi}
              onChange={(e) => update("firstNameHi", e.target.value)}
            />
          </div>

          <TextInput
            label="Email"
            hint="ईमेल"
            type="email"
            placeholder="ajay123@gmail.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          <TextInput
            label="Phone Number"
            hint="फ़ोन नंबर"
            placeholder="+91-9999999999"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </section>

        {/* Photo */}
        <section className="rounded-xl border bg-white p-5 space-y-4">
          <h3 className="text-base font-semibold text-gray-800">Profile Photo</h3>
          <div className="flex items-center gap-4">
            <img
              src={form.photoPreview || avatarPlaceholder}
              alt="Profile"
              className="h-24 w-24 rounded-lg object-cover border"
            />
            <label className="cursor-pointer rounded-md border px-3 py-2 hover:bg-slate-50">
              Upload New
              <input type="file" accept="image/*" className="hidden" onChange={onSelectPhoto} />
            </label>
          </div>
          {form.photoFile && (
            <p className="text-xs text-gray-500">
              Selected: {form.photoFile.name} ({Math.round(form.photoFile.size / 1024)} KB)
            </p>
          )}
        </section>
      </form>

      {/* ADDITIONAL */}
      <section className="rounded-xl border bg-white p-5 space-y-5">
        <h3 className="text-base font-semibold text-gray-800">Additional Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput
            label="Blood Group"
            hint="खून समूह"
            value={form.bloodGroupEn}
            onChange={(e) => update("bloodGroupEn", e.target.value)}
          >
            {BLOOD_EN.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </SelectInput>

          <SelectInput
            label="Blood Group (Hindi)"
            hint="खून समूह"
            value={form.bloodGroupHi}
            onChange={(e) => update("bloodGroupHi", e.target.value)}
          >
            {BLOOD_HI.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </SelectInput>
        </div>

        <SelectInput
          label="Occupation Type"
          hint="कृपया व्यवसाय का प्रकार चुनें"
          value={form.occupation}
          onChange={(e) => update("occupation", e.target.value)}
        >
          {OCCUPATIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </SelectInput>

        <TextInput
          label="Company Name"
          hint="कृपया अपनी कंपनी का नाम दर्ज करें"
          placeholder="Labsandcode pvt. ltd."
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />

        <SelectInput
          label="Designation"
          hint="पदनाम"
          value={form.designation}
          onChange={(e) => update("designation", e.target.value)}
        >
          {DESIGNATIONS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </SelectInput>
      </section>

      {/* ADDRESS */}
      <section className="rounded-xl border bg-white p-5 space-y-5">
        <h3 className="text-base font-semibold text-gray-800">Address</h3>

        <TextInput
          label="Current Address"
          hint="वर्तमान पता"
          placeholder="D-45, 2nd Floor..."
          value={form.currentEn}
          onChange={(e) => update("currentEn", e.target.value)}
        />
        <TextInput
          label="वर्तमान पता"
          hint="(Hindi)"
          placeholder="डी-45, दूसरी मंज़िल..."
          value={form.currentHi}
          onChange={(e) => update("currentHi", e.target.value)}
        />

        <TextInput
          label="Permanent Address"
          hint="स्थायी पता"
          placeholder="Flat No. 203, Shree Ganesham..."
          value={form.permanentEn}
          onChange={(e) => update("permanentEn", e.target.value)}
        />
        <TextInput
          label="स्थायी पता"
          hint="(Hindi)"
          placeholder="फ्लैट नं. 203, श्री गणेशम्..."
          value={form.permanentHi}
          onChange={(e) => update("permanentHi", e.target.value)}
        />

        <div className="pt-2">
          <button
            onClick={onSaveProfile}
            className="rounded-md bg-[#96469C] px-4 py-2 text-white hover:opacity-95"
          >
            Save Profile
          </button>
        </div>
      </section>

      {/* CHANGE PASSWORD */}
      <section className="rounded-xl border bg-white p-5 space-y-5">
        <h3 className="text-base font-semibold text-gray-800">Change Password</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PasswordField
            label="Current password"
            value={pwd.current}
            onChange={(v) => setPwd({ ...pwd, current: v })}
          />
          <PasswordField
            label="New password"
            value={pwd.next}
            onChange={(v) => setPwd({ ...pwd, next: v })}
          />
          <PasswordField
            label="Confirm new password"
            value={pwd.confirm}
            onChange={(v) => setPwd({ ...pwd, confirm: v })}
          />
        </div>
        <div className="pt-2">
          <button
            onClick={onChangePassword}
            className="rounded-md bg-[#96469C] px-4 py-2 text-white hover:opacity-95"
          >
            Update Password
          </button>
        </div>
      </section>

      {/* STICKY SAVE-ALL (optional) */}
      <div className="sticky bottom-4 z-10">
        <div className="mx-auto max-w-5xl rounded-xl border bg-white/90 backdrop-blur px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-gray-700">Review your changes and save.</span>
          <div className="flex gap-3">
            <button
              onClick={onSaveProfile}
              className="rounded-md border px-4 py-2 hover:bg-slate-50"
            >
              Save Profile
            </button>
            <button
              onClick={onChangePassword}
              className="rounded-md bg-[#96469C] px-4 py-2 text-white hover:opacity-95"
            >
              Save All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------ tiny local component for passwords with show/hide ------------ */
function PasswordField({ label, value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-gray-700">{label}</span>
      <div className="flex items-stretch rounded border focus-within:ring-2 focus-within:ring-[#96469C]">
        <input
          type={show ? "text" : "password"}
          className="w-full px-3 py-2 outline-none rounded-l"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="••••••••"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)} 
          className="rounded-r border-l px-3 text-sm hover:bg-slate-50"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </label>
  );
}
