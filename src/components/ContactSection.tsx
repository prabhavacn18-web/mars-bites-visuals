import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: ["Mars Colony District 7", "Red Planet, Solar System"]
  },
  {
    icon: Phone,
    title: "Phone",
    content: ["+1 (555) MARS-BITE"]
  },
  {
    icon: Mail,
    title: "Email",
    content: ["hello@marsbites.space"]
  }
];

export const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions or want to make a reservation? Get in touch with us.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {contactInfo.map((item, index) => (
              <motion.div 
                key={item.title}
                variants={staggerItem}
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="p-3 rounded-lg bg-primary/10"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    backgroundColor: "hsl(18 85% 55% / 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  {item.content.map((line, i) => (
                    <p key={i} className="text-muted-foreground">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Input placeholder="Your Name" className="transition-all focus:scale-[1.02]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Input type="email" placeholder="Your Email" className="transition-all focus:scale-[1.02]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Textarea placeholder="Your Message" rows={5} className="transition-all focus:scale-[1.02]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" className="w-full">
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
