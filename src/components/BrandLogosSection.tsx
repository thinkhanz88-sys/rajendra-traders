import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import brandLogos from "@/assets/brand-logos.jpeg";

const BrandLogosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="badge-gold mb-4 inline-block tracking-[0.2em]">Our Partners</span>
          <h2 className="section-title mb-4">Trusted Brands</h2>
          <p className="section-subtitle mx-auto">
            We collaborate with industry-leading brands to bring you the best quality materials and hardware.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-border/10 bg-white flex justify-center items-center p-4 md:p-8"
        >
          <img
            src={brandLogos}
            alt="Trusted Brand Logos"
            loading="lazy"
            className="w-full h-auto object-contain max-h-[600px] hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogosSection;
