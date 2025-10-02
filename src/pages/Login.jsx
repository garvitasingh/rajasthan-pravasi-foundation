import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mandala from "../assets/Frame 4.png";
import palace from "../assets/palace.png";
import logo from "../assets/Frame 4.png";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

export default function Login() {
  const { backendUrl, setUser, user } = useContext(AppContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(backendUrl + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      let data;
      try {
        data = await res.json();
      } catch (err) {
        toast.error("Unexpected server response. Please try again later.");
        return;
      }

      if (data.success) {
        console.log(data);
        setUser(data.data.user);

        toast.success(data.message || "Login successful!");

        nav("/dashboard");
      } else {
        nav("/dashboard");
        toast.error(data.message || "Invalid email or password");
      }
    } catch (error) {
      nav("/dashboard");
      console.error(error);
      toast.error("Network error! Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Right Side Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-black">Login</span>{" "}
              <span className="text-[#97479D]">User</span>
            </h1>
          </div>

          <form onSubmit={submit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="enter your email.."
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className={`w-full py-3 text-white rounded-md shadow transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#97479D] hover:bg-[#97479D]"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Signup */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Are you new?{" "}
            <Link
              to="/signup/step-1"
              className="text-green-600 hover:underline font-medium"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>

      {/* Left Artwork Side */}
      <div
        className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(147.22deg, rgba(235, 168, 50, 0.8) -1.46%, rgba(202, 102, 65, 0.8) 37.56%, rgba(215, 127, 59, 0.8) 67.32%, rgba(235, 168, 50, 0.8) 81.46%)",
        }}
      >
        {/* <img
          src={palace}
          alt="Hawa Mahal"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        /> */}

        <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-8">
          <div className="w-424 h-36 md:w-200 md:h-48 rounded-xl shadow-4xl overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
            <img
              src={mandala}
              alt="Mandala"
              className="w-full h-full object-cover scale-110"
            />
          </div>

          {/* Logo */}
          {/* <img
            src={logo}
            alt="Rajasthan Pravasi Foundation"
            className="w-32 md:w-40 mt-6 drop-shadow-lg"
          /> */}

          {/* <h2 className="mt-4 md:mt-6 text-xl md:text-2xl font-bold text-gray-800">
            Rajasthan Pravasi Foundation
          </h2>
          <p className="mt-2 text-gray-600 max-w-xs md:max-w-sm leading-relaxed">
            Empowering Rajasthanis worldwide with{" "}
            <span className="font-semibold text-green-600">culture</span>,{" "}
            <span className="font-semibold text-yellow-600">heritage</span> and{" "}
            <span className="font-semibold text-pink-600">community</span>.
          </p> */}
        </div>
      </div>
    </div>
  );
}
