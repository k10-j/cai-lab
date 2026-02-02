import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, Brain, Globe, Lock, Users, 
  Clock, Calendar, Award, CheckCircle, ArrowRight 
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const pillars = [
  {
    icon: Shield,
    title: "Cyber Safety",
    topics: [
      "Identifying online threats and scams",
      "Safe social media practices",
      "Recognizing and preventing cyberbullying",
      "Reporting mechanisms and seeking help",
    ],
    color: "bg-primary",
  },
  {
    icon: Brain,
    title: "AI Literacy",
    topics: [
      "Understanding how AI works",
      "AI in everyday life",
      "Ethical considerations of AI",
      "Future of AI and careers",
    ],
    color: "bg-sky",
  },
  {
    icon: Globe,
    title: "Digital Citizenship",
    topics: [
      "Online etiquette and communication",
      "Digital footprint awareness",
      "Respecting intellectual property",
      "Positive online contributions",
    ],
    color: "bg-success",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    topics: [
      "Password best practices",
      "Personal data protection",
      "Secure browsing habits",
      "Two-factor authentication",
    ],
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Critical Thinking",
    topics: [
      "Evaluating online sources",
      "Recognizing misinformation",
      "Fact-checking techniques",
      "Media literacy skills",
    ],
    color: "bg-navy-light",
  },
];

const deliveryOptions = [
  {
    title: "6-Week Program",
    description: "Comprehensive in-school curriculum with weekly sessions",
    duration: "6 weeks",
    sessions: "12 sessions (2 per week)",
    ideal: "Schools seeking full integration",
    features: ["Complete 5-pillar coverage", "Homework assignments", "Capstone project", "Parent workshops", "Certificate of completion"],
  },
  {
    title: "3-Day Bootcamp",
    description: "Intensive workshop format for school holidays",
    duration: "3 days",
    sessions: "6 sessions (2 per day)",
    ideal: "Holiday programs, summer camps",
    features: ["Concentrated learning", "Hands-on activities", "Team challenges", "Take-home resources", "Certificate of completion"],
  },
  {
    title: "CAI Club",
    description: "Ongoing after-school club with continuous learning",
    duration: "Ongoing",
    sessions: "Weekly 90-min sessions",
    ideal: "Extended engagement",
    features: ["Peer mentorship", "Advanced topics", "Guest speakers", "Project-based learning", "Leadership opportunities"],
  },
];

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs - CAI Lab 5-Pillar Digital Literacy Curriculum</title>
        <meta 
          name="description" 
          content="Explore CAI Lab's 5-Pillar curriculum covering cyber safety, AI literacy, digital citizenship, privacy, and critical thinking. Multiple delivery formats available." 
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 right-20 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
                  Our Curriculum
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Programs & Curriculum
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Our comprehensive 5-Pillar Model provides age-appropriate digital education 
                  for students aged 8-18, with flexible delivery options to suit any school's needs.
                </p>
              </motion.div>
            </div>
          </section>

          {/* 5 Pillars Detail */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  The 5-Pillar Model
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Each pillar is carefully designed with age-appropriate content and hands-on activities
                </p>
              </motion.div>

              <div className="space-y-6">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-2xl p-8 shadow-card"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className={`w-16 h-16 ${pillar.color} rounded-xl flex items-center justify-center shrink-0`}>
                        <pillar.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                          {pillar.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {pillar.topics.map((topic) => (
                            <div key={topic} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Delivery Options */}
          <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Flexible Delivery Options
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the format that works best for your school or organization
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {deliveryOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                  >
                    <div className="p-8">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {option.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {option.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{option.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{option.sessions}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{option.ideal}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-8">
                        {option.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="px-8 pb-8">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/partners">Learn More</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Age Groups */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Age-Appropriate Learning
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our curriculum is carefully tailored for different age groups, ensuring 
                    content is engaging, relevant, and developmentally appropriate.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <h4 className="font-display text-lg font-bold text-foreground mb-2">
                        Junior (Ages 8-11)
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Fun, interactive lessons using games and stories to introduce basic online safety concepts.
                      </p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <h4 className="font-display text-lg font-bold text-foreground mb-2">
                        Middle (Ages 12-14)
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Deeper exploration of social media, privacy, and digital footprint with real-world scenarios.
                      </p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <h4 className="font-display text-lg font-bold text-foreground mb-2">
                        Senior (Ages 15-18)
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Advanced topics including AI ethics, career readiness, and digital leadership.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-navy rounded-3xl p-10 text-center"
                >
                  <Award className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                    Certificate of Completion
                  </h3>
                  <p className="text-primary-foreground/80 mb-8">
                    Students who complete the full program receive a CAI Lab Digital Citizen 
                    Certificate, recognized by our partner organizations.
                  </p>
                  <Button variant="hero" asChild>
                    <Link to="/enroll">
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Programs;
