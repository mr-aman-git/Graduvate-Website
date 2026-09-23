"use client";

import { useState } from "react";
import AustraliaLeadForm from "./AustraliaLeadForm";
import AustraliaScoreCard from "./AustraliaScoreCard";
import { getAustraliaResult } from "../_lib/calculator";
import type {
  AustraliaLeadData,
  AustraliaScoreBreakdown,
} from "../australia";

interface Props {
  score: AustraliaScoreBreakdown;
}

export default function AustraliaResultGate({
  score,
}: Props) {
  const [revealed, setRevealed] =
    useState(false);

  const result = getAustraliaResult(score.total);

  function handleLeadSubmit(
    lead: AustraliaLeadData
  ) {
    console.log("Australia calculator lead:", {
      lead,
      score,
    });

    setRevealed(true);
  }

  if (revealed) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-[#1C398E]/10 bg-white p-6 shadow-xl shadow-slate-200/40">
          <div className="mb-6">
            <span className="inline-flex rounded-full bg-[#1C398E]/10 px-3 py-1 text-xs font-bold text-[#1C398E]">
              Assessment Complete
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-900">
              {result.label}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {result.description}
            </p>
          </div>

          <AustraliaScoreCard score={score} />
        </div>

        <div className="rounded-2xl bg-amber-50 p-4 text-xs leading-5 text-amber-800">
          This is an indicative points calculation only.
          Immigration eligibility and invitation outcomes
          depend on the applicable visa requirements and
          current government settings.
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
      <div className="relative overflow-hidden rounded-3xl bg-[#1C398E] p-8 text-white">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F4180B]/20 blur-3xl" />

        <div className="relative">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
            Your Assessment
          </span>

          <h2 className="mt-6 text-3xl font-black">
            {result.label}
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6">
            We have calculated your indicative Australia
            skilled migration points. Submit your details
            to reveal your exact score.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-white/60">
              Estimated score
            </p>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-5xl font-black tracking-widest">
                •••
              </span>

              <span className="text-sm text-white/60">
                points
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p>✓ Personal assessment</p>
            <p>✓ Education assessment</p>
            <p>✓ English assessment</p>
            <p>✓ Work experience assessment</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/40">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900">
            Reveal your score
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Enter your details to see your calculated
            Australia points score.
          </p>
        </div>

        <AustraliaLeadForm
          onSubmit={handleLeadSubmit}
        />
      </div>
    </div>
  );
}