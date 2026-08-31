"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need a job offer to apply for Canadian PR?",
    a: "No. Federal Skilled Worker (FSW) and Canadian Experience Class (CEC) do not require a Canadian job offer. However, a qualifying offer adds 50 to 200 CRS points.",
  },
  {
    q: "What CRS score do I need to get an Invitation to Apply (ITA)?",
    a: "General draws range between 430 and 530, while category-based draws for French speakers, healthcare workers, STEM experts, and trades frequently close at 420-480.",
  },
  {
    q: "How long does the Canada PR process take?",
    a: "Express Entry applications are typically finalized within 6 months from the date of final submission post-ITA. Base Provincial Nominee Programs take 12-24 months.",
  },
  {
    q: "What if my CRS score is below 430?",
    a: "You can leverage Provincial Nominee Programs (+600 points), optimize your IELTS score to CLB 9 (8777), learn basic French (+25 to +50 points), or pursue a study-to-PR bridge.",
  },
  {
    q: "Can my family accompany me on the PR application?",
    a: "Yes. Your spouse/common-law partner and dependent children under 22 are granted COPR alongside you and arrive with full permanent resident status.",
  },
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        <p className="text-sm text-slate-600 mt-2">Answers verified by our CICC-licensed immigration legal team.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full text-left p-5 font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition"
            >
              <span>{faq.q}</span>
              <span className="text-[#0B4FD8] text-lg font-black">{openIdx === i ? "−" : "+"}</span>
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