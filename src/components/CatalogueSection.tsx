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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Catalogue</span>
          <h2 className="section-title mb-4">Browse Our Catalogues</h2>
          <p className="section-subtitle mx-auto">
            Explore our complete collection of designs, materials, and finishes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {catalogues.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <div className="card-hover rounded-2xl bg-card border border-border overflow-hidden h-full">
                <div className="wood-gradient p-6 flex items-center justify-center">
                  <div className="w-20 h-28 bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 flex items-center justify-center">
                    <cat.icon className="w-10 h-10" style={{ color: "hsl(43, 80%, 55%)" }} />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5">{cat.title}</h3>
                  <p className="font-body text-xs text-muted-foreground mb-5">{cat.desc}</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <a
                      href={`https://wa.me/917869543555?text=${encodeURIComponent(cat.viewMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full sm:w-auto text-xs py-2.5 px-5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </a>
                    <a
                      href={`https://wa.me/917869543555?text=${encodeURIComponent(cat.dlMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto text-xs py-2.5 px-5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogueSection;
