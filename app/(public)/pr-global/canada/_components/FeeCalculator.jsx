"use client";

import { useState } from "react";

export default function FeeCalculator({ onOpenForm }) {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  // Single adult IRCC = $950 processing + $575 RPRF + $85 biometrics = $1610 CAD
  const totalCAD = adults * 1610 + kids * 260;

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <div>
        <span className="text-[#E61C24] font-bold text-xs uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
          Cost Estimator
        </span>
        <h3 className="text-2xl font-extrabold text-slate-900 mt-2">IRCC Government Fee Estimator</h3>
        <p className="text-xs text-slate-500 mt-1 mb-6">Calculate official processing and right of permanent residence fees.</p>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
            <span className="font-semibold text-slate-700">Adult Applicants (Principal + Spouse)</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold"
              >
                -
              </button>
              <span className="font-bold w-4 text-center">{adults}</span>
              <button
                onClick={() => setAdults(Math.min(2, adults + 1))}
                className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
            <span className="font-semibold text-slate-700">Dependent Children</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setKids(Math.max(0, kids - 1))}
                className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold"
              >
                -
              </button>
              <span className="font-bold w-4 text-center">{kids}</span>
              <button
                onClick={() => setKids(kids + 1)}
                className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50/60 border border-blue-100 rounded-2xl">
          <span className="text-xs font-bold text-[#0B4FD8] uppercase">Estimated Government Total</span>
          <div className="text-3xl font-black text-slate-900 mt-1">
            CAD ${totalCAD.toLocaleString()}
          </div>
          <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
            *Includes Processing, RPRF, and Biometrics. Graduvate professional consulting fees are quoted as a transparent flat fee at consultation.
          </p>
        </div>
      </div>

      <button
        onClick={onOpenForm}
        className="mt-6 w-full py-3.5 bg-[#E61C24] hover:bg-[#c9141b] text-white font-bold text-sm rounded-xl transition"
      >
        Get Itemized Cost Quotation →
      </button>
    </div>
  );
}