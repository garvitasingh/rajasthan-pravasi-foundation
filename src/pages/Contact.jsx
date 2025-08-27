import PageLayout from "../components/PageLayout";
import bgImage from "../assets/hawa-mahal.png";
 
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import mandalaBg from "../assets/mandala.png"; 
import GradientButton from "../components/GradientButton";

export default function Contact() {
  return (  
        <PageLayout bgImage={bgImage} >

    <div className="justify-center items-center py-3 px-2">
        <h2 className="text-center text-3xl font-bold text-orange-600 mb-8">
          Contact Us  
        </h2>       
         <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
            
                {/* Mandala background positioned inside container */}
                <img
                  src={mandalaBg}
                  alt="Mandala Background"
                  className="absolute pointer-events-none select-none"
                  style={{
                    width: "1000px",
                    height: "1000px",
                    top: "-215px",
                    left: "-500px",
                    opacity: 0.05,
                    zIndex: 0
                  }} 
                />
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white grid md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-orange-500 font-bold text-lg">GET IN TOUCH</h2>
              <p className="mt-2 text-gray-600">
                Color theory influences user emotions and brand perception.
                Data visualization helps users understand complex information.
                Design thinking fosters innovation through
              </p>
            </div>

            <div>
              <h3 className="text-orange-500 font-bold text-lg">RAJASTHAN PRAVASI</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <FaMapMarkerAlt className="text-orange-500 text-xl" />
                  Plot No. 23, Saraswati Colony Near Moti Doongri Temple,
                  Tonk Road, Jaipur - 302015
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
            <div className="flex gap-4 text-white text-lg">
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"><FaFacebookF /></a>
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"><FaXTwitter /></a>
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"><FaInstagram /></a>
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"><FaYoutube /></a>
            </div>
          </div>
 
          {/* Right: Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name/नाम</label>
              <input type="text" placeholder="Username" className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none" />
            </div>

            <div> 
              <label className="block text-sm font-medium text-gray-700">Email/ईमेल</label>
              <input type="email" placeholder="1234 5678 9012" className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number/फ़ोन नंबर</label>
              <input type="tel" placeholder="Number" className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message/संदेश</label>
              <textarea placeholder="संदेश" rows="4" className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"></textarea>
            </div>

          <GradientButton
  width="100%" // full width of parent
  height="50px"
  borderRadius="2px 30px 2px 30px"
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
    NEXT
  </h4>
</GradientButton>

          </form>
        </div> 
      </div>
    </div>
    </div>
        </PageLayout>
  );
} 