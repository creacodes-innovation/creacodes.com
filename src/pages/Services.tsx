import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Monitor, Megaphone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import websiteimg  from '../assets/websiteimg.webp'
import appdevimg from '../assets/appdeve.jpg'
import uiuximg from '../assets/uiux.jpeg'
import softwaredev from '../assets/softwaredeve.png'
import digitalMarketingImg from '../assets/digitalmarketing.jpg'
import { useEffect } from "react";

const services = [
  {
    icon: Code,
    img: websiteimg,
    title: "Website Development",
    desc: "We build responsive, high-performance websites using modern frameworks. From landing pages to complex web applications, every site is crafted for speed, SEO, and user experience.",
    benefits: ["Tailored responsive design", "SEO-focused architecture", "Optimized speed & performance", "Flexible CMS solutions"],
  },
  {
    icon: Smartphone,
    img: appdevimg,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. We build apps that are intuitive, performant, and designed to delight your users.",
    benefits: ["iOS & Android", "Cross-platform solutions", "Push notifications", "Offline support"],
  },
  {
    icon: Palette,
    img: uiuximg,
    title: "UI/UX Design",
    desc: "User-centered design that combines aesthetics with usability. We create interfaces that are beautiful, intuitive, and drive engagement.",
    benefits: ["User research & personas", "Wireframing & prototyping", "Visual design systems", "Usability testing"],
  },
  {
    icon: Monitor,
    img: softwaredev,
    title: "Software Development",
    desc: "Custom enterprise software solutions built to scale. We design robust architectures that grow with your business and integrate seamlessly.",
    benefits: ["Scalable architecture", "API development", "Database design", "Cloud deployment"],
  },
  {
    icon: Megaphone,
    img: digitalMarketingImg,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that increase visibility and drive conversions. We help your brand stand out in the crowded digital landscape.",
    benefits: ["SEO & SEM", "Social media marketing", "Content strategy", "Analytics & reporting"],
  },
];

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <section className="section-padding hero-bg">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions to take your business to the next level.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <service.icon size={28} className="text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="hero" size="sm">
                      Get Started <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
                <div
                  className={`rounded-2xl overflow-hidden border border-border ${i % 2 === 1 ? "md:order-1" : ""
                    }`}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center">
          <SectionHeading
            badge="Let's Talk"
            title="Have a Project in Mind?"
            description="Tell us about your requirements and we'll craft the perfect solution for you."
          />
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-8">
              Contact Us <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Services;
