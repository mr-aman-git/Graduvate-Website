"use client";

import RadioCard from "../_common/RadioCard";
import type {
  AustraliaFormData,
  PartnerStatus,
} from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

const OPTIONS: {
  value: PartnerStatus;
  label: string;
  description: string;
  points: number;
}[] = [
  {
    value: "single",
    label: "I am single",
    description:
      "No spouse or de facto partner",
    points: 10,
  },
  {
    value: "partner-skilled",
    label: "Partner meets skilled requirements",
    description:
      "Partner satisfies the applicable skilled partner criteria",
    points: 10,
  },
  {
    value: "partner-english",
    label: "Partner has competent English",
    description:
      "Partner meets competent English requirement",
    points: 5,
  },
  {
    value: "partner-no-points",
    label: "Partner does not qualify for partner points",
    description:
      "No partner points claimed",
    points: 0,
  },
];

export default function StepPartner({
  data,
  updateData,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          What about your partner?
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Select the option that best matches your
          circumstances.
        </p>
      </div>

      <div className="grid gap-3">
        {OPTIONS.map((option) => (
          <RadioCard
            key={option.value}
            label={option.label}
            description={option.description}
            badge={`+${option.points}`}
            selected={
              data.partnerStatus === option.value
            }
            onClick={() =>
              updateData({
                partnerStatus: option.value,
              })
            }
          />
        ))}
      </div>
    </div>
  );
}