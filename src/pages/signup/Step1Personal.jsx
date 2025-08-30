import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutLeftArtwork from "../../components/LayoutLeftArtwork";
import ProgressTabs from "../../components/ProgressTabs";
import { TextInput } from "../../dashboard/components/Inputs";
import toast from "react-hot-toast";

export default function Step1Personal() {
  const inputRefs = useRef([]);
  const [form, setForm] = useState({
    firstName: "",
    firstNameHi: "",
    email: "",
    password: "",
    confirm: "",
    phone: "",
    otp: "",
  });
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const nav = useNavigate();

  // Validate required fields for enabling Send OTP
  const canSendOtp =
    form.firstName.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    form.confirm.trim() &&
    form.phone.trim().length >= 10;

  // OTP input handlers
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 4);
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
    setForm({ ...form, otp: pasteArray.join("") });
  };

  // Timer for Resend OTP
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Step1 next
  function next(e) {
    e.preventDefault();
    if (!otpVerified) return;
    sessionStorage.setItem("signup.step1", JSON.stringify(form));
    nav("/signup/step-2");
  }

  // Send/Resend OTP
  async function sendOtp() {
    if (!canSendOtp) return;
    setLoading(true);
    try {
      const res = await fetch(backendUrl + "/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: form.phone }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error(text);
        toast.error("Failed to send OTP");
        return;
      }
      const data = await res.json();
      toast.success(data.message || "OTP sent!");
      setOtpSent(true);
      setResendTimer(60);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // Verify OTP
  async function verifyOtp() {
    if (form.otp.length !== 4) {
      toast.error("Enter 4-digit OTP");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(backendUrl + "/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: form.phone, otp: form.otp }),
      });
      const data = await res.json();
      if (data.success) {
        setOtpVerified(true);
        toast.success(data.message);
      } else {
        setOtpVerified(false);
        toast.error(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <LayoutLeftArtwork showProgress={<ProgressTabs step={1} />}>
      <div className="max-w-md mx-auto w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          Create New Profile
        </h2>
        <p className="text-gray-600 mb-6">Personal Details</p>

        <form onSubmit={next} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Name"
              hint="नाम"
              placeholder="Ajay Raj"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            <TextInput
              label="Name (Hindi)"
              hint="नाम"
              placeholder="अजय राज"
              value={form.firstNameHi}
              onChange={(e) =>
                setForm({ ...form, firstNameHi: e.target.value })
              }
            />
          </div>

          <TextInput
            label="Email"
            hint="ईमेल"
            type="email"
            placeholder="ajayraj@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Password"
              hint="पासवर्ड"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <TextInput
              label="Confirm Password"
              hint="पासवर्ड की पुष्टि कीजिये"
              type="password"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
          </div>

          {/* OTP Section */}
          <div className="mt-2">
            <TextInput
              label="Phone Number"
              hint="फ़ोन नंबर"
              placeholder="+91 9999999999"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            {!otpSent ? (
              // Show only Send OTP before sending
              <button
                type="button"
                onClick={sendOtp}
                disabled={!canSendOtp || loading}
                className={`mt-2 w-full py-2 text-white rounded ${
                  canSendOtp
                    ? "bg-[#97479D] hover:bg-[#864289]"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            ) : (
              // Show OTP inputs and Resend OTP after sending
              <div className="flex items-center mt-2 gap-2">
                <div className="flex gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <input
                      key={i}
                      ref={(el) => (inputRefs.current[i] = el)}
                      inputMode="numeric"
                      maxLength={1}
                      onPaste={handlePaste}
                      onInput={(e) => handleInput(e, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      className="w-12 h-12 text-center border rounded outline-none focus:ring-2 focus:ring-[#96469C]"
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(-1);
                        const str = (form.otp || "").padEnd(4, " ");
                        const arr = str.split("");
                        arr[i] = v;
                        const nextOtp = arr.join("").replace(/\s/g, "");
                        setForm({ ...form, otp: nextOtp });
                      }}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={verifyOtp}
                    disabled={form.otp.length !== 4 || loading}
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </div>

                {/* Only show Resend OTP button, Send OTP is hidden */}
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={resendTimer > 0}
                  className={`ml-auto px-4 py-2 border rounded hover:bg-gray-50 ${
                    resendTimer > 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={`mt-4 w-full py-3 text-white rounded shadow ${
              otpVerified
                ? "bg-[#96469C] hover:bg-[#7c3d82]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!otpVerified}
          >
            NEXT
          </button>

          <p className="text-center text-sm mt-2 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </LayoutLeftArtwork>
  );
}
