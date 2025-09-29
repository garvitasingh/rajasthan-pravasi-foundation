// src/components/Footer.jsx
import React from "react";
import qrCode from "../assets/qr_code.png"; // place QR in src/assets

export default function Footer() {
  return ( 
    <footer className="bg-[#DB580F] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* QR Code Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={qrCode} alt="QR Code" className="w-40 h-40 object-contain" />
          <p className="mt-4 font-semibold underline underline-offset-4">
            Scan to Download App
          </p>
        </div>

        {/* Help & Support */}
        {/* <div>
          <h4 className="font-bold underline underline-offset-4 mb-4">
            Help & Support
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li>Contact number</li>
            <li>Email ID</li>
            <li>Our partner programs</li>
            <li>Expert referral program</li> 
          </ul>
        </div> */}

        {/* Pricing */}
        <div>
          <h4 className="font-bold underline underline-offset-4 mb-4">
            Pricing
          </h4>
          <ul className="space-y-2 text-gray-200">
            {/* <li>Free plan</li>  */}
            <li>Membership</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold underline underline-offset-4 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li>About us</li>
            <li>Our mission</li>
            <li>Gallery</li>
            <li>Media & Blog</li>
            <li>Events</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
