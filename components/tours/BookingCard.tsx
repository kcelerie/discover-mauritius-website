import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { formatFromPrice } from "@/lib/products";
import { whatsappLink } from "@/lib/utils";
import { copy } from "@/content/copy";
import type { Product, IconName } from "@/lib/types";

const facts: { icon: IconName; label: keyof Product | "region" }[] = [
  { icon: "clock", label: "duration" },
  { icon: "users", label: "groupType" },
  { icon: "map-pin", label: "region" },
];

export function BookingCard({ product }: { product: Product }) {
  const quoteHref = `/contact?service=${product.productType}&item=${product.slug}`;
  const waMessage = `Hello! I'd like a quote for the "${product.title}" in Mauritius.`;

  return (
    <div className="rounded-card border border-hairline bg-white p-6 shadow-card">
      <div className="flex items-end justify-between gap-2">
        <div>
          <span className="text-sm text-muted">Starting from</span>
          <p className="font-display text-3xl font-semibold text-ocean">{formatFromPrice(product)}</p>
        </div>
        <span className="rounded-full bg-lagoon-mist px-3 py-1 text-xs font-semibold text-ocean">
          {product.groupType}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted" title={product.priceNote}>
        per {product.productType === "transfer" ? "vehicle" : "person"} · indicative
      </p>

      <dl className="mt-5 flex flex-col gap-3 border-y border-hairline py-5 text-sm">
        {facts.map((f) => (
          <div key={f.label} className="flex items-center gap-3">
            <Icon name={f.icon} size={17} className="text-ocean" />
            <dt className="sr-only">{f.label}</dt>
            <dd className="text-ink">{String(product[f.label as keyof Product])}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex flex-col gap-3">
        <Button href={quoteHref} size="lg" className="w-full" icon="arrow-right">
          {copy.ctas.requestQuote}
        </Button>
        <Button
          href={whatsappLink(waMessage)}
          variant="whatsapp"
          size="lg"
          className="w-full"
          icon="whatsapp"
          iconPosition="left"
          target="_blank"
        >
          {copy.ctas.whatsapp}
        </Button>
      </div>

      <ul className="mt-5 flex flex-col gap-2 text-sm text-muted">
        <li className="flex items-center gap-2">
          <Icon name="check" size={15} className="text-lagoon-deep" /> {copy.trust.noPayment}
        </li>
        <li className="flex items-center gap-2">
          <Icon name="check" size={15} className="text-lagoon-deep" /> {copy.trust.responseTime}
        </li>
        <li className="flex items-center gap-2">
          <Icon name="check" size={15} className="text-lagoon-deep" /> Licensed &amp; IATA-accredited
        </li>
      </ul>
    </div>
  );
}
