import React, { useState } from "react";
import mandalaBg from "../assets/mandala.png";
import GradientButton from "../components/GradientButton";

const faqs = [
  {
    question: "What Is Your Return Policy?",
    answer:
      "We offer a 7-day return policy for unused items in original packaging.",
  },
  {
    question: "Do You Provide International Shipping?",
    answer: "Yes, we ship worldwide. Charges depend on the destination.",
  },
  {
    question: "How Can I Contact Customer Support?",
    answer: "Email us at support@example.com or call +91-9876543210.",
  },
  {
    question: "Do You Offer Custom Products?",
    answer: "Yes, we can customize certain products. Contact us for details.",
  },
  {
    question: "How Long Does Delivery Take?",
    answer: "Typically 5-7 business days in India, 10-15 internationally.",
  },
];

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-center text-4xl font-extrabold text-orange-600 mb-10">
        Frequently Asked Questions
      </h2>

      {/* Card */}
      <div className="bg-[#F7E9DE] relative w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
        {/* Mandala background */}
        {/* <img
          src={mandalaBg}
          alt="Mandala Background"
          className="absolute pointer-events-none select-none"
          style={{
            width: "1000px",
            height: "1000px",
            top: "-250px",
            left: "400px",
            opacity: 0.05,
            zIndex: 0,
          }}
        /> */}

        {/* FAQ Content */}
        <div className="relative z-10 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-semibold text-gray-800 text-lg hover:text-orange-600 transition-colors">
                  {faq.question}
                </span>
                <span className="flex items-center justify-center w-8 h-8 border border-orange-500 rounded-full text-orange-500 font-bold text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`mt-3 text-gray-600 text-base leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Button at bottom */}
        <div className="mt-12 flex justify-center">
          <button
            borderRadius="8px 30px 8px 30px"
            className="w-[175px] h-[50px] bg-[#EF5A0F] rounded-[40px] text-white"
          >
            <h4
              style={{
                lineHeight: 1,
                fontWeight: 600,
                fontSize: "18px",
                margin: 0,
                textAlign: "center",
              }}
            >
              Need Help?
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
}
