"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { userRegister, userOtpVerify } from "../../../../src/routes/userApi.js";

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  // ================= INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= REGISTER → SEND OTP =================
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await toast.promise(userRegister(formData), {
        pending: "Sending OTP...",
        success: "OTP sent successfully ✅",
        error: "Registration failed ❌",
      });

      setShowOtp(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ================= VERIFY OTP =================
  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp || otp.length < 4) {
      return toast.error("Enter valid OTP");
    }

    setLoading(true);

    try {
      const res = await toast.promise(
        userOtpVerify({
          email: formData.email,
          otp: otp,
        }),
        {
          pending: "Verifying OTP...",
          success: "Account created successfully 🎉",
          error: "Invalid OTP ❌",
        },
      );
      toast.success("You can login now");
      router.push("/auth/student-login");
      // window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* LEFT IMAGE */}
        <div className="hidden md:flex flex-1 items-center justify-center p-12 bg-blue-50">
          <Image
            src="https://res.cloudinary.com/studymbbs/image/upload/q_auto/f_auto/v1775633818/studymbbs-register_u0r5h5.png"
            alt="Register"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 flex items-center justify-center p-10 bg-white relative">
          {/* ================= REGISTER FORM ================= */}
          {!showOtp && (
            <form
              onSubmit={handleRegister}
              className="w-full max-w-md space-y-5"
            >
              <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
                Student Registration
              </h1>

              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-900 text-white rounded-xl cursor-pointer"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  href="/auth/student-login"
                  className="text-blue-900 font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
          )}

          {/* ================= OTP SCREEN ================= */}
          {showOtp && (
            <div className="absolute inset-0 bg-white flex items-center justify-center p-8 z-10">
              <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border p-8">
                <h3 className="text-2xl font-bold text-center">Verify Email</h3>

                <p className="text-center text-gray-500 mt-2 text-sm">
                  OTP sent to
                </p>

                <p className="text-center font-semibold text-blue-900">
                  {formData.email}
                </p>

                <form onSubmit={handleVerify} className="mt-8 space-y-6">
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                    placeholder="••••••"
                    className="w-full text-center text-3xl tracking-[0.5em] px-4 py-4 border rounded-xl"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-blue-900 text-white rounded-xl cursor-pointer"
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowOtp(false)}
                    className="w-full text-sm text-gray-500 hover:underline"
                  >
                    ← Back
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
