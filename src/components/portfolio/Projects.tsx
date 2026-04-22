import { motion } from "framer-motion";
import african from "@/assets/project-african-splash.jpeg";
import fikisha from "@/assets/project-fikisha.jpeg";
import photoshop from "@/assets/project-photoshop.png";

const projects = [
  {
    title: "African Splash",
    client: "Cultural Fashion Brand",
    desc: "Hero campaign for a Pan-African luxury label, blending heritage textiles with modern tailoring.",
    img: african,
    tall: true,
  },
  {
    title: "Fikisha Solutions",
    client: "Mobility · Branding",
    desc: "City-wide scooter campaign capturing the new face of urban Dar es Salaam.",
    img: fikisha,
    tall: false,
  },
  {
    title: "Photoshop KCH",
    client: "Studio Editorial",
    desc: "Black & white studio series exploring form, light, and silhouette.",
    img: photoshop,
    tall: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 md:py-40 bg-noir text-ivory">
      <div className="container">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-6">
              07 — Selected Work
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
              The <em className="italic text-sand">portfolio</em>.
            </h2>
          </div>
          <p className="text-sm text-ivory/50 max-w-xs">
            A curated edit of recent campaigns. Full press kit available on request.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-4/5 lg:aspect-5/6" : "aspect-4/3"}`}>
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.client}`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/60 transition-colors duration-700" />

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-luxe text-ivory/80">
                    0{i + 1}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-x-0 translate-x-2 text-ivory text-2xl">
                    ↗
                  </span>
                </div>
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-[10px] uppercase tracking-luxe text-bronze mb-2">
                    {p.client}
                  </p>
                  <h3 className="font-display text-3xl md:text-5xl font-light text-ivory leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ivory/70 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
