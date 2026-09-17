"use client";

import type { CRSFormData } from "../crs";
import { EDUCATION_LABELS } from "../_lib/constants";

interface Props {
  data: CRSFormData;
  update: <K extends keyof CRSFormData>(
    key: K,
    value: CRSFormData[K]
  ) => void;
}

export default function StepEducation({
  data,
  update,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-red-600">
          Step 02
        </p>

        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
          What's your highest education?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Select your highest completed educational credential.
        </p>
      </div>

      <div className="space-y-3">
        {(
          Object.keys(
            EDUCATION_LABELS
          ) as CRSFormData["education"][]
        ).map((level) => (
          <button
            type="button"
            key={level}
            onClick={() =>
              update("education", level)
            }
            className={[
              "w-full rounded-2xl border p-5 text-left transition-all",
              data.education === level
                ? "border-blue-600 bg-blue-50 shadow-sm"
                : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-4">
              <span
                className={[
                  "text-sm font-bold",
                  data.education === level
                    ? "text-blue-800"
                    : "text-slate-700",
                ].join(" ")}
              >
                {EDUCATION_LABELS[level]}
              </span>

              <span
                className={[
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                  data.education === level
                    ? "border-blue-600 bg-blue-600"
                    : "border-slate-300",
                ].join(" ")}
              >
                {data.education === level && (
                  <span className="h-2 w-2 rounded-full bg-white" />
                )}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-bold text-slate-800">
          Foreign education?
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Depending on your pathway, an Educational Credential
          Assessment (ECA) may be required for foreign education.
        </p>
      </div>
    </div>
  );
}