import { motion } from "framer-motion";
import { Shield, Brain, Globe, Lock, Users } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Cyber Safety",
    description: "Learn to identify and protect against online threats, cyberbullying, and digital predators.",
    color: "bg-primary",
  },
  {
    icon: Brain,
    title: "AI Literacy",
    description: "Understand artificial intelligence, its applications, and ethical considerations in the digital age.",
    color: "bg-sky",
  },
  {
    icon: Globe,
    title: "Digital Citizenship",
    description: "Navigate the digital world responsibly with proper etiquette, rights, and responsibilities.",
    color: "bg-success",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description: "Master personal data protection, password management, and secure online practices.",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Critical Thinking",
    description: "Develop skills to evaluate online information, recognize misinformation, and make informed decisions.",
    color: "bg-navy-light",
  },
];

export const PillarsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-semibold mb-4">
            Our Curriculum
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The 5-Pillar Model
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our comprehensive curriculum covers five essential areas of digital intelligence, 
            preparing students for a safe and successful future in the digital world.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Hover accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${pillar.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
