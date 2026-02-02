import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepperProps {
  steps: { label: string; short?: string }[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <nav aria-label="Progress" className={cn("w-full", className)}>
      <ol className="flex items-center justify-between gap-1">
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isCurrent = index === currentStep;
          return (
            <li
              key={step.label}
              className={cn(
                "flex flex-1 items-center",
                index < steps.length - 1 ? "after:content-[''] after:flex-1 after:border-b after:border-border after:mx-2" : ""
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isComplete && "bg-primary/10 text-primary",
                  isCurrent && "bg-primary text-primary-foreground",
                  !isComplete && !isCurrent && "bg-muted text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2",
                    isComplete && "border-primary bg-primary text-primary-foreground",
                    isCurrent && "border-primary-foreground bg-transparent",
                    !isComplete && !isCurrent && "border-muted-foreground/30"
                  )}
                >
                  {isComplete ? <Check className="h-4 w-4" /> : index + 1}
                </span>
                <span className="hidden sm:inline">{step.short ?? step.label}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
