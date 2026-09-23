import type { AustraliaFormData } from "../australia";

export function validateAustraliaStep(
  step: number,
  data: AustraliaFormData
): string | null {
  switch (step) {
    case 1:
      if (!data.visa) {
        return "Please select a visa subclass.";
      }

      if (
        data.age === "" ||
        data.age < 18 ||
        data.age > 44
      ) {
        return "Please enter an age between 18 and 44.";
      }

      return null;

    case 2:
      if (data.englishLevel === "none") {
        return "Please select your English proficiency.";
      }

      return null;

    case 3:
      if (data.education === "none") {
        return "Please select your highest qualification.";
      }

      return null;

    default:
      return null;
  }
}