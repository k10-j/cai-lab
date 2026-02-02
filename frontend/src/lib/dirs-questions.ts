/** DIRS assessment questions by pillar (5 per pillar, Likert 1–5) */

import type { PillarId } from "./dirs-types";

export const ASSESSMENT_QUESTIONS: Record<PillarId, string[]> = {
  cyberSafety: [
    "I know how to create strong passwords and keep them safe.",
    "I can recognize phishing attempts or suspicious links.",
    "I understand how to stay safe on social media and gaming platforms.",
    "I know what to do if I experience cyberbullying.",
    "I keep my devices and apps updated for security.",
  ],
  aiLiteracy: [
    "I understand what AI is and how it is used in everyday tools.",
    "I can identify when I am interacting with AI (e.g., chatbots, recommendations).",
    "I think about whether AI-generated content might be biased or wrong.",
    "I know how to use AI tools in a way that supports my learning.",
    "I am curious about how AI might affect my future work and life.",
  ],
  digitalCitizenship: [
    "I think about how my online actions affect others.",
    "I respect others' privacy and don't share their information without permission.",
    "I try to verify information before sharing it online.",
    "I follow community guidelines and report harmful content when needed.",
    "I balance screen time with other activities.",
  ],
  privacySecurity: [
    "I review and adjust privacy settings on apps and accounts.",
    "I know what personal information I should not share online.",
    "I understand that companies may collect and use my data.",
    "I use secure connections (e.g., HTTPS) when possible.",
    "I know how to report if my account or data has been compromised.",
  ],
  criticalThinking: [
    "I question whether online information is accurate before trusting it.",
    "I consider who created content and why they might have shared it.",
    "I notice when algorithms might be shaping what I see (e.g., recommendations).",
    "I can compare different sources to form my own view.",
    "I reflect on how digital media affects my mood and choices.",
  ],
};

export const AGE_RANGES = ["Under 13", "13–18", "18–25", "25+"];
