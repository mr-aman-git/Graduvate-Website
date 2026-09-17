"use client";

import type {
  CRSFormData,
  LanguageTest,
} from "../crs";

interface Props {
  data: CRSFormData;
  update: <K extends keyof CRSFormData>(
    key: K,
    value: CRSFormData[K]
  ) => void;
}

const skills = [
  {
    key: "speaking",
    label: "Speaking",
  },
  {
    key: "listening",
    label: "Listening",
  },
  {
    key: "reading",
    label: "Reading",
  },
  {
    key: "writing",
    label: "Writing",
  },
] as const;

export default function StepLanguage({
  data,
  update,
}: Props) {
  const updateFirstLanguage = (
    key: keyof CRSFormData["firstLanguage"]["scores"],
    value: number
  ) => {
    update("firstLanguage", {
      ...data.firstLanguage,
      scores: {
        ...data.firstLanguage.scores,
        [key]: value,
      },
    });
  };

  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-red-600">
          Step 03
        </p>

        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
          Tell us about your language test
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Enter your individual test scores. We will map them to
          CLB levels for the estimate.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-700">
          First official language
        </label>

        <select
          value={data.firstLanguage.test}
          onChange={(e) =>
            update("firstLanguage", {
              ...data.firstLanguage,
              test: e.target.value as LanguageTest,
            })
          }
          className="crs-input"
        >
          <option value="IELTS">
            IELTS General Training
          </option>

          <option value="CELPIP">
            CELPIP-General
          </option>

          <option value="PTE">
            PTE Core
          </option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.key}>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              {skill.label}
            </label>

            <input
              type="number"
              min={0}
              step={
                data.firstLanguage.test ===
                "IELTS"
                  ? 0.5
                  : 1
              }
              value={
                data.firstLanguage.scores[
                  skill.key
                ] || ""
              }
              onChange={(e) =>
                updateFirstLanguage(
                  skill.key,
                  Number(e.target.value)
                )
              }
              placeholder={
                data.firstLanguage.test ===
                "IELTS"
                  ? "e.g. 7.0"
                  : "Enter score"
              }
              className="crs-input"
            />
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-linear-to-r from-blue-50 to-red-50 p-5">
        <p className="text-sm font-bold text-slate-800">
          What is CLB?
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          CLB means Canadian Language Benchmark. Canada uses CLB
          levels to assess language ability for Express Entry.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={data.secondLanguageEnabled}
            onChange={(e) =>
              update(
                "secondLanguageEnabled",
                e.target.checked
              )
            }
            className="mt-1 h-5 w-5 rounded border-slate-300"
          />

          <div>
            <p className="text-sm font-bold text-slate-800">
              I have a second official language
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Enable this if you also have a qualifying English
              or French official-language result.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}