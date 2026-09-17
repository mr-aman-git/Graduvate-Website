export type MaritalStatus = "single" | "married";

export type EducationLevel =
  | "high_school"
  | "one_year"
  | "two_year"
  | "bachelor"
  | "two_or_more"
  | "masters"
  | "phd";

export type LanguageTest = "IELTS" | "CELPIP" | "PTE";

export type WorkExperience =
  | "none"
  | "one_two"
  | "three_plus";

export type CanadianWorkExperience =
  | "none"
  | "one"
  | "two"
  | "three"
  | "four"
  | "five_plus";

export type CanadianEducation =
  | "none"
  | "one_two_year"
  | "three_plus";

export interface LanguageScores {
  speaking: number;
  listening: number;
  reading: number;
  writing: number;
}

export interface LanguageProfile {
  test: LanguageTest;
  scores: LanguageScores;
}

export interface SpouseProfile {
  education: EducationLevel;
  languageCLB: number;
  canadianWork: CanadianWorkExperience;
}

export interface CRSFormData {
  age: number;
  maritalStatus: MaritalStatus;

  education: EducationLevel;

  firstLanguage: LanguageProfile;

  secondLanguageEnabled: boolean;
  secondLanguage?: LanguageProfile;

  foreignWorkExperience: WorkExperience;
  canadianWorkExperience: CanadianWorkExperience;

  canadianEducation: CanadianEducation;

  siblingInCanada: boolean;
  provincialNomination: boolean;

  frenchNCLC: number;

  spouse?: SpouseProfile;
}

export interface CRSBreakdown {
  age: number;
  education: number;
  firstLanguage: number;
  secondLanguage: number;
  canadianWork: number;
  spouse: number;
  transferability: number;
  additional: number;
  total: number;
}

export interface CRSResult {
  score: number;
  breakdown: CRSBreakdown;
  firstLanguageCLB: LanguageScores;
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  location: string;
}