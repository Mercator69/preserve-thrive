import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MethodCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  delay?: number;
}

export function MethodCard({ title, description, image, href, delay = 0 }: MethodCardProps) {
  return (
    <Link to={href} className="block group">
      <Card className="overflow-hidden hover-lift h-full border-0 shadow-md">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
