import { motion } from "framer-motion";

const items = [
  {
    role: "Lead Photogenic Model",
    company: "African Splash",
    period: "2023 — Present",
    body: "Face of the cultural fashion line; editorial campaigns and global press features.",
  },
  {
    role: "Fashion Designer · Capsule Collection",
    company: "Studio Kasuwi",
    period: "2024",
    body: "Designed and released a small-batch capsule of tailored pieces inspired by Tanzanian textiles.",
  },
  {
    role: "Lead Talent",
    company: "Fikisha Solutions",
    period: "2024",
    body: "Lead model for the city-wide scooter mobility branding campaign across Dar es Salaam.",
  },
  {
    role: "Photogenic Model",
    company: "Photoshop KCH",
    period: "2022 — 2024",
    body: "Recurring studio model for portfolio test shoots and photographic experimentation.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 md:py-40 bg-background">
      <div className="container">
        <div className="mb-16 md:mb-24">
          <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-6">
            06 — Experience
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
            Selected <em className="italic">collaborations</em>.
          </h2>
        </div>

        <div className="space-y-px bg-border">
          {items.map((it, i) => (
            <motion.article
              key={it.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background grid md:grid-cols-12 gap-4 md:gap-8 px-2 md:px-8 py-8 md:py-10 group hover:bg-secondary transition-colors duration-500"
            >
              <span className="md:col-span-2 text-xs uppercase tracking-luxe text-muted-foreground pt-2">
                {it.period}
              </span>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl font-light">
                  {it.company}
                </h3>
                <p className="text-sm text-bronze mt-1">{it.role}</p>
              </div>
              <p className="md:col-span-5 text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                {it.body}
              </p>
              <span className="md:col-span-1 text-right text-xl opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
