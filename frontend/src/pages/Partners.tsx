import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  School, Building, Heart, CheckCircle, ArrowRight,
  Users, Award, BookOpen, Shield, Download
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const partnershipModels = [
  {
    icon: School,
    title: "Full School Program",
    description: "Comprehensive integration into your school curriculum",
    features: [
      "Complete 6-week curriculum",
      "Teacher training included",
      "Parent engagement sessions",
      "Progress tracking & reports",
      "Certification for students",
      "Ongoing support",
    ],
    ideal: "Schools wanting full integration",
    color: "bg-primary",
  },
  {
    icon: Building,
    title: "Bootcamp Partnership",
    description: "Intensive workshops during holidays or special events",
    features: [
      "3-day intensive program",
      "All materials provided",
      "Expert facilitators",
      "Flexible scheduling",
      "Certificate of completion",
      "Post-bootcamp resources",
    ],
    ideal: "Holiday programs, special events",
    color: "bg-sky",
  },
  {
    icon: Heart,
    title: "CSR Sponsorship",
    description: "Sponsor programs for underserved schools",
    features: [
      "Brand visibility",
      "Impact reporting",
      "Employee engagement options",
      "Tax benefits",
      "Media coverage",
      "Community recognition",
    ],
    ideal: "Corporate social responsibility",
    color: "bg-accent",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Enhanced Child Protection",
    description: "Demonstrate commitment to student digital safety",
  },
  {
    icon: Award,
    title: "School Reputation",
    description: "Position your school as a leader in digital education",
  },
  {
    icon: Users,
    title: "Teacher Development",
    description: "Upskill your staff in digital literacy topics",
  },
  {
    icon: BookOpen,
    title: "Curriculum Enhancement",
    description: "Add valuable content to your existing programs",
  },
];

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Partner With CAI Lab - School Partnership Opportunities</title>
        <meta 
          name="description" 
          content="Partner with CAI Lab to bring digital literacy education to your school. Multiple partnership models available including full programs, bootcamps, and CSR sponsorship." 
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
                  For Schools & Partners
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Partner With Us
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Join the growing network of schools and organizations committed to 
                  preparing young people for digital success. We offer flexible partnership 
                  models to suit your needs.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Partnership Models */}
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
                  Partnership Models
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the partnership model that best fits your organization
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {partnershipModels.map((model, index) => (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                  >
                    <div className={`${model.color} p-6`}>
                      <model.icon className="w-10 h-10 text-primary-foreground mb-4" />
                      <h3 className="font-display text-xl font-bold text-primary-foreground">
                        {model.title}
                      </h3>
                    </div>
                    <div className="p-8">
                      <p className="text-muted-foreground mb-6">
                        {model.description}
                      </p>
                      <p className="text-sm text-primary font-medium mb-4">
                        Ideal for: {model.ideal}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {model.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/contact">Inquire Now</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Partner With CAI Lab?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Partnering with CAI Lab demonstrates your commitment to student safety 
                    and positions your organization at the forefront of digital education.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card rounded-xl p-5 shadow-card"
                      >
                        <benefit.icon className="w-8 h-8 text-primary mb-3" />
                        <h4 className="font-display font-bold text-foreground mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card rounded-3xl p-10 shadow-card"
                >
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    Download Partnership Packet
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Get detailed information about our programs, pricing, and partnership 
                    process in our comprehensive partnership packet.
                  </p>
                  <Button variant="accent" size="lg" className="w-full">
                    <Download className="w-5 h-5" />
                    Download PDF
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Or contact us for a personalized consultation
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Case Study / Testimonial */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-navy rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto"
              >
                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "Partnering with CAI Lab has been transformative for our school. The program 
                  is well-structured, the facilitators are excellent, and we've seen a real 
                  change in how our students approach online safety. Parents have been 
                  incredibly supportive too."
                </p>
                <div>
                  <p className="font-display font-bold text-primary-foreground text-lg">
                    Stavros Demetriou
                  </p>
                  <p className="text-primary-foreground/60">
                    IT Coordinator, Grammar School Nicosia
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss how CAI Lab can support your school's 
                  digital education goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/contact">
                      Schedule a Meeting
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/programs">View Programs</Link>
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

export default Partners;
