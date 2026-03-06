import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
};

export default About;
