import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-noir text-ivory"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Justina Kasuwi, photogenic model and fashion designer portrait"
          width={1080}
          height={1920}
          className="h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-b from-noir/60 via-noir/20 to-noir" />
        <div className="absolute inset-0 bg-linear-to-r from-noir/70 via-transparent to-noir/40" />
      </motion.div>

      {/* Main content — full height flex column */}
      <div className="relative z-10 container min-h-screen flex flex-col pt-24 md:pt-28 pb-20 md:pb-32">

        {/* Top labels row — sits just below navbar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-between text-[10px] uppercase tracking-luxe text-ivory/70 mb-auto"
        >
          <span>Portfolio · 2026</span>
          <span className="hidden sm:inline">Dar es Salaam, TZ</span>
        </motion.div>

        {/* Bottom content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[11px] uppercase tracking-luxe text-bronze mb-6"
          >
            — Photogenic Model & Fashion Designer
          </motion.p>

          <h1 className="leading-[0.88] tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <motion.span
              initial={{ y: "110%", display: "block" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[17vw] md:text-[13vw] lg:text-[10vw] font-light text-ivory"
            >
              Justina
            </motion.span>
            <motion.span
              initial={{ y: "110%", display: "block" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[17vw] md:text-[13vw] lg:text-[10vw] font-light italic text-sand -mt-2 md:-mt-4"
            >
              Kasuwi.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-4 border border-ivory px-8 py-4 text-[11px] uppercase tracking-luxe hover:bg-ivory hover:text-noir transition-all duration-500"
            >
              View Portfolio
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </a>
            <p className="max-w-xs text-sm text-ivory/60 font-light leading-relaxed">
              A photogenic study of light, fabric, and East African modern design.
            </p>
          </motion.div>
        </div>{/* end bottom content */}
      </div>{/* end main content */}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 z-10 flex flex-col items-center gap-3 text-[10px] uppercase tracking-luxe text-ivory/60"
      >
        <span className="rotate-90 origin-center mt-6">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-ivory/40"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
