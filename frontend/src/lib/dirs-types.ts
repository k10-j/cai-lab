/** DIRS — Digital Intelligence Readiness System — shared types */

export const PILLAR_IDS = [
  "cyberSafety",
  "aiLiteracy",
  "digitalCitizenship",
  "privacySecurity",
  "criticalThinking",
] as const;

export type PillarId = (typeof PILLAR_IDS)[number];

export const PILLAR_LABELS: Record<PillarId, string> = {
  cyberSafety: "Cyber Safety",
  aiLiteracy: "AI Literacy",
  digitalCitizenship: "Digital Citizenship",
  privacySecurity: "Privacy & Security",
  criticalThinking: "Critical Thinking",
};

export type ReadinessLevel = "Foundational" | "Developing" | "Ready";

export interface PillarScores {
  cyberSafety: number;
  aiLiteracy: number;
  digitalCitizenship: number;
  privacySecurity: number;
  criticalThinking: number;
}

export interface DIRSOnboarding {
  focusArea: string;
  role: string;
  commitment: string;
  chatAnswers?: Record<string, string>;
  completedAt?: string;
}

export interface DIRSBasicInfo {
  firstName?: string;
  ageRange?: string;
  location?: string;
}

export interface DIRSAssessmentAnswers {
  basicInfo: DIRSBasicInfo;
  cyberSafety: number[];
  aiLiteracy: number[];
  digitalCitizenship: number[];
  privacySecurity: number[];
  criticalThinking: number[];
}

export interface DIRSResults {
  timestamp: string;
  overallScore: number;
  readinessLevel: ReadinessLevel;
  pillarScores: PillarScores;
  priorityGaps: PillarId[];
  pathway: string;
  recommendedModules: string[];
}

export interface DIRSProgressCheckpoint {
  label: string;
  timestamp: string;
  overallScore: number;
  pillarScores: PillarScores;
}

export interface DIRSProgress {
  baseline: DIRSResults;
  checkpoints: DIRSProgressCheckpoint[];
}
