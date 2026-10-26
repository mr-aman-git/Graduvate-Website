"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How much funds do I need to demonstrate for an Australia Student Visa (Subclass 500)?",
    a: "Under Department of Home Affairs financial capacity guidelines, international students must demonstrate at least AUD $29,710 for 12 months of living expenses, plus 1st year tuition fees and return airfare.",
  },
  {
    q: "What is the difference between the old GTE and new Genuine Student (GS) requirement?",
    a: "The Genuine Student (GS) framework replaced GTE in 2024. While GTE focused heavily on proving you would return home, GS focuses on academic logic, progression, how the course enhances your employment prospects, and overall genuineness.",
  },
  {
    q: "Can I convert an Australia Tourist Visa (Subclass 600) into a Student Visa?",
    a: "Under recent migration restrictions aimed at preventing visa hopping, changing from a Visitor Visa to a Student Visa inside Australia is generally barred unless exceptional circumstances exist. It is recommended to apply offshore.",
  },
  {
    q: "How long can I work on a Subclass 485 Temporary Graduate Visa?",
    a: "Depending on your qualification level (Bachelor's, Master's, or PhD) and whether you studied in a designated regional area, the 485 visa is granted for 2 to 4+ years of unrestricted full-time work.",
  },
  {
    q: "Is Overseas Student Health Cover (OSHC) compulsory?",
    a: "Yes. You must hold valid OSHC from an approved Australian health insurance provider covering the entire expected duration of your student visa before your visa can be granted.",
  },
];

export default function AustraliaVisaFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Frequently Asked Questions on Australia Visa Global
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Verified answers aligned with Department of Home Affairs migration policies.
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