"use client";
import RegistrationForm from "./RegistrationForm";

export default function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4">
      {/* Background Overlay - Is par click karne se modal band hoga */}
      <div
        className="absolute inset-0 bg-blue-900/40 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-100 animate-in zoom-in fade-in duration-300">
        {/* Modern Close Button (Form ke andar top-right mein) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 z-110 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 h-8 w-8 rounded-full flex items-center justify-center transition-colors shadow-sm"
          title="Close"
        >
          <span className="text-xl font-light">✕</span>
        </button>

        {/* Form Container */}
        <div className="shadow-2xl">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
