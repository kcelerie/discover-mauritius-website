import type { Metadata } from "next";
import { ServiceLanding } from "@/components/services/ServiceLanding";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { getService } from "@/content/services";
import type { ImageSlot } from "@/lib/types";

export const metadata: Metadata = {
  title: "Air Ticketing — IATA-Accredited Travel Agency in Mauritius",
  description:
    "Book international and regional flights through an IATA-accredited travel agency in Mauritius. Personal help with dates, routes and changes, coordinated with your transfers and tours.",
  alternates: { canonical: "/air-ticketing" },
};

const hero: ImageSlot = {
  id: "air-hero",
  alt: "Aircraft wing above the clouds en route to Mauritius",
  tone: "ocean",
  orientation: "wide",
};

export default function AirTicketingPage() {
  const service = getService("air-ticketing")!;
  return (
    <ServiceLanding
      service={service}
      hero={hero}
      quoteServiceKey="flights"
      subtitle="Flights booked and supported by an IATA-accredited travel agency — with a real person to help before, during and after your journey."
      lead="Booking long-haul flights yourself can be stressful — fares change, routes get complicated, and plans shift. As an IATA-accredited travel agency, we arrange your international and regional air tickets to and from Mauritius and stay with you through any changes, so your flights fit the rest of your trip perfectly."
      keyFacts={[
        { icon: "iata", label: "Accreditation", value: "IATA-accredited agency" },
        { icon: "plane", label: "Flights", value: "International & regional" },
        { icon: "users", label: "Support", value: "A real person, start to finish" },
        { icon: "route", label: "Coordinated", value: "With your transfers & tours" },
      ]}
      features={[
        { icon: "iata", title: "IATA-accredited", body: "Your tickets are issued by an accredited agency — a recognized standard of trust in the travel industry." },
        { icon: "plane", title: "The right routing", body: "We find sensible routes and fares to and from Mauritius, not just the cheapest-looking option." },
        { icon: "users", title: "Personal help", body: "Questions about dates, baggage or connections? Ask us — no call-centre queues." },
        { icon: "clock", title: "Changes handled", body: "If plans shift, we help you understand your options and make changes." },
        { icon: "route", title: "One joined-up trip", body: "Flights coordinated with your transfers, hotels and tours for a seamless holiday." },
        { icon: "shield", title: "Booked with confidence", body: "A licensed, established company handling one of the most important parts of your trip." },
      ]}
      steps={[
        { title: "Tell us your journey", description: "Share your cities, dates and any preferences — airline, cabin, baggage or timings." },
        { title: "We find & quote options", description: "You get clear flight options with fares, and we answer your questions." },
        { title: "Ticketed & supported", description: "We issue your tickets and stay on hand for any changes right up to travel." },
      ]}
      faqs={[
        { question: "Do you provide air ticketing services?", answer: "Yes. As an IATA-accredited agency, we provide air ticketing for international and regional flights to and from Mauritius." },
        { question: "What does IATA-accredited mean for me?", answer: "It means our agency meets the International Air Transport Association's standards to issue airline tickets — an industry mark of reliability and trust." },
        { question: "Can you book flights and my holiday together?", answer: "Yes — that's the advantage of one team. We coordinate your flights with your transfers, hotel and tours." },
        { question: "Can you help if I need to change a flight?", answer: "Yes. We help you understand your options and make changes where the fare rules allow." },
      ]}
    >
      <Section surface="canvas">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-ocean to-ocean-deep p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lagoon ring-1 ring-white/20">
              <Icon name="iata" size={44} />
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl text-white md:text-3xl">An IATA-accredited travel agency</h2>
              <p className="max-w-2xl leading-relaxed text-white/80">
                IATA accreditation is issued to travel agencies that meet the International Air
                Transport Association&apos;s financial and professional standards to issue airline
                tickets. For you, it&apos;s a simple signal: your flights are in registered,
                accountable hands.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">
          Accreditation certificate available on request and shown on our About page once supplied.
        </p>
      </Section>
    </ServiceLanding>
  );
}
