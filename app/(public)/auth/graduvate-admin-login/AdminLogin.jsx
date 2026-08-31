"use client";
import React, { useState } from "react";
import API from "../../../../src/routes/axios.js";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Email and password required");
    }

    try {
      setLoading(true);
      // 1. Direct API instance call
      const loginPromise = API.post("/auth/admin-login", formData);

      toast.promise(loginPromise, {
        pending: "Logging in...",
        success: "Login successful 🎉",
        error: {
          render({ data }) {
            // Backend error message extract karega
            return (
              data?.response?.data?.message || "Invalid email or password ❌"
            );
          },
        },
      });

      const res = await loginPromise;
      const responseData = res?.data;

      // 2. Token extraction & localStorage save (matching interceptor)
      const token = responseData?.token || responseData?.data?.token;

      if (token) {
        localStorage.setItem("token", token);
        // Agar aapki custom key "graduvateAdminToken" bhi required hai toh dono save kar sakte hain
        localStorage.setItem("graduvateAdminToken", token);

        if (responseData?.user || responseData?.admin) {
          localStorage.setItem(
            "user",
            JSON.stringify(responseData.user || responseData.admin),
          );
        }
      }

      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 800);
    } catch (err) {
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="admin@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white py-2.5 rounded-lg font-semibold transition duration-200"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
