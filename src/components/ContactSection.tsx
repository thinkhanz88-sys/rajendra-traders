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
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Get In Touch</span>
          <h2 className="section-title mb-4">Contact Us</h2>
          <p className="section-subtitle mx-auto">
            Ready to transform your kitchen? Get in touch for a free consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-hover rounded-2xl p-6 bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">Call Us</h3>
                <a href="tel:+917869543555" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                  +91 7869543555
                </a>
              </div>
            </div>

            <div className="card-hover rounded-2xl p-6 bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/917869543555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  +91 7869543555
                </a>
              </div>
            </div>

            <div className="card-hover rounded-2xl p-6 bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:491rajendra@gmail.com" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                  491rajendra@gmail.com
                </a>
              </div>
            </div>

            <div className="card-hover rounded-2xl p-6 bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="font-body text-sm text-muted-foreground">Rajendra Traders, India</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card-hover rounded-2xl p-8 bg-card border border-border space-y-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <button type="submit" className="btn-gold w-full">
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
