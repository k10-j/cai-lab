/** DIRS scoring, readiness levels, prescriptions, recommended modules */

import type { PillarId, PillarScores, ReadinessLevel, DIRSResults } from "./dirs-types";
import { PILLAR_IDS, PILLAR_LABELS } from "./dirs-types";

const QUESTIONS_PER_PILLAR = 5;
const MAX_SCORE_PER_PILLAR = 5 * QUESTIONS_PER_PILLAR; // 25

function pillarScoreFromAnswers(answers: number[]): number {
  if (answers.length === 0) return 0;
  const sum = answers.reduce((a, b) => a + b, 0);
  return Math.round((sum / MAX_SCORE_PER_PILLAR) * 100);
}

export function computePillarScores(answers: {
  cyberSafety: number[];
  aiLiteracy: number[];
  digitalCitizenship: number[];
  privacySecurity: number[];
  criticalThinking: number[];
}): PillarScores {
  return {
    cyberSafety: pillarScoreFromAnswers(answers.cyberSafety),
    aiLiteracy: pillarScoreFromAnswers(answers.aiLiteracy),
    digitalCitizenship: pillarScoreFromAnswers(answers.digitalCitizenship),
    privacySecurity: pillarScoreFromAnswers(answers.privacySecurity),
    criticalThinking: pillarScoreFromAnswers(answers.criticalThinking),
  };
}

export function overallScoreFromPillars(pillarScores: PillarScores): number {
  const sum =
    pillarScores.cyberSafety +
    pillarScores.aiLiteracy +
    pillarScores.digitalCitizenship +
    pillarScores.privacySecurity +
    pillarScores.criticalThinking;
  return Math.round(sum / 5);
}

export function getReadinessLevel(overallScore: number): ReadinessLevel {
  if (overallScore >= 70) return "Ready";
  if (overallScore >= 40) return "Developing";
  return "Foundational";
}

export function getPriorityGaps(pillarScores: PillarScores, count = 2): PillarId[] {
  const entries = PILLAR_IDS.map((id) => ({ id, score: pillarScores[id] }));
  entries.sort((a, b) => a.score - b.score);
  return entries.slice(0, count).map((e) => e.id);
}

const PRESCRIPTION_RULES: Record<ReadinessLevel, string> = {
  Foundational: "Cyber Safety Stabilization + Privacy Basics",
  Developing: "AI Literacy Foundations + Critical Thinking Online",
  Ready: "Advanced AI Readiness + Digital Leadership",
};

export function getPathway(readinessLevel: ReadinessLevel): string {
  return PRESCRIPTION_RULES[readinessLevel];
}

const MODULE_SUGGESTIONS: Record<PillarId, string[]> = {
  cyberSafety: [
    "Staying Safe Online: Passwords & Phishing",
    "Social Media Safety & Boundaries",
    "Cyberbullying: Recognize & Respond",
  ],
  aiLiteracy: [
    "What is AI? Introduction for Youth",
    "Using AI Tools Responsibly",
    "AI and Your Future Career",
  ],
  digitalCitizenship: [
    "Digital Footprint & Reputation",
    "Ethical Sharing and Citing",
    "Community Guidelines & Respect",
  ],
  privacySecurity: [
    "Privacy Settings Deep Dive",
    "Data and Who Has Access",
    "Secure Browsing & Devices",
  ],
  criticalThinking: [
    "Spotting Misinformation",
    "Evaluating Sources",
    "Bias and Algorithms",
  ],
};

export function getRecommendedModules(
  priorityGaps: PillarId[],
  count = 5
): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const pillar of priorityGaps) {
    for (const mod of MODULE_SUGGESTIONS[pillar]) {
      if (!seen.has(mod)) {
        seen.add(mod);
        out.push(mod);
        if (out.length >= count) return out;
      }
    }
  }
  return out;
}

export function buildResults(
  pillarScores: PillarScores,
  timestamp: string
): DIRSResults {
  const overallScore = overallScoreFromPillars(pillarScores);
  const readinessLevel = getReadinessLevel(overallScore);
  const priorityGaps = getPriorityGaps(pillarScores);
  const pathway = getPathway(readinessLevel);
  const recommendedModules = getRecommendedModules(priorityGaps);
  return {
    timestamp,
    overallScore,
    readinessLevel,
    pillarScores,
    priorityGaps,
    pathway,
    recommendedModules,
  };
}

export { PILLAR_IDS, PILLAR_LABELS };
