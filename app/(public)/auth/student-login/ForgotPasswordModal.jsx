"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import {
  forgotOtpPassword,
  otpVerifyAndChangePassword,
} from "../../../../routes/userApi.js";
import { toast } from "react-toastify";
const ForgotPasswordModal = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setStep(1);
    setFormData({
      email: "",
      otp: "",
      newPassword: "",
      confirmPassword: "",
    });
    setMessage("");
    setError("");
  };

  // STEP 1 => SEND OTP
  const handleSendOtp = async () => {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await forgotOtpPassword({ email: formData.email });

      setMessage(res?.message || "OTP sent successfully!");
      setStep(2);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2 => VERIFY OTP & CHANGE PASSWORD
  const handleResetPassword = async () => {
    setLoading(true);
    setMessage("");
    setError("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const res = await otpVerifyAndChangePassword({
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      });
      toast.success("password reset sucessfully");
      setMessage(res?.message || "Password reset successful!");
      setTimeout(() => closeModal(), 1500);
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid OTP or expired!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-blue-900">
              <h2 className="text-white font-bold text-lg">
                {step === 1 ? "Forgot Password" : "Reset Password"}
              </h2>

              <button
                onClick={closeModal}
                className="text-white text-xl hover:scale-110 transition"
              >
                <IoClose />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4">
                {step === 1
                  ? "Enter your email and we will send you an OTP."
                  : "Enter OTP and set a new password."}
              </p>

              {/* Messages */}
              {message && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm mb-4">
                  {message}
                </div>
              )}

              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm mb-4">
                  {error}
                </div>
              )}

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none"
                    />
                  </div>

                  <button
                    onClick={handleSendOtp}
                    disabled={loading || !formData.email}
                    className={`w-full ${formData.email && "cursor-pointer"} py-3 rounded-xl font-semibold text-white bg-blue-900 hover:bg-red-700 cursor-not-allowed transition disabled:opacity-50`}
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      OTP Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={(e) =>
                        setFormData({ ...formData, otp: e.target.value })
                      }
                      className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      value={formData.newPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          newPassword: e.target.value,
                        })
                      }
                      className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none"
                    />
                  </div>

                  <button
                    onClick={handleResetPassword}
                    disabled={
                      loading ||
                      !formData.newPassword ||
                      !formData.confirmPassword ||
                      !formData.otp
                    }
                    className="w-full cursor-pointer py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition disabled:opacity-50"
                  >
                    {loading ? "Updating..." : "Reset Password"}
                  </button>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
                  >
                    Back
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ForgotPasswordModal;
