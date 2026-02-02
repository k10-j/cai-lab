import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MapPin, Clock } from "lucide-react";

interface PathwayCardProps {
  title: string;
  pathway: string;
  recommendedModules: string[];
  estimatedTime?: string;
  className?: string;
}

export function PathwayCard({
  title,
  pathway,
  recommendedModules,
  estimatedTime = "4–6 weeks",
  className,
}: PathwayCardProps) {
  return (
    <Card className={cn("border-primary/20 bg-gradient-card", className)}>
      <CardHeader>
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="h-5 w-5" />
          <CardTitle className="text-xl font-display">{title}</CardTitle>
        </div>
        <p className="text-muted-foreground">{pathway}</p>
        {estimatedTime && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Estimated: {estimatedTime}</span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-foreground mb-2">Recommended modules</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {recommendedModules.map((mod, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>{mod}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
