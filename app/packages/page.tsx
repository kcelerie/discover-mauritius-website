import type { Metadata } from "next";
import Link from "next/link";
import { ServiceLanding } from "@/components/services/ServiceLanding";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { getService } from "@/content/services";
import { getProduct, formatFromPrice } from "@/lib/products";
import type { ImageSlot } from "@/lib/types";

export const metadata: Metadata = {
  title: "Mauritius Holiday Packages — 5-Day & Custom",
  description:
    "Complete Mauritius holiday packages: a signature five-day package or a fully bespoke trip combining accommodation, transfers, tours, activities and travel support — planned end to end by one local team.",
  alternates: { canonical: "/packages" },
};

const hero: ImageSlot = {
  id: "packages-hero",
  alt: "Beachfront resort and turquoise lagoon in Mauritius at golden hour",
  tone: "sunset",
  orientation: "wide",
};

export default function PackagesPage() {
  const service = getService("packages")!;
  const fiveDay = getProduct("five-day-mauritius-package");

  return (
    <ServiceLanding
      service={service}
      hero={hero}
      quoteServiceKey="package"
      subtitle="One team plans your entire trip — accommodation, transfers, tours and activities — then tailors it to your interests, time and budget."
      lead="A great Mauritius holiday is more than a hotel booking. Our packages bring every piece together — where you stay, how you get around, what you see and do — into one seamless trip with a single, trusted point of contact. Start from our signature five-day package, or let us build something entirely around you."
      keyFacts={[
        { icon: "calendar", label: "Signature package", value: "5 days · 4 nights" },
        { icon: "route", label: "Includes", value: "Stay + transfers + tours" },
        { icon: "users", label: "Style", value: "Private & fully customizable" },
        { icon: "sparkles", label: "Starting price", value: fiveDay ? `${formatFromPrice(fiveDay)} pp (indicative)` : "On request" },
      ]}
      features={[
        { icon: "hotel", title: "Accommodation to your budget", body: "From beach resorts to boutique stays, matched to how you like to travel." },
        { icon: "car", title: "Transfers included", body: "Airport meet & greet and transport between everything on your itinerary." },
        { icon: "route", title: "Guided tours & activities", body: "The island's highlights, curated and guided by locals who know it best." },
        { icon: "compass", title: "Fully customizable", body: "Add a lagoon day, a hike, a dinner — shape the trip around your interests." },
        { icon: "whatsapp", title: "Support throughout", body: "Reach us on WhatsApp before and during your stay for anything you need." },
        { icon: "plane", title: "Flights, if you need them", body: "As an IATA-accredited agency we can arrange your flights too." },
      ]}
      steps={[
        { title: "Tell us your dream trip", description: "Share your dates, party and what matters most — beaches, culture, nature, relaxation." },
        { title: "We design & quote it", description: "You receive a tailored day-by-day plan and a clear, no-obligation quote." },
        { title: "Relax — we handle it", description: "Confirm, and we arrange every detail while you look forward to Mauritius." },
      ]}
      faqs={[
        { question: "Can you arrange a complete Mauritius holiday package?", answer: "Yes — accommodation, transfers, tours, activities and travel support, all arranged together with one point of contact." },
        { question: "Can you customize the package?", answer: "Absolutely. The five-day package is a starting point; we tailor everything to your interests, time and budget." },
        { question: "Do packages include flights?", answer: "Flights are optional. As an IATA-accredited agency we can arrange them, or you can book your own and we'll handle everything on the ground." },
        { question: "How far in advance should I book?", answer: "As early as possible, especially in peak season, so we can secure the best accommodation and availability." },
      ]}
    >
      {fiveDay ? (
        <Section surface="lagoon-mist" waveInto="canvas">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            <div className="flex flex-col gap-5">
              <SectionHeader align="left" eyebrow="Signature package" title="Your five days, day by day" />
              <p className="text-muted">
                A balanced sample itinerary across the island — north, south and a lagoon day —
                easily reshaped to your pace and interests.
              </p>
              <div className="flex flex-col gap-3">
                <Button href={`/tours/${fiveDay.slug}`} variant="secondary" icon="arrow-right">
                  See the full package
                </Button>
              </div>
            </div>
            <ol className="relative flex flex-col gap-6 border-l-2 border-hairline pl-8">
              {fiveDay.itinerary.map((stop, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-ocean text-xs font-bold text-white ring-4 ring-lagoon-mist">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{stop.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{stop.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-gold-ink">
            <Icon name="sparkles" size={15} /> Sample itinerary &amp; indicative pricing — confirmed when you request your quote.
          </p>
        </Section>
      ) : null}
    </ServiceLanding>
  );
}
