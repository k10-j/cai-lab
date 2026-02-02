/** DIRS localStorage helpers */

import type {
  DIRSOnboarding,
  DIRSAssessmentAnswers,
  DIRSResults,
  DIRSProgress,
  PillarScores,
} from "./dirs-types";

const KEYS = {
  onboarding: "dirs_onboarding",
  assessment: "dirs_assessment",
  results: "dirs_results",
  resultsHistory: "dirs_results_history",
  progress: "dirs_progress",
} as const;

export function getOnboarding(): DIRSOnboarding | null {
  try {
    const raw = localStorage.getItem(KEYS.onboarding);
    return raw ? (JSON.parse(raw) as DIRSOnboarding) : null;
  } catch {
    return null;
  }
}

export function setOnboarding(data: DIRSOnboarding): void {
  localStorage.setItem(KEYS.onboarding, JSON.stringify({ ...data, completedAt: new Date().toISOString() }));
}

export function getAssessment(): DIRSAssessmentAnswers | null {
  try {
    const raw = localStorage.getItem(KEYS.assessment);
    return raw ? (JSON.parse(raw) as DIRSAssessmentAnswers) : null;
  } catch {
    return null;
  }
}

export function setAssessment(data: DIRSAssessmentAnswers): void {
  localStorage.setItem(KEYS.assessment, JSON.stringify(data));
}

export function getResults(): DIRSResults | null {
  try {
    const raw = localStorage.getItem(KEYS.results);
    return raw ? (JSON.parse(raw) as DIRSResults) : null;
  } catch {
    return null;
  }
}

export function setResults(data: DIRSResults): void {
  localStorage.setItem(KEYS.results, JSON.stringify(data));
  const history = getResultsHistory();
  history.unshift(data);
  localStorage.setItem(KEYS.resultsHistory, JSON.stringify(history.slice(0, 10)));
}

export function getResultsHistory(): DIRSResults[] {
  try {
    const raw = localStorage.getItem(KEYS.resultsHistory);
    return raw ? (JSON.parse(raw) as DIRSResults[]) : [];
  } catch {
    return [];
  }
}

export function getProgress(): DIRSProgress | null {
  try {
    const raw = localStorage.getItem(KEYS.progress);
    return raw ? (JSON.parse(raw) as DIRSProgress) : null;
  } catch {
    return null;
  }
}

export function setProgress(data: DIRSProgress): void {
  localStorage.setItem(KEYS.progress, JSON.stringify(data));
}

export function updateProgressWithCheckpoint(
  label: string,
  overallScore: number,
  pillarScores: PillarScores
): void {
  const baseline = getResults();
  if (!baseline) return;
  const existing = getProgress();
  const checkpoint = {
    label,
    timestamp: new Date().toISOString(),
    overallScore,
    pillarScores,
  };
  const progress: DIRSProgress = existing
    ? { ...existing, checkpoints: [...existing.checkpoints, checkpoint] }
    : { baseline, checkpoints: [checkpoint] };
  setProgress(progress);
}
