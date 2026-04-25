"use client";

import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import ForgotPasswordModal from './ForgotPasswordModal'
import { userLogin } from "../../../../routes/userApi.js";

export default function StudentLogin() {

  const [form, setForm] = useState({
    loginId: "",
    password: "",
  });
const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
console.log(modal);

  // ✅ REAL LOGIN FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.loginId || !form.password) {
      return toast.error("All fields required");
    }

    setLoading(true);

    try {
      const response = await toast.promise(userLogin(form), {
        pending: "Logging in...",
        success: "Login successful 🎉",
        error: "Invalid email or password ❌",
      });

      // ✅ SAVE TOKEN
      localStorage.setItem("loginToken", response.token);

      // ✅ SAVE USER DATA
      localStorage.setItem("user", JSON.stringify(response.user));
      toast.success("Welcome " + response.user.fullName);
      window.location.href = "/student";
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* LEFT IMAGE */}
        <div className="hidden md:flex flex-1 items-center justify-center p-12 bg-blue-50">
          <Image
            src="/images/aboutImage.png"
            alt="Student Login"
            width={520}
            height={520}
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 flex items-center justify-center p-10 bg-white">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-900">
              Student Login
            </h1>

            <div className="mb-5">
              <label className="block text-sm mb-1">Email or Phone</label>
              <input
                type="text"
                name="loginId"
                value={form.loginId}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 cursor-pointer disabled:opacity-60"
            >
              {loading ? "Please wait..." : "Login"}
            </button>

            {/* <div className="flex items-center my-6">
              <div className="grow h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="grow h-px bg-gray-300"></div>
            </div> */}

            {/* <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-50"
            >
              <FaGoogle className="text-red-600" />
              Login with Google
            </button> */}

            <p className="text-center mt-8 text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/auth/student-register"
                className="text-blue-900 font-semibold"
              >
                Create Account
              </Link>
            </p>

            <p className="text-center mt-2 text-sm text-gray-600 cursor-pointer">
              <span
                onClick={()=>setModal(true)}
                className="hover:text-blue-900 underline"
              >
                Forgot Password
              </span>
            </p>

          </form>
        </div>
      </div>
      <ForgotPasswordModal isOpen={modal} setIsOpen={setModal} />
    </div>
  );
}
