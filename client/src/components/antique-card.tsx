import { Card, CardFooter } from "@/components/ui/card";
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
