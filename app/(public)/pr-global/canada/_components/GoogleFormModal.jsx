"use client";

export default function GoogleFormModal({
  isOpen,
  onClose,
  defaultPurpose = "PR Assessment",
}) {
  if (!isOpen) return null;

  // Replace this with your direct Google Form embed link or standard URL
  const GOOGLE_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScABCDEF_SAMPLE_REPLACE_ME/viewform?embedded=true";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Modal Header */}
        <div className="bg-[#0B4FD8] text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Book Free Profile Assessment</h3>
            <p className="text-xs text-blue-100 mt-0.5">
              Intent: {defaultPurpose}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition"
          >
            ✕
          </button>
        </div>

        {/* Google Form Container */}
        <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto">
          {/* OPTION A: Google Form iframe */}
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            width="100%"
            height="520"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-xl border border-slate-100"
          >
            Loading Google Form…
          </iframe>

          {/* Fallback Direct Link */}
          <div className="mt-4 text-center">
            <a
              href="https://wa.me/918608608668"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#0B4FD8] font-bold hover:underline"
            >
              Having issue with form? Connect directly on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
