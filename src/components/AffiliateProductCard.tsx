import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AffiliateProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  amazonLink?: string;
  category: string;
  featured?: boolean;
}

export function AffiliateProductCard({
  name,
  description,
  image,
  price,
  rating,
  amazonLink = "#",
  category,
  featured = false,
}: AffiliateProductCardProps) {
  return (
    <Card className={`overflow-hidden hover-lift ${featured ? "ring-2 ring-accent" : ""}`}>
      {featured && (
        <div className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 text-center">
          Editor's Choice
        </div>
      )}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src="https://b4333452.smushcdn.com/4333452/wp-content/uploads/2019/05/NPC-9-New-Panel-1-scaled.jpg?lossy=2&strip=1&webp=1"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
        <h3 className="font-serif font-semibold line-clamp-2">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "text-accent fill-accent" : "text-muted"}`} />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({rating}/5)</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold text-lg text-primary">{price}</span>
          <Button asChild size="sm" variant="harvest">
            <a href="https://www.nesco.com/product/9-qt-smart-canner-cooker" target="_blank" rel="noopener noreferrer">
              View on Nesco
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
