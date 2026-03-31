import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Modern wardrobe design" },
  { src: gallery2, alt: "Kitchen with chimney and hob" },
  { src: gallery3, alt: "Kitchen accessories and storage" },
  { src: gallery4, alt: "Premium kitchen with island" },
  { src: gallery5, alt: "Kitchen chimney setup" },
  { src: gallery6, alt: "Contemporary kitchen design" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Our Work</span>
          <h2 className="section-title mb-4">Project Gallery</h2>
          <p className="section-subtitle mx-auto">
            A glimpse into our 10,000+ completed projects across India
          </p>
        </motion.div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="snap-center shrink-0 w-[78vw] relative overflow-hidden rounded-2xl aspect-[4/3] group"
              >
                <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                  <span className="font-body text-sm font-medium" style={{ color: "hsl(40, 40%, 94%)" }}>{img.alt}</span>
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
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
            >
              <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="font-body text-sm font-medium" style={{ color: "hsl(40, 40%, 94%)" }}>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
