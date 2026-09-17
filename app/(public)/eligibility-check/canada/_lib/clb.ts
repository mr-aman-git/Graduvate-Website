import type {
  LanguageScores,
  LanguageTest,
} from "../crs";

export interface CLBScores {
  speaking: number;
  listening: number;
  reading: number;
  writing: number;
}

/**
 * IELTS General Training → CLB
 */
function ieltsToCLB(
  skill: keyof LanguageScores,
  score: number
): number {
  if (skill === "listening") {
    if (score >= 8.5) return 10;
    if (score >= 8) return 9;
    if (score >= 7.5) return 8;
    if (score >= 6) return 7;
    if (score >= 5.5) return 6;
    if (score >= 5) return 5;
    if (score >= 4.5) return 4;

    return 0;
  }

  if (skill === "reading") {
    if (score >= 8) return 10;
    if (score >= 7) return 9;
    if (score >= 6.5) return 8;
    if (score >= 6) return 7;
    if (score >= 5) return 6;
    if (score >= 4) return 5;
    if (score >= 3.5) return 4;

    return 0;
  }

  if (skill === "writing") {
    if (score >= 7.5) return 10;
    if (score >= 7) return 9;
    if (score >= 6.5) return 8;
    if (score >= 6) return 7;
    if (score >= 5.5) return 6;
    if (score >= 5) return 5;
    if (score >= 4) return 4;

    return 0;
  }

  // Speaking
  if (score >= 7.5) return 10;
  if (score >= 7) return 9;
  if (score >= 6.5) return 8;
  if (score >= 6) return 7;
  if (score >= 5.5) return 6;
  if (score >= 5) return 5;
  if (score >= 4) return 4;

  return 0;
}

/**
 * CELPIP-General → CLB
 */
function celpipToCLB(score: number): number {
  if (score >= 10) return 10;
  if (score >= 9) return 9;
  if (score >= 8) return 8;
  if (score >= 7) return 7;
  if (score >= 6) return 6;
  if (score >= 5) return 5;
  if (score >= 4) return 4;

  return 0;
}

/**
 * PTE Core → CLB
 */
function pteToCLB(
  skill: keyof LanguageScores,
  score: number
): number {
  if (skill === "speaking") {
    if (score >= 89) return 10;
    if (score >= 84) return 9;
    if (score >= 76) return 8;
    if (score >= 68) return 7;
    if (score >= 59) return 6;
    if (score >= 51) return 5;

    return 0;
  }

  if (skill === "listening") {
    if (score >= 89) return 10;
    if (score >= 82) return 9;
    if (score >= 71) return 8;
    if (score >= 60) return 7;
    if (score >= 50) return 6;
    if (score >= 39) return 5;

    return 0;
  }

  if (skill === "reading") {
    if (score >= 88) return 10;
    if (score >= 78) return 9;
    if (score >= 69) return 8;
    if (score >= 60) return 7;
    if (score >= 51) return 6;
    if (score >= 42) return 5;

    return 0;
  }

  // Writing
  if (score >= 90) return 10;
  if (score >= 88) return 9;
  if (score >= 79) return 8;
  if (score >= 69) return 7;
  if (score >= 60) return 6;
  if (score >= 51) return 5;

  return 0;
}

export function convertLanguageToCLB(
  test: LanguageTest,
  scores: LanguageScores
): CLBScores {
  return {
    speaking:
      test === "IELTS"
        ? ieltsToCLB("speaking", scores.speaking)
        : test === "CELPIP"
          ? celpipToCLB(scores.speaking)
          : pteToCLB("speaking", scores.speaking),

    listening:
      test === "IELTS"
        ? ieltsToCLB("listening", scores.listening)
        : test === "CELPIP"
          ? celpipToCLB(scores.listening)
          : pteToCLB("listening", scores.listening),

    reading:
      test === "IELTS"
        ? ieltsToCLB("reading", scores.reading)
        : test === "CELPIP"
          ? celpipToCLB(scores.reading)
          : pteToCLB("reading", scores.reading),

    writing:
      test === "IELTS"
        ? ieltsToCLB("writing", scores.writing)
        : test === "CELPIP"
          ? celpipToCLB(scores.writing)
          : pteToCLB("writing", scores.writing),
  };
}

export function minimumCLB(clb: CLBScores): number {
  return Math.min(
    clb.speaking,
    clb.listening,
    clb.reading,
    clb.writing
  );
}

export function allCLBAtLeast(
  clb: CLBScores,
  level: number
): boolean {
  return (
    clb.speaking >= level &&
    clb.listening >= level &&
    clb.reading >= level &&
    clb.writing >= level
  );
}