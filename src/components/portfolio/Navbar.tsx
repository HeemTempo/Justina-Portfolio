import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Stats", href: "#measurements" },
  { label: "Vision", href: "#vision" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#hero" className="font-display text-xl md:text-2xl tracking-wide">
          Justina<span className="text-bronze">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-luxe font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-2 transition-colors hover:text-bronze after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-500 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-block text-[11px] uppercase tracking-luxe border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-500"
        >
          Book
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen(true)}
          className="lg:hidden p-2"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-noir text-ivory flex flex-col"
          >
            <div className="container flex items-center justify-between py-6">
              <span className="font-display text-2xl">Justina<span className="text-bronze">.</span></span>
              <button aria-label="close" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
