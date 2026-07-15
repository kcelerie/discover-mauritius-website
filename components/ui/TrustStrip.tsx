import { trustBadges } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Trust strip — Licensed · IATA · Since 2019 · WhatsApp (brief §10).
 * `bar` sits under the hero; `grid` is a fuller treatment for the "Why us" area.
 */
export function TrustStrip({
  variant = "bar",
  onDark = false,
  className,
}: {
  variant?: "bar" | "grid";
  onDark?: boolean;
  className?: string;
}) {
  if (variant === "grid") {
    return (
      <ul className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
        {trustBadges.map((b) => (
          <li
            key={b.label}
            className="flex flex-col gap-3 rounded-card border border-hairline bg-white p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lagoon-mist text-ocean">
              <Icon name={b.icon} size={22} />
            </span>
            <span className="font-semibold text-ink">{b.label}</span>
            <span className="text-sm text-muted">{b.detail}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-6 gap-y-3",
        className,
      )}
    >
      {trustBadges.map((b, i) => (
        <li key={b.label} className="flex items-center gap-2">
          <span className={cn("flex items-center gap-2 text-sm font-semibold", onDark ? "text-white" : "text-ink")}>
            <Icon name={b.icon} size={18} className={onDark ? "text-lagoon" : "text-ocean"} />
            {b.label}
          </span>
          {i < trustBadges.length - 1 ? (
            <span aria-hidden className={cn("hidden sm:inline", onDark ? "text-white/30" : "text-hairline")}>
              ·
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
