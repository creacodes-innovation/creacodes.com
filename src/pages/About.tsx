import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries and embrace emerging technologies to stay ahead." },
  { icon: Heart, title: "Client-Centric", desc: "Your success is our success. We go above and beyond for every project." },
  { icon: Target, title: "Quality", desc: "We deliver pixel-perfect, high-performance solutions every time." },
  { icon: Eye, title: "Transparency", desc: "Open communication and honesty are at the core of our partnerships." },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "Creacodes Innovation established in Kochi, Kerala." },
  { year: "2020", title: "First Major Client", desc: "Secured our first enterprise-level project." },
  { year: "2022", title: "Team Expansion", desc: "Grew to a team of 10+ skilled professionals." },
  { year: "2024", title: "50+ Projects", desc: "Reached the milestone of 50+ successfully delivered projects." },
];

const About = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="section-padding hero-bg">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Creacodes</h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            A passionate team of innovators building the future of digital technology from the heart of Kerala.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading badge="Our Story" title="Building Digital Excellence" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Creacodes Innovation was born from a simple belief: every business deserves world-class digital solutions. Founded in Kochi, Kerala, we've grown from a small team of passionate developers into a full-service IT company.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in creating custom websites, mobile applications, and software solutions that help businesses scale and succeed in the digital age. Our approach combines creativity, technical expertise, and a deep understanding of our clients' needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Target size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To deliver innovative, reliable, and scalable digital solutions that empower businesses to reach their full potential.</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Eye size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To be the go-to technology partner for businesses seeking transformative digital experiences.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <SectionHeading badge="Values" title="What Drives Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Journey */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading badge="Journey" title="Our Milestones" />
        <div className="max-w-2xl mx-auto space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-accent text-sm">{m.year}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
