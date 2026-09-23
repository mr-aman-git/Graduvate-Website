import type { AustraliaScoreBreakdown } from "../australia";

interface Props {
  score: AustraliaScoreBreakdown;
}

const rows = [
  ["Age", "age"],
  ["English", "english"],
  ["Education", "education"],
  ["Overseas Experience", "overseasExperience"],
  ["Australian Experience", "australianExperience"],
  ["Specialist Education", "specialistEducation"],
  ["Australian Study", "australianStudy"],
  ["Regional Study", "regionalStudy"],
  ["Professional Year", "professionalYear"],
  ["Community Language", "communityLanguage"],
  ["Partner", "partner"],
  ["Nomination", "nomination"],
] as const;

export default function AustraliaScoreCard({
  score,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
      <div className="bg-[#1C398E] p-7 text-white">
        <p className="text-sm font-medium text-white/70">
          Your Australia Points
        </p>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-5xl font-black">
            {score.total}
          </span>

          <span className="mb-2 text-sm text-white/70">
            points
          </span>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {rows.map(([label, key]) => (
          <div
            key={key}
            className="flex items-center justify-between px-6 py-3.5"
          >
            <span className="text-sm text-slate-600">
              {label}
            </span>

            <span className="text-sm font-bold text-slate-900">
              {score[key]}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-slate-50 px-6 py-5">
        <span className="font-bold text-slate-900">
          Total
        </span>

        <span className="text-xl font-black text-[#F4180B]">
          {score.total} points
        </span>
      </div>
    </div>
  );
}