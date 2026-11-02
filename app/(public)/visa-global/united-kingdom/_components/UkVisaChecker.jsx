"use client";

import { useState } from "react";

const CRITERIA = [
  {
    id: "cas_cos",
    label:
      "Have an official CAS letter from a university OR Certificate of Sponsorship (CoS)",
    points: 20,
  },
  {
    id: "funds_28days",
    label:
      "Maintenance funds held for 28 consecutive days in an eligible bank account",
    points: 20,
  },
  {
    id: "english",
    label:
      "Approved English language evidence (IELTS UKVI, PTE Academic, or University Medium of Instruction)",
    points: 20,
  },
  {
    id: "tb_test",
    label:
      "Valid Tuberculosis (TB) clearance certificate from a UKVI-approved clinic",
    points: 15,
  },
  {
    id: "ties_visitor",
    label:
      "Documented employment/business ties and planned accommodation details",
    points: 15,
  },
  {
    id: "clean_record",
    label:
      "No past UK immigration breaches, deception allegations, or unspent convictions",
    points: 10,
  },
];

export default function UkVisaChecker({ onOpenModal }) {
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
      return "Profile requires documentation and 28-day financial structuring before submission.";
    if (score <= 70)
      return "Moderate readiness: TB screening, bank statements, and interview prep advised.";
    return "High approval probability: Profile ready for immediate UKVI online lodgement!";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-[#0B4FD8] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Self-Check Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            UK Visa Approval Readiness Indicator
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Check your profile against standard UK Visas and Immigration (UKVI)
            compliance parameters.
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
            onClick={() => onOpenModal(`UK Visa Readiness: ${currentScore}%`)}
            className="w-full sm:w-auto bg-[#0B4FD8] hover:bg-[#093db0] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
          >
            Review My Documents With a UK Specialist →
          </button>
        </div>
      </div>
    </div>
  );
}
