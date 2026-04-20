import { motion } from "framer-motion";

const tiers = [
  {
    name: "Editorial",
    price: "350",
    unit: "/ day",
    items: [
      "Print & magazine editorials",
      "Up to 8 hours on set",
      "Image rights: 6 months",
      "Lookbook usage included",
    ],
  },
  {
    name: "Campaign",
    price: "850",
    unit: "/ day",
    featured: true,
    items: [
      "Full brand campaign",
      "Up to 10 hours on set",
      "Image rights: 12 months",
      "Cross-channel usage",
      "Behind-the-scenes content",
    ],
  },
  {
    name: "Content",
    price: "500",
    unit: "/ project",
    items: [
      "Self-produced reels & posts",
      "3 finished pieces of content",
      "Posted on @justina handles",
      "Brand tag & dedicated caption",
    ],
  },
];

const RateCard = () => {
  return (
    <section id="rates" className="py-28 md:py-40 bg-secondary">
      <div className="container">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-6">
            08 — Rate Card
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
            Working <em className="italic">together</em>.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl font-light">
            Transparent pricing, in USD. Custom retainers and exclusivity
            agreements available on request.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className={`relative p-10 md:p-12 border transition-all duration-500 ${
                t.featured
                  ? "bg-noir text-ivory border-noir shadow-luxe"
                  : "bg-background border-border hover:border-foreground"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-10 text-[10px] uppercase tracking-luxe bg-bronze text-noir px-3 py-1">
                  Most Booked
                </span>
              )}
              <p className="text-[11px] uppercase tracking-luxe mb-6 opacity-70">
                {t.name}
              </p>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="font-display text-6xl md:text-7xl font-light leading-none">
                  ${t.price}
                </span>
                <span className="text-sm opacity-60">{t.unit}</span>
              </div>

              <ul className="space-y-4 text-sm font-light">
                {t.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="text-bronze">—</span>
                    <span className="opacity-80">{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe border px-6 py-3 transition-colors duration-500 ${
                  t.featured
                    ? "border-ivory hover:bg-ivory hover:text-noir"
                    : "border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Enquire <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RateCard;
