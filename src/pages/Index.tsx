import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, Monitor, Megaphone, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import kbsportfolio from '../assets/kbsportfolio.png'
import fitness from '../assets/fitness.png'
import saas from '../assets/saas.jpg'
import { useEffect } from "react";

const services = [
  { icon: Code, title: "Website Development", desc: "Custom, high-performance websites that deliver results." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces that users love." },
  { icon: Monitor, title: "Software Development", desc: "Scalable enterprise software tailored to your needs." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven strategies to grow your digital presence." },
];

const testimonials = [
  { name: "Riyas", role: "CEO, Resto", text: "Creacodes transformed our vision into a stunning digital product. Their team is exceptional.", rating: 5 },
  { name: "Midhun", role: "Founder, BLOOM", text: "Professional, innovative, and delivered on time. Highly recommend their services.", rating: 5 },
  { name: "Arjun Nair", role: "CTO, DataFlow", text: "Outstanding quality and attention to detail. They truly understand modern tech.", rating: 5 },
];

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", img: kbsportfolio },
  { title: "Health & Fitness App", category: "Mobile App", img: fitness },
  { title: "SaaS Dashboard", category: "UI/UX Design", img: saas },
];

const Index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-bg opacity-80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 text-sm mb-6">
              Innovate · Build · Grow
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              We Build Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Creacodes Innovation delivers cutting-edge IT solutions — from stunning websites to powerful mobile apps — helping businesses thrive in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8">
                  Get a Free Quote <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="lg" className="text-base px-8">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in Kochi, Kerala, Creacodes Innovation is a forward-thinking IT company dedicated to building world-class digital products. We combine creativity with technology to deliver solutions that make an impact.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "30+", label: "Projects Delivered" },
                { num: "30+", label: "Happy Clients" },
                { num: "3+", label: "Years Experience" },
                { num: "10+", label: "Team Members" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-6 border border-border text-center hover-lift">
                  <div className="text-3xl font-bold text-accent mb-1">{stat.num}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading
            badge="Services"
            title="What We Do Best"
            description="End-to-end digital solutions tailored to your business needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline">
                View All Services <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            badge="Portfolio"
            title="Our Recent Work"
            description="A glimpse of the projects we've brought to life."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden border border-border hover-lift group"
              >
                <div className={`h-48 bg-gradient-to-br flex items-center justify-center`}>
                  <img src={project.img} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-5 bg-card">
                  <span className="text-xs text-accent font-medium">{project.category}</span>
                  <h3 className="font-semibold text-foreground mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio">
              <Button variant="outline">
                View Full Portfolio <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 hero-bg opacity-90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
              Let's discuss your project and bring your ideas to life with cutting-edge technology.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base px-8">
                Start Your Project <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Index;
