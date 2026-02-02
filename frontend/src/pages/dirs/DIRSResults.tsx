import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScoreCard } from "@/components/dirs/ScoreCard";
import { PathwayCard } from "@/components/dirs/PathwayCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, RotateCcw, ArrowRight, Award, AlertCircle } from "lucide-react";
import { getResults } from "@/lib/dirs-storage";
import { PILLAR_LABELS } from "@/lib/dirs-scoring";
import type { DIRSResults as DIRSResultsType, PillarId } from "@/lib/dirs-types";

export default function DIRSResultsPage() {
  const [results, setResults] = useState<DIRSResultsType | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setResults(getResults());
  }, []);

  const handleDownloadReport = () => {
    window.print();
  };

  if (!results) {
    return (
      <>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-28 pb-24">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground">No results found. Take the assessment first.</p>
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

  const badgeVariant =
    results.readinessLevel === "Ready"
      ? "default"
      : results.readinessLevel === "Developing"
        ? "secondary"
        : "outline";

  return (
    <>
      <Helmet>
        <title>Your DIRS Results | CAI Lab</title>
        <meta
          name="description"
          content="Your Digital Intelligence Readiness profile and recommended learning path."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-28 pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div ref={printRef} className="space-y-10 print:pt-4">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Your Digital Intelligence Profile
                </h1>
                <p className="text-muted-foreground">
                  Assessment completed {new Date(results.timestamp).toLocaleDateString()}
                </p>
              </motion.div>

              {/* Overall score + badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="rounded-2xl border-2 border-primary/20 bg-card p-8 text-center shadow-lg">
                  <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">
                    {results.overallScore}
                  </div>
                  <p className="text-muted-foreground mb-4">Overall Readiness</p>
                  <Badge variant={badgeVariant} className="text-base px-4 py-1.5 gap-1">
                    <Award className="w-4 h-4" />
                    {results.readinessLevel}
                  </Badge>
                </div>
              </motion.div>

              {/* Pillar score cards */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Pillar Scores
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(Object.keys(results.pillarScores) as PillarId[]).map((pillar) => (
                    <ScoreCard
                      key={pillar}
                      label={PILLAR_LABELS[pillar]}
                      score={results.pillarScores[pillar]}
                    />
                  ))}
                </div>
              </motion.section>

              {/* Priority Gaps */}
              {results.priorityGaps.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    Priority Gaps
                  </h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-2">
                        Focus on improving these areas first:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {results.priorityGaps.map((pillar) => (
                          <li key={pillar} className="font-medium">
                            {PILLAR_LABELS[pillar]} ({results.pillarScores[pillar]}/100)
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.section>
              )}

              {/* Recommended Pathway */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <PathwayCard
                  title="Recommended Pathway"
                  pathway={results.pathway}
                  recommendedModules={results.recommendedModules}
                  estimatedTime="4–6 weeks"
                />
              </motion.section>
            </div>

            {/* Actions - hide in print */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center print:hidden">
              <Button variant="accent" size="lg" asChild className="gap-2">
                <Link to="/dirs/dashboard">
                  Start My Path
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadReport} className="gap-2">
                <Download className="w-4 h-4" />
                Download My Report
              </Button>
              <Button variant="ghost" size="lg" asChild className="gap-2">
                <Link to="/dirs/assessment">
                  <RotateCcw className="w-4 h-4" />
                  Retake Assessment
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
