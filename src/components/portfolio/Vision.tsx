import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import visionImg from "@/assets/vision.jpg";

const Vision = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      id="vision"
      ref={ref}
      className="relative h-[110vh] overflow-hidden bg-noir text-ivory flex items-center"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img
          src={visionImg}
          alt="Flowing fabric, vision concept"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-noir/60 backdrop-blur-[2px]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container">
        <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-8">
          03 — Vision
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight max-w-5xl text-balance"
        >
          To redefine African luxury — not as imitation of the West, but as a
          singular, modern <em className="italic text-sand">language of beauty</em> the
          world has yet to fully see.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-sm uppercase tracking-luxe text-ivory/60"
        >
          — A.K.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Vision;
