"use client";

import { useState } from "react";

const CRITERIA = [
  {
    id: "passport",
    label:
      "Valid passport with 2+ blank pages & at least 3 months validity beyond planned return",
    points: 20,
  },
  {
    id: "funds",
    label:
      "Healthy 6-month bank statement OR official Blocked Account (Sperrkonto) sanction",
    points: 20,
  },
  {
    id: "purpose",
    label:
      "Confirmed admission letter (D-Visa) OR hotel bookings & round-trip flight reservations (Schengen)",
    points: 20,
  },
  {
    id: "insurance",
    label:
      "Compliant Schengen travel health insurance with minimum €30,000 emergency coverage",
    points: 15,
  },
  {
    id: "ties",
    label:
      "Verifiable home country ties (employment contract, leave approval, property, or family)",
    points: 15,
  },
  {
    id: "clean_record",
    label:
      "No past Schengen SIS alerts, unresolved visa refusals, or immigration overstays",
    points: 10,
  },
];

export default function EuropeVisaChecker({ onOpenModal }) {
  const [selected, setSelected] = useState({});

  const toggleItem = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentScore = Math.min(
    100,
    CRITERIA.reduce(
      (acc, item) => (selected[item.id] ? acc + item.points : acc),
      0,
    ),
  );

  const getVerdict = (score) => {
    if (score <= 40)
      return "Profile requires documentation strengthening and sponsor evaluation.";
    if (score <= 70)
      return "Moderate readiness: Cover letter and proof of funds require careful review.";
    return "High approval probability: Profile ready for immediate VFS appointment scheduling!";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 ">
        <div className="text-center mb-8">
          <span className="text-[#0B4FD8] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Self-Check Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Europe Visa Approval Readiness Indicator
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Check your profile against standard Schengen & European Embassy
            requirements.
          </p>
        </div>

        {/* Dynamic Score Bar */}
        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-2 font-bold">
            <span className="text-slate-700 text-sm">Visa Readiness Score</span>
            <span className="text-3xl text-[#0B4FD8]">{currentScore}%</span>
          </div>
          <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-[#0B4FD8] to-[#E61C24] h-full transition-all duration-300"
              style={{ width: `${currentScore}%` }}
            />
          </div>
          <p className="text-xs text-slate-600 mt-3 font-semibold">
            {getVerdict(currentScore)}
          </p>
        </div>

        {/* Checkbox Items */}
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {CRITERIA.map((item) => (
            <label
              key={item.id}
              className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition select-none ${
                selected[item.id]
                  ? "border-[#0B4FD8] bg-blue-50/50 text-[#0B4FD8] font-semibold"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              <input
                type="checkbox"
                checked={!!selected[item.id]}
                onChange={() => toggleItem(item.id)}
                className="mt-0.5 h-4 w-4 rounded text-[#0B4FD8] focus:ring-[#0B4FD8]"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() =>
              onOpenModal(`Europe Visa Readiness: ${currentScore}%`)
            }
            className="w-full sm:w-auto bg-[#0B4FD8] hover:bg-[#093db0] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
          >
            Review My Documents With an Advisor →
          </button>
        </div>
      </div>
    </div>
  );
}
