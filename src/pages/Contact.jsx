import PageLayout from "../components/PageLayout";
import bgImage from "../assets/hawa-mahal.png";

import React from "react";
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

export default function Contact() {
  return (
    <PageLayout bgImage={bgImage}>
      <div className="flex flex-col justify-center items-center py-10 px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-orange-600 mb-10">
          Contact Us
        </h2>

        {/* Card Container */}
        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Mandala background */}
          <img
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
          />

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
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name / नाम
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email / ईमेल
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number / फ़ोन नंबर
                </label>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message / संदेश
                </label>
                <textarea
                  placeholder="अपना संदेश लिखें"
                  rows="4"
                  className="mt-2 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
                ></textarea>
              </div>

              <GradientButton
                width="100%"
                height="55px"
                borderRadius="8px 30px 8px 30px"
              >
                <h4
                  style={{
                    lineHeight: 1,
                    fontWeight: 600,
                    fontSize: "20px",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  Send Message
                </h4>
              </GradientButton>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
