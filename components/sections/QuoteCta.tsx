import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Section";
import { copy } from "@/content/copy";
import { whatsappLink } from "@/lib/utils";

/** Reusable final conversion band — the funnel target on every page (brief §2). */
export function QuoteCta({
  eyebrow = copy.home.finalCta.eyebrow,
  title = copy.home.finalCta.title,
  subtitle = copy.home.finalCta.subtitle,
  primaryLabel = copy.ctas.planHoliday,
  primaryHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-ocean to-ocean-deep px-6 py-14 text-center md:px-16 md:py-20">
          {/* decorative lagoon-line glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ backgroundImage: "var(--gradient-lagoon-line)" }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Eyebrow onDark>{eyebrow}</Eyebrow>
            <h2 className="text-3xl text-white sm:text-4xl md:text-5xl">{title}</h2>
            <p className="text-lg leading-relaxed text-white/85">{subtitle}</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} size="lg" icon="sparkles" iconPosition="left">
                {primaryLabel}
              </Button>
              <Button href={whatsappLink()} variant="whatsapp" size="lg" icon="whatsapp" iconPosition="left" target="_blank">
                {copy.ctas.whatsapp}
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-lagoon" /> {copy.trust.noPayment}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="clock" size={16} className="text-lagoon" /> {copy.trust.responseTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
