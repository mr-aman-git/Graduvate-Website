"use client";

import RadioCard from "../_common/RadioCard";
import type { AustraliaFormData } from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

export default function StepStudy({
  data,
  updateData,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Australian study
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Tell us about qualifying study completed in
          Australia.
        </p>
      </div>

      <RadioCard
        label="I meet the Australian study requirement"
        description="Qualifying Australian study"
        badge="+5"
        selected={data.australianStudy}
        onClick={() =>
          updateData({
            australianStudy: !data.australianStudy,
          })
        }
      />

      <RadioCard
        label="I studied in a designated regional area"
        description="Qualifying regional Australian study"
        badge="+5"
        selected={data.regionalStudy}
        onClick={() =>
          updateData({
            regionalStudy: !data.regionalStudy,
          })
        }
      />
    </div>
  );
}