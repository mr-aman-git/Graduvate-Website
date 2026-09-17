import {
  MAX_ADDITIONAL_POINTS,
  MAX_CRS_SCORE,
  MAX_TRANSFERABILITY_POINTS,
} from "./constants";

import {
  allCLBAtLeast,
  convertLanguageToCLB,
} from "./clb";

import type {
  CRSBreakdown,
  CRSFormData,
  CRSResult,
  EducationLevel,
} from "../crs";

function getAgePoints(
  age: number,
  married: boolean
): number {
  if (age < 18 || age >= 45) return 0;

  const single: Record<number, number> = {
    18: 99,
    19: 105,
    20: 110,
    21: 110,
    22: 110,
    23: 110,
    24: 110,
    25: 110,
    26: 110,
    27: 110,
    28: 110,
    29: 110,
    30: 105,
    31: 99,
    32: 94,
    33: 88,
    34: 83,
    35: 77,
    36: 72,
    37: 66,
    38: 61,
    39: 55,
    40: 50,
    41: 39,
    42: 28,
    43: 17,
    44: 6,
  };

  const marriedTable: Record<number, number> = {
    18: 90,
    19: 95,
    20: 100,
    21: 100,
    22: 100,
    23: 100,
    24: 100,
    25: 100,
    26: 100,
    27: 100,
    28: 100,
    29: 100,
    30: 95,
    31: 90,
    32: 85,
    33: 80,
    34: 75,
    35: 70,
    36: 65,
    37: 60,
    38: 55,
    39: 50,
    40: 45,
    41: 35,
    42: 25,
    43: 15,
    44: 5,
  };

  return married
    ? marriedTable[age] ?? 0
    : single[age] ?? 0;
}

function getEducationPoints(
  education: EducationLevel,
  married: boolean
): number {
  const table: Record<
    EducationLevel,
    number
  > = {
    high_school: married ? 28 : 30,
    one_year: married ? 84 : 90,
    two_year: married ? 91 : 98,
    bachelor: married ? 112 : 120,
    two_or_more: married ? 119 : 128,
    masters: married ? 126 : 135,
    phd: married ? 140 : 150,
  };

  return table[education];
}

function getLanguagePoints(
  clb: ReturnType<typeof convertLanguageToCLB>,
  married: boolean
): number {
  const table = married
    ? {
        0: 0,
        4: 6,
        5: 6,
        6: 8,
        7: 16,
        8: 22,
        9: 29,
        10: 32,
      }
    : {
        0: 0,
        4: 6,
        5: 6,
        6: 9,
        7: 17,
        8: 23,
        9: 31,
        10: 34,
      };

  return (
    table[clb.speaking as keyof typeof table] +
    table[clb.listening as keyof typeof table] +
    table[clb.reading as keyof typeof table] +
    table[clb.writing as keyof typeof table]
  );
}

function getSecondLanguagePoints(
  clb: ReturnType<typeof convertLanguageToCLB>,
  married: boolean
): number {
  const perAbility = (level: number) => {
    if (level >= 9) return 6;
    if (level >= 7) return 3;
    if (level >= 5) return 1;

    return 0;
  };

  const total =
    perAbility(clb.speaking) +
    perAbility(clb.listening) +
    perAbility(clb.reading) +
    perAbility(clb.writing);

  return Math.min(total, married ? 22 : 24);
}

function getCanadianWorkPoints(
  experience: CRSFormData["canadianWorkExperience"],
  married: boolean
): number {
  const table = {
    none: 0,
    one: married ? 35 : 40,
    two: married ? 46 : 53,
    three: married ? 56 : 64,
    four: married ? 63 : 72,
    five_plus: married ? 70 : 80,
  };

  return table[experience];
}

function getSpouseEducationPoints(
  education: EducationLevel
): number {
  const table: Record<EducationLevel, number> = {
    high_school: 2,
    one_year: 6,
    two_year: 7,
    bachelor: 8,
    two_or_more: 9,
    masters: 10,
    phd: 10,
  };

  return table[education];
}

function getSpouseLanguagePoints(clb: number): number {
  if (clb >= 9) return 20;
  if (clb >= 7) return 12;
  if (clb >= 5) return 4;

  return 0;
}

function getSpouseCanadianWorkPoints(
  experience: CRSFormData["spouse"] extends infer S
    ? S extends { canadianWork: infer W }
      ? W
      : never
    : never
): number {
  const table = {
    none: 0,
    one: 5,
    two: 7,
    three: 8,
    four: 9,
    five_plus: 10,
  };

  return table[
    experience as keyof typeof table
  ];
}

function getTransferabilityPoints(
  data: CRSFormData,
  firstCLB: ReturnType<typeof convertLanguageToCLB>
): number {
  const clb9 = allCLBAtLeast(firstCLB, 9);
  const clb7 = allCLBAtLeast(firstCLB, 7);

  let educationLanguage = 0;

  if (data.education !== "high_school") {
    const oneOrTwoYear = [
      "one_year",
      "two_year",
    ].includes(data.education);

    if (clb9) {
      educationLanguage = oneOrTwoYear
        ? 25
        : 50;
    } else if (clb7) {
      educationLanguage = oneOrTwoYear
        ? 13
        : 25;
    }
  }

  let foreignLanguage = 0;

  if (
    data.foreignWorkExperience !== "none" &&
    clb7
  ) {
    const threePlus =
      data.foreignWorkExperience === "three_plus";

    if (threePlus) {
      foreignLanguage = clb9 ? 50 : 25;
    } else {
      foreignLanguage = clb9 ? 25 : 13;
    }
  }

  let canadianEducation = 0;

  if (
    data.canadianWorkExperience !== "none" &&
    data.education !== "high_school"
  ) {
    const twoPlus = [
      "two",
      "three",
      "four",
      "five_plus",
    ].includes(data.canadianWorkExperience);

    const oneOrTwoYear = [
      "one_year",
      "two_year",
    ].includes(data.education);

    if (oneOrTwoYear) {
      canadianEducation = twoPlus ? 25 : 13;
    } else {
      canadianEducation = twoPlus ? 50 : 25;
    }
  }

  let canadianForeign = 0;

  if (
    data.foreignWorkExperience !== "none" &&
    data.canadianWorkExperience !== "none"
  ) {
    const foreignThreePlus =
      data.foreignWorkExperience === "three_plus";

    const canadianTwoPlus = [
      "two",
      "three",
      "four",
      "five_plus",
    ].includes(data.canadianWorkExperience);

    if (foreignThreePlus) {
      canadianForeign = canadianTwoPlus ? 50 : 25;
    } else {
      canadianForeign = canadianTwoPlus ? 25 : 13;
    }
  }

  return Math.min(
    educationLanguage +
      foreignLanguage +
      canadianEducation +
      canadianForeign,
    MAX_TRANSFERABILITY_POINTS
  );
}

function getAdditionalPoints(
  data: CRSFormData,
  firstCLB: ReturnType<typeof convertLanguageToCLB>
): number {
  let points = 0;

  if (data.siblingInCanada) {
    points += 15;
  }

  if (
    data.canadianEducation === "one_two_year"
  ) {
    points += 15;
  }

  if (
    data.canadianEducation === "three_plus"
  ) {
    points += 30;
  }

  if (data.provincialNomination) {
    points += 600;
  }

  /*
   * French NCLC 7+ bonus.
   *
   * The UI asks for the minimum NCLC level
   * reported by the applicant, so this is an
   * estimate rather than a document validator.
   */
  if (data.frenchNCLC >= 7) {
    const englishMinimum = Math.min(
      firstCLB.speaking,
      firstCLB.listening,
      firstCLB.reading,
      firstCLB.writing
    );

    points += englishMinimum >= 5 ? 50 : 25;
  }

  return Math.min(points, MAX_ADDITIONAL_POINTS);
}

export function calculateCRS(
  data: CRSFormData
): CRSResult {
  const married =
    data.maritalStatus === "married";

  const firstCLB = convertLanguageToCLB(
    data.firstLanguage.test,
    data.firstLanguage.scores
  );

  const secondCLB =
    data.secondLanguageEnabled &&
    data.secondLanguage
      ? convertLanguageToCLB(
          data.secondLanguage.test,
          data.secondLanguage.scores
        )
      : {
          speaking: 0,
          listening: 0,
          reading: 0,
          writing: 0,
        };

  const age = getAgePoints(
    data.age,
    married
  );

  const education = getEducationPoints(
    data.education,
    married
  );

  const firstLanguage =
    getLanguagePoints(firstCLB, married);

  const secondLanguage =
    data.secondLanguageEnabled
      ? getSecondLanguagePoints(
          secondCLB,
          married
        )
      : 0;

  const canadianWork =
    getCanadianWorkPoints(
      data.canadianWorkExperience,
      married
    );

  let spouse = 0;

  if (married && data.spouse) {
    spouse =
      getSpouseEducationPoints(
        data.spouse.education
      ) +
      getSpouseLanguagePoints(
        data.spouse.languageCLB
      ) +
      getSpouseCanadianWorkPoints(
        data.spouse.canadianWork
      );
  }

  const transferability =
    getTransferabilityPoints(
      data,
      firstCLB
    );

  const additional =
    getAdditionalPoints(
      data,
      firstCLB
    );

  const total = Math.min(
    age +
      education +
      firstLanguage +
      secondLanguage +
      canadianWork +
      spouse +
      transferability +
      additional,
    MAX_CRS_SCORE
  );

  const breakdown: CRSBreakdown = {
    age,
    education,
    firstLanguage,
    secondLanguage,
    canadianWork,
    spouse,
    transferability,
    additional,
    total,
  };

  return {
    score: total,
    breakdown,
    firstLanguageCLB: firstCLB,
  };
}

export function getScoreCategory(
  score: number
): "Excellent" | "Good" | "Average" | "Below Average" {
  if (score >= 500) return "Excellent";
  if (score >= 450) return "Good";
  if (score >= 400) return "Average";

  return "Below Average";
}