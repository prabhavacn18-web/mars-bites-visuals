import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
