import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import bgImage from "../assets/hawa-mahal.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import mandalaBg from "../assets/mandala.png";
import GradientButton from "../components/GradientButton";
import { sendContactMessage } from "../api/contactApi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: "", message: "" });
    setLoading(true);
    try {
      const res = await sendContactMessage(form);
      if (res.success) {
        setFeedback({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setFeedback({ type: "error", message: "Failed to send message." });
      }
    } catch (err) {
      setFeedback({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout bgImage={bgImage}>
      <div className="flex flex-col justify-center items-center py-10 px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-center sm:text-2xl md:text-4xl font-bold text-[#EF5C10] mb-10">
          Contact Us
        </h2>

        {/* Card Container */}
        <div className="bg-[#F7E9DE] relative w-full max-w-5xl rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Mandala background */}
          {/* <img
            src={mandalaBg}
            alt="Mandala Background"
            className="absolute pointer-events-none select-none"
            style={{
              width: "1000px",
              height: "1000px",
              top: "-250px",
              left: "-500px",
              opacity: 0.04,
              zIndex: 0,
            }}
          /> */}

          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-orange-500 font-semibold text-lg uppercase tracking-wide">
                  Get in Touch
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Have questions, feedback, or collaboration ideas? We’d love to
                  hear from you. Reach out through any of the channels below.
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-bold text-xl">
                  Rajasthan Pravasi
                </h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-3 text-gray-700">
                    <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
                    <span>
                      Plot No. 23, Saraswati Colony Near Moti Doongri Temple,
                      Tonk Road, Jaipur - 302015
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaPhoneAlt className="text-orange-500 text-xl" />
                    +91- 98234 56789
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaEnvelope className="text-orange-500 text-xl" />
                    rajasthan.pravasi123@example.com
                  </li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300 shadow-md"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300 shadow-md"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300 shadow-md"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300 shadow-md"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name / नाम
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email / ईमेल
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number / फ़ोन नंबर
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message / संदेश
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="अपना संदेश लिखें"
                  rows="4"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                  required
                ></textarea>
              </div>

              {/* Feedback Message */}
              {feedback.message && (
                <div
                  className={`text-center py-2 rounded ${
                    feedback.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                width="100%"
                height="55px"
                borderRadius="8px 30px 8px 30px"
                className={`w-[400px] h-[50px] bg-[#EF5A0F] rounded-[40px] text-white flex items-center justify-center ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <h4
                    style={{
                      lineHeight: 1,
                      fontWeight: 600,
                      fontSize: "20px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Next
                  </h4>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
