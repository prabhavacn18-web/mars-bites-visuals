import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Utensils, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "@/components/ImageLightbox";
import { Link } from "react-router-dom";

// Import all images
import heroTerrace from "@/assets/hero-mars-terrace.jpg";
import interiorImage from "@/assets/interior-dining.jpg";
import burgerImage from "@/assets/martian-burger.jpg";
import smoothieImage from "@/assets/zero-g-smoothie.jpg";
import dessertImage from "@/assets/alien-platter-dessert.jpg";
import burgerActionImage from "@/assets/burger-action.jpg";
import nightAmbience from "@/assets/gallery-night-ambience.jpg";
import foodTexture from "@/assets/gallery-food-texture.jpg";
import barCounter from "@/assets/gallery-bar-counter.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: "interior" | "dishes" | "ambience";
}

const galleryImages: GalleryImage[] = [
  { src: nightAmbience, alt: "Evening ambience at Mars Bites", title: "Evening Ambience", category: "ambience" },
  { src: interiorImage, alt: "Futuristic restaurant interior", title: "Panoramic Dining Hall", category: "interior" },
  { src: barCounter, alt: "Premium cocktail bar", title: "The Cosmic Bar", category: "ambience" },
  { src: burgerImage, alt: "Signature Martian Burger", title: "The Martian Burger", category: "dishes" },
  { src: smoothieImage, alt: "Zero-G Smoothie", title: "Zero-G Smoothie", category: "dishes" },
  { src: foodTexture, alt: "Close-up culinary craftsmanship", title: "Culinary Craftsmanship", category: "dishes" },
  { src: dessertImage, alt: "Alien Platter dessert", title: "Alien Platter Dessert", category: "dishes" },
  { src: burgerActionImage, alt: "Chef preparing dishes", title: "Kitchen Artistry", category: "dishes" },
  { src: heroTerrace, alt: "Mars terrace dining", title: "Terrace Dining", category: "interior" },
];

const features = [
  {
    icon: Star,
    title: "Award-Winning Cuisine",
    description: "Recognized across the solar system for our innovative fusion of Earth and Martian flavors."
  },
  {
    icon: Utensils,
    title: "Premium Ingredients",
    description: "We source the finest ingredients from hydroponic farms on Mars and Earth's most exclusive suppliers."
  },
  {
    icon: MapPin,
    title: "Breathtaking Location",
    description: "Dine with a panoramic view of Olympus Mons, the largest volcano in our solar system."
  },
];

const VisitUs = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "interior" | "dishes" | "ambience">("all");

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
  }));

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-background/80 backdrop-blur-md border-primary/30 hover:bg-primary/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src={nightAmbience} 
            alt="Mars Bites Restaurant" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/50 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ 
                y: [0, -40, 0], 
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 4 + Math.random() * 3, 
                repeat: Infinity, 
                delay: Math.random() * 3 
              }}
            />
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.span
            className="inline-block text-primary font-semibold tracking-[0.3em] uppercase mb-6 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Mars Colony, Sector 7
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
            <br />
            <span className="text-foreground">Mars Bites</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Where interplanetary gastronomy meets breathtaking Martian vistas. 
            An unforgettable dining experience awaits.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="lg" onClick={() => {
                document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Make Reservation
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 hover:bg-primary/20"
                onClick={() => {
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Gallery
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the ambience, artistry, and flavors that define Mars Bites
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { key: "all", label: "All" },
              { key: "interior", label: "Interior" },
              { key: "dishes", label: "Dishes" },
              { key: "ambience", label: "Ambience" },
            ].map((cat) => (
              <Button
                key={cat.key}
                variant={filter === cat.key ? "hero" : "outline"}
                size="sm"
                onClick={() => setFilter(cat.key as typeof filter)}
                className={filter !== cat.key ? "border-primary/30 hover:bg-primary/20" : ""}
              >
                {cat.label}
              </Button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div 
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(index)}
                  layout
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                      <p className="text-sm text-muted-foreground capitalize">{image.category}</p>
                    </div>
                  </div>

                  {/* Glow border */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-xl transition-all duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={interiorImage} 
                alt="Mars Bites Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary text-sm uppercase tracking-widest font-medium">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                A New Era of <span className="text-primary">Cosmic Dining</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded in 2157, Mars Bites was born from a vision to bring humanity's finest culinary traditions to the Red Planet, while embracing the unique opportunities of Martian ingredients and dining experiences.
                </p>
                <p>
                  Our chefs combine Earth's classical techniques with Martian-grown produce from our own hydroponic gardens, creating dishes that are both familiar and wonderfully alien.
                </p>
                <p>
                  Every meal at Mars Bites is more than dining—it's an experience that celebrates humanity's greatest adventure: colonizing the cosmos.
                </p>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section id="reservation" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">Plan Your Visit</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Visit Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to plan your unforgettable dining experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <motion.div
              className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Location</h3>
              <p className="text-muted-foreground">
                Olympus Mons Terrace<br />
                Mars Colony, Sector 7<br />
                Dome District Alpha
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Opening Hours</h3>
              <p className="text-muted-foreground">
                Mon - Thu: 17:00 - 23:00<br />
                Fri - Sat: 17:00 - 01:00<br />
                Sun: 16:00 - 22:00
              </p>
            </motion.div>

            {/* Cuisine */}
            <motion.div
              className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Utensils className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Cuisine</h3>
              <p className="text-muted-foreground">
                Interplanetary Fusion<br />
                Neo-Martian Cuisine<br />
                Earth Classics Reimagined
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Contact</h3>
              <p className="text-muted-foreground">
                +1 (MARS) 555-2157<br />
                <span className="flex items-center gap-1 mt-1">
                  <Mail className="w-4 h-4" />
                  reserve@marsbites.mars
                </span>
              </p>
            </motion.div>
          </div>

          {/* Reservation CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-mars border border-primary/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready for an Unforgettable Experience?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Reserve your table now and embark on a culinary journey unlike any other in the solar system.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Reserve Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2157 Mars Bites. All rights reserved across the solar system.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </main>
  );
};

export default VisitUs;
