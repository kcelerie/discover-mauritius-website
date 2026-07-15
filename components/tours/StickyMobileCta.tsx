import Link from "next/link";
import { formatFromPrice } from "@/lib/products";
import { Icon } from "@/components/ui/Icon";
import type { Product } from "@/lib/types";

/** Sticky mobile CTA bar on tour pages (brief §11). Leaves room at right for the WhatsApp float. */
export function StickyMobileCta({ product }: { product: Product }) {
  const quoteHref = `/contact?service=${product.productType}&item=${product.slug}`;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-hairline bg-white/95 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3 pr-20">
        <div className="leading-tight">
          <p className="font-display text-lg font-semibold text-ocean">{formatFromPrice(product)}</p>
          <p className="text-xs text-muted">{product.duration.split(" · ")[0]}</p>
        </div>
        <Link
          href={quoteHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-card focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold-ink"
        >
          Request Quote
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </div>
  );
}
