"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Which embassy should I apply to if I am visiting multiple European countries?",
    a: "Under Schengen regulations, you must apply to the embassy of your primary destination (the country where you spend the longest duration). If spending equal time in multiple countries, apply to the embassy of your first point of entry.",
  },
  {
    q: "What is an APS certificate for Germany Student Visas?",
    a: "The Academic Evaluation Centre (APS) certificate is mandatory for Indian students applying to German universities. It verifies the authenticity of your Indian educational documents before you can lodge your National Visa (Type D) application.",
  },
  {
    q: "What amount is required in a German Blocked Account (Sperrkonto)?",
    a: "For international students and job seekers, Germany requires a blocked account holding approximately €11,208 to €11,904 per year to cover mandatory living expenses during your stay.",
  },
  {
    q: "Can I convert a Schengen Tourist Visa (Type C) into a Work Permit in Europe?",
    a: "No. A Schengen Type C visa is strictly non-convertible inside Europe. To work legally, you must return to your home country and apply for a National Type D Work Visa or EU Blue Card.",
  },
  {
    q: "What is the processing time for a Schengen Visa?",
    a: "Standard Schengen visa processing takes approximately 15 calendar days from the date of your VFS appointment, though applying 4 to 6 weeks in advance of your travel date is strongly recommended.",
  },
];

export default function EuropeVisaFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Frequently Asked Questions on Europe Visa Global
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Verified answers compliant with European Commission & VFS Global
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
