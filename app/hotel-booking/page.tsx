import type { Metadata } from "next";
import { ServiceLanding } from "@/components/services/ServiceLanding";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { getService } from "@/content/services";
import type { ImageSlot, IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Hotel Booking Assistance in Mauritius",
  description:
    "Hotel booking assistance for Mauritius — matched to your preferences, budget and holiday plans. From beach resorts to boutique stays, booked alongside your tours and transfers.",
  alternates: { canonical: "/hotel-booking" },
};

const hero: ImageSlot = {
  id: "hotel-hero",
  alt: "Infinity pool and palm-lined beach at a Mauritius resort",
  tone: "lagoon",
  orientation: "wide",
};

const coasts: { icon: IconName; name: string; detail: string }[] = [
  { icon: "sun", name: "North", detail: "Lively and social — Grand Baie's restaurants, nightlife and calm swimming beaches." },
  { icon: "wave", name: "East", detail: "Powder-white sand and turquoise lagoons — serene, upscale, great for families." },
  { icon: "compass", name: "West", detail: "Sunsets, dolphins and Le Morne — dramatic scenery and water sports." },
  { icon: "map-pin", name: "South", detail: "Wild and authentic — cliffs, nature and a quieter, unspoiled coastline." },
];

export default function HotelBookingPage() {
  const service = getService("hotel-booking")!;
  return (
    <ServiceLanding
      service={service}
      hero={hero}
      quoteServiceKey="hotel"
      subtitle="The right place to stay for your budget and plans — chosen with genuine local knowledge, and booked alongside the rest of your trip."
      lead="With hundreds of hotels across very different coasts, choosing where to stay in Mauritius is harder than it looks — and the brochure never tells the whole story. We match you to accommodation that fits how you like to travel and where you want to be, then book it as part of your wider holiday so everything works together."
      keyFacts={[
        { icon: "hotel", label: "Options", value: "Resorts, boutique & guesthouses" },
        { icon: "compass", label: "Every coast", value: "North, East, West & South" },
        { icon: "users", label: "Matched", value: "To your budget & style" },
        { icon: "route", label: "Joined up", value: "Booked with tours & transfers" },
      ]}
      features={[
        { icon: "compass", title: "Genuine local knowledge", body: "We know the coasts, the neighbourhoods and which properties truly suit which travellers." },
        { icon: "hotel", title: "The full range", body: "Five-star beach resorts, boutique hotels, guesthouses and self-catering villas." },
        { icon: "users", title: "Matched to you", body: "Honeymoon, family, quiet retreat or lively base — we recommend accordingly." },
        { icon: "check", title: "For your budget", body: "Options that make sense for what you want to spend, with no pressure to overspend." },
        { icon: "route", title: "Part of the whole trip", body: "Your stay is coordinated with transfers, tours and activities in one plan." },
        { icon: "whatsapp", title: "Easy to adjust", body: "Change your mind? Message us and we'll rework the options with you." },
      ]}
      steps={[
        { title: "Tell us your preferences", description: "Location, style, budget and who's travelling — plus any must-haves." },
        { title: "We recommend & quote", description: "You get a shortlist that fits, with honest local guidance on each option." },
        { title: "Booked & coordinated", description: "We arrange your stay and slot it into the rest of your Mauritius holiday." },
      ]}
      faqs={[
        { question: "Can you help with hotel booking?", answer: "Yes — we assist with hotel booking according to your preferences, budget and holiday requirements." },
        { question: "Which part of Mauritius should I stay in?", answer: "It depends on what you want — we'll guide you between the north, east, west and south based on your travel style, then recommend specific properties." },
        { question: "Can you book the hotel with my tours and transfers?", answer: "Yes. Booking everything together is exactly what we do, so your whole trip is coordinated by one team." },
        { question: "Do you cover all budgets?", answer: "Yes, from guesthouses to five-star resorts. We match options to what you'd like to spend." },
      ]}
    >
      <Section surface="canvas">
        <div className="flex flex-col gap-10">
          <SectionHeader align="left" eyebrow="Where to stay" title="Four coasts, four very different holidays" />
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coasts.map((c) => (
              <li key={c.name} className="flex flex-col gap-3 rounded-card border border-hairline bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lagoon-mist text-ocean">
                  <Icon name={c.icon} size={22} />
                </span>
                <h3 className="text-lg">{c.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{c.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </ServiceLanding>
  );
}
