import { Card, CardContent } from "@/components/ui/card";
import { Building2, Briefcase, Shield, Award, Search, Globe } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Museum Collections",
    description: "Specialized sourcing for permanent and exhibition collections, with complete provenance documentation and authentication.",
  },
  {
    icon: Briefcase,
    title: "Corporate Art Programs",
    description: "Curated acquisitions for executive offices, lobbies, and corporate collections that reflect prestige and refinement.",
  },
  {
    icon: Globe,
    title: "Multinational Projects",
    description: "Large-scale sourcing for luxury developments, high-end retail spaces, and international hospitality ventures.",
  },
  {
    icon: Award,
    title: "VIP Consultation Services",
    description: "Personalized guidance from initial inquiry through acquisition, ensuring each piece meets exacting institutional standards.",
  },
  {
    icon: Shield,
    title: "Authentication & Provenance",
    description: "Comprehensive documentation, condition reports, and expert authentication for all pieces in our collection.",
  },
  {
    icon: Search,
    title: "Specialized Sourcing",
    description: "Bespoke search services to locate specific periods, styles, or types of European decorative arts.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Institutional Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for museums, corporations, and discerning institutions worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-secondary/10 border-secondary/30 p-8 rounded-lg border-2" data-testid="card-business-model">
          <p className="text-xl font-bold text-foreground mb-3">
            Online-Only Operations · B2B Exclusively
          </p>
          <p className="text-muted-foreground text-lg">
            We operate exclusively online to serve our international institutional clientele efficiently. 
            All consultations, viewings, and transactions are conducted remotely with the highest level of professionalism.
          </p>
          <p className="text-muted-foreground mt-4 font-medium">
            Serving museums, luxury retail developments, corporate collections, and multinational projects worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
