import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-gold", className)}
      role="img"
      aria-label={`${full} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={16} className={i < full ? "opacity-100" : "opacity-25"} />
      ))}
    </span>
  );
}
