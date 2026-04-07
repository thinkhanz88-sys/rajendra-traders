import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, title: "Modern Wardrobe", desc: "Sleek walk-in wardrobe with premium mahogany finish." },
  { src: gallery2, title: "Grand Kitchen", desc: "Spacious modular kitchen with marble island and smart storage." },
  { src: gallery3, title: "Minimalist Setup", desc: "Clean lines and integrated appliances for a modern feel." },
  { src: gallery4, title: "Urban Island", desc: "Perfectly designed island kitchen for contemporary urban homes." },
  { src: gallery5, title: "Designer Loft", desc: "Industrial style kitchen with matte black accents and warm lighting." },
  { src: gallery6, title: "Luxe Culinary", desc: "High-end finishes and state-of-the-art modular accessories." },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gold blur-[100px] rounded-full" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="badge-gold mb-4 inline-block tracking-[0.2em]">Our Portfolio</span>
          <h2 className="section-title mb-4">Project Excellence</h2>
          <p className="section-subtitle mx-auto">
            Explore our curated selection of premium modular spaces, crafted with precision and passion since 1995.
          </p>
        </motion.div>

        {/* Mobile Swiper (Coverflow) */}
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
            {images.map((img, i) => (
              <SwiperSlide key={i} className="swiper-slide-gallery">
                <div 
                  className="slide-img-gallery" 
                  style={{ backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                />
                <div className="slide-info-gallery">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1 leading-tight">{img.title}</h3>
                  <p className="font-body text-[13px] text-muted-foreground leading-snug">
                    {img.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-[11px] text-muted-foreground text-center mt-2 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-border" />
            Swipe to Explore Projects
            <span className="w-8 h-[1px] bg-border" />
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-[2rem] aspect-[4/3] group cursor-pointer border border-border/30 shadow-lg"
            >
              <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h3>
                <p className="font-body text-sm text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
