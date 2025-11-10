import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <section id="menu" className="py-20 bg-gradient-space">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cosmic Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dishes crafted from the finest ingredients across the solar system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id}
              className="overflow-hidden bg-card border-border hover:shadow-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
