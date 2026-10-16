"use client";

import { useState } from "react";

const CHECK_CRITERIA = [
  {
    id: "degree",
    label: "Recognized Bachelor's or Master's degree (Anabin H+ listed)",
    weight: 20,
  },
  {
    id: "experience",
    label: "At least 2 to 5 years of skilled professional work experience",
    weight: 20,
  },
  {
    id: "english",
    label: "English proficiency (B2/C1 level) OR basic German/French",
    weight: 15,
  },
  {
    id: "stem",
    label: "Background in STEM, IT, Healthcare, Engineering, or Finance",
    weight: 15,
  },
  {
    id: "german",
    label: "Basic German language knowledge (A1/A2/B1)",
    weight: 10,
  },
  {
    id: "funds",
    label: "Proof of financial security or readiness for blocked account",
    weight: 10,
  },
  {
    id: "age",
    label: "Age under 40 years for maximum points on Opportunity Card",
    weight: 10,
  },
];

export default function EuropeEligibilityChecker({ onOpenModal }) {
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const score = Math.min(
    100,
    CHECK_CRITERIA.reduce(
      (acc, item) => (checked[item.id] ? acc + item.weight : acc),
      0,
    ),
  );

  const getVerdict = (s) => {
    if (s <= 35)
      return "Foundational stage: Language training or credential evaluation recommended.";
    if (s <= 65)
      return "Good prospects: Well-suited for the Germany Chancenkarte or skilled job search.";
    if (s <= 85)
      return "High potential: Strong candidate for direct EU Blue Card sponsorship!";
    return "Exceptional profile: Prime candidate for immediate European work and fast-track PR.";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-[#0B4FD8] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            In-Browser Assessment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Europe PR & EU Blue Card Readiness
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Check your profile against European qualification frameworks. No
            personal data stored.
          </p>
        </div>

        {/* Progress Bar Display */}
        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-2 font-bold">
            <span className="text-slate-700 text-sm">
              Profile Compatibility
            </span>
            <span className="text-3xl text-[#0B4FD8]">{score}%</span>
          </div>
          <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-[#0B4FD8] to-[#E61C24] h-full transition-all duration-300"
              style={{ width: `${score}%` }}
            />
          </div>
          <p className="text-xs text-slate-600 mt-3 font-semibold">
            {getVerdict(score)}
          </p>
        </div>

        {/* Checkbox Options */}
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {CHECK_CRITERIA.map((item) => (
            <label
              key={item.id}
              className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition select-none ${
                checked[item.id]
                  ? "border-[#0B4FD8] bg-blue-50/50 text-[#0B4FD8] font-semibold"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              <input
                type="checkbox"
                checked={!!checked[item.id]}
                onChange={() => toggle(item.id)}
                className="mt-0.5 h-4 w-4 rounded text-[#0B4FD8] focus:ring-[#0B4FD8]"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenModal(`Europe Compatibility: ${score}%`)}
            className="w-full sm:w-auto bg-[#0B4FD8] hover:bg-[#093db0] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
          >
            Get Detailed European PR Roadmap →
          </button>
        </div>
      </div>
    </div>
  );
}
