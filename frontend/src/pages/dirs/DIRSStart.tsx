import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { setOnboarding, getOnboarding } from "@/lib/dirs-storage";
import type { DIRSOnboarding } from "@/lib/dirs-types";

const FOCUS_OPTIONS = [
  "Cyber Safety",
  "AI Literacy",
  "Digital Citizenship",
  "Privacy & Security",
  "Critical Thinking",
  "I'm not sure",
];

const ROLE_OPTIONS = [
  "Student (13–18)",
  "Young Adult (18–25)",
  "Parent exploring for my child",
];

const COMMITMENT_OPTIONS = [
  "10 minutes/day",
  "30 minutes/day",
  "2 hours/week",
  "Weekend only",
];

const CHAT_QUESTIONS = [
  { id: "aiUsage", text: "How often do you use AI tools (e.g., ChatGPT, Copilot)?", options: ["Rarely", "Sometimes", "Often", "Daily"] },
  { id: "cyberRisk", text: "How would you rate your exposure to cyber risks (phishing, scams, privacy)?", options: ["Low", "Medium", "High", "Not sure"] },
  { id: "confidence", text: "How confident do you feel about your digital skills overall?", options: ["Not confident", "Somewhat", "Confident", "Very confident"] },
  { id: "goals", text: "What's your main goal?", options: ["Stay safe online", "Learn AI basics", "Improve critical thinking", "All of the above"] },
];

export default function DIRSStart() {
  const [focusArea, setFocusArea] = useState("");
  const [role, setRole] = useState("");
  const [commitment, setCommitment] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatAnswers, setChatAnswers] = useState<Record<string, string>>({});
  const [chatComplete, setChatComplete] = useState(false);

  useEffect(() => {
    const saved = getOnboarding();
    if (saved) {
      setFocusArea(saved.focusArea || "");
      setRole(saved.role || "");
      setCommitment(saved.commitment || "");
    }
  }, []);

  const saveChoices = () => {
    setOnboarding({
      focusArea,
      role,
      commitment,
      chatAnswers: Object.keys(chatAnswers).length ? chatAnswers : undefined,
    });
  };

  const handleDiscoverPath = () => {
    saveChoices();
    setShowChat(true);
    setChatStep(0);
    setChatAnswers({});
    setChatComplete(false);
  };

  const handleChatAnswer = (questionId: string, value: string) => {
    const next = { ...chatAnswers, [questionId]: value };
    setChatAnswers(next);
    if (chatStep < CHAT_QUESTIONS.length - 1) {
      setChatStep((s) => s + 1);
    } else {
      setChatComplete(true);
      setOnboarding({
        focusArea,
        role,
        commitment,
        chatAnswers: next,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Start DIRS — Help Me Choose | CAI Lab</title>
        <meta
          name="description"
          content="Discover your digital learning path with DIRS. Answer a few questions to get a personalized recommendation."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-28 pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Help Me Choose
              </h1>
              <p className="text-muted-foreground">
                Tell us a bit about yourself so we can suggest the right path.
              </p>
            </motion.div>

            {!showChat ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <Card>
                  <CardHeader>
                    <p className="text-sm font-medium text-muted-foreground">I want to improve my</p>
                    <Select value={focusArea} onValueChange={setFocusArea}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select focus area" />
                      </SelectTrigger>
                      <SelectContent>
                        {FOCUS_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <p className="text-sm font-medium text-muted-foreground">I am</p>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLE_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <p className="text-sm font-medium text-muted-foreground">I can commit to</p>
                    <Select value={commitment} onValueChange={setCommitment}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select commitment" />
                      </SelectTrigger>
                      <SelectContent>
                        {COMMITMENT_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardHeader>
                </Card>

                <div className="flex justify-center pt-4">
                  <Button
                    variant="accent"
                    size="xl"
                    onClick={handleDiscoverPath}
                    className="gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Help Me Discover My Path
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Or skip straight to the assessment:{" "}
                  <Link to="/dirs/assessment" className="text-primary font-medium underline">
                    Start DIRS Assessment
                  </Link>
                </p>
              </motion.div>
            ) : (
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/5 border-b">
                  <div className="flex items-center gap-2 text-primary">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-display font-semibold">CAI Guide</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A few quick questions to personalize your path.
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <AnimatePresence mode="wait">
                    {!chatComplete ? (
                      <motion.div
                        key={chatStep}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-6"
                      >
                        <p className="font-medium text-foreground">
                          {CHAT_QUESTIONS[chatStep].text}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {CHAT_QUESTIONS[chatStep].options.map((opt) => (
                            <Button
                              key={opt}
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleChatAnswer(CHAT_QUESTIONS[chatStep].id, opt)
                              }
                            >
                              {opt}
                            </Button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                      >
                        <p className="text-foreground font-medium">
                          Based on your answers, we recommend taking the full DIRS assessment to get your personalized profile and learning path.
                        </p>
                        <Button variant="accent" size="lg" asChild className="w-full sm:w-auto gap-2">
                          <Link to="/dirs/assessment">
                            Start My DIRS Assessment
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            )}

            {showChat && (
              <div className="mt-6 text-center">
                <Button variant="ghost" onClick={() => setShowChat(false)}>
                  Back to choices
                </Button>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
