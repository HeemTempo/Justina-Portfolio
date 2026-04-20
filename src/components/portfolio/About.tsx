import { motion } from "framer-motion";
import aboutImage from "@/assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-background">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative group overflow-hidden"
        >
          <img
            src={aboutImage}
            alt="Editorial portrait of Justina Kasuwi"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full aspect-4/5 object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-noir/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-luxe text-ivory">
            Justina · 24
          </span>
        </motion.div>

        {/* Text */}
        <div className="lg:col-span-7 lg:pl-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-luxe text-bronze block mb-8"
          >
            01 — About
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-balance"
          >
            A <em className="text-bronze not-italic">photogenic</em> face,
            a designer's <em className="italic">eye.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-light"
          >
            <p>
              Born and raised in Dar es Salaam, I work both in front of the
              camera as a photogenic model and behind the sketchbook as a
              fashion designer.
            </p>
            <p>
              The lens loves a still face — and I bring exactly that: clean
              angles, soft expression, and garments I often design myself.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-12 gap-y-6 text-sm"
          >
            {[
              ["Based in", "Dar es Salaam, TZ"],
              ["Languages", "English · Swahili"],
              ["Available", "Worldwide"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-luxe text-muted-foreground mb-1">
                  {label}
                </p>
                <p className="font-display text-lg">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
