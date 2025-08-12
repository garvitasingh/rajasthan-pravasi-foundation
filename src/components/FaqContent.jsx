import React, { useState } from "react";
import mandalaBg from "../assets/mandala.png"; 
import GradientButton from "../components/GradientButton"; // reuse your gradient button

const faqs = [
  { question: "What Is Your Return Policy?", answer: "We offer a 7-day return policy for unused items in original packaging." },
  { question: "Do You Provide International Shipping?", answer: "Yes, we ship worldwide. Charges depend on the destination." },
  { question: "How Can I Contact Customer Support?", answer: "Email us at support@example.com or call +91-9876543210." },
  { question: "Do You Offer Custom Products?", answer: "Yes, we can customize certain products. Contact us for details." },
  { question: "How Long Does Delivery Take?", answer: "Typically 5-7 business days in India, 10-15 internationally." }
];

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }; 

  return ( 
    <div className="justify-center items-center py-3 px-2">
        <h2 className="text-center text-3xl font-bold text-orange-600 mb-8">
          FAQ 
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
            left: "500px",
            opacity: 0.05,
            zIndex: 0
          }}
        />

        {/* Content above background */}
        <div className="relative z-10">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-300 py-4 flex items-center justify-between"
            >
              <button
                className="flex-1 text-left font-medium text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              <button 
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-center w-7 h-7 border border-orange-500 rounded-full text-orange-500 font-bold text-lg"
              >
                {openIndex === index ? "−" : "+"}
              </button>
            </div>
          ))}
 
          {/* Gradient Button at bottom */}
          <div className="mt-10 flex justify-center">
            <GradientButton
              className="px-6 py-3 rounded-[20px]"
              style={{
                height: "60px",
                width: "172px",
            borderRadius:"2px 30px 2px 30px",
                fontWeight: "600"
              }}
            >
              Need Help?
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
} 
