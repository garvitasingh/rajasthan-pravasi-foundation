import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutLeftArtwork from "../components/LayoutLeftArtwork";
import { TextInput } from "../components/Inputs";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    // TODO: call API
    nav("/dashboard");
  }

  return (
    <LayoutLeftArtwork>
      <h2 className="text-3xl font-bold text-blue-900 mb-1">Login</h2>
      <p className="text-gray-600 mb-6">Enter details to login</p>

      <form onSubmit={submit} className="flex flex-col gap-4">
        <TextInput
          label="Email"
          hint="ईमेल"
          type="email"
          placeholder="ajayraj@gmail.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <TextInput
          label="Password"
          hint="पासवर्ड"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <p className="text-sm mt-1">
          Create new account?{" "}
          <Link to="/signup/step-1" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>

        <button
          type="submit"
          className="mt-4 w-full py-3 bg-[#96469C] text-white rounded shadow hover:bg-[#7c3d82] transition"
        >
          LOGIN
        </button>
      </form>
    </LayoutLeftArtwork>
  );
}
