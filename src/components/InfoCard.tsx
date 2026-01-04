import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "primary" | "warning";
}

export function InfoCard({ icon: Icon, title, description, variant = "default" }: InfoCardProps) {
  const variantStyles = {
    default: "bg-card border-border",
    primary: "bg-primary/5 border-primary/20",
    warning: "bg-destructive/5 border-destructive/20",
  };

  const iconStyles = {
    default: "bg-muted text-foreground",
    primary: "bg-primary text-primary-foreground",
    warning: "bg-destructive text-destructive-foreground",
  };

  return (
    <Card className={`${variantStyles[variant]} hover-lift`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconStyles[variant]}`}>
            <Icon className="w-5 h-5" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
