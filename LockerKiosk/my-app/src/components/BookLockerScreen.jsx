import React, { useState } from "react";

export default function BookLockerScreen({ lockerId, onBack, onOtpValidated }) {
//   const [step, setStep] = useState("form"); // or "otp"
  const [form, setForm] = useState({
    phone: "",
    name: "",
    age: "",
    address: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpValidated, setOtpValidated] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSendOtp() {
    // TODO: integrate with real OTP service
    setOtpSent(true);
  }

  function handleValidateOtp() {
    // TODO: validate OTP (simulate with any input for now)
    if (form.otp.length > 0) {
      setOtpValidated(true);
      onOtpValidated(form); // Pass data up
    } else {
      alert("Enter OTP!");
    }
  }

  if (otpValidated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#141726] via-[#1a1831] to-[#19132c]">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-10 shadow-xl">
          <h2 className="text-2xl text-white mb-4">Locker Booked!</h2>
          <p className="text-white/70">Starting timer...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#141726] via-[#1a1831] to-[#19132c]">
      <div className="bg-white/10 backdrop-blur rounded-2xl p-10 shadow-xl w-full max-w-md">
        <button
          onClick={onBack}
          className="mb-6 text-white opacity-70 hover:opacity-100"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">
          Book Locker #{lockerId}
        </h2>
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault();
            if (!otpSent) handleSendOtp();
          }}
        >
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded p-2 bg-black/40 text-white"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full rounded p-2 bg-black/40 text-white"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            className="w-full rounded p-2 bg-black/40 text-white"
            value={form.age}
            onChange={handleChange}
            required
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            className="w-full rounded p-2 bg-black/40 text-white"
            value={form.address}
            onChange={handleChange}
            required
          />
          {otpSent && (
            <input
              name="otp"
              type="text"
              placeholder="Enter OTP"
              className="w-full rounded p-2 bg-black/40 text-white"
              value={form.otp}
              onChange={handleChange}
              required
            />
          )}
          {!otpSent ? (
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-pink-500 to-violet-500 text-white text-lg font-bold mt-2"
            >
              Send OTP
            </button>
          ) : (
            <button
              type="button"
              className="w-full py-3 rounded bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-bold mt-2"
              onClick={handleValidateOtp}
            >
              Validate OTP & Book
            </button>
          )}
        </form>
      </div>
    </div>
  );
}