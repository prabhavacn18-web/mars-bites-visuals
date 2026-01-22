import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ImageLightbox } from "./ImageLightbox";

// Import all gallery images
import interiorImage from "@/assets/interior-dining.jpg";
import burgerImage from "@/assets/martian-burger.jpg";
import smoothieImage from "@/assets/zero-g-smoothie.jpg";
import dessertImage from "@/assets/alien-platter-dessert.jpg";
import burgerActionImage from "@/assets/burger-action.jpg";
import heroTerrace from "@/assets/hero-mars-terrace.jpg";
import nightAmbience from "@/assets/gallery-night-ambience.jpg";
import foodTexture from "@/assets/gallery-food-texture.jpg";
import barCounter from "@/assets/gallery-bar-counter.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: "ambience" | "dishes" | "mood" | "texture";
}

const galleryImages: GalleryImage[] = [
  { src: nightAmbience, alt: "Luxurious Martian restaurant interior at night", title: "Evening Ambience", category: "ambience" },
  { src: interiorImage, alt: "Futuristic restaurant interior with Mars panorama view", title: "Panoramic Dining Hall", category: "ambience" },
  { src: burgerImage, alt: "Signature Martian Burger with melted cheese", title: "The Martian Burger", category: "dishes" },
  { src: smoothieImage, alt: "Zero-G Smoothie with exotic fruit garnish", title: "Zero-G Smoothie", category: "dishes" },
  { src: barCounter, alt: "Premium cocktail bar with glowing drinks", title: "The Cosmic Bar", category: "mood" },
  { src: foodTexture, alt: "Close-up of gourmet burger patty with melting cheese", title: "Culinary Craftsmanship", category: "texture" },
  { src: dessertImage, alt: "Alien Platter dessert with cosmic presentation", title: "Alien Platter Dessert", category: "dishes" },
  { src: burgerActionImage, alt: "Chef preparing signature dishes", title: "Kitchen Artistry", category: "texture" },
  { src: heroTerrace, alt: "Mars terrace dining experience", title: "Terrace Dining", category: "mood" },
];

// Reusable gallery image component
const GalleryImageCard = ({
  image,
  index,
  onClick,
  className = "",
  showOverlay = true,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
  className?: string;
  showOverlay?: boolean;
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${image.title}`}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Warm glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Soft highlight border on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-xl transition-all duration-500"
        style={{ boxShadow: "inset 0 0 30px rgba(255, 107, 53, 0)" }}
        whileHover={{ boxShadow: "inset 0 0 30px rgba(255, 107, 53, 0.15)" }}
      />
      
      {/* Title overlay */}
      {showOverlay && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-foreground">{image.title}</h3>
        </motion.div>
      )}
    </motion.div>
  );
};

export const GallerySection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
  }));

  return (
    <section className="py-12 md:py-20 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary text-sm uppercase tracking-widest font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Visual Journey
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Experience Mars Bites
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Immerse yourself in the ambience, artistry, and flavors of our Martian dining experience
          </motion.p>
        </motion.div>

        {/* Hero Gallery Image - Full Width */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl">
            <motion.img
              src={nightAmbience}
              alt="Luxurious Martian restaurant interior at night"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1.2 }}
            />
            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
            
            {/* Hero text overlay */}
            <motion.div
              className="absolute bottom-8 left-8 md:bottom-12 md:left-12"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-primary text-sm uppercase tracking-widest mb-2">Featured</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Evening Ambience
              </h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Where Martian twilight meets culinary excellence
              </p>
            </motion.div>

            {/* Click to view indicator */}
            <motion.button
              className="absolute bottom-8 right-8 md:bottom-12 md:right-12 px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-primary hover:bg-primary/30 transition-colors"
              onClick={() => openLightbox(0)}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              View Gallery
            </motion.button>
          </div>
        </motion.div>

        {/* Editorial Layout - Row 1: Large left, 2 stacked right */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="md:col-span-3 h-64 md:h-[500px]"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <GalleryImageCard
              image={galleryImages[1]}
              index={1}
              onClick={() => openLightbox(1)}
              className="h-full"
            />
          </motion.div>
          
          <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
            <motion.div
              className="h-48 md:h-[240px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <GalleryImageCard
                image={galleryImages[2]}
                index={2}
                onClick={() => openLightbox(2)}
                className="h-full"
              />
            </motion.div>
            <motion.div
              className="h-48 md:h-[240px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <GalleryImageCard
                image={galleryImages[3]}
                index={3}
                onClick={() => openLightbox(3)}
                className="h-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Editorial Layout - Row 2: 2 stacked left, Large right (alternate) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="md:col-span-2 flex flex-col gap-4 md:gap-6 order-2 md:order-1">
            <motion.div
              className="h-48 md:h-[240px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <GalleryImageCard
                image={galleryImages[5]}
                index={5}
                onClick={() => openLightbox(5)}
                className="h-full"
              />
            </motion.div>
            <motion.div
              className="h-48 md:h-[240px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <GalleryImageCard
                image={galleryImages[6]}
                index={6}
                onClick={() => openLightbox(6)}
                className="h-full"
              />
            </motion.div>
          </div>
          
          <motion.div
            className="md:col-span-3 h-64 md:h-[500px] order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <GalleryImageCard
              image={galleryImages[4]}
              index={4}
              onClick={() => openLightbox(4)}
              className="h-full"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Row - 3 equal images */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          {[7, 8].map((idx) => (
            <motion.div
              key={idx}
              className="h-48 md:h-64"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + idx * 0.05, duration: 0.5 }}
            >
              <GalleryImageCard
                image={galleryImages[idx]}
                index={idx}
                onClick={() => openLightbox(idx)}
                className="h-full"
              />
            </motion.div>
          ))}
          
          {/* Visit Us CTA Card - Opens in new tab */}
          <motion.a
            href="/visit-us"
            target="_blank"
            rel="noopener noreferrer"
            className="h-48 md:h-64 relative overflow-hidden rounded-xl bg-gradient-mars flex items-center justify-center cursor-pointer group block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            aria-label="Visit Us - Opens in a new tab"
          >
            <motion.div
              className="text-center p-6 z-10"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-3 text-foreground"
                animate={{
                  textShadow: [
                    "0 0 0px hsl(18 95% 65%)",
                    "0 0 25px hsl(18 95% 65%)",
                    "0 0 0px hsl(18 95% 65%)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Visit Us
              </motion.h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Mars Colony, Sector 7
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Olympus Mons Terrace
              </p>
            </motion.div>
            
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.a>
        </motion.div>

        {/* Mobile Swipe Gallery - Hidden on desktop */}
        <motion.div
          className="mt-8 md:hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-muted-foreground text-sm mb-4">
            Swipe to explore more →
          </p>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[80vw] h-64 snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <GalleryImageCard
                  image={image}
                  index={index}
                  onClick={() => openLightbox(index)}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </section>
  );
};
