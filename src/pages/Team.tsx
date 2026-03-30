import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { name: "Arun Kumar", role: "Founder & CEO", expertise: "Strategy & Leadership", initials: "AK" },
  { name: "Sneha Nair", role: "Lead Developer", expertise: "Full-Stack Development", initials: "SN" },
  { name: "Vishnu Prasad", role: "UI/UX Designer", expertise: "Product Design", initials: "VP" },
  { name: "Divya Thomas", role: "Mobile Developer", expertise: "React Native & Flutter", initials: "DT" },
  { name: "Rahul Menon", role: "Backend Engineer", expertise: "Cloud & DevOps", initials: "RM" },
  { name: "Anjali Krishnan", role: "Digital Marketer", expertise: "SEO & Growth", initials: "AK" },
];

const Team = () => (
  <div className="pt-16">
    <section className="section-padding hero-bg">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Team</h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Meet the talented people behind Creacodes Innovation.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          badge="People"
          title="The Minds Behind the Magic"
          description="A diverse team of experts passionate about building exceptional digital products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover-lift group"
            >
              <div className="h-48 bg-gradient-to-br from-accent/15 to-muted flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{member.initials}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent font-medium">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.expertise}</p>
                  </div>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent/10"
                  >
                    <Linkedin size={14} className="text-muted-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
