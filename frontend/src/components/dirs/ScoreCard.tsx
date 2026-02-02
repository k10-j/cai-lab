import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ScoreCardProps {
  label: string;
  score: number;
  variant?: "default" | "compact";
  className?: string;
}

export function ScoreCard({ label, score, variant = "default", className }: ScoreCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-2xl font-bold text-foreground">{score}</span>
          <span className="text-xs text-muted-foreground">/ 100</span>
        </div>
        {variant === "default" && (
          <Progress
            value={score}
            className="h-2"
          />
        )}
      </CardContent>
    </Card>
  );
}
