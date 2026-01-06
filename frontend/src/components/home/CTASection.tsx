import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, School } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Schools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-10 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <School className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Partner With Us
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Bring comprehensive digital literacy education to your school. 
                We offer flexible partnership models tailored to your needs.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/partners">
                  Explore Partnership
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Upcoming Bootcamp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-card rounded-3xl border-2 border-accent shadow-lg group-hover:shadow-xl transition-shadow" />
            <div className="relative p-10 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Next Bootcamp
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Summer Digital Safety Bootcamp
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                3-day intensive program for students aged 10-16. 
                Limited spots available – register early!
              </p>
              <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  July 15-17, 2024
                </span>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link to="/events">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
