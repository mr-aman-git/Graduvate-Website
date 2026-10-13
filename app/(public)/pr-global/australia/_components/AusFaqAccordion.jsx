"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What is an ANZSCO code and why is it important?",
    a: "The Australian and New Zealand Standard Classification of Occupations (ANZSCO) categorizes all jobs. Your education and work duties must align with a specific ANZSCO code to pass the mandatory skills assessment.",
  },
  {
    q: "Can I apply for Australia PR without an employer job offer?",
    a: "Yes. General Skilled Migration visas (Subclass 189, 190, and 491) are points-tested independent visas that do not require an upfront employer sponsor or job offer.",
  },
  {
    q: "How long is a positive Skills Assessment valid?",
    a: "Most skills assessments from authorities like ACS, VETASSESS, and Engineers Australia are valid for 2 to 3 years from the date of issue.",
  },
  {
    q: "What are the priority occupation sectors in Australia?",
    a: "Healthcare (Registered Nurses, Doctors), ICT & Software Engineering, Civil & Mechanical Engineering, Construction Trades, and Secondary School Teachers.",
  },
  {
    q: "What is the English score required to maximize points?",
    a: "Superior English (PTE Academic 79+ in each band or IELTS 8.0+ in each band) grants the maximum allowable 20 points, which is often crucial for receiving an ITA.",
  },
];

export default function AusFaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Frequently Asked Questions on Australia PR
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Verified answers according to the Department of Home Affairs
          guidelines.
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
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
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
