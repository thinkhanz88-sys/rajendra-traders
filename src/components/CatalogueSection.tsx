import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Download, FileText, BookOpen } from "lucide-react";

const catalogues = [
  {
    title: "Complete Product Catalogue 2025",
    desc: "Explore our full collection of modular kitchens, wardrobes & interior designs",
    icon: BookOpen,
    file: "/Catalogue.pdf",
    fileName: "Rajendra_Traders_Catalogue_2025.pdf"
  }
];

const CatalogueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" id="catalogue" ref={ref}>
      <div className="container-narrow">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Catalogue</span>
          <h2 className="section-title mb-4">Our Catalogue</h2>
          <p className="section-subtitle mx-auto text-[14px] leading-relaxed">
            Download our complete collection of designs, materials, and finishes
          </p>
        </motion.div>

        {/* Grid (Centered for single card) */}
        <div className="max-w-md mx-auto">
          {catalogues.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="relative group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                
                {/* Top Icon Area */}
                <div className="wood-gradient p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-24 bg-background/20 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 z-10">
                    <cat.icon className="w-8 h-8 text-gold" style={{ color: "hsl(43, 80%, 55%)" }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                    {cat.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed px-4">
                    {cat.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={cat.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full sm:w-auto text-xs py-2.5 px-6 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Online
                    </a>

                    <a
                      href={cat.file}
                      download={cat.fileName}
                      className="btn-primary w-full sm:w-auto text-xs py-2.5 px-6 flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  );
};

export default CatalogueSection;