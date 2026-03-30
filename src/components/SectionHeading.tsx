import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ badge, title, description, centered = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={centered ? "text-center max-w-2xl mx-auto mb-16" : "mb-16"}
  >
    {badge && (
      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    {description && (
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
