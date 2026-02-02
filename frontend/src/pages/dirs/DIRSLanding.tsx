import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ClipboardCheck, MapPin, TrendingUp, Shield } from "lucide-react";

const STEPS = [
  { label: "Assess", icon: ClipboardCheck, desc: "Take the digital readiness assessment" },
  { label: "Prescribe", icon: MapPin, desc: "Get your personalized learning path" },
  { label: "Track", icon: TrendingUp, desc: "Monitor your progress over time" },
];

export default function DIRSLanding() {
  return (
    <>
      <Helmet>
        <title>DIRS — Digital Intelligence Readiness System | CAI Lab</title>
        <meta
          name="description"
          content="DIRS measures your digital readiness across cyber safety, AI literacy, privacy, and critical thinking — then prescribes a learning path."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-24 bg-gradient-hero overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
                  <Shield className="w-4 h-4" />
                  Digital Intelligence Readiness System
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Discover Your Digital Intelligence
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10">
                  DIRS measures your digital readiness across cyber safety, AI literacy, privacy, and critical thinking — then prescribes a learning path.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/dirs/start">
                      Start DIRS
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <a href="#how-it-works">How It Works</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 3-step strip */}
          <section id="how-it-works" className="py-16 bg-background border-b">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Assess → Prescribe → Track
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border bg-card p-6 text-center shadow-sm"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{step.label}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
