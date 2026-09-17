"use client";

import type { CRSFormData } from "../crs";

interface Props {
  data: CRSFormData;
  update: <K extends keyof CRSFormData>(
    key: K,
    value: CRSFormData[K]
  ) => void;
}

export default function StepProfile({
  data,
  update,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-red-600">
          Step 01
        </p>

        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
          Let's start with your profile
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Tell us a little about yourself to begin your CRS
          assessment.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Your age
          </label>

          <input
            type="number"
            min={18}
            max={60}
            value={data.age || ""}
            onChange={(e) =>
              update(
                "age",
                Number(e.target.value)
              )
            }
            placeholder="e.g. 28"
            className="crs-input"
          />

          <p className="mt-2 text-xs text-slate-400">
            Age at the time of your Express Entry profile.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Marital status
          </label>

          <select
            value={data.maritalStatus}
            onChange={(e) =>
              update(
                "maritalStatus",
                e.target.value as CRSFormData["maritalStatus"]
              )
            }
            className="crs-input"
          >
            <option value="single">
              Single / not married
            </option>

            <option value="married">
              Married / common-law
            </option>
          </select>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex gap-3">
          <span className="text-lg">💡</span>

          <div>
            <h3 className="font-bold text-blue-950">
              Why does marital status matter?
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-800/80">
              CRS scoring is different for candidates with an
              accompanying spouse or common-law partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}