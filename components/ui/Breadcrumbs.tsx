import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, onDark = true }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link
                  href={c.href}
                  className={cn(
                    "transition-colors",
                    onDark ? "text-white/70 hover:text-white" : "text-muted hover:text-ocean",
                  )}
                >
                  {c.label}
                </Link>
              ) : (
                <span className={cn("font-medium", onDark ? "text-white" : "text-ink")} aria-current="page">
                  {c.label}
                </span>
              )}
              {!last ? (
                <Icon name="chevron-down" size={14} className={cn("-rotate-90", onDark ? "text-white/40" : "text-hairline")} />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
