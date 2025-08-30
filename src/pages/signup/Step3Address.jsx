import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutLeftArtwork from "../../components/LayoutLeftArtwork";
import ProgressTabs from "../../components/ProgressTabs";
import { TextInput } from "../../dashboard/components/Inputs";
import toast from "react-hot-toast";

export default function Step3Address() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    currentEn: "",
    currentHi: "",
    permanentEn: "",
    permanentHi: "",
  });
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  async function submit(e) {
    e.preventDefault();

    const step1 = JSON.parse(sessionStorage.getItem("signup.step1") || "{}");
    const step2 = JSON.parse(sessionStorage.getItem("signup.step2") || "{}");
    const payload = { ...step1, ...step2, ...form };

    setLoading(true);
    try {
      const res = await fetch(
        backendUrl + "/api/auth/profile/68adc8ab5a3ceb4511fb3cbd",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Signup successful!");
        // Clear session storage
        sessionStorage.removeItem("signup.step1");
        sessionStorage.removeItem("signup.step2");
        nav("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <LayoutLeftArtwork showProgress={<ProgressTabs step={3} />}>
      <h2 className="text-3xl font-bold text-blue-900 mb-1">
        Create New Profile
      </h2>
      <p className="text-gray-600 mb-6">Address Info</p>

      <form onSubmit={submit} className="flex flex-col gap-4">
        <TextInput
          label="Current Address"
          hint="वर्तमान पता"
          placeholder="D-45, 2nd Floor..."
          value={form.currentEn}
          onChange={(e) => setForm({ ...form, currentEn: e.target.value })}
        />

        <TextInput
          label="वर्तमान पता"
          hint="(Hindi)"
          placeholder="डी-45, दूसरी मंज़िल..."
          value={form.currentHi}
          onChange={(e) => setForm({ ...form, currentHi: e.target.value })}
        />

        <TextInput
          label="Permanent Address"
          hint="स्थायी पता"
          placeholder="Flat No. 203, Shree Ganesham..."
          value={form.permanentEn}
          onChange={(e) => setForm({ ...form, permanentEn: e.target.value })}
        />

        <TextInput
          label="स्थायी पता"
          hint="(Hindi)"
          placeholder="फ्लैट नं. 203, श्री गणेशम्..."
          value={form.permanentHi}
          onChange={(e) => setForm({ ...form, permanentHi: e.target.value })}
        />

        <div className="flex justify-between mt-4">
          <Link
            to="/signup/step-2"
            className="px-6 py-3 border rounded hover:bg-gray-50"
          >
            BACK
          </Link>
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 text-white rounded shadow ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#96469C] hover:bg-[#7c3d82]"
            }`}
          >
            {loading ? "Submitting..." : "SIGNUP"}
          </button>
        </div>
      </form>
    </LayoutLeftArtwork>
  );
}
