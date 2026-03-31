import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import kitchenL from "@/assets/kitchen-l-shaped.jpg";
import kitchenU from "@/assets/kitchen-u-shaped.jpg";
import kitchenParallel from "@/assets/kitchen-parallel.jpg";
import kitchenStraight from "@/assets/kitchen-straight.jpg";
import kitchenIsland from "@/assets/kitchen-island.jpg";

const kitchenTypes = [
  { image: kitchenL, title: "L-Shaped Kitchen", desc: "Best for corner spaces with efficient workflow", details: "The L-shaped kitchen maximizes corner space, creating an efficient work triangle. Ideal for open-plan living with ample counter space and natural flow between cooking zones." },
  { image: kitchenU, title: "U-Shaped Kitchen", desc: "Maximum storage and countertop space", details: "Three walls of cabinetry give you the most storage and workspace. Perfect for serious home cooks who need everything within arm's reach." },
  { image: kitchenParallel, title: "Parallel Kitchen", desc: "Efficient workflow for medium-sized spaces", details: "Two parallel counters create an ultra-efficient workspace. Great for galley-style layouts with dedicated wet and dry zones on opposite sides." },
  { image: kitchenStraight, title: "Straight Kitchen", desc: "Perfect for compact and small spaces", details: "A single-wall layout that's sleek and space-saving. Ideal for studio apartments and compact homes without compromising on functionality." },
  { image: kitchenIsland, title: "Island Kitchen", desc: "Premium & spacious for open-plan homes", details: "A freestanding island adds extra prep space, seating, and storage. The ultimate premium kitchen layout for large, open-plan living areas." },
];

const KitchenTypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -260 : 260, behavior: "smooth" });
  };

  return (
    <section id="kitchen-types" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Kitchen Layouts</span>
          <h2 className="section-title mb-4">Types of Modular Kitchen</h2>
          <p className="section-subtitle mx-auto">
            Choose the perfect layout that fits your space and lifestyle
          </p>
        </motion.div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {kitchenTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelected(i)}
                className="snap-center shrink-0 w-[75vw] card-hover rounded-2xl overflow-hidden bg-card border border-border group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={type.image} alt={type.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">{type.title}</h3>
                  <p className="font-body text-xs text-muted-foreground">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <button onClick={() => scroll("left")} className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center" aria-label="Previous">
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button onClick={() => scroll("right")} className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center" aria-label="Next">
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitchenTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="card-hover rounded-2xl overflow-hidden bg-card border border-border group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={type.image} alt={type.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{type.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{type.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-2xl overflow-hidden max-w-lg w-full border border-border shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img src={kitchenTypes[selected].image} alt={kitchenTypes[selected].title} className="w-full aspect-[16/10] object-cover" />
                  <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-foreground/50 flex items-center justify-center" aria-label="Close">
                    <X className="w-4 h-4 text-background" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{kitchenTypes[selected].title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{kitchenTypes[selected].details}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KitchenTypesSection;
