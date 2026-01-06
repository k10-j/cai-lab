import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, FileText, Video, Users, Download, 
  ArrowRight, ExternalLink, Calendar
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const resourceCategories = [
  {
    icon: FileText,
    title: "Activity Sheets",
    description: "Downloadable worksheets and activities for classroom or home use",
    count: "12 resources",
    color: "bg-primary",
  },
  {
    icon: BookOpen,
    title: "Teacher Guides",
    description: "Comprehensive guides for educators implementing digital literacy",
    count: "5 guides",
    color: "bg-sky",
  },
  {
    icon: Video,
    title: "Video Lessons",
    description: "Recorded webinars and instructional videos",
    count: "8 videos",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Parent Resources",
    description: "Guides and tips for supporting children's digital journey at home",
    count: "6 resources",
    color: "bg-success",
  },
];

const blogPosts = [
  {
    title: "5 Signs Your Child May Be Experiencing Cyberbullying",
    excerpt: "Learn the warning signs and how to have supportive conversations with your child about online harassment.",
    date: "May 15, 2024",
    category: "Cyber Safety",
  },
  {
    title: "Understanding AI: A Parent's Guide",
    excerpt: "Demystifying artificial intelligence and helping your child navigate AI tools responsibly.",
    date: "May 8, 2024",
    category: "AI Literacy",
  },
  {
    title: "Creating Strong Passwords Kids Can Remember",
    excerpt: "Fun techniques for teaching children to create secure, memorable passwords.",
    date: "April 28, 2024",
    category: "Security",
  },
];

const faqs = [
  {
    question: "What age group is CI Lab designed for?",
    answer: "Our programs are tailored for students aged 8-18, with age-appropriate content for Junior (8-11), Middle (12-14), and Senior (15-18) groups.",
  },
  {
    question: "Do I need technical knowledge to help my child?",
    answer: "No! Our parent guides are designed to be accessible to everyone. We explain concepts in simple terms and provide practical tips anyone can follow.",
  },
  {
    question: "How can I continue learning at home?",
    answer: "Download our activity sheets, watch our video lessons together, and use the parent guides to have ongoing conversations about digital safety.",
  },
  {
    question: "Is there a cost for the resources?",
    answer: "Many of our basic resources are free to download. Premium resources and complete curriculum materials are available through our partnership programs.",
  },
];

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources & Learning Hub - CAI Lab Digital Literacy Materials</title>
        <meta 
          name="description" 
          content="Access free digital literacy resources including activity sheets, teacher guides, video lessons, and parent resources. Download materials for classroom or home use." 
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
                  Learning Hub
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Resources
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Free resources for teachers, parents, and students to continue the 
                  digital literacy journey at school and at home.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Resource Categories */}
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
                  Browse Resources
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find materials to support digital literacy learning
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resourceCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group"
                  >
                    <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <p className="text-primary font-medium text-sm">
                      {category.count}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
              >
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Latest Articles
                  </h2>
                  <p className="text-muted-foreground">
                    Insights and tips on digital literacy and cyber safety
                  </p>
                </div>
                <Button variant="outline">
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-video bg-gradient-hero" />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {post.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="parents" className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Find answers to common questions from parents and educators.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/contact">
                      Still have questions? Contact us
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 shadow-card"
                    >
                      <h4 className="font-display font-bold text-foreground mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Download CTA */}
          <section className="py-20 bg-gradient-navy">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Get Started Today
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                  Download our free starter kit with essential resources for families.
                </p>
                <Button variant="hero" size="lg">
                  <Download className="w-5 h-5" />
                  Download Free Starter Kit
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

export default Resources;
