import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import burgerImage from "@/assets/martian-burger.jpg";
import smoothieImage from "@/assets/zero-g-smoothie.jpg";
import dessertImage from "@/assets/alien-platter-dessert.jpg";
import burgerActionImage from "@/assets/burger-action.jpg";

const menuItems = [
  {
    id: 1,
    name: "Martian Burger",
    description: "Our signature burger with space sauce, zero-g cheese, and cosmic lettuce",
    price: "$24",
    image: burgerImage,
    category: "Mains"
  },
  {
    id: 2,
    name: "Zero-G Smoothie",
    description: "Layered rainbow smoothie with fresh Earth-imported fruits",
    price: "$12",
    image: smoothieImage,
    category: "Drinks"
  },
  {
    id: 3,
    name: "Alien Platter",
    description: "Space-themed dessert with edible glitter and star garnish",
    price: "$18",
    image: dessertImage,
    category: "Desserts"
  },
  {
    id: 4,
    name: "Orbital Special",
    description: "Double patty burger with our secret sauce and suspended toppings",
    price: "$28",
    image: burgerActionImage,
    category: "Mains"
  }
];

export const MenuSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="menu" className="py-20 bg-gradient-space">
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
            Cosmic Menu
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dishes crafted from the finest ingredients across the solar system
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="overflow-hidden bg-card border-border hover:shadow-glow transition-all duration-300 group h-full"
              >
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </motion.div>
                </motion.div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <motion.span 
                      className="text-primary font-bold text-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.price}
                    </motion.span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
