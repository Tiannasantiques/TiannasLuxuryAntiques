import { useQuery } from "@tanstack/react-query";
import { Antique } from "@shared/schema";
import { AntiqueCard } from "./antique-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function CollectionGallery() {
  const { data: antiques, isLoading, isError } = useQuery<Antique[]>({
    queryKey: ["/api/antiques"],
  });

  return (
    <section id="collection" className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Featured Collection
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exquisite examples of 18th and 19th-century French and European decorative arts, 
            curated for discerning institutional collectors
          </p>
        </div>

        {isError ? (
          <Alert variant="destructive" data-testid="alert-gallery-error">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Unable to load the collection at this time. Please try again later or contact us directly.
            </AlertDescription>
          </Alert>
        ) : isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : antiques && antiques.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-antiques">
            {antiques.map((antique) => (
              <AntiqueCard key={antique.id} antique={antique} />
            ))}
          </div>
        ) : (
          <Alert data-testid="alert-gallery-empty">
            <AlertDescription>
              Our collection is currently being curated. Please check back soon or contact us for available pieces.
            </AlertDescription>
          </Alert>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic text-sm sm:text-base">
            All pieces available for institutional acquisition. Pricing and detailed provenance provided upon consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
