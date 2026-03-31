import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Download, FileText, BookOpen } from "lucide-react";

const catalogues = [
  {
    title: "Kitchen Collection 2025",
    desc: "Complete modular kitchen designs, pricing & specifications",
    icon: FileText,
    viewMsg: "Hello! Please share the Kitchen Collection catalogue.",
    dlMsg: "Hello! I'd like to download the Kitchen Collection catalogue.",
  },
  {
    title: "Wardrobe & Interiors 2025",
    desc: "Premium wardrobe designs, accessories & finishes",
    icon: BookOpen,
    viewMsg: "Hello! Please share the Wardrobe & Interiors catalogue.",
    dlMsg: "Hello! I'd like to download the Wardrobe & Interiors catalogue.",
  },
];

const CatalogueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Catalogue</span>
          <h2 className="section-title mb-4">Browse Our Catalogues</h2>
          <p className="section-subtitle mx-auto text-[14px] leading-relaxed">
            Explore our complete collection of designs, materials, and finishes
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
          {catalogues.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <div className="rounded-2xl bg-card border border-border overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300 relative">

                {/* Icon Area (tight mobile only) */}
                <div className="wood-gradient py-4 md:p-6 flex items-center justify-center">
                  <div className="w-14 h-20 md:w-20 md:h-28 bg-card/10 backdrop-blur-sm rounded-md md:rounded-lg border border-border/20 flex items-center justify-center">
                    <cat.icon
                      className="w-7 h-7 md:w-10 md:h-10"
                      style={{ color: "hsl(43, 80%, 55%)" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 py-3 md:p-5 text-center">
                  <h3 className="font-heading text-[15px] md:text-lg font-semibold text-foreground mb-1.5 tracking-tight">
                    {cat.title}
                  </h3>

                  <p className="font-body text-[11.5px] md:text-xs text-muted-foreground mb-4 md:mb-5 leading-snug md:leading-relaxed">
                    {cat.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2 md:gap-2.5 flex-col sm:flex-row items-center justify-center">
                    <a
                      href={`https://wa.me/917869543555?text=${encodeURIComponent(cat.viewMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full sm:w-auto text-[11px] md:text-xs py-2 md:py-2.5 px-4 md:px-5 flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      View
                    </a>

                    <a
                      href={`https://wa.me/917869543555?text=${encodeURIComponent(cat.dlMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto text-[11px] md:text-xs py-2 md:py-2.5 px-4 md:px-5 flex items-center justify-center gap-1"
                    >
                      <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      Download
                    </a>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CatalogueSection;