import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  User, School, CheckCircle, ArrowRight, Calendar, 
  Users, Clock, Award
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const programOptions = [
  {
    title: "6-Week School Program",
    duration: "6 weeks",
    sessions: "12 sessions",
    price: "Contact for pricing",
  },
  {
    title: "3-Day Bootcamp",
    duration: "3 days",
    sessions: "6 sessions",
    price: "€150 per student",
  },
  {
    title: "CAI Club Membership",
    duration: "Ongoing",
    sessions: "Weekly",
    price: "€50/month",
  },
];

const Enroll = () => {
  const [enrollmentType, setEnrollmentType] = useState<"parent" | "school" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Registration submitted!",
      description: "We'll contact you within 24 hours to confirm your enrollment.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setEnrollmentType(null);
  };

  return (
    <>
      <Helmet>
        <title>Enroll in CAI Lab - Register for Digital Literacy Programs</title>
        <meta 
          name="description" 
          content="Register for CAI Lab's digital literacy programs. Enrollment available for parents and schools. Secure your spot in our next program today." 
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
                  Enroll Now
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Start Your Digital Journey
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Register for our programs and give your child the digital skills they need to thrive.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Enrollment Type Selection */}
          {!enrollmentType && (
            <section className="py-24 bg-background">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    How Would You Like to Enroll?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Select the option that best describes you
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setEnrollmentType("parent")}
                    className="bg-card rounded-2xl p-10 shadow-card hover:shadow-card-hover transition-all text-left group border-2 border-transparent hover:border-accent"
                  >
                    <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <User className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      I'm a Parent
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Enroll your child in our bootcamps, workshops, or ongoing programs.
                    </p>
                    <span className="text-accent font-semibold flex items-center gap-2">
                      Continue as Parent
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setEnrollmentType("school")}
                    className="bg-card rounded-2xl p-10 shadow-card hover:shadow-card-hover transition-all text-left group border-2 border-transparent hover:border-primary"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <School className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      I Represent a School
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Bring CAI Lab programs to your school or organization.
                    </p>
                    <span className="text-primary font-semibold flex items-center gap-2">
                      Continue as School
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </section>
          )}

          {/* Registration Form */}
          {enrollmentType && (
            <section className="py-24 bg-background">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setEnrollmentType(null)}
                    className="text-muted-foreground hover:text-foreground mb-8 flex items-center gap-2"
                  >
                    ← Back to selection
                  </motion.button>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="lg:col-span-2"
                    >
                      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                        {enrollmentType === "parent" ? "Parent Registration" : "School Registration"}
                      </h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {enrollmentType === "parent" ? (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="parentName">Parent/Guardian Name</Label>
                                <Input id="parentName" required className="h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" required className="h-12" />
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" required className="h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="childAge">Child's Age</Label>
                                <Input id="childAge" type="number" min="8" max="18" required className="h-12" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="childName">Child's Name</Label>
                              <Input id="childName" required className="h-12" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="program">Preferred Program</Label>
                              <select
                                id="program"
                                className="w-full h-12 rounded-lg border border-input bg-background px-4"
                                required
                              >
                                <option value="">Select a program</option>
                                <option value="bootcamp">3-Day Bootcamp</option>
                                <option value="club">CI Club Membership</option>
                                <option value="workshop">Individual Workshop</option>
                              </select>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="schoolName">School/Organization Name</Label>
                              <Input id="schoolName" required className="h-12" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="contactName">Contact Person</Label>
                                <Input id="contactName" required className="h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="position">Position/Role</Label>
                                <Input id="position" required className="h-12" />
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="schoolEmail">Email Address</Label>
                                <Input id="schoolEmail" type="email" required className="h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="schoolPhone">Phone Number</Label>
                                <Input id="schoolPhone" type="tel" required className="h-12" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="students">Estimated Number of Students</Label>
                              <Input id="students" type="number" required className="h-12" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="schoolProgram">Program Interest</Label>
                              <select
                                id="schoolProgram"
                                className="w-full h-12 rounded-lg border border-input bg-background px-4"
                                required
                              >
                                <option value="">Select a program</option>
                                <option value="full">6-Week Full Program</option>
                                <option value="bootcamp">3-Day Bootcamp</option>
                                <option value="club">CAI Club</option>
                                <option value="custom">Custom Program</option>
                              </select>
                            </div>
                          </>
                        )}
                        
                        <div className="space-y-2">
                          <Label htmlFor="notes">Additional Notes (Optional)</Label>
                          <Textarea 
                            id="notes" 
                            rows={4}
                            placeholder="Any special requirements or questions?"
                            className="resize-none"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          variant="accent" 
                          size="lg" 
                          disabled={isSubmitting}
                          className="w-full"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Registration"}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </form>
                    </motion.div>

                    {/* Program Info Sidebar */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="bg-secondary rounded-2xl p-6">
                        <h3 className="font-display font-bold text-foreground mb-4">
                          Program Options
                        </h3>
                        <div className="space-y-4">
                          {programOptions.map((program) => (
                            <div key={program.title} className="pb-4 border-b border-border last:border-0 last:pb-0">
                              <p className="font-semibold text-foreground text-sm">
                                {program.title}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {program.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {program.sessions}
                                </span>
                              </div>
                              <p className="text-primary font-medium text-sm mt-2">
                                {program.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-card rounded-2xl p-6 shadow-card">
                        <h3 className="font-display font-bold text-foreground mb-4">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "All course materials",
                            "Certificate of completion",
                            "Take-home resources",
                            "Parent updates",
                            "Ongoing support",
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          Have questions?
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Enroll;
