import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Antique } from "@shared/schema";

interface AntiqueCardProps {
  antique: Antique;
}

export function AntiqueCard({ antique }: AntiqueCardProps) {
  return (
    <Card 
      className="group overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col" 
      data-testid={`card-antique-${antique.id}`}
    >
      <div className="relative overflow-hidden bg-muted aspect-[3/4]">
      </div>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <Badge variant="secondary" className="text-xs uppercase tracking-wider" data-testid={`badge-category-${antique.id}`}>
            {antique.category}
          </Badge>
        </div>
        
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3 leading-tight" data-testid={`text-antique-name-${antique.id}`}>
          {antique.name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1" data-testid={`text-antique-description-${antique.id}`}>
          {antique.description}
        </p>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
        <Badge variant="outline" className="text-xs" data-testid={`badge-period-${antique.id}`}>
          {antique.period}
        </Badge>
        <Badge variant="outline" className="text-xs" data-testid={`badge-origin-${antique.id}`}>
          {antique.origin}
        </Badge>
      </CardFooter>
    </Card>
  );
}
