import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CEOProfile } from "@/components/ceo-profile";
import { CollectionGallery } from "@/components/collection-gallery";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CEOProfile />
        <CollectionGallery />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
