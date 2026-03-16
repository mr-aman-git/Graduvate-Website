'use client'
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappSticky = () => {
  const phoneNumber = "919159091595";
  const website = "studymbbs.education";
  
  const handleWhatsAppClick = () => {
    const message = 
      `*👋 Hello Graduvate Support!* \n\n` +
      `I am visiting *${website}* and I want to get *Free Counseling* for Abroad admission. \n\n` +
      `Please guide me with the details.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-9999 group">
      {/* Tooltip (Hover karne par dikhega) */}
      <span className="absolute right-16 top-3 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
        Chat with Expert 💬
      </span>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Contact on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 animate-bounce-subtle"
        style={{
          boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)",
        }}
      >
        <FaWhatsapp size={32} />
      </button>

      {/* Pulse Effect (Optional: For attention) */}
      <span className="absolute inset-0 -z-10 h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-20"></span>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default WhatsappSticky;