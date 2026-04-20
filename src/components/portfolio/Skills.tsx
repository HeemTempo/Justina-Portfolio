import { motion } from "framer-motion";

const skills = [
  {
    n: "01",
    title: "Photogenic",
    body: "A natural ease in front of the lens — clean angles, controlled expression, and consistency across every frame.",
  },
  {
    n: "02",
    title: "Fashion Design",
    body: "Concept to garment — sketching, pattern-making, and finishing pieces I often wear in my own shoots.",
  },
  {
    n: "03",
    title: "Posing & Movement",
    body: "Trained in editorial, commercial, and beauty posing for print, e-commerce and lookbook work.",
  },
  {
    n: "04",
    title: "Styling & Branding",
    body: "On-set styling, brand storytelling, and long-term ambassadorship for fashion and lifestyle brands.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-40 bg-secondary">
      <div className="container">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-6">
              05 — Disciplines
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight max-w-2xl">
              Where I <em className="italic">create</em>.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {skills.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-secondary p-10 md:p-12 group cursor-default transition-colors duration-500 hover:bg-noir hover:text-ivory"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-[11px] uppercase tracking-luxe text-bronze">
                  {s.n}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  →
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-6">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity duration-500">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
