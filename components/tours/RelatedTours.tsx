import { Section, SectionHeader } from "@/components/ui/Section";
import { TourCard } from "@/components/cards/TourCard";
import { getRelated } from "@/lib/products";
import type { Surface } from "@/lib/types";

export function RelatedTours({ slug, waveInto }: { slug: string; waveInto?: Surface }) {
  const related = getRelated(slug, 3);
  if (related.length === 0) return null;
  return (
    <Section surface="lagoon-mist" waveInto={waveInto}>
      <div className="flex flex-col gap-8">
        <SectionHeader align="left" eyebrow="Keep exploring" title="You might also like" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((t) => (
            <TourCard key={t.slug} product={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
