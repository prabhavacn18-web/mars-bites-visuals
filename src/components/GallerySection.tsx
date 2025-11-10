import interiorImage from "@/assets/interior-dining.jpg";
import burgerImage from "@/assets/martian-burger.jpg";
import smoothieImage from "@/assets/zero-g-smoothie.jpg";

export const GallerySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the Martian dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-96 overflow-hidden rounded-lg group">
            <img 
              src={interiorImage} 
              alt="Futuristic restaurant interior with Mars panorama view"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Interior Dining</h3>
                <p className="text-muted-foreground">Experience Mars through our panoramic windows</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-44 overflow-hidden rounded-lg group">
              <img 
                src={burgerImage} 
                alt="Martian Burger with melted cheese close-up"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="relative h-44 overflow-hidden rounded-lg group">
              <img 
                src={smoothieImage} 
                alt="Zero-G Smoothie with fruit garnish"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 relative h-44 overflow-hidden rounded-lg group bg-gradient-mars flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
                <p className="text-sm">Mars Colony, Sector 7 - Olympus Mons Terrace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
