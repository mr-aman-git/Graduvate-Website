"use client";

import { useState } from "react";

const DOCS = {
  Identity: ["Valid Passport (all non-blank pages)", "Birth Certificate", "IRCC Standard Photographs", "Passports for Dependents"],
  Language: ["IELTS General / CELPIP Score Card (CLB 7+)", "TEF / TCF Canada (if French option)", "Test validity within 2-year window"],
  Education: ["Degree / Diploma Certificates", "Transcripts from all semesters", "ECA Report (WES / IQAS / ICAS)"],
  WorkExp: ["Reference Letters with verified NOC duties", "Paystubs / T4 / Tax Returns", "Offer Letters & Relieving Letters"],
  Financial: ["6-Month Official Bank Statements", "Proof of Liquid Settlement Funds", "Gift Deed Documentation (if applicable)"],
};

export default function DocChecklist() {
  const [activeTab, setActiveTab] = useState("Identity");

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <span className="text-[#0B4FD8] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
        Documentation Prep
      </span>
      <h3 className="text-2xl font-extrabold text-slate-900 mt-2">Required Document Checklist</h3>
      <p className="text-xs text-slate-500 mt-1 mb-6">Prevent refusals: all documents are vetted by our RCIC team prior to submission.</p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-3">
        {Object.keys(DOCS).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition ${
              activeTab === tab
                ? "bg-[#0B4FD8] text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {DOCS[activeTab].map((doc, idx) => (
          <label key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer text-xs sm:text-sm text-slate-700">
            <input type="checkbox" className="h-4 w-4 rounded text-[#0B4FD8] focus:ring-[#0B4FD8]" />
            <span>{doc}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
        <strong>⚠️ Critical Advice:</strong> Employment reference letters with non-aligned NOC duties cause over 40% of IRCC refusals. We draft and review all job duty descriptions before filing.
      </div>
    </div>
  );
}