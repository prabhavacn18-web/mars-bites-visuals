import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MenuSection />
      <GallerySection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
