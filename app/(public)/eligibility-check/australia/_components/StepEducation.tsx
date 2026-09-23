"use client";

import RadioCard from "../_common/RadioCard";
import type {
  AustraliaFormData,
  EducationLevel,
} from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

const OPTIONS: {
  value: EducationLevel;
  label: string;
  description: string;
  points: number;
}[] = [
  {
    value: "doctorate",
    label: "Doctorate",
    description:
      "Doctoral qualification recognised for the points test.",
    points: 20,
  },
  {
    value: "bachelor",
    label: "Bachelor / Master level",
    description:
      "Bachelor or higher recognised qualification.",
    points: 15,
  },
  {
    value: "diploma",
    label: "Diploma",
    description:
      "Recognised diploma qualification.",
    points: 10,
  },
  {
    value: "trade",
    label: "Trade qualification",
    description:
      "Recognised trade qualification.",
    points: 10,
  },
  {
    value: "other",
    label: "Other recognised qualification",
    description:
      "Qualification recognised by the relevant assessing authority.",
    points: 10,
  },
];

export default function StepEducation({
  data,
  updateData,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Tell us about your education
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Select your highest relevant qualification.
        </p>
      </div>

      <div className="grid gap-3">
        {OPTIONS.map((option) => (
          <RadioCard
            key={option.value}
            label={option.label}
            description={option.description}
            badge={`${option.points} pts`}
            selected={
              data.education === option.value
            }
            onClick={() =>
              updateData({
                education: option.value,
              })
            }
          />
        ))}
      </div>
    </div>
  );
}