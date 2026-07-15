import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { ReefWave } from "@/components/ui/ReefWave";
import { Icon } from "@/components/ui/Icon";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { copy } from "@/content/copy";
import type { ImageSlot } from "@/lib/types";

const heroImage: ImageSlot = {
  id: "home-hero",
  alt: "Aerial view of a turquoise Mauritius lagoon meeting white sand and green mountains",
  tone: "ocean",
  orientation: "wide",
};

export function Hero() {
  const { hero } = copy.home;
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <SmartImage slot={heroImage} cover priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ocean/45 to-lagoon/25" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" aria-hidden />

      <div className="container-page relative flex min-h-[36rem] flex-col justify-center py-24 md:min-h-[42rem] md:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow text-lagoon">
            <span aria-hidden className="h-px w-6 rounded-full bg-lagoon" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 text-4xl font-medium text-white sm:text-5xl md:text-[3.75rem] md:leading-[1.03]">
            {hero.title}{" "}
            <span className="text-lagoon-line">{hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" icon="sparkles" iconPosition="left">
              {copy.ctas.planHoliday}
            </Button>
            <Button href="/tours" size="lg" variant="onDark" icon="arrow-right">
              {copy.ctas.exploreTours}
            </Button>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
            <Icon name="shield" size={16} className="text-lagoon" />
            Licensed Tour Operator &amp; IATA-Accredited Agency
          </div>
        </div>
      </div>

      {/* Trust strip band under the hero */}
      <div className="relative bg-white/95 backdrop-blur">
        <div className="container-page py-5">
          <TrustStrip variant="bar" />
        </div>
      </div>
    </section>
  );
}
