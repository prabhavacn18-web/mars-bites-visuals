import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const features = [
  {
    emoji: "🌱",
    title: "Farm to Table",
    description: "Grown in our Mars greenhouse"
  },
  {
    emoji: "🚀",
    title: "Innovation First",
    description: "Pioneering space-age cuisine"
  },
  {
    emoji: "⭐",
    title: "Stellar Experience",
    description: "5-star Martian dining"
  }
];

export const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gradient-space">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
              Our Story
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Mars Bites was founded in 2157 by Chef Zara Chen, the first certified culinary expert to establish a restaurant on the Red Planet. Our mission is to bring Earth's rich culinary traditions to Mars while embracing the unique opportunities of extraterrestrial dining.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Every dish is crafted using cutting-edge food technology and the freshest ingredients from our hydroponic gardens, creating a dining experience that's truly out of this world.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 10,
                    boxShadow: "0 0 30px hsl(18 95% 65% / 0.2)"
                  }}
                  className="bg-card p-6 rounded-lg border border-border cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div 
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">{feature.emoji}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
