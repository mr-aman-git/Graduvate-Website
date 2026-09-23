import type { EnglishLevel } from "../australia";

export const ENGLISH_LEVELS: {
  value: EnglishLevel;
  label: string;
  points: number;
  description: string;
}[] = [
  {
    value: "none",
    label: "Not assessed",
    points: 0,
    description: "No English proficiency selected",
  },
  {
    value: "competent",
    label: "Competent English",
    points: 0,
    description: "Meets competent English requirement",
  },
  {
    value: "proficient",
    label: "Proficient English",
    points: 10,
    description: "10 points",
  },
  {
    value: "superior",
    label: "Superior English",
    points: 20,
    description: "20 points",
  },
];

export const ENGLISH_TEST_INFO = {
  IELTS: {
    competent: "6 in each component",
    proficient: "7 in each component",
    superior: "8 in each component",
  },

  "PTE Academic": {
    competent: "47 L / 48 R / 51 W / 54 S",
    proficient: "58 L / 59 R / 69 W / 76 S",
    superior: "69 L / 70 R / 85 W / 88 S",
  },

  "TOEFL iBT": {
    competent: "16 L / 16 R / 19 W / 19 S",
    proficient: "22 L / 22 R / 26 W / 24 S",
    superior: "26 L / 27 R / 30 W / 28 S",
  },

  OET: {
    competent: "290 L / 310 R / 290 W / 330 S",
    proficient: "350 L / 360 R / 380 W / 360 S",
    superior: "390 L / 400 R / 420 W / 400 S",
  },

  "Cambridge C1 Advanced": {
    competent: "6 in each component",
    proficient: "175 L / 179 R / 193 W / 194 S",
    superior: "186 L / 190 R / 210 W / 208 S",
  },

  "CELPIP General": {
    competent: "6 in each component",
    proficient: "7 in each component",
    superior: "10 L / 10 R / 12 W / 10 S",
  },

  "LANGUAGECERT Academic": {
    competent: "57 L / 60 R / 64 W / 70 S",
    proficient: "67 L / 71 R / 78 W / 82 S",
    superior: "80 L / 83 R / 89 W / 89 S",
  },

  "Michigan English Test": {
    competent: "56 L / 55 R / 57 W / 48 S",
    proficient: "Not used in this calculator",
    superior: "Not used in this calculator",
  },
} as const;