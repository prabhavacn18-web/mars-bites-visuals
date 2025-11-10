import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mars-terrace.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Mars Bites
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Experience dining beyond Earth. Where cosmic flavors meet Martian innovation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg">
            View Menu
          </Button>
          <Button variant="outline" size="lg" className="border-foreground/30 hover:bg-foreground/10">
            Reserve Table
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-glow" />
        </div>
      </div>
    </section>
  );
};
