import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Stepper } from "@/components/dirs/Stepper";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PILLAR_IDS, PILLAR_LABELS } from "@/lib/dirs-scoring";
import { ASSESSMENT_QUESTIONS, AGE_RANGES } from "@/lib/dirs-questions";
import type { DIRSAssessmentAnswers, DIRSBasicInfo, PillarId } from "@/lib/dirs-types";
import { getAssessment, setAssessment } from "@/lib/dirs-storage";
import {
  computePillarScores,
  buildResults,
} from "@/lib/dirs-scoring";
import { setResults } from "@/lib/dirs-storage";

const STEPS = [
  { label: "Basic info", short: "Info" },
  ...PILLAR_IDS.map((id) => ({ label: PILLAR_LABELS[id], short: PILLAR_LABELS[id].split(" ")[0] })),
];

const LIKERT_LABELS = [
  { value: "1", label: "Strongly disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly agree" },
];

const EMPTY_ANSWERS: DIRSAssessmentAnswers = {
  basicInfo: {},
  cyberSafety: [],
  aiLiteracy: [],
  digitalCitizenship: [],
  privacySecurity: [],
  criticalThinking: [],
};

function getPillarAnswers(answers: DIRSAssessmentAnswers, pillar: PillarId): number[] {
  return answers[pillar] ?? [];
}

function setPillarAnswer(
  answers: DIRSAssessmentAnswers,
  pillar: PillarId,
  questionIndex: number,
  value: number
): DIRSAssessmentAnswers {
  const arr = [...(answers[pillar] ?? [])];
  arr[questionIndex] = value;
  return { ...answers, [pillar]: arr };
}

export default function DIRSAssessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<DIRSAssessmentAnswers>(EMPTY_ANSWERS);

  useEffect(() => {
    const saved = getAssessment();
    if (saved) setAnswers(saved);
  }, []);

  useEffect(() => {
    setAssessment(answers);
  }, [answers]);

  const currentPillar = step >= 1 ? PILLAR_IDS[step - 1] : null;
  const pillarQuestions = currentPillar ? ASSESSMENT_QUESTIONS[currentPillar] : [];
  const pillarAnswers = currentPillar ? getPillarAnswers(answers, currentPillar) : [];

  const canProceed =
    step === 0
      ? true
      : pillarAnswers.length === pillarQuestions.length &&
        pillarQuestions.every((_, i) => pillarAnswers[i] !== undefined && pillarAnswers[i] >= 1);

  const handleBasicInfo = (field: keyof DIRSBasicInfo, value: string) => {
    setAnswers((a) => ({
      ...a,
      basicInfo: { ...a.basicInfo, [field]: value || undefined },
    }));
  };

  const handlePillarAnswer = (questionIndex: number, value: number) => {
    if (!currentPillar) return;
    setAnswers((a) => setPillarAnswer(a, currentPillar, questionIndex, value));
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
    } else {
      const pillarScores = computePillarScores({
        cyberSafety: answers.cyberSafety,
        aiLiteracy: answers.aiLiteracy,
        digitalCitizenship: answers.digitalCitizenship,
        privacySecurity: answers.privacySecurity,
        criticalThinking: answers.criticalThinking,
      });
      const results = buildResults(pillarScores, new Date().toISOString());
      setResults(results);
      navigate("/dirs/results");
    }
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  return (
    <>
      <Helmet>
        <title>DIRS Assessment | CAI Lab</title>
        <meta
          name="description"
          content="Take the Digital Intelligence Readiness assessment. Answer questions across five pillars to get your personalized profile."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-28 pb-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <Stepper steps={STEPS} currentStep={step} className="mb-10" />

            <Card>
              <CardHeader>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {STEPS[step].label}
                </h2>
              </CardHeader>
              <CardContent className="space-y-8">
                {step === 0 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="firstName">First name or nickname (optional)</Label>
                      <Input
                        id="firstName"
                        placeholder="e.g. Alex"
                        value={answers.basicInfo.firstName ?? ""}
                        onChange={(e) => handleBasicInfo("firstName", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Age range (optional)</Label>
                      <Select
                        value={answers.basicInfo.ageRange ?? ""}
                        onValueChange={(v) => handleBasicInfo("ageRange", v)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          {AGE_RANGES.map((r) => (
                            <SelectItem key={r} value={r}>
                              {r}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Country or city (optional)</Label>
                      <Input
                        id="location"
                        placeholder="e.g. Dublin, Ireland"
                        value={answers.basicInfo.location ?? ""}
                        onChange={(e) => handleBasicInfo("location", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}

                {currentPillar &&
                  pillarQuestions.map((q, i) => (
                    <div key={i} className="space-y-3">
                      <p className="font-medium text-foreground">{q}</p>
                      <RadioGroup
                        value={String(pillarAnswers[i] ?? "")}
                        onValueChange={(v) => handlePillarAnswer(i, parseInt(v, 10))}
                        className="flex flex-col gap-2"
                      >
                        {LIKERT_LABELS.map((opt) => (
                          <div
                            key={opt.value}
                            className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-muted/50"
                          >
                            <RadioGroupItem value={opt.value} id={`q${i}-${opt.value}`} />
                            <Label
                              htmlFor={`q${i}-${opt.value}`}
                              className="flex-1 cursor-pointer text-sm font-normal"
                            >
                              {opt.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={handleBack} disabled={step === 0} className="gap-1">
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    variant="accent"
                    onClick={handleNext}
                    disabled={step > 0 && !canProceed}
                    className="gap-1"
                  >
                    {step < STEPS.length - 1 ? (
                      <>
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </>
                    ) : (
                      "Submit & See Results"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
