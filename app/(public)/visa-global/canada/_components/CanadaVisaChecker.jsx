"use client";

import { useState } from "react";

const CRITERIA = [
  {
    id: "passport",
    label: "Valid passport with at least 6+ months validity remaining",
    points: 20,
  },
  {
    id: "funds",
    label: "Verifiable liquid funds in bank account (tuition/travel expenses)",
    points: 20,
  },
  {
    id: "ties",
    label: "Strong home country ties (employment, family, or properties)",
    points: 20,
  },
  {
    id: "documents",
    label: "College Offer Letter (LOA) / Employment Contract / Invitation",
    points: 20,
  },
  {
    id: "english",
    label: "Language proficiency test (IELTS / PTE) if applying for Study/Work",
    points: 10,
  },
  {
    id: "clean_record",
    label: "Clean background with no previous unresolved deportation or bans",
    points: 10,
  },
];

export default function CanadaVisaChecker({ onOpenModal }) {
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
      return "Profile needs documentation reinforcement. Consult our team before filing.";
    if (score <= 70)
      return "Moderate readiness: Financial proof and SOP need specialized review.";
    return "High approval potential: Strong file readiness for direct IRCC lodgement!";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-[#0B4FD8] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Self-Check Assessment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Canada Visa Approval Readiness
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Check your profile against standard IRCC approval parameters.
          </p>
        </div>

        {/* Dynamic Score Bar */}
        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-2 font-bold">
            <span className="text-slate-700 text-sm">Readiness Indicator</span>
            <span className="text-3xl text-[#0B4FD8]">{currentScore}%</span>
          </div>
          <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#0B4FD8] to-[#E61C24] h-full transition-all duration-300"
              style={{ width: `${currentScore}%` }}
            />
          </div>
          <p className="text-xs text-slate-600 mt-3 font-semibold">
            {getVerdict(currentScore)}
          </p>
        </div>

        {/* Interactive Checkbox Items */}
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
            onClick={() => onOpenModal(`Visa Readiness: ${currentScore}%`)}
            className="w-full sm:w-auto bg-[#0B4FD8] hover:bg-[#093db0] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
          >
            Review My Documents With an Expert →
          </button>
        </div>
      </div>
    </div>
  );
}
