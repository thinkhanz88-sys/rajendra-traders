import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";
import heroMobile from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4">

      {/* Desktop Image */}
      <img
        src={heroImg}
        alt="Premium modular kitchen by Rajendra Traders"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
      />

      {/* Mobile Image */}
      <img
        src={heroMobile}
        alt="Premium modular kitchen mobile view"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />

      {/* Overlay (perfect balance) */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto py-16 md:py-0">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="badge-gold mb-5 inline-block text-[11px] md:text-sm backdrop-blur-md bg-black/30 border border-gold/30">
            Since 1995 • 10,000+ Projects
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-[30px] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 md:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          style={{ color: "hsl(40, 50%, 96%)" }}
        >
          Premium Modular
          <br />
          <span className="text-gold-gradient">Kitchen Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-[14px] sm:text-base md:text-xl mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
          style={{ color: "hsl(40, 20%, 92%)" }}
        >
          Transform your home with elegantly designed modular kitchens & wardrobes.
          Trusted by 10,000+ families across India.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#contact" className="btn-gold w-full sm:w-auto text-[13px]">
            <FileText className="w-4 h-4" />
            Get Free Quote
          </a>

          <a
            href="https://wa.me/917869543555?text=Hello%20Rajendra%20Traders!%20I'm%20interested%20in%20modular%20kitchen%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light w-full sm:w-auto text-[13px]"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 md:w-6 md:h-10 rounded-full border-2 flex items-start justify-center pt-2 border-white/50">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;