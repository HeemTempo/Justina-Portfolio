const Footer = () => {
  return (
    <footer className="bg-noir text-ivory py-16 border-t border-ivory/10">
      <div className="container">
        <div className="overflow-hidden mb-16">
          <div className="flex marquee whitespace-nowrap font-display text-[14vw] md:text-[10vw] font-light leading-none text-ivory/10">
            <span className="px-6">Justina Kasuwi —</span>
            <span className="px-6 italic">Available Worldwide —</span>
            <span className="px-6">Justina Kasuwi —</span>
            <span className="px-6 italic">Available Worldwide —</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-display text-3xl">Justina Kasuwi<span className="text-bronze">.</span></p>
            <p className="text-xs text-ivory/50 mt-2 uppercase tracking-luxe">
              Photogenic Model & Fashion Designer
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-luxe text-ivory/70">
            <a href="#" className="hover:text-bronze transition-colors">Instagram</a>
            <a href="#" className="hover:text-bronze transition-colors">TikTok</a>
            <a href="#" className="hover:text-bronze transition-colors">LinkedIn</a>
            <a href="mailto:hello@justinakasuwi.com" className="hover:text-bronze transition-colors">Email</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[10px] uppercase tracking-luxe text-ivory/40">
          <p>© {new Date().getFullYear()} Justina Kasuwi. All rights reserved.</p>
          <p>Dar es Salaam · Tanzania</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
