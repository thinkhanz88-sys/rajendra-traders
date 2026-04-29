import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import kitchenL from "@/assets/kitchen-l-shaped.webp";
import kitchenU from "@/assets/kitchen-u-shaped.webp";
import kitchenParallel from "@/assets/kitchen-parallel.webp";
import kitchenStraight from "@/assets/kitchen-straight.webp";
import kitchenIsland from "@/assets/kitchen-island.webp";

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

  return (
    <section id="kitchen-types" className="section-padding bg-warm-cream/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="badge-gold mb-4 inline-block tracking-[0.2em]">Kitchen Layouts</span>
          <h2 className="section-title mb-4">Types of Modular Kitchen</h2>
          <p className="section-subtitle mx-auto">
            Choose the perfect layout that fits your space and lifestyle
          </p>
        </motion.div>

        {/* Mobile Swiper (Minimalist - Matching Gallery) */}
        <div className="md:hidden">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="swiper-gallery"
          >
            {kitchenTypes.map((type, i) => (
              <SwiperSlide key={type.title} className="swiper-slide-gallery">
                <div 
                  className="slide-img-gallery" 
                  style={{ backgroundImage: `url(${type.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                />
                <div className="slide-info-gallery">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1 leading-tight">{type.title}</h3>
                  <p className="font-body text-[13px] text-muted-foreground leading-snug">
                    {type.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-[11px] text-muted-foreground text-center mt-2 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-border" />
            Swipe to Explore Layouts
            <span className="w-8 h-[1px] bg-border" />
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchenTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover rounded-[2rem] overflow-hidden bg-card border border-border/50 group cursor-pointer shadow-lg"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={type.image} alt={type.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1 tracking-tight">{type.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenTypesSection;
