import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChefHat, DoorOpen, Flame, Wrench, Wind } from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    desc: "Complete kitchen solutions with premium materials, custom layouts, and modern finishes tailored to your space.",
  },
  {
    icon: DoorOpen,
    title: "Wardrobe",
    desc: "Stylish and spacious wardrobes with sliding doors, walk-in designs, and smart storage compartments.",
  },
  {
    icon: Flame,
    title: "Kitchen Appliances",
    desc: "Built-in hobs, ovens, microwaves, and chimneys from top brands, seamlessly integrated into your kitchen.",
  },
  {
    icon: Wrench,
    title: "Kitchen & Wardrobe Accessories",
    desc: "Corner units, pull-out drawers, bottle racks, cutlery trays — everything to maximize your storage.",
  },
  {
    icon: Wind,
    title: "Kitchen Chimney",
    desc: "Auto-clean chimneys with powerful suction, sleek designs, and silent operation for a smoke-free kitchen.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container-narrow">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Our Services</span>
          <h2 className="section-title mb-4">What We Offer</h2>
          <p className="section-subtitle mx-auto text-[14px] leading-relaxed">
            End-to-end solutions for your dream kitchen and home interiors
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-[30px] md:p-7 bg-card border border-border group shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-6 sm:block relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 min-w-[56px] rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-wood-dark" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-[17px] md:text-xl font-semibold text-foreground mb-2.5 tracking-tight">
                  {service.title}
                </h3>

                <p className="font-body text-[13.5px] text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;