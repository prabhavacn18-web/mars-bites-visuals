import { Navigation } from "@/components/Navigation";
import { MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const MenuPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <MenuSection />
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
};

export default MenuPage;
