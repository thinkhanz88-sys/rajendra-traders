import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Indore",
    text: "Rajendra Traders transformed our kitchen completely. The quality of materials and workmanship is outstanding. Highly recommended!",
  },
  {
    name: "Amit Gupta",
    location: "Bhopal",
    text: "We got our U-shaped modular kitchen installed and it's absolutely stunning. Sanjay ji personally supervised the entire project.",
  },
  {
    name: "Neha Patel",
    location: "Jabalpur",
    text: "From design to installation, everything was seamless. The wardrobe they built is both beautiful and incredibly functional.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-secondary/50" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Testimonials</span>
          <h2 className="section-title mb-4">What Our Clients Say</h2>
        </motion.div>

        {/* Mobile Slider */}
        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="snap-center shrink-0 w-[85vw] rounded-2xl p-6 bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-gold/20 absolute top-5 right-5" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-[13px] text-muted-foreground leading-relaxed mb-5">
                  “{t.text}”
                </p>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-gold/40 mb-3 rounded-full" />

                {/* Name + Location */}
                <div>
                  <div className="font-heading text-[14px] font-semibold text-foreground tracking-tight">
                    {t.name}
                  </div>
                  <div className="font-body text-[11px] text-muted-foreground opacity-80">
                    {t.location}
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Hint */}
          <p className="text-[10px] text-muted-foreground text-center mt-2">
            Swipe to explore
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-hover rounded-2xl p-8 bg-card border border-border relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-heading text-sm font-semibold text-foreground">{t.name}</div>
                <div className="font-body text-xs text-muted-foreground">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
