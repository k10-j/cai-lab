import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, BookOpen, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    name: "Kate Lorna Iriza",
    role: "Founder & Chief Executive Officer",
    bio: "Cybersecurity expert with 15+ years in digital education. Former consultant to EU digital safety initiatives.",
  },
  {
    name: "Michael Andreou",
    role: "Head of Curriculum",
    bio: "Former teacher and education technology specialist. Designs engaging, age-appropriate content.",
  },
  {
    name: "Tiffany Emma Umwali",
    role: "Chief Operations Officer",
    bio: "Experienced in youth programs and community outreach. Ensures smooth delivery of all CAI Lab programs.",
  },
  {
    name: "Michael Peter",
    role: "Technology Lead",
    bio: "Software engineer passionate about making technology accessible and safe for young learners.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Every program is designed with the safety and wellbeing of students as the top priority.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in our curriculum, delivery, and student outcomes.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Digital literacy education should be accessible to all students regardless of background.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "We continuously update our content to address emerging digital trends and threats.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CAI Lab - Our Mission to Empower Digital Citizens</title>
        <meta 
          name="description" 
          content="Learn about CAI Lab's mission to equip youth with digital literacy and cyber safety skills. Meet our team and discover why we're passionate about digital education." 
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
                  About Us
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Our Story
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  CAI Lab was founded with a clear and forward-looking vision: to equip young people and institutions
                  with the digital intelligence required to navigate today's connected world safely, responsibly, and confidently.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card rounded-2xl p-10 shadow-card"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower young people, students, and organizations with practical digital literacy, 
                    safety awareness, and AI building 
                    the skills needed to thrive in an increasingly digital society.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card rounded-2xl p-10 shadow-card"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where young people and communities are digitally empowered capable of making informed decisions, protecting their digital identities, and contributing positively to global digital ecosystems. 
                
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why CAI Lab */}
          <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why CAI Lab?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Despite growing up in a digital era, many young people and communities lack formal education about 
                  online safety. With cyber threats evolving rapidly and AI becoming ubiquitous, 
                  the need for structured digital literacy education has never been greater.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-card text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section id="team" className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-semibold mb-4">
                  Our Team
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet the People Behind CAI Lab
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Passionate educators, technologists, and child safety advocates working together
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                      <div className="w-20 h-20 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground text-center mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent text-sm text-center font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm text-center">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-navy">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Ready to Make a Difference?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                  Join us in our mission to create a generation of digitally literate, 
                  cyber-aware young citizens.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/partners">
                      Partner With Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
