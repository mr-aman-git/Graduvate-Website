"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What is a Provincial Attestation Letter (PAL) for Canada Study Visas?",
    a: "Under recent IRCC rules, most post-secondary international students must obtain a Provincial Attestation Letter (PAL) from the province where they plan to study before lodging their study permit application.",
  },
  {
    q: "Can I convert a Canadian Visitor Visa to a Work Permit inside Canada?",
    a: "Under specific temporary policies, visitors with a valid job offer supported by a positive LMIA or LMIA exemption can apply for an employer-specific work permit without leaving Canada.",
  },
  {
    q: "How much funds do I need to show for a Canada Study Permit?",
    a: "In addition to your first year's tuition fee, IRCC requires proof of living expenses (GIC of approx. CAD $20,635+) to prove you can support yourself financially in Canada.",
  },
  {
    q: "What should I do if my Canada visa was previously refused?",
    a: "A refusal is not a permanent ban[cite: 3]. We request your GCMS (Global Case Management System) officer notes to discover the exact grounds of refusal (e.g., ties to home country, assets) and reconstruct a stronger resubmission.",
  },
  {
    q: "How long is a Canada Super Visa valid?",
    a: "A Canada Super Visa is a multi-entry visa valid for up to 10 years, allowing eligible parents and grandparents to stay in Canada for up to 5 continuous years per visit.",
  },
];

export default function CanadaVisaFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Frequently Asked Questions on Canada Visa Global
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Verified insights according to active Immigration, Refugees and
          Citizenship Canada (IRCC) standards.
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
