import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TextInput, SelectInput } from "../components/Inputs";
import avatarPlaceholder from "../../assets/avatar.png";
import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";

const BLOOD_EN = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const BLOOD_HI = ["ए+", "ए-", "बी+", "बी-", "एबी+", "एबी-", "ओ+", "ओ-"];
const OCCUPATIONS = [
  "Private Employee",
  "Government Employee",
  "Business",
  "Student",
  "Other",
];
const DESIGNATIONS = ["Sales Head", "Manager", "Director", "Engineer", "Other"];

export default function Settings() {
  const { backendUrl, user } = useContext(AppContext);
  const [form, setForm] = useState({
    firstName: "",
    firstNameHi: "",
    email: "",
    phone: "",
    photoFile: null,
    photoPreview: "",
    bloodGroupEn: "",
    bloodGroupHi: "",
    occupation: "",
    company: "",
    designation: "",
    currentEn: "",
    currentHi: "",
    permanentEn: "",
    permanentHi: "",
  });

  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });

  useEffect(() => {
    const s1 = JSON.parse(sessionStorage.getItem("signup.step1") || "{}");
    const s2 = JSON.parse(sessionStorage.getItem("signup.step2") || "{}");
    const profile = {
      firstName: s1.firstName || user?.nameEn,
      firstNameHi: s1.firstNameHi || user?.nameHi,
      email: s1.email || user?.email,
      phone: s1.phone || user?.phone,
      bloodGroupEn: s2.bloodGroupEn || user?.bloodGroupEn,
      bloodGroupHi: s2.bloodGroupHi || user?.bloodGroupHi,
      occupation: s2.occupation || user?.occupationTypeEn,
      company: s2.company || user?.occupationCompanyEn,
      designation: s2.designation || user?.occupationDesignationEn,
      currentEn: s2.currentEn || user?.addressCurrentEn,
      currentHi: s2.currentHi || user?.addressCurrentHi,
      permanentEn: s2.permanentEn || user?.addressPermanentEn,
      permanentHi: s2.permanentHi || user?.addressPermanentHi,
      photoPreview: user?.photoUrl ? `${backendUrl}${user.photoUrl}` : "",
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
    update("photoPreview", URL.createObjectURL(file));
  }

  async function onSaveProfile(e) {
    e.preventDefault();
    try {
      let photoUrl = form.photoPreview;

      if (form.photoFile) {
        const fd = new FormData();
        fd.append("image", form.photoFile);
        const uploadRes = await axios.post(`${backendUrl}/upload-image`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        photoUrl = uploadRes.data.url || uploadRes.data.imageUrl;
      }

      //  prepare payload
      const payload = {
        nameEn: form.firstName,
        nameHi: form.firstNameHi,
        email: form.email,
        phone: form.phone,
        bloodGroupEn: form.bloodGroupEn,
        bloodGroupHi: form.bloodGroupHi,
        occupationCompanyEn: form.company,
        occupationCompanyHi: form.company,
        occupationDesignationEn: form.designation,
        occupationDesignationHi: form.designation,
        addressCurrentEn: form.currentEn,
        addressCurrentHi: form.currentHi,
        addressPermanentEn: form.permanentEn,
        addressPermanentHi: form.permanentHi,
        photoUrl: photoUrl || "",
      };

      //  API call

      await axios.patch(
        `${backendUrl}/api/auth/profile/${user?.userId}`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Profile update error:", err.response?.data || err);
      toast.error("Failed to update profile");
    }
  }

  async function onChangePassword(e) {
    e.preventDefault();
    if (!pwd.current || !pwd.next)
      return toast.error("Please fill all password fields.");
    if (pwd.next !== pwd.confirm)
      return toast.error("New password and confirm do not match.");

    try {
      await axios.patch(`${backendUrl}/api/auth/profile/${user?.userId}`, {
        currentPassword: pwd.current,
        newPassword: pwd.next,
      });
      toast.success("Password updated successfully!");
      setPwd({ current: "", next: "", confirm: "" });
    } catch (err) {
      console.error("Password update error:", err.response?.data || err);
      toast.error("Failed to update password");
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-blue-900">Profile Settings</h2>

      {/* PERSONAL + PHOTO */}
      <form onSubmit={onSaveProfile} className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border bg-white p-5 space-y-5">
          <h3 className="text-base font-semibold text-gray-800">Personal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Name"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
            />
            <TextInput
              label="Name (Hindi)"
              value={form.firstNameHi}
              onChange={(e) => update("firstNameHi", e.target.value)}
            />
          </div>
          <TextInput
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <TextInput
            label="Phone Number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </section>

        <section className="rounded-xl border bg-white p-5 space-y-4">
          <h3 className="text-base font-semibold text-gray-800">
            Profile Photo
          </h3>

          <div className="flex flex-col items-center gap-3">
            {/* Round profile image */}
            <img
              src={form.photoPreview || avatarPlaceholder}
              alt="Profile"
              className="h-32 w-32 rounded-full object-cover border shadow"
            />

            {/* Upload button */}
            <label className="cursor-pointer rounded-md bg-[#96469C] px-4 py-2 text-white text-sm font-medium hover:opacity-90 transition">
              Upload New
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onSelectPhoto}
              />
            </label>

            {/* Selected file info */}
            {form.photoFile && (
              <p className="text-xs text-gray-500">
                Selected: {form.photoFile.name} (
                {Math.round(form.photoFile.size / 1024)} KB)
              </p>
            )}
          </div>
        </section>
      </form>

      {/* ADDITIONAL */}
      <section className="rounded-xl border bg-white p-5 space-y-5">
        <h3 className="text-base font-semibold text-gray-800">
          Additional Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput
            label="Blood Group"
            hint="खून समूह"
            value={form.bloodGroupEn}
            onChange={(e) => update("bloodGroupEn", e.target.value)}
          >
            {BLOOD_EN.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </SelectInput>

          <SelectInput
            label="Blood Group (Hindi)"
            hint="खून समूह"
            value={form.bloodGroupHi}
            onChange={(e) => update("bloodGroupHi", e.target.value)}
          >
            {BLOOD_HI.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
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
            <option key={o} value={o}>
              {o}
            </option>
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
            <option key={d} value={d}>
              {d}
            </option>
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

      <section className="rounded-xl border bg-white p-5 space-y-5">
        <h3 className="text-base font-semibold text-gray-800">
          Change Password
        </h3>
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
    </div>
  );
}

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
