"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import ServicesBento from "@/components/ServicesBento";
import CaseStudyCard from "@/components/CaseStudyCard";
import TestimonialCard from "@/components/TestimonialCard";
import ChromaGrid from "@/components/ChromaGrid";
import ContactForm from "@/components/ContactForm";
import TextPressure from "@/components/TextPressure";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {

  const caseStudies = [
    {
      title: "E-Commerce Redesign",
      client: "TechStyle Co.",
      tags: ["UX Research", "Prototyping", "Testing"],
      problem:
        "High cart abandonment rate (68%) and confusing checkout flow leading to lost revenue and customer frustration.",
      solution:
        "Conducted user interviews and heatmap analysis, simplified checkout to 3 steps, and implemented one-click purchase for returning customers.",
      results:
        "Reduced cart abandonment by 35%, increased conversion rate by 24%, and improved customer satisfaction score from 3.2 to 4.6/5.",
    },
    {
      title: "Healthcare Portal",
      client: "MediCare Systems",
      tags: ["User Research", "Accessibility", "Design System"],
      problem:
        "Complex patient portal with poor accessibility compliance and low adoption rate among elderly users.",
      solution:
        "Developed WCAG 2.1 AA compliant design system, conducted accessibility testing with diverse user groups, and created simplified navigation patterns.",
      results:
        "Achieved 100% WCAG compliance, increased portal usage by 52%, and reduced support calls by 40%.",
    },
    {
      title: "SaaS Dashboard",
      client: "DataFlow Analytics",
      tags: ["Data Visualization", "Prototyping", "Usability"],
      problem:
        "Data-heavy dashboard overwhelming users with information overload and unclear value proposition for key metrics.",
      solution:
        "Designed progressive disclosure patterns, customizable widgets, and interactive data visualizations with contextual help.",
      results:
        "User task completion improved by 45%, time-to-insight reduced by 60%, and Net Promoter Score increased from 32 to 68.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Aurorealis transformed our product. Their research-driven approach uncovered insights we never knew existed, resulting in a 40% increase in user engagement.",
      author: "Sarah Chen",
      role: "Product Director",
      company: "TechStyle Co.",
    },
    {
      quote:
        "The team's attention to detail and collaborative spirit made the entire design process seamless. They truly understand what it means to put users first.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "MediCare Systems",
    },
    {
      quote:
        "Working with Aurorealis was a game-changer. They didn't just design interfaces, they solved complex business problems through thoughtful UX.",
      author: "Emily Watson",
      role: "VP of Product",
      company: "DataFlow Analytics",
    },
  ];

  const team = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Lead UX Researcher",
      handle: "@alexrivera",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Jordan Kim",
      subtitle: "Senior UX/UI Designer",
      handle: "@jordankim",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "Sam Patel",
      subtitle: "Interaction Designer",
      handle: "@sampatel",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <Section id="home" className="min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[200px] md:h-[250px] mb-6"
          >
            <TextPressure
              text="Aurorealis"
              textColor="#FFFFFF"
              width={true}
              weight={true}
              italic={true}
              alpha={false}
              flex={true}
              stroke={false}
              scale={false}
              minFontSize={40}
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We design research-driven interfaces that connect users with the
            products they love.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="text-lg px-8"
            >
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("work")}
              className="text-lg px-8"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              <svg
                className="w-6 h-6 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              End-to-end UX design and research solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <ServicesBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </div>
      </Section>

      {/* Work Section */}
      <Section id="work">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world projects, measurable results, and the stories behind
              them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} {...study} index={index} />
            ))}
          </div>

          {/* Testimonials */}
          <Separator className="my-16" />

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">What Clients Say</h3>
            <p className="text-lg text-muted-foreground">
              Trusted by leading companies to deliver exceptional experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aurorealis is a UX design and research agency dedicated to creating
              intuitive digital experiences. We combine deep user insights with
              innovative design thinking to solve complex problems and drive
              business results.
            </p>
          </motion.div>

          <Separator className="my-16" />

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Meet the Team</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Experienced designers and researchers committed to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ChromaGrid
              items={team}
              radius={300}
              columns={3}
              rows={1}
              damping={0.45}
              fadeOut={0.6}
            />
          </motion.div>

          <Separator className="my-16" />

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Aurorealis</h3>
            <p className="text-muted-foreground mb-6">
              Crafting digital experiences through research and design.
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Dribbble
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aurorealis Enterprises. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
