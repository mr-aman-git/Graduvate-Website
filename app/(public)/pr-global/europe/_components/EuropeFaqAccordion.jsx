"use client";

import { useState } from "react";

const EUROPE_FAQS = [
  {
    q: "Can I move to other EU countries with an EU Blue Card?",
    a: "Yes. After holding an EU Blue Card in your initial host country (e.g., Germany) for 12 months, you are legally entitled to relocate to another member state for high-skilled employment under facilitated EU mobility rules.",
  },
  {
    q: "What are the salary thresholds for an EU Blue Card?",
    a: "Salary thresholds are adjusted annually by national governments. In Germany, shortage occupations (IT, STEM, Medicine) have significantly lowered minimum salary thresholds (approx. €41,000–€45,000/year), making qualification much more accessible.",
  },
  {
    q: "Do I need German or French language skills to get an EU Blue Card?",
    a: "No upfront language certificate is legally mandated if your employment contract and working language are in English. However, learning the local language (e.g., B1 level) shortens the waiting timeline for permanent residency down to just 21 months.",
  },
  {
    q: "Does my spouse get full work permission in Europe?",
    a: "Yes. Dependents of EU Blue Card holders receive unrestricted open work permits in the host country immediately upon arrival without needing labor market approval.",
  },
  {
    q: "When can I apply for European citizenship?",
    a: "Most EU nations grant citizenship after 5 years of legal residence. Under modernized German nationality laws, naturalization can be achieved in as little as 3 to 5 years for integrated permanent residents.",
  },
];

export default function EuropeFaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Frequently Asked Questions on Europe PR
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Verified details based on European Commission and national immigration
          directives.
        </p>
      </div>

      <div className="space-y-4">
        {EUROPE_FAQS.map((faq, i) => (
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
