import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Premium modular kitchen by Rajendra Traders"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="badge-gold mb-6 inline-block">Since 1995 • 10,000+ Projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ color: "hsl(40, 40%, 94%)" }}
        >
          Premium Modular
          <br />
          <span className="text-gold-gradient">Kitchen Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: "hsl(40, 30%, 80%)" }}
        >
          Transform your home with elegantly designed modular kitchens & wardrobes.
          Trusted by 10,000+ families across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-gold">
            <FileText className="w-4 h-4" />
            Get Free Quote
          </a>
          <a
            href="https://wa.me/917869543555?text=Hello%20Rajendra%20Traders!%20I'm%20interested%20in%20modular%20kitchen%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: "hsl(40, 30%, 70%)" }}>
          <div className="w-1.5 h-3 rounded-full" style={{ background: "hsl(43, 80%, 55%)" }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
