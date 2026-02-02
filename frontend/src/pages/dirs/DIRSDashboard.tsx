import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  TrendingUp,
  RotateCcw,
  Target,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import { getResults, getProgress } from "@/lib/dirs-storage";
import { PILLAR_LABELS } from "@/lib/dirs-scoring";
import type { PillarId, PillarScores } from "@/lib/dirs-types";

/** Simulated improvement for checkpoints (can be replaced with real tracking later) */
function simulateCheckpointScores(baseline: PillarScores, step: number): PillarScores {
  const delta = 7 + step * 4; // +7 first checkpoint, +11 second
  return {
    cyberSafety: Math.min(100, baseline.cyberSafety + (baseline.cyberSafety < 70 ? delta : 0)),
    aiLiteracy: Math.min(100, baseline.aiLiteracy + (baseline.aiLiteracy < 70 ? delta : 0)),
    digitalCitizenship: Math.min(100, baseline.digitalCitizenship + (baseline.digitalCitizenship < 70 ? delta : 0)),
    privacySecurity: Math.min(100, baseline.privacySecurity + (baseline.privacySecurity < 70 ? delta : 0)),
    criticalThinking: Math.min(100, baseline.criticalThinking + (baseline.criticalThinking < 70 ? delta : 0)),
  };
}

function overallFromPillars(p: PillarScores): number {
  return Math.round(
    (p.cyberSafety + p.aiLiteracy + p.digitalCitizenship + p.privacySecurity + p.criticalThinking) / 5
  );
}

export default function DIRSDashboard() {
  const [baselineScore, setBaselineScore] = useState<number | null>(null);
  const [baselinePillars, setBaselinePillars] = useState<PillarScores | null>(null);
  const [checkpoints, setCheckpoints] = useState<{ label: string; overall: number; pillars: PillarScores }[]>([]);
  const [nextActions, setNextActions] = useState<PillarId[]>([]);

  useEffect(() => {
    const results = getResults();
    const progress = getProgress();

    if (results) {
      setBaselineScore(results.overallScore);
      setBaselinePillars(results.pillarScores);
      const gaps = [...results.priorityGaps];
      setNextActions(gaps.length > 0 ? gaps : (["cyberSafety", "aiLiteracy"] as PillarId[]));
    }

    if (progress?.checkpoints && progress.checkpoints.length > 0) {
      setCheckpoints(
        progress.checkpoints.map((c) => ({
          label: c.label,
          overall: c.overallScore,
          pillars: c.pillarScores,
        }))
      );
      return;
    }

    if (results) {
      const sim1 = simulateCheckpointScores(results.pillarScores, 0);
      const sim2 = simulateCheckpointScores(sim1, 1);
      setCheckpoints([
        { label: "After Module 1", overall: overallFromPillars(sim1), pillars: sim1 },
        { label: "After Module 2", overall: overallFromPillars(sim2), pillars: sim2 },
      ]);
    }
  }, []);

  if (baselineScore === null) {
    return (
      <>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-28 pb-24">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground">No assessment data. Complete DIRS first.</p>
              <Button variant="accent" asChild className="mt-4">
                <Link to="/dirs/assessment">Take DIRS Assessment</Link>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const latestOverall = checkpoints.length > 0 ? checkpoints[checkpoints.length - 1].overall : baselineScore;
  const latestPillars = checkpoints.length > 0 ? checkpoints[checkpoints.length - 1].pillars : baselinePillars!;

  return (
    <>
      <Helmet>
        <title>DIRS Progress Dashboard | CAI Lab</title>
        <meta
          name="description"
          content="Track your digital intelligence progress over time."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-28 pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Your Progress
              </h1>
              <p className="text-muted-foreground">
                Baseline: {baselineScore} → Latest: {latestOverall}
              </p>
            </motion.div>

            {/* Score progression */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <Card>
                <CardHeader>
                  <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Score Over Time
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Baseline</span>
                    <span className="font-semibold">{baselineScore}</span>
                  </div>
                  {checkpoints.map((cp, i) => (
                    <div key={cp.label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{cp.label}</span>
                        <span className="font-semibold text-primary">{cp.overall}</span>
                      </div>
                      <Progress value={Math.min(100, cp.overall)} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.section>

            {/* Pillar improvements */}
            {baselinePillars && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Pillar: Baseline vs Latest
                </h2>
                <div className="space-y-4">
                  {(Object.keys(baselinePillars) as PillarId[]).map((pillar) => {
                    const base = baselinePillars[pillar];
                    const latest = latestPillars[pillar];
                    const diff = latest - base;
                    return (
                      <Card key={pillar}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{PILLAR_LABELS[pillar]}</span>
                            <span className="text-sm text-muted-foreground">
                              {base} → {latest}
                              {diff > 0 && (
                                <span className="text-green-600 ml-1">+{diff}</span>
                              )}
                            </span>
                          </div>
                          <Progress value={latest} className="h-2" />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* Next Best Actions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10"
            >
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Next Best Actions
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Focus on these pillars to improve your readiness:
                  </p>
                  <ul className="space-y-2">
                    {nextActions.map((pillar) => (
                      <li
                        key={pillar}
                        className="flex items-center justify-between rounded-lg border p-3"
                      >
                        <span className="font-medium">{PILLAR_LABELS[pillar]}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            <div className="flex justify-center">
              <Button variant="accent" size="lg" asChild className="gap-2">
                <Link to="/dirs/assessment">
                  <RotateCcw className="w-4 h-4" />
                  Run Re-Assessment
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
