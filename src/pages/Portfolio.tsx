import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import kbsportfolio from '../assets/kbsportfolio.png'
import fitness from '../assets/fitness.png'
import saas from '../assets/saas.jpg'
import restraunt from '../assets/restruant.png'
import lms from '../assets/lms.png'
import brd from '../assets/Brand Identity.jpg'

const categories = ["All", "Web", "Mobile", "Design", "Marketing"];

const projects = [
  { title: "E-Commerce Platform", category: "Web", desc: "Full-stack e-commerce with payments and inventory management.", tech: ["React", "Node.js", "MongoDB"], img : kbsportfolio},
  { title: "Health & Fitness App", category: "Mobile", desc: "Cross-platform fitness tracking app with real-time analytics.", tech: ["React Native", "Firebase"], img: fitness  },
  { title: "SaaS Dashboard", category: "Design", desc: "Modern analytics dashboard with data visualization and insights.", tech: ["Figma", "React", "D3.js"], img: saas },
  { title: "Restaurant Booking", category: "Web", desc: "Online reservation system with real-time availability.", tech: ["Next.js", "PostgreSQL"], img: restraunt},
  { title: "Learning Platform", category: "Web", desc: "Interactive e-learning platform with video courses.", tech: ["React", "AWS", "Stripe"], img: lms },
  { title: "Brand Identity", category: "Design", desc: "Complete brand identity and marketing collateral.", tech: ["Illustrator", "Figma"], img: brd },
];

const Portfolio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-16">
      <section className="section-padding hero-bg">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Portfolio</h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Explore the projects we've brought to life for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden border border-border hover-lift group"
                >
                  <div className={`h-48 bg-gradient-to-br flex items-center justify-center relative`}>
                    <img src={project.img} alt=""  className="h-full w-full object-cover"/>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                        
                        <ExternalLink size={14} className="text-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-card">
                    <span className="text-xs text-accent font-medium">{project.category}</span>
                    <h3 className="font-semibold text-foreground mt-1 mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
