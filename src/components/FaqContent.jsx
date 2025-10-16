import React, { useState, useEffect } from "react";
import mandalaBg from "../assets/mandala.png";
import GradientButton from "../components/GradientButton";
import { getFaqs } from "../api/faqApi";
import Loader from "../common/Loader";

export default function FaqContent() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const result = await getFaqs();
        if (result.success && Array.isArray(result.data)) {
          setFaqs(result.data);
        } else {
          setFaqs([]);
        }
      } catch (err) {
        setError("Failed to load FAQs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-center text-4xl font-extrabold text-[#EF5C10] mb-10">
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
          {error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : (
            faqs.map((faq, index) => (
              <div key={faq._id || index} className="py-5">
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
            ))
          )}
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
