import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Tianna's Luxury Antiques
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Curating exceptional 18th and 19th-century European antiques for distinguished institutions worldwide. 
              Exclusively serving museums, corporate collections, and multinational projects.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="bg-muted px-3 py-1 rounded-md">Online-Only</span>
              <span className="bg-muted px-3 py-1 rounded-md">B2B Exclusively</span>
              <span className="bg-muted px-3 py-1 rounded-md">International</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollTo("collection")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-collection"
                >
                  Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("about")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("services")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo("contact")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+61434654261" className="hover:text-primary transition-colors">
                  +61 434 654 261
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="mailto:michelletianna616@gmail.com" 
                    className="block hover:text-primary transition-colors break-all"
                  >
                    michelletianna616@gmail.com
                  </a>
                  <a 
                    href="mailto:michellescarlet455@gmail.com" 
                    className="block hover:text-primary transition-colors break-all"
                  >
                    michellescarlet455@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Tianna's Luxury Antiques. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              Serving Canada, Singapore, USA, Italy, France, Monaco & Beyond
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
