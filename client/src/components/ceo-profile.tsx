import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, Award, Building2, Mail, Phone } from "lucide-react";
import ceoImage from "@assets/photo_2025-11-13_19-48-36_1763084928677.jpg";

export function CEOProfile() {
  const countries = ["Canada", "Singapore", "USA", "Italy", "France", "Monaco"];

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Expertise Spanning Continents
                </h2>
                <div className="w-24 h-1 bg-primary mb-6"></div>
              </div>

              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-foreground/90">
                <p>
                  With decades of experience in the international antiques trade, Tianna's Luxury Antiques has established itself as a premier source for museum-quality European decorative arts. Our specialization in 18th and 19th-century French and European pieces makes us the preferred partner for institutions seeking exceptional acquisitions.
                </p>
                <p>
                  <strong className="text-foreground">Operating exclusively online with B2B focus,</strong> we provide seamless access to our curated collection for clients worldwide. Our extensive network across six continents enables us to source the finest pieces and deliver unparalleled service to museums, luxury retail developments, and multinational corporate art programs.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">International Presence</h3>
                    <div className="flex flex-wrap gap-2">
                      {countries.map((country) => (
                        <Badge
                          key={country}
                          variant="secondary"
                          className="text-sm"
                          data-testid={`badge-country-${country.toLowerCase()}`}
                        >
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">Institutional Clientele</h3>
                    <p className="text-foreground/80">Museums, Luxury Malls, Corporate Collections, Private Institutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">Specialization</h3>
                    <p className="text-foreground/80">18th-19th Century French & European Decorative Arts</p>
                  </div>
                </div>
              </div>

              <Card className="bg-secondary/10 border-secondary/20 p-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Business Contacts</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-1 text-sm">
                      <a
                        href="mailto:michelletianna616@gmail.com"
                        className="block text-foreground hover:text-primary transition-colors font-medium"
                        data-testid="link-email-primary-profile"
                      >
                        michelletianna616@gmail.com
                      </a>
                      <a
                        href="mailto:michellescarlet455@gmail.com"
                        className="block text-foreground hover:text-primary transition-colors font-medium"
                        data-testid="link-email-secondary-profile"
                      >
                        michellescarlet455@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <a
                      href="tel:+61434654261"
                      className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                      data-testid="link-phone-profile"
                    >
                      +61 434 654 261
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Card className="p-2 hover-elevate transition-all duration-300">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={ceoImage}
                  alt="Tianna - Founder & CEO"
                  className="w-full h-auto object-cover"
                  data-testid="img-ceo"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">Tianna</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Founder & CEO</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
