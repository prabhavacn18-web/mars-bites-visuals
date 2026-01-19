import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import { Leaf, Drumstick } from "lucide-react";
import burgerImage from "@/assets/martian-burger.jpg";
import smoothieImage from "@/assets/zero-g-smoothie.jpg";
import dessertImage from "@/assets/alien-platter-dessert.jpg";
import burgerActionImage from "@/assets/burger-action.jpg";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  ingredients: string[];
  isVeg: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Martian Burger",
    description: "Our signature burger with space sauce, zero-g cheese, and cosmic lettuce. Crafted from the finest lab-grown proteins cultivated in our Olympus Mons facility, this burger delivers an out-of-this-world taste experience.",
    price: "$24",
    image: burgerImage,
    category: "Mains",
    ingredients: ["Lab-grown Martian beef patty", "Zero-G aged cheddar", "Cosmic lettuce", "Nebula tomatoes", "Space sauce", "Brioche bun"],
    isVeg: false
  },
  {
    id: 2,
    name: "Zero-G Smoothie",
    description: "Layered rainbow smoothie with fresh Earth-imported fruits. Each layer represents a different planet in our solar system, creating a visual and taste journey through space.",
    price: "$12",
    image: smoothieImage,
    category: "Drinks",
    ingredients: ["Frozen Earth strawberries", "Titan mangoes", "Ganymede blueberries", "Callisto coconut milk", "Stardust honey", "Meteor ice"],
    isVeg: true
  },
  {
    id: 3,
    name: "Alien Platter",
    description: "Space-themed dessert with edible glitter and star garnish. A symphony of cosmic flavors featuring rare ingredients harvested from across the galaxy.",
    price: "$18",
    image: dessertImage,
    category: "Desserts",
    ingredients: ["Asteroid chocolate", "Comet cream", "Edible stardust glitter", "Crystallized sugar stars", "Moon honey drizzle", "Freeze-dried space berries"],
    isVeg: true
  },
  {
    id: 4,
    name: "Orbital Special",
    description: "Double patty burger with our secret sauce and suspended toppings. The ultimate indulgence for serious space travelers, featuring gravity-defying presentation.",
    price: "$28",
    image: burgerActionImage,
    category: "Mains",
    ingredients: ["Double lab-grown patties", "Quantum-aged blue cheese", "Caramelized Martian onions", "Crispy ion rings", "Secret orbital sauce", "Toasted galaxy bun"],
    isVeg: false
  }
];

export const MenuSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

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
                className="overflow-hidden bg-card border-border hover:shadow-glow transition-all duration-300 group h-full cursor-pointer"
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                aria-label={`View details for ${item.name}`}
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
                    className="absolute top-4 left-4 flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    {item.isVeg ? (
                      <span className="bg-green-600/90 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> Veg
                      </span>
                    ) : (
                      <span className="bg-red-600/90 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Drumstick className="w-3 h-3" /> Non-Veg
                      </span>
                    )}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-sm font-medium text-foreground">Click for details</span>
                  </div>
                </motion.div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{item.name}</h3>
                    <motion.span 
                      className="text-primary font-bold text-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.price}
                    </motion.span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Menu Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedItem && (
            <>
              <div className="relative h-64 md:h-80 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedItem.category}
                  </span>
                  {selectedItem.isVeg ? (
                    <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Leaf className="w-4 h-4" /> Vegetarian
                    </span>
                  ) : (
                    <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Drumstick className="w-4 h-4" /> Non-Vegetarian
                    </span>
                  )}
                </div>
              </div>
              
              <DialogHeader>
                <div className="flex justify-between items-start">
                  <DialogTitle className="text-2xl md:text-3xl font-bold">
                    {selectedItem.name}
                  </DialogTitle>
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {selectedItem.price}
                  </span>
                </div>
                <DialogDescription className="text-base text-muted-foreground mt-2">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Ingredients</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedItem.ingredients.map((ingredient, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Order Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                >
                  Add to Cart
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
