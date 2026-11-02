"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What is the 28-day financial rule for a UK Student Visa?",
    a: "Under UKVI requirements, your maintenance funds (tuition fees plus living expenses of £1,483/month in London or £1,136/month outside London for up to 9 months) must stay continuously in your bank account for at least 28 consecutive days before your visa application date. The balance must never dip below the required amount even for a single day.",
  },
  {
    q: "What is the Immigration Health Surcharge (IHS)?",
    a: "The Immigration Health Surcharge (IHS) is a mandatory fee paid during your visa application that entitles you to access the UK's National Health Service (NHS) during your stay without needing private medical insurance.",
  },
  {
    q: "Can I bring dependants on a UK Student Visa?",
    a: "Under current UK immigration rules, only international students enrolled in postgraduate research programs (PhDs, doctoral programs, or select research-based master's) can sponsor dependants (spouse and children). Students on standard taught master's courses cannot bring dependants.",
  },
  {
    q: "Can I work full-time on a UK Standard Visitor Visa?",
    a: "No. You cannot take up paid employment or run a business on a UK Visitor Visa. You are only allowed to attend permitted business activities such as meetings, conferences, site visits, and interviews.",
  },
  {
    q: "Is an interview mandatory for a UK Student Visa?",
    a: "UKVI conducts credibility interviews on a selective basis to confirm whether you are a genuine student. You will be asked about your chosen university, course modules, career value, living arrangements, and financial readiness.",
  },
];

export default function UkVisaFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Frequently Asked Questions on UK Visa Global
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Verified answers compliant with UK Visas and Immigration (UKVI)
          regulations.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((faq, i) => (
          <div
            key={i}
            className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left p-5 font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition"
            >
              <span className="text-sm sm:text-base">{faq.q}</span>
              <span className="text-[#0B4FD8] text-xl font-bold">
                {openIdx === i ? "−" : "+"}
              </span>
            </button>
            {openIdx === i && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
