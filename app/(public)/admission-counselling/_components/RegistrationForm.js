"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    country: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSe0z7F5V7rWzC2FpEOPpWGFPeTpyzB404ORDQyy8zVK0hrsAw/formResponse";

    const body = new FormData();
    body.append("entry.418551640", formData.name);
    body.append("entry.1951004674", formData.phone);
    body.append("entry.1361057707", formData.address);
    body.append("entry.1169022398", formData.country);
    body.append("entry.1758061114", formData.course);
    try {
      await fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body });
      toast.success("Registration Successful!");
      window.location.href = "/thank-you";
      setFormData({
        name: "",
        phone: "",
        address: "",
        course: "",
        country: "",
      });
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white rounded-4xl shadow-2xl overflow-hidden border border-gray-100 z-10">
      {/* Premium Header */}
      <div className="bg-blue-950 p-6 text-center border-b-4 border-red-600">
        <h2 className="text-2xl font-black text-white tracking-tight">
          Register Now
        </h2>
        <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mt-1">
          Quick 30-Second Form
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all text-sm bg-gray-50 hover:bg-white"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all text-sm bg-gray-50 hover:bg-white"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
            Pref. Course <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="BA, BCA, MCA"
            className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all text-sm bg-gray-50 hover:bg-white"
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            value={formData.course}
          />
        </div>

        {/* Location Grid (City & Country in one row for better look) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="City, State"
              className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all text-sm bg-gray-50 hover:bg-white"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              value={formData.address}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
              Pref. Country <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="e.g. Russia"
              className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all text-sm bg-gray-50 hover:bg-white"
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              value={formData.country}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 disabled:bg-gray-400 disabled:shadow-none disabled:transform-none text-base tracking-wide flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                SUBMITTING...
              </>
            ) : (
              "SUBMIT DETAILS"
            )}
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 font-medium pt-2">
          Your information is 100% secure.
        </p>
      </form>
      <ToastContainer position="bottom-center" />
    </div>
  );
}
