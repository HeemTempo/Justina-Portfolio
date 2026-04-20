import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  unit: string;
}

const stats: Stat[] = [
  { label: "Height", value: 178, unit: "cm" },
  { label: "Weight", value: 56, unit: "kg" },
  { label: "Bust", value: 84, unit: "cm" },
  { label: "Waist", value: 62, unit: "cm" },
  { label: "Shoulders", value: 40, unit: "cm" },
  { label: "Shoe", value: 39, unit: "EU" },
];

const Counter = ({ to, duration = 1800 }: { to: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{n}</span>;
};

const Measurements = () => {
  return (
    <section id="measurements" className="relative py-28 md:py-40 bg-noir text-ivory overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-6">
              02 — Measurements
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
              The <em className="italic text-sand">numbers</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ivory/60 font-light">
            All measurements verified and updated quarterly. Available for
            campaign, runway, e-commerce, and editorial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ivory/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-noir p-8 md:p-12 group hover:bg-ivory hover:text-noir transition-colors duration-700"
            >
              <p className="text-[10px] uppercase tracking-luxe text-ivory/50 group-hover:text-noir/60 transition-colors duration-700 mb-6">
                {s.label}
              </p>
              <p className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-none">
                <Counter to={s.value} />
                <span className="text-2xl md:text-3xl text-bronze ml-2 font-sans font-light">
                  {s.unit}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Measurements;
