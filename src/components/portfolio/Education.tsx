import { motion } from "framer-motion";

const items = [
  {
    year: "2023",
    title: "Diploma · Fashion Design",
    place: "Tanzania School of Fashion Design",
  },
  {
    year: "2022",
    title: "Photogenic & Posing Workshop",
    place: "East Africa Model Academy",
  },
  {
    year: "2021",
    title: "Advanced Secondary Education",
    place: "Dar es Salaam, Tanzania",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-28 md:py-40 bg-background">
      <div className="container">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-6">
            04 — Education
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
            A trained <em className="italic">eye</em>.
          </h2>
        </div>

        <ol className="relative border-l border-border ml-2 md:ml-6">
          {items.map((it, i) => (
            <motion.li
              key={it.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-16 pb-12 md:pb-16 last:pb-0 group"
            >
              <span className="absolute -left-1.75 top-2 h-3 w-3 bg-foreground group-hover:bg-bronze transition-colors duration-500 rounded-full" />
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <span className="md:col-span-2 font-display text-2xl md:text-3xl text-bronze">
                  {it.year}
                </span>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl font-light mb-2">
                    {it.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{it.place}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
