const Footer = () => {
  return (
    <footer className="wood-gradient text-primary-foreground">
      <div className="container-narrow px-4 py-8 md:px-8 md:py-10">
        <div className="flex flex-col items-center text-center gap-4">

          {/* Brand */}
          <h3 className="font-heading text-lg md:text-xl font-bold tracking-tight">
            Rajendra <span className="text-gold-gradient">Traders</span>
          </h3>

          {/* Tagline */}
          <p className="font-body text-[12px] md:text-xs opacity-70">
            Premium Modular Kitchen & Wardrobe Solutions · Since 1995
          </p>

          {/* Divider */}
          <div className="w-full border-t border-primary-foreground/10 mt-2 pt-4 flex flex-col items-center gap-1.5">

            {/* Copyright */}
            <p className="font-body text-[11px] opacity-50">
              © {new Date().getFullYear()} Rajendra Traders
            </p>

            {/* ASPARSH Credit (highlighted but classy) */}
            <p className="font-body text-[11px] opacity-70">
              Made with precision by{" "}
              <span className="font-semibold text-gold-gradient tracking-wide">
                ASPARSH
              </span>
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;