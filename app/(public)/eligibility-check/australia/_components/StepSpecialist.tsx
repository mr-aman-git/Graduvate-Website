"use client";

import RadioCard from "../_common/RadioCard";
import type { AustraliaFormData } from "../australia";

interface Props {
  data: AustraliaFormData;
  updateData: (
    values: Partial<AustraliaFormData>
  ) => void;
}

export default function StepSpecialist({
  data,
  updateData,
}: Props) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Additional qualifications
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Select any additional points you may qualify
          for.
        </p>
      </div>

      <RadioCard
        label="Specialist educational qualification"
        description="Qualifying specialist educational qualification"
        badge="+10"
        selected={data.specialistEducation}
        onClick={() =>
          updateData({
            specialistEducation:
              !data.specialistEducation,
          })
        }
      />

      <RadioCard
        label="Australian Professional Year"
        description="Completed qualifying professional year"
        badge="+5"
        selected={data.professionalYear}
        onClick={() =>
          updateData({
            professionalYear:
              !data.professionalYear,
          })
        }
      />

      <RadioCard
        label="Credentialled community language"
        description="Recognised credentialled community language"
        badge="+5"
        selected={data.communityLanguage}
        onClick={() =>
          updateData({
            communityLanguage:
              !data.communityLanguage,
          })
        }
      />
    </div>
  );
}