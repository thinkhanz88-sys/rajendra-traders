const Footer = () => {
  return (
    <footer className="wood-gradient text-primary-foreground">
      <div className="container-narrow px-4 py-6 md:px-8 md:py-8">
        <div className="flex flex-col items-center text-center gap-3">
          <h3 className="font-heading text-lg font-bold">
            Rajendra <span className="text-gold-gradient">Traders</span>
          </h3>
          <p className="font-body text-xs opacity-60">
            Premium Modular Kitchen & Wardrobe Solutions · Since 1995
          </p>
          <div className="border-t border-primary-foreground/10 w-full pt-3 mt-1">
            <p className="font-body text-[10px] opacity-40">
              © {new Date().getFullYear()} Rajendra Traders · Made by <span className="font-semibold opacity-70">ASPARSH</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
