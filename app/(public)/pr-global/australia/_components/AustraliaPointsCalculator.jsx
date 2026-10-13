"use client";

import { useState } from "react";

export default function AustraliaPointsCalculator({ onOpenModal }) {
  const [age, setAge] = useState(30); // 25-32 = 30 pts
  const [english, setEnglish] = useState(10); // Proficient = 10 pts
  const [overseasExp, setOverseasExp] = useState(10); // 5-8 yrs = 10 pts
  const [australianExp, setAustralianExp] = useState(0);
  const [education, setEducation] = useState(15); // Bachelor/Master = 15 pts
  const [visaType, setVisaType] = useState(5); // Subclass 190 (+5)
  const [partner, setPartner] = useState(10); // Single or Competent English = 10 pts

  const totalPoints =
    Number(age) +
    Number(english) +
    Number(overseasExp) +
    Number(australianExp) +
    Number(education) +
    Number(visaType) +
    Number(partner);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-[#0B4FD8] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Official Points Test Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Australia PR Points Calculator (2026)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Minimum 65 points required for Subclass 189, 190, and 491.
          </p>
        </div>

        {/* Dynamic Score Indicator */}
        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase font-bold text-slate-500">
              Your Calculated Score
            </div>
            <div className="text-4xl font-black text-slate-900 mt-1">
              {totalPoints}{" "}
              <span className="text-base font-normal text-slate-500">
                / 65 Minimum
              </span>
            </div>
            <p className="text-xs mt-1 font-semibold text-slate-600">
              {totalPoints >= 85
                ? "🌟 High Invitation Probability for General and Priority Draws."
                : totalPoints >= 65
                  ? "✅ Eligible for SkillSelect EOI. State nomination or higher PTE suggested."
                  : "⚠️ Below 65 points. Consider Subclass 491 (+15 pts) or PTE retake."}
            </p>
          </div>

          <button
            onClick={() => onOpenModal(`Calculated ${totalPoints} Points`)}
            className="w-full sm:w-auto px-6 py-3 bg-[#0B4FD8] hover:bg-[#093db0] text-white rounded-xl text-xs font-bold transition shadow-md"
          >
            Submit Score for Full Audit →
          </button>
        </div>

        {/* Inputs Grid */}
        <div className="grid sm:grid-cols-2 gap-5 text-xs sm:text-sm">
          {/* Age */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              Age Range
            </label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#0B4FD8]"
            >
              <option value="25">18–24 years (25 Points)</option>
              <option value="30">25–32 years (30 Points - Max)</option>
              <option value="25">33–39 years (25 Points)</option>
              <option value="15">40–44 years (15 Points)</option>
              <option value="0">45+ years (0 Points - Ineligible)</option>
            </select>
          </div>

          {/* English Proficiency */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              English Language (IELTS / PTE)
            </label>
            <select
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#0B4FD8]"
            >
              <option value="0">Competent (PTE 50 / IELTS 6.0) — 0 Pts</option>
              <option value="10">
                Proficient (PTE 65 / IELTS 7.0) — 10 Pts
              </option>
              <option value="20">Superior (PTE 79 / IELTS 8.0) — 20 Pts</option>
            </select>
          </div>

          {/* Overseas Skilled Experience */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              Overseas Work Experience (Outside Aus)
            </label>
            <select
              value={overseasExp}
              onChange={(e) => setOverseasExp(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#0B4FD8]"
            >
              <option value="0">Less than 3 years (0 Points)</option>
              <option value="5">3 to 4 years (5 Points)</option>
              <option value="10">5 to 7 years (10 Points)</option>
              <option value="15">8+ years (15 Points)</option>
            </select>
          </div>

          {/* Educational Qualification */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              Educational Qualification
            </label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#0B4FD8]"
            >
              <option value="20">Doctorate / PhD (20 Points)</option>
              <option value="15">Bachelor or Master Degree (15 Points)</option>
              <option value="10">
                Diploma or Trade Qualification (10 Points)
              </option>
            </select>
          </div>

          {/* Visa Stream Nomination */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              Visa Category / Nomination
            </label>
            <select
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#0B4FD8]"
            >
              <option value="0">
                Subclass 189 (Independent) — 0 Extra Pts
              </option>
              <option value="5">
                Subclass 190 (State Nomination) — +5 Pts
              </option>
              <option value="15">
                Subclass 491 (Regional Nomination) — +15 Pts
              </option>
            </select>
          </div>

          {/* Partner Status */}
          <div>
            <label className="font-bold text-slate-700 block mb-1.5">
              Partner Status
            </label>
            <select
              value={partner}
              onChange={(e) => setPartner(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#0B4FD8]"
            >
              <option value="10">Single Applicant (+10 Points)</option>
              <option value="10">
                Partner has Competent English & Skills (+10 Points)
              </option>
              <option value="5">
                Partner has Competent English only (+5 Points)
              </option>
              <option value="0">
                Partner not skilled / No English (0 Points)
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
