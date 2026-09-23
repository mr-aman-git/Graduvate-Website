"use client";

import RadioCard from "../_common/RadioCard";
import { NOMINATION_POINTS } from "../_lib/constants";
import type { AustraliaFormData } from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

export default function StepNomination({
  data,
  updateData,
}: Props) {
  const visa = data.visa;

  if (!visa) {
    return (
      <div className="rounded-2xl bg-slate-50 p-6 text-sm text-slate-500">
        Please select your visa subclass first.
      </div>
    );
  }

  const information = {
    "189": {
      title: "Subclass 189",
      description:
        "Skilled Independent visa",
    },
    "190": {
      title: "Subclass 190",
      description:
        "State or Territory nominated visa",
    },
    "491": {
      title: "Subclass 491",
      description:
        "Skilled Work Regional visa",
    },
  };

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Your selected pathway
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Your nomination points depend on the selected
          visa subclass.
        </p>
      </div>

      <RadioCard
        label={information[visa].title}
        description={information[visa].description}
        badge={`+${NOMINATION_POINTS[visa]} points`}
        selected
        onClick={() => {}}
      />

      <div className="rounded-2xl border border-[#1C398E]/10 bg-[#1C398E]/5 p-5">
        <p className="text-sm font-semibold text-[#1C398E]">
          Assessment note
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          This calculator provides an indicative points
          assessment. Meeting the points threshold does
          not guarantee an invitation or visa grant.
        </p>
      </div>
    </div>
  );
}