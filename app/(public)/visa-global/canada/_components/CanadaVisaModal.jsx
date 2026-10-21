"use client";

import { useState } from "react";

export default function CanadaVisaModal({
  isOpen,
  onClose,
  leadPurpose = "Canada Visa Global Enquiry",
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    visaType: "Study Permit",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Structured Message
    const whatsappMessage =
      `*New Canada Visa Global Lead*%0A` +
      `--------------------------------%0A` +
      `*Category:* ${encodeURIComponent(formData.visaType)}%0A` +
      `*Reference:* ${encodeURIComponent(leadPurpose)}%0A` +
      `*Full Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone Number:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email Address:* ${encodeURIComponent(formData.email)}%0A` +
      `*Location:* ${encodeURIComponent(formData.location)}%0A` +
      `--------------------------------`;

    const whatsappUrl = `https://wa.me/918608608668?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      visaType: "Study Permit",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#0B4FD8] text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Canada Visa Profile Review</h3>
            <p className="text-xs text-blue-100 mt-0.5">
              Intent: {leadPurpose}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition"
          >
            ✕
          </button>
        </div>

        {/* Lead Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
              Select Visa Category <span className="text-red-500">*</span>
            </label>
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B4FD8] focus:ring-2 focus:ring-blue-100 outline-none transition bg-white"
            >
              <option value="Study Permit">Study Permit (Student Visa)</option>
              <option value="Work Permit (LMIA/ICT)">
                Work Permit (LMIA / ICT)
              </option>
              <option value="Visitor / Tourist Visa">
                Visitor / Tourist Visa (TRV)
              </option>
              <option value="Parents Super Visa">
                Parents / Grandparents Super Visa
              </option>
              <option value="Visa Refusal Re-application">
                Previous Visa Refusal Case
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Aman Sharma"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B4FD8] focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B4FD8] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                City / Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Delhi / Chennai"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B4FD8] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. aman@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B4FD8] focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-4 bg-[#E61C24] hover:bg-[#c9141b] text-white font-bold text-sm rounded-xl transition shadow-lg shadow-red-500/20 active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <span>Send Details on WhatsApp</span>
            <span>💬 →</span>
          </button>

          <p className="text-center text-[11px] text-slate-400 mt-2">
            Aapki details seedhe licensed visa advisor ko WhatsApp par deliver
            hongi.
          </p>
        </form>
      </div>
    </div>
  );
}
