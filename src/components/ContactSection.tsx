import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Rajendra Traders! My name is ${formData.name}. Phone: ${formData.phone}. ${formData.message}`;
    window.open(`https://wa.me/917869543555?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding scroll-mt-24 relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="badge-gold mb-4 inline-block">Keep In Touch</span>
          <h2 className="section-title mb-4">Let's Discuss Your Project</h2>
          <p className="section-subtitle mx-auto">
            Ready to transform your kitchen? Get in touch for a premium consultation and expert design advice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4 md:space-y-6"
          >
            <div className="card-hover rounded-2xl p-5 md:p-6 bg-card/60 backdrop-blur-sm border border-border/50 flex items-start gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                <Phone className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">Call Our Experts</h3>
                <a href="tel:+917869543555" className="font-body text-[15px] text-muted-foreground hover:text-gold transition-colors block">
                  +91 7869543555
                </a>
              </div>
            </div>

            <div className="card-hover rounded-2xl p-5 md:p-6 bg-card/60 backdrop-blur-sm border border-border/50 flex items-start gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                <MessageCircle className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">WhatsApp Chat</h3>
                <a
                  href="https://wa.me/917869543555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[15px] text-muted-foreground hover:text-gold transition-colors block"
                >
                  +91 7869543555
                </a>
              </div>
            </div>

            <div className="card-hover rounded-2xl p-5 md:p-6 bg-card/60 backdrop-blur-sm border border-border/50 flex items-start gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                <Mail className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">Send an Email</h3>
                <a href="mailto:491rajendra@gmail.com" className="font-body text-[15px] text-muted-foreground hover:text-gold transition-colors block">
                  491rajendra@gmail.com
                </a>
              </div>
            </div>

            <div className="card-hover rounded-2xl p-5 md:p-6 bg-card/60 backdrop-blur-sm border border-border/50 flex items-start gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                <MapPin className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">Our Location</h3>
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
                  Rajendra Traders, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="card-hover rounded-[2rem] p-6 md:p-10 bg-card/80 backdrop-blur-md border border-border space-y-6 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground/80 block px-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background/50 px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground/80 block px-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background/50 px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-body text-sm font-semibold text-foreground/80 block px-1">Your Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-background/50 px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all resize-none"
                  placeholder="Describe your kitchen requirements or questions..."
                />
              </div>
              <button type="submit" className="btn-gold w-full py-4 text-base shadow-xl shadow-gold/20 hover:shadow-gold/40">
                <Send className="w-5 h-5 mr-1" />
                Send via WhatsApp
              </button>
              <p className="text-center text-[13px] text-muted-foreground/80">
                Quick response guaranteed via WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;