"use client";

import CRSLeadForm from "./CRSLeadForm";
import type {
  CRSResult,
  LeadData,
} from "../crs";
import { getScoreCategory } from "../_lib/calculator";

interface Props {
  result: CRSResult;
  revealed: boolean;
  onReveal: (lead: LeadData) => void;
}

export default function CRSResultGate({
  result,
  revealed,
  onReveal,
}: Props) {
  const category = getScoreCategory(
    result.score
  );

  if (revealed) {
    return (
      <div className="space-y-7">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-2xl">
            ✓
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-wider primaryColor">
            Your estimated CRS score
          </p>

          <div className="mt-2 text-7xl font-black tracking-tight text-slate-950">
            {result.score}
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Based on the information you provided.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <ScoreItem
            label="Age"
            value={result.breakdown.age}
          />

          <ScoreItem
            label="Education"
            value={result.breakdown.education}
          />

          <ScoreItem
            label="First language"
            value={result.breakdown.firstLanguage}
          />

          <ScoreItem
            label="Second language"
            value={result.breakdown.secondLanguage}
          />

          <ScoreItem
            label="Canadian work"
            value={result.breakdown.canadianWork}
          />

          <ScoreItem
            label="Spouse"
            value={result.breakdown.spouse}
          />

          <ScoreItem
            label="Skill transferability"
            value={result.breakdown.transferability}
          />

          <ScoreItem
            label="Additional"
            value={result.breakdown.additional}
          />
        </div>

        <div className="rounded-2xl bg-slate-50 p-5 text-xs leading-5 text-slate-500">
          This is an estimate and not an official IRCC
          determination. Always verify your eligibility and score
          against the latest official IRCC requirements.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-7">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-wider primaryColor">
          Your result is ready
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-950">
          Your profile looks{" "}
          <span className="text-green-700">
            {category}
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
          We've completed your CRS assessment. Enter your details
          below to reveal your exact estimated score.
        </p>
      </div>

      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Estimated CRS Score
        </p>

        <div
          className="mt-4 select-none text-6xl font-black tracking-[0.25em] text-slate-300 blur-md"
          aria-hidden="true"
        >
          000
        </div>

        <div className="mt-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold primaryColor">
          🔒 Score locked
        </div>
      </div>

      <CRSLeadForm onSubmit={onReveal} />
    </div>
  );
}

function ScoreItem({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
      <span className="text-sm font-semibold text-slate-600">
        {label}
      </span>

      <span className="font-black text-slate-950">
        {value}
      </span>
    </div>
  );
}