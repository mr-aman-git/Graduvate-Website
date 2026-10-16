"use client";

import { useState } from "react";

export default function EuropeLeadModal({
  isOpen,
  onClose,
  leadPurpose = "Europe PR Inquiry",
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
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

    // WhatsApp structured message
    const whatsappMessage =
      `*New Europe PR / EU Blue Card Enquiry*%0A` +
      `--------------------------------%0A` +
      `*Program / Interest:* ${encodeURIComponent(leadPurpose)}%0A` +
      `*Full Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone Number:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email Address:* ${encodeURIComponent(formData.email)}%0A` +
      `*Current City / Country:* ${encodeURIComponent(formData.location)}%0A` +
      `--------------------------------`;

    // Graduvate official contact number
    const whatsappUrl = `https://wa.me/918608608668?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", phone: "", email: "", location: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#0B4FD8] text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">
              Europe PR & Blue Card Profile Review
            </h3>
            <p className="text-xs text-blue-100 mt-0.5">
              Reference: {leadPurpose}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition"
          >
            ✕
          </button>
        </div>

        {/* Lead Capture Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
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
               
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0B4FD8] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Current Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                
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
            Aapki details seedhe licensed counselor ko WhatsApp par send ho
            jayengi.
          </p>
        </form>
      </div>
    </div>
  );
}
