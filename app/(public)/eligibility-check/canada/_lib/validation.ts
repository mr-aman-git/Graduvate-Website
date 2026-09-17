import type {
  CRSFormData,
  LeadData,
} from "../crs";

export function validateStep(
  step: number,
  data: CRSFormData
): string | null {
  if (step === 1) {
    if (
      !data.age ||
      data.age < 18 ||
      data.age > 60
    ) {
      return "Please enter a valid age.";
    }
  }

  if (step === 2) {
    if (!data.education) {
      return "Please select your highest education.";
    }
  }

  if (step === 3) {
    const scores = data.firstLanguage.scores;

    if (
      scores.speaking < 0 ||
      scores.listening < 0 ||
      scores.reading < 0 ||
      scores.writing < 0
    ) {
      return "Please enter valid language scores.";
    }
  }

  if (step === 4) {
    if (!data.foreignWorkExperience) {
      return "Please select your foreign work experience.";
    }
  }

  if (
    step === 5 &&
    data.maritalStatus === "married" &&
    !data.spouse
  ) {
    return "Please complete your spouse information.";
  }

  return null;
}

export function validateLead(
  lead: LeadData
): string | null {
  if (lead.name.trim().length < 2) {
    return "Please enter your full name.";
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      lead.email
    )
  ) {
    return "Please enter a valid email address.";
  }

  if (
    lead.phone.replace(/\D/g, "").length < 8
  ) {
    return "Please enter a valid mobile number.";
  }

  if (lead.location.trim().length < 2) {
    return "Please enter your location.";
  }

  return null;
}