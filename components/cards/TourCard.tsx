import Link from "next/link";
import type { Product } from "@/lib/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { Icon } from "@/components/ui/Icon";
import { formatFromPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

/**
 * Reusable tour card (brief §6): photo · title · duration badge · "From €XX" ·
 * one-line hook · Request Quote. Subtle hover lift + image zoom.
 * Two distinct links (title→detail, CTA→quote) — no nested/stretched-link a11y traps.
 */
export function TourCard({ product, className }: { product: Product; className?: string }) {
  const detailHref = `/tours/${product.slug}`;
  const quoteHref = `/contact?service=${product.productType}&item=${product.slug}`;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-card border border-hairline bg-white",
        "shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      <Link
        href={detailHref}
        className="relative block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <SmartImage
            slot={product.hero}
            cover
            rounded={false}
            className="transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        </div>
        {/* duration badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-card backdrop-blur">
          <Icon name="clock" size={13} className="text-ocean" />
          {product.duration.split(" · ")[0]}
        </span>
        {/* region chip */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <Icon name="map-pin" size={12} />
          {product.region}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-lagoon-deep">
            {product.groupType}
          </span>
          <span className="font-display text-lg font-medium text-ocean" title={product.priceNote}>
            {formatFromPrice(product)}
          </span>
        </div>

        <h3 className="text-xl leading-snug">
          <Link href={detailHref} className="transition-colors hover:text-ocean">
            {product.title}
          </Link>
        </h3>

        <p className="text-sm leading-relaxed text-muted">{product.hook}</p>

        <div className="mt-auto flex items-center gap-3 pt-3">
          <Link
            href={quoteHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:brightness-[1.04] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold-ink"
          >
            Request Quote
          </Link>
          <Link
            href={detailHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-ocean transition-colors hover:text-ocean-deep"
          >
            Details
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
