import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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

  return (
    <section className="section-padding bg-warm-cream/20" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="badge-gold mb-4 inline-block tracking-[0.2em]">Testimonials</span>
          <h2 className="section-title mb-4">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-gold/50 mx-auto rounded-full" />
        </motion.div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="swiper-gallery !pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={t.name} className="w-[85vw]">
                <div className="rounded-3xl p-8 bg-card border border-border/50 shadow-xl relative h-full flex flex-col justify-between overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full translate-x-10 -translate-y-10" />
                  
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    <Quote className="w-10 h-10 text-gold/15 absolute top-8 right-8" />

                    {/* Text */}
                    <p className="font-body text-[15px] text-muted-foreground leading-relaxed italic mb-8 relative z-10">
                      “{t.text}”
                    </p>
                  </div>

                  {/* Profile Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                      <span className="font-heading font-bold text-gold text-lg">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-heading text-base font-bold text-foreground tracking-tight">
                        {t.name}
                      </div>
                      <div className="font-body text-xs text-muted-foreground/80 uppercase tracking-widest">
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-[11px] text-muted-foreground text-center mt-2 opacity-60">
            Swipe to hear from more happy homeowners
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-hover rounded-3xl p-10 bg-card border border-border/50 shadow-lg relative h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-gold/20 absolute top-10 right-10" />
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed italic mb-8">“{t.text}”</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                  <span className="font-heading font-bold text-gold text-lg">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-heading text-base font-bold text-foreground">{t.name}</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
