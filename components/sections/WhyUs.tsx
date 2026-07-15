import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { copy } from "@/content/copy";
import type { IconName, Surface } from "@/lib/types";

const reasons: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Licensed & accredited",
    body: "A licensed travel operator and IATA-accredited agency — your trip is handled by a registered, professional company.",
  },
  {
    icon: "compass",
    title: "Genuine local knowledge",
    body: "Born and based in Mauritius. We show you the real island — culture, nature and the spots most visitors never find.",
  },
  {
    icon: "route",
    title: "One team, complete solution",
    body: "Flights, transfers, hotels, tours and activities arranged together, so you have a single trusted point of contact.",
  },
  {
    icon: "users",
    title: "Personalized attention",
    body: "Every itinerary is tailored to your interests, pace and budget — never a one-size-fits-all package.",
  },
  {
    icon: "whatsapp",
    title: "Easy, responsive support",
    body: "Reach us on WhatsApp before and during your trip. Questions answered quickly, in plain language.",
  },
  {
    icon: "star",
    title: "Trusted since 2019",
    body: "Built on reliability, local expertise and customer satisfaction — helping visitors enjoy Mauritius with confidence.",
  },
];

export function WhyUs({ waveInto }: { waveInto?: Surface }) {
  return (
    <Section surface="canvas" waveInto={waveInto}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeader
          align="left"
          eyebrow={copy.home.why.eyebrow}
          title={copy.home.why.title}
          subtitle={copy.home.why.subtitle}
        />
        <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r.title} className="flex flex-col gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lagoon-mist text-ocean">
                <Icon name={r.icon} size={22} />
              </span>
              <h3 className="text-lg">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
