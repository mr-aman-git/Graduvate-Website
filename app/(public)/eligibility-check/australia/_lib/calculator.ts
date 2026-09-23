import {
  AGE_POINTS,
  ENGLISH_POINTS,
  EDUCATION_POINTS,
  OVERSEAS_EXPERIENCE_POINTS,
  AUSTRALIAN_EXPERIENCE_POINTS,
  PARTNER_POINTS,
  NOMINATION_POINTS,
} from "./constants";

import type {
  AustraliaFormData,
  AustraliaScoreBreakdown,
} from "../australia";

function getAgePoints(age: number | ""): number {
  if (age === "") return 0;

  if (age >= 18 && age <= 24) {
    return AGE_POINTS["18-24"];
  }

  if (age >= 25 && age <= 32) {
    return AGE_POINTS["25-32"];
  }

  if (age >= 33 && age <= 39) {
    return AGE_POINTS["33-39"];
  }

  if (age >= 40 && age <= 44) {
    return AGE_POINTS["40-44"];
  }

  return 0;
}

function getEmploymentPoints(
  overseas: number,
  australian: number
): {
  overseas: number;
  australian: number;
} {
  const total = Math.min(overseas + australian, 20);

  if (overseas + australian <= 20) {
    return {
      overseas,
      australian,
    };
  }

  const australianAdjusted = Math.min(australian, 20);
  const overseasAdjusted = Math.min(
    overseas,
    Math.max(0, 20 - australianAdjusted)
  );

  return {
    overseas: overseasAdjusted,
    australian: total - overseasAdjusted,
  };
}

export function calculateAustraliaPoints(
  data: AustraliaFormData
): AustraliaScoreBreakdown {
  const age = getAgePoints(data.age);

  const english = ENGLISH_POINTS[data.englishLevel];

  const education = EDUCATION_POINTS[data.education];

  const overseasRaw =
    OVERSEAS_EXPERIENCE_POINTS[data.overseasExperience];

  const australianRaw =
    AUSTRALIAN_EXPERIENCE_POINTS[data.australianExperience];

  const employment = getEmploymentPoints(
    overseasRaw,
    australianRaw
  );

  const specialistEducation = data.specialistEducation ? 10 : 0;

  const australianStudy = data.australianStudy ? 5 : 0;

  const regionalStudy = data.regionalStudy ? 5 : 0;

  const professionalYear = data.professionalYear ? 5 : 0;

  const communityLanguage = data.communityLanguage ? 5 : 0;

  const partner = PARTNER_POINTS[data.partnerStatus];

  const nomination =
    data.visa !== ""
      ? NOMINATION_POINTS[data.visa]
      : 0;

  const total =
    age +
    english +
    education +
    employment.overseas +
    employment.australian +
    specialistEducation +
    australianStudy +
    regionalStudy +
    professionalYear +
    communityLanguage +
    partner +
    nomination;

  return {
    age,
    english,
    overseasExperience: employment.overseas,
    australianExperience: employment.australian,
    education,
    specialistEducation,
    australianStudy,
    regionalStudy,
    professionalYear,
    communityLanguage,
    partner,
    nomination,
    total,
  };
}

export function getAustraliaResult(total: number) {
  if (total >= 80) {
    return {
      label: "Strong Score",
      description:
        "Your points score is above the current minimum points-test threshold.",
    };
  }

  if (total >= 65) {
    return {
      label: "Meets Threshold",
      description:
        "Your score meets the current 65-point threshold.",
    };
  }

  if (total >= 50) {
    return {
      label: "Below Threshold",
      description:
        "Your score is currently below the 65-point threshold.",
    };
  }

  return {
    label: "Low Score",
    description:
      "Your current calculated score is below the points-test threshold.",
  };
}