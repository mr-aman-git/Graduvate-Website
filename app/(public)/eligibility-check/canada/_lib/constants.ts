import type {
  CanadianWorkExperience,
  EducationLevel,
} from "../crs";

export const EDUCATION_LABELS: Record<EducationLevel, string> = {
  high_school: "Secondary school / High school",
  one_year: "One-year post-secondary credential",
  two_year: "Two-year post-secondary credential",
  bachelor: "Bachelor's degree / 3+ year program",
  two_or_more: "Two or more post-secondary credentials",
  masters: "Master's degree",
  phd: "Doctoral degree / PhD",
};

export const CANADIAN_WORK_LABELS: Record<
  CanadianWorkExperience,
  string
> = {
  none: "None / less than 1 year",
  one: "1 year",
  two: "2 years",
  three: "3 years",
  four: "4 years",
  five_plus: "5+ years",
};

export const STEPS = [
  {
    id: 1,
    title: "Profile",
    description: "Basic information",
  },
  {
    id: 2,
    title: "Education",
    description: "Your education",
  },
  {
    id: 3,
    title: "Language",
    description: "Language ability",
  },
  {
    id: 4,
    title: "Experience",
    description: "Work experience",
  },
  {
    id: 5,
    title: "Additional",
    description: "Extra factors",
  },
  {
    id: 6,
    title: "Result",
    description: "Your CRS result",
  },
];

export const AGE_RANGE = {
  min: 18,
  max: 44,
};

export const MAX_CRS_SCORE = 1200;

export const MAX_TRANSFERABILITY_POINTS = 100;

export const MAX_ADDITIONAL_POINTS = 600;

export const IRCC_DISCLAIMER =
  "This calculator provides an estimated CRS score for informational purposes only. Your official score and immigration eligibility are determined by IRCC based on your complete Express Entry profile and supporting documents.";