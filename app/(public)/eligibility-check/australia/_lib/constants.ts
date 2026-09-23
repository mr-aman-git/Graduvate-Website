import type {
  AustraliaVisa,
  EducationLevel,
  OverseasExperience,
  AustralianExperience,
  PartnerStatus,
} from "../australia";

export const AUSTRALIA_PRIMARY = "#1C398E";
export const AUSTRALIA_SECONDARY = "#F4180B";

export const VISA_OPTIONS: {
  value: AustraliaVisa;
  label: string;
  description: string;
}[] = [
  {
    value: "189",
    label: "Subclass 189",
    description: "Skilled Independent",
  },
  {
    value: "190",
    label: "Subclass 190",
    description: "Skilled Nominated",
  },
  {
    value: "491",
    label: "Subclass 491",
    description: "Skilled Work Regional",
  },
];

export const AGE_POINTS: Record<string, number> = {
  "18-24": 25,
  "25-32": 30,
  "33-39": 25,
  "40-44": 15,
  "45+": 0,
};

export const ENGLISH_POINTS = {
  none: 0,
  competent: 0,
  proficient: 10,
  superior: 20,
} as const;

export const EDUCATION_POINTS: Record<EducationLevel, number> = {
  doctorate: 20,
  bachelor: 15,
  diploma: 10,
  trade: 10,
  other: 10,
  none: 0,
};

export const OVERSEAS_EXPERIENCE_POINTS: Record<
  OverseasExperience,
  number
> = {
  none: 0,
  "3-4": 5,
  "5-7": 10,
  "8-plus": 15,
};

export const AUSTRALIAN_EXPERIENCE_POINTS: Record<
  AustralianExperience,
  number
> = {
  none: 0,
  "1-2": 5,
  "3-4": 10,
  "5-7": 15,
  "8-plus": 20,
};

export const PARTNER_POINTS: Record<PartnerStatus, number> = {
  single: 10,
  "partner-skilled": 10,
  "partner-english": 5,
  "partner-no-points": 0,
};

export const NOMINATION_POINTS: Record<AustraliaVisa, number> = {
  "189": 0,
  "190": 5,
  "491": 15,
};

export const ENGLISH_TESTS = [
  "IELTS",
  "PTE Academic",
  "TOEFL iBT",
  "OET",
  "Cambridge C1 Advanced",
  "CELPIP General",
  "LANGUAGECERT Academic",
  "Michigan English Test",
];

export const STEPS = [
  {
    id: 1,
    title: "Profile",
  },
  {
    id: 2,
    title: "English",
  },
  {
    id: 3,
    title: "Education",
  },
  {
    id: 4,
    title: "Experience",
  },
  {
    id: 5,
    title: "Study",
  },
  {
    id: 6,
    title: "Specialist",
  },
  {
    id: 7,
    title: "Partner",
  },
  {
    id: 8,
    title: "Nomination",
  },
];