"use client";

import SelectField from "../_common/SelectField";
import RadioCard from "../_common/RadioCard";
import { VISA_OPTIONS } from "../_lib/constants";
import type { AustraliaFormData } from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

export default function StepProfile({
  data,
  updateData,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Let&apos;s start with your profile
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Select the Australian skilled visa pathway you
          want to assess.
        </p>
      </div>

      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-800">
          Which visa are you interested in?
        </label>

        <div className="grid gap-3 md:grid-cols-3">
          {VISA_OPTIONS.map((visa) => (
            <RadioCard
              key={visa.value}
              label={visa.label}
              description={visa.description}
              selected={data.visa === visa.value}
              onClick={() =>
                updateData({
                  visa: visa.value,
                })
              }
            />
          ))}
        </div>
      </div>

      <SelectField
        label="Your age"
        value={data.age}
        onChange={(e) =>
          updateData({
            age:
              e.target.value === ""
                ? ""
                : Number(e.target.value),
          })
        }
      >
        <option value="">Select age</option>

        {Array.from(
          { length: 28 },
          (_, index) => index + 18
        ).map((age) => (
          <option key={age} value={age}>
            {age} years
          </option>
        ))}
      </SelectField>
    </div>
  );
}