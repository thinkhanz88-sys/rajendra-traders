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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-gold mb-4 inline-block">About Us</span>
            <h2 className="section-title mb-6">
              Crafting Dream Kitchens <span className="text-gold-gradient">Since 1995</span>
            </h2>
            <p className="section-subtitle mb-6">
              Rajendra Traders, led by <strong>Sanjay Jain</strong>, has been at the forefront of modular kitchen 
              and wardrobe solutions for over three decades. We combine traditional craftsmanship with modern 
              design to deliver kitchens that are both beautiful and functional.
            </p>
            <p className="section-subtitle">
              From premium materials to expert installation, every project reflects our commitment to 
              quality and customer satisfaction. We don't just build kitchens — we create spaces where 
              families come together.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="card-hover rounded-2xl p-6 text-center bg-card border border-border"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-gold" />
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
