"use client";

import { useState } from "react";

const CRITERIA = [
  {
    id: "edu",
    label: "Post-secondary education (Degree or 3-yr Diploma)",
    pts: 15,
  },
  { id: "trade", label: "Completed a skilled trade certification", pts: 15 },
  {
    id: "ielts",
    label: "IELTS/CELPIP score of CLB 7+ (6.0+ in each band)",
    pts: 15,
  },
  { id: "french", label: "TEF/TCF French proficiency (CLB 7+)", pts: 10 },
  {
    id: "exp",
    label: "At least 1 year skilled work experience (NOC TEER 0/1/2/3)",
    pts: 15,
  },
  { id: "canExp", label: "At least 1 year Canadian work experience", pts: 10 },
  {
    id: "canEdu",
    label: "Canadian education (Degree/Diploma from a DLI)",
    pts: 5,
  },
  { id: "age", label: "Age between 20 and 35 years", pts: 5 },
  {
    id: "funds",
    label: "Have proof of settlement funds OR valid Canadian job offer",
    pts: 5,
  },
  {
    id: "history",
    label: "Clean immigration history (no serious refusals/bans)",
    pts: 5,
  },
  {
    id: "pnp",
    label: "Open to settling in a specific province or smaller community",
    pts: 5,
  },
];

export default function ReadinessChecker({ onOpenForm }) {
  const [selected, setSelected] = useState({});

  const toggleItem = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentScore = Math.min(
    100,
    CRITERIA.reduce(
      (acc, item) => (selected[item.id] ? acc + item.pts : acc),
      0,
    ),
  );

  const getStatusText = (score) => {
    if (score <= 30)
      return "Your profile needs groundwork. Book an assessment to identify pathways.";
    if (score <= 60)
      return "You're closer than you think. Targeted improvements will elevate your score.";
    if (score <= 85)
      return "Strong profile! You likely qualify for Express Entry or active PNP streams.";
    return "Outstanding! You are primed for multiple Canadian PR pathways right now.";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-[#0B4FD8] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Self-Assessment Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            How Close Are You to Canadian PR?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Select what applies to you. Score is calculated in-browser only (no
            personal data stored).
          </p>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="mb-8 p-5 bg-slate-50 border border-slate-100 rounded-2xl text-center">
          <div className="flex justify-between items-center mb-2 font-bold">
            <span className="text-slate-700 text-sm">Readiness Indicator</span>
            <span className="text-2xl text-[#0B4FD8]">{currentScore}%</span>
          </div>
          <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-[#0B4FD8] to-[#E61C24] h-full transition-all duration-300"
              style={{ width: `${currentScore}%` }}
            />
          </div>
          <p className="text-xs text-slate-600 mt-3 font-medium">
            {getStatusText(currentScore)}
          </p>
        </div>

        {/* Checkbox List */}
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
            onClick={onOpenForm}
            className="w-full sm:w-auto bg-[#0B4FD8] hover:bg-[#093db0] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
          >
            Get My Custom PR Strategy →
          </button>
        </div>
      </div>
    </div>
  );
}
