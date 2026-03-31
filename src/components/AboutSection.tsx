import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Home, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "30+", label: "Years Experience" },
  { icon: Home, value: "10,000+", label: "Projects Done" },
  { icon: Users, value: "8,000+", label: "Happy Families" },
  { icon: Award, value: "100%", label: "Quality Assured" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-gold mb-4 inline-block">About Us</span>

            <h2 className="section-title mb-5">
              Crafting Dream Kitchens{" "}
              <span className="text-gold-gradient">Since 1995</span>
            </h2>

            <p className="section-subtitle mb-5 text-[14px] leading-relaxed">
              Rajendra Traders, led by <strong>Sanjay Jain</strong>, has been at
              the forefront of modular kitchen and wardrobe solutions for over
              three decades. We combine traditional craftsmanship with modern
              design to deliver kitchens that are both beautiful and functional.
            </p>

            <p className="section-subtitle text-[14px] leading-relaxed">
              From premium materials to expert installation, every project
              reflects our commitment to quality and customer satisfaction. We
              don't just build kitchens — we create spaces where families come
              together.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-5 mt-6 md:mt-0"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-2xl p-5 text-center bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Icon */}
                <stat.icon className="w-7 h-7 mx-auto mb-3 text-gold opacity-90" />

                {/* Value */}
                <div className="font-heading text-[22px] md:text-3xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="font-body text-[12px] text-muted-foreground mt-1 opacity-80">
                  {stat.label}
                </div>

                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;