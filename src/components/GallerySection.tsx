import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import interiorImage from "@/assets/interior-dining.jpg";
import burgerImage from "@/assets/martian-burger.jpg";
import smoothieImage from "@/assets/zero-g-smoothie.jpg";

export const GallerySection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
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
            Gallery
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A glimpse into the Martian dining experience
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="relative h-96 overflow-hidden rounded-lg group cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img 
              src={interiorImage} 
              alt="Futuristic restaurant interior with Mars panorama view"
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2">Interior Dining</h3>
                <p className="text-muted-foreground">Experience Mars through our panoramic windows</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              className="relative h-44 overflow-hidden rounded-lg group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <motion.img 
                src={burgerImage} 
                alt="Martian Burger with melted cheese close-up"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-primary/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="relative h-44 overflow-hidden rounded-lg group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <motion.img 
                src={smoothieImage} 
                alt="Zero-G Smoothie with fruit garnish"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-secondary/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="col-span-2 relative h-44 overflow-hidden rounded-lg group bg-gradient-mars flex items-center justify-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="text-center p-6"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-2"
                  animate={{ 
                    textShadow: ["0 0 0px hsl(18 95% 65%)", "0 0 20px hsl(18 95% 65%)", "0 0 0px hsl(18 95% 65%)"] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Visit Us
                </motion.h3>
                <p className="text-sm">Mars Colony, Sector 7 - Olympus Mons Terrace</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
