import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowRight, Image } from "lucide-react";
import { Helmet } from "react-helmet-async";

const upcomingEvents = [
  {
    title: "Summer Digital Safety Bootcamp",
    date: "July 15-17, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Limassol Community Center",
    ageGroup: "Ages 10-14",
    spots: "20 spots remaining",
    description: "Intensive 3-day program covering all 5 pillars of digital literacy with hands-on activities and team challenges.",
    featured: true,
  },
  {
    title: "AI for Teens Workshop",
    date: "August 5, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Nicosia Innovation Hub",
    ageGroup: "Ages 14-18",
    spots: "15 spots remaining",
    description: "Deep dive into artificial intelligence, its applications, and ethical considerations for older students.",
    featured: false,
  },
  {
    title: "Parent & Child Cyber Safety Day",
    date: "August 20, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Online (Zoom)",
    ageGroup: "Families",
    spots: "50 spots remaining",
    description: "Interactive session for parents and children to learn about online safety together.",
    featured: false,
  },
];

const pastEvents = [
  {
    title: "Spring Bootcamp 2024",
    date: "April 2024",
    participants: 45,
    location: "Larnaca",
  },
  {
    title: "School Partnership Launch",
    date: "March 2024",
    participants: 120,
    location: "Nicosia",
  },
  {
    title: "Winter Digital Literacy Week",
    date: "February 2024",
    participants: 80,
    location: "Paphos",
  },
];

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events & Bootcamps - CAI Lab Digital Literacy Workshops</title>
        <meta 
          name="description" 
          content="Join CAI Lab's upcoming bootcamps and workshops. Intensive digital literacy programs for students of all ages. Register for our next event today!" 
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
                  Events & Bootcamps
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Upcoming Events
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Join our intensive bootcamps and workshops to gain essential digital 
                  skills in a fun, engaging environment.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Upcoming Events */}
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
                  Register for an Event
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Limited spots available – secure your place today
                </p>
              </motion.div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-card rounded-2xl overflow-hidden shadow-card ${
                      event.featured ? "border-2 border-accent" : ""
                    }`}
                  >
                    {event.featured && (
                      <div className="bg-accent px-6 py-2">
                        <span className="text-accent-foreground text-sm font-semibold">
                          Featured Event
                        </span>
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4 text-primary" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4 text-primary" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4 text-primary" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="w-4 h-4 text-primary" />
                              {event.ageGroup}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start lg:items-end gap-3">
                          <span className="text-sm text-success font-medium">
                            {event.spots}
                          </span>
                          <Button variant={event.featured ? "accent" : "default"} asChild>
                            <Link to="/enroll">
                              Register Now
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Past Events */}
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
                  Past Events Gallery
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See what our previous bootcamps and workshops looked like
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-card"
                  >
                    <div className="aspect-video bg-gradient-navy flex items-center justify-center">
                      <Image className="w-12 h-12 text-primary-foreground/30" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span>{event.participants} participants</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  View Full Gallery
                </Button>
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
                  Want to Host an Event?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                  We can bring our bootcamps to your school, community center, or organization.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;
