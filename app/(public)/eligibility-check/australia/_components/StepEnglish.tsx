"use client";

import SelectField from "../_common/SelectField";
import RadioCard from "../_common/RadioCard";
import {
  ENGLISH_TESTS,
} from "../_lib/constants";
import {
  ENGLISH_LEVELS,
  ENGLISH_TEST_INFO,
} from "../_lib/english";
import type { AustraliaFormData } from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

export default function StepEnglish({
  data,
  updateData,
}: Props) {
  const selectedInfo =
    data.englishTest &&
    ENGLISH_TEST_INFO[
      data.englishTest as keyof typeof ENGLISH_TEST_INFO
    ];

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          What is your English level?
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Choose your English proficiency level for the
          points assessment.
        </p>
      </div>

      <SelectField
        label="English test"
        value={data.englishTest}
        onChange={(e) =>
          updateData({
            englishTest: e.target.value,
          })
        }
      >
        <option value="">Select test</option>

        {ENGLISH_TESTS.map((test) => (
          <option key={test} value={test}>
            {test}
          </option>
        ))}
      </SelectField>

      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-800">
          English proficiency
        </label>

        <div className="grid gap-3">
          {ENGLISH_LEVELS.slice(1).map((level) => (
            <RadioCard
              key={level.value}
              label={level.label}
              description={level.description}
              badge={`${level.points} points`}
              selected={
                data.englishLevel === level.value
              }
              onClick={() =>
                updateData({
                  englishLevel: level.value,
                })
              }
            />
          ))}
        </div>
      </div>

      {selectedInfo && (
        <div className="rounded-2xl border border-[#1C398E]/10 bg-[#1C398E]/5 p-4">
          <p className="text-sm font-semibold text-[#1C398E]">
            Current test thresholds
          </p>

          <div className="mt-3 grid gap-2 text-xs text-slate-600">
            <p>
              <strong>Competent:</strong>{" "}
              {selectedInfo.competent}
            </p>

            <p>
              <strong>Proficient:</strong>{" "}
              {selectedInfo.proficient}
            </p>

            <p>
              <strong>Superior:</strong>{" "}
              {selectedInfo.superior}
            </p>
          </div>
        </div>
      )}

      <p className="text-xs leading-5 text-slate-400">
        English test rules can change. This calculator is
        an indicative assessment and should be checked
        against the current Department of Home Affairs
        requirements.
      </p>
    </div>
  );
}