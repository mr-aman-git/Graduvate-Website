"use client";

import SelectField from "../_common/SelectField";
import type { AustraliaFormData } from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

export default function StepExperience({
  data,
  updateData,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Tell us about your work experience
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Include skilled employment relevant to your
          nominated occupation.
        </p>
      </div>

      <SelectField
        label="Skilled work experience outside Australia"
        value={data.overseasExperience}
        onChange={(e) =>
          updateData({
            overseasExperience:
              e.target.value as AustraliaFormData["overseasExperience"],
          })
        }
      >
        <option value="none">No relevant experience</option>
        <option value="3-4">
          3–4 years
        </option>
        <option value="5-7">
          5–7 years
        </option>
        <option value="8-plus">
          8+ years
        </option>
      </SelectField>

      <SelectField
        label="Skilled work experience in Australia"
        value={data.australianExperience}
        onChange={(e) =>
          updateData({
            australianExperience:
              e.target.value as AustraliaFormData["australianExperience"],
          })
        }
      >
        <option value="none">No relevant experience</option>
        <option value="1-2">
          1–2 years
        </option>
        <option value="3-4">
          3–4 years
        </option>
        <option value="5-7">
          5–7 years
        </option>
        <option value="8-plus">
          8+ years
        </option>
      </SelectField>

      <div className="rounded-xl bg-amber-50 p-4 text-xs leading-5 text-amber-800">
        Overseas and Australian employment points are
        subject to the applicable rules and are capped
        when combined.
      </div>
    </div>
  );
}