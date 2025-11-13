import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/collect_1763055734524.webp";

export function HeroSection() {
  const scrollToGallery = () => {
    const gallery = document.getElementById("collection");
    gallery?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Tianna's Luxury Antiques
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
          Curating Exceptional European Antiques for Distinguished Institutions Worldwide
        </p>
        <p className="text-base sm:text-lg text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exclusive supplier to museums, corporate collections, and multinational projects
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            data-testid="button-hero-contact"
            className="bg-primary/90 backdrop-blur-sm border border-primary-border text-primary-foreground hover-elevate active-elevate-2 text-base px-8 py-6 font-medium"
          >
            Request Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToGallery}
            data-testid="button-hero-gallery"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover-elevate active-elevate-2 text-base px-8 py-6 font-medium"
          >
            View Collection
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToGallery}
        data-testid="button-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to collection"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
