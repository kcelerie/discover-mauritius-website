import { Section, SectionHeader } from "@/components/ui/Section";
import { TourCard } from "@/components/cards/TourCard";
import { Button } from "@/components/ui/Button";
import { getFeatured } from "@/lib/products";
import { copy } from "@/content/copy";

export function FeaturedTours() {
  const tours = getFeatured(6);
  return (
    <Section surface="canvas" waveInto="lagoon-mist">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow={copy.home.featured.eyebrow}
            title={copy.home.featured.title}
            subtitle={copy.home.featured.subtitle}
            className="md:max-w-2xl"
          />
          <Button href="/tours" variant="secondary" icon="arrow-right" className="shrink-0">
            View all tours
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} product={tour} />
          ))}
        </div>

        <p className="text-sm text-muted">
          Prices shown are indicative starting prices while we finalize our published rates.
          Every trip is quoted individually — <a href="/contact" className="font-semibold text-ocean underline-offset-2 hover:underline">request your personalized quote</a>.
        </p>
      </div>
    </Section>
  );
}
