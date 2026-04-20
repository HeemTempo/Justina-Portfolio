import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email.includes("@") || form.message.length < 5) {
      toast.error("Please fill all fields correctly.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent. I'll be in touch shortly.");
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-background">
      <div className="container grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="text-[11px] uppercase tracking-luxe text-bronze block mb-6">
            09 — Contact
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tight"
          >
            Let's <em className="italic">create.</em>
          </motion.h2>

          <div className="mt-12 space-y-8 text-sm">
            {[
              ["Email", "hello@justinakasuwi.com"],
              ["Phone", "+255 700 000 000"],
              ["Studio", "Dar es Salaam, Tanzania"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[10px] uppercase tracking-luxe text-muted-foreground mb-2">
                  {k}
                </p>
                <p className="font-display text-2xl">{v}</p>
              </div>
            ))}

            <div className="pt-6 flex gap-6 text-[11px] uppercase tracking-luxe">
              {["Instagram", "TikTok", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="relative pb-1 hover:text-bronze transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 lg:pl-10 space-y-10"
        >
          {[
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
          ].map((f) => (
            <div key={f.name} className="relative">
              <label className="block text-[10px] uppercase tracking-luxe text-muted-foreground mb-3">
                {f.label}
              </label>
              <input
                type={f.type}
                value={(form as never)[f.name]}
                onChange={(e) =>
                  setForm({ ...form, [f.name]: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 text-lg font-light focus:border-foreground outline-none transition-colors duration-300"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-[10px] uppercase tracking-luxe text-muted-foreground mb-3">
              Project Brief
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border-b border-border py-3 text-lg font-light focus:border-foreground outline-none transition-colors duration-300 resize-none"
              required
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={sending}
            className="group relative inline-flex items-center gap-4 border border-foreground px-10 py-4 text-[11px] uppercase tracking-luxe overflow-hidden disabled:opacity-50"
          >
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative group-hover:text-background transition-colors duration-500">
              {sending ? "Sending…" : "Send Message"}
            </span>
            <span className="relative group-hover:text-background transition-all duration-500 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
