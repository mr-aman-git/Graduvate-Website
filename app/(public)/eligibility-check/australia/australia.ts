export type AustraliaVisa = "189" | "190" | "491";

export type EnglishLevel =
  | "none"
  | "competent"
  | "proficient"
  | "superior";

export type EducationLevel =
  | "doctorate"
  | "bachelor"
  | "diploma"
  | "trade"
  | "other"
  | "none";

export type OverseasExperience =
  | "none"
  | "3-4"
  | "5-7"
  | "8-plus";

export type AustralianExperience =
  | "none"
  | "1-2"
  | "3-4"
  | "5-7"
  | "8-plus";

export type PartnerStatus =
  | "single"
  | "partner-skilled"
  | "partner-english"
  | "partner-no-points";

export interface AustraliaFormData {
  visa: AustraliaVisa | "";

  age: number | "";

  englishLevel: EnglishLevel;
  englishTest: string;

  education: EducationLevel;

  overseasExperience: OverseasExperience;
  australianExperience: AustralianExperience;

  australianStudy: boolean;
  regionalStudy: boolean;
  specialistEducation: boolean;
  professionalYear: boolean;
  communityLanguage: boolean;

  partnerStatus: PartnerStatus;
}

export interface AustraliaScoreBreakdown {
  age: number;
  english: number;
  overseasExperience: number;
  australianExperience: number;
  education: number;
  specialistEducation: number;
  australianStudy: number;
  regionalStudy: number;
  professionalYear: number;
  communityLanguage: number;
  partner: number;
  nomination: number;
  total: number;
}

export interface AustraliaLeadData {
  name: string;
  email: string;
  phone: string;
  location: string;
}