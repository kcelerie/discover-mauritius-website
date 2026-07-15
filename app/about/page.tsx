import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { Icon } from "@/components/ui/Icon";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/content/site";
import type { ImageSlot, IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "About Discover Mauritius",
  description:
    "Discover Mauritius, by N.K. TAHER CO LTD — a licensed tour operator and IATA-accredited travel agency founded in 2019 to help visitors experience the real Mauritius through authentic, personalized travel.",
  alternates: { canonical: "/about" },
};

const heroImage: ImageSlot = {
  id: "about-hero",
  alt: "A local guide looking out over a Mauritius lagoon at golden hour",
  tone: "ocean",
  orientation: "wide",
};

const storyImage: ImageSlot = {
  id: "about-story",
  alt: "The Discover Mauritius team welcoming travellers to the island",
  tone: "sunset",
  orientation: "landscape",
};

const values: { icon: IconName; title: string; body: string }[] = [
  { icon: "compass", title: "Authentic experiences", body: "Showing visitors the real Mauritius — its culture, nature and hidden gems — not just the postcard." },
  { icon: "users", title: "Personalized service", body: "Every traveller is different, so every itinerary is shaped around your interests, pace and budget." },
  { icon: "route", title: "Complete travel solutions", body: "Flights, transfers, hotels, tours and activities handled together, by one team you can trust." },
];

const certificates = [
  { title: "Tour Operator Licence", icon: "shield" as IconName },
  { title: "IATA Accreditation", icon: "iata" as IconName },
  { title: "Company Registration", icon: "check" as IconName },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        image={heroImage}
        eyebrow="About us"
        title="Helping you discover the real Mauritius"
        subtitle={site.oneLiner}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <Section surface="canvas">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeader align="left" eyebrow="Our story" title="Born from a passion for our island" />
            <p className="text-lg leading-relaxed text-ink">
              Discover Mauritius was founded on {site.founded} by {site.legalName}, out of a simple
              passion: sharing the island we call home with visitors from around the world.
            </p>
            <p className="leading-relaxed text-muted">
              What began as a love of showing people the real Mauritius has grown, through
              reliability, local expertise and a focus on customer satisfaction, into a licensed tour
              operator and IATA-accredited travel agency. Today we help travellers from Europe, the
              Middle East, Africa, Asia and beyond experience Mauritius with authentic experiences,
              personalized service and complete travel solutions — without the hassle of complicated
              planning.
            </p>
            <p className="leading-relaxed text-muted">
              We&apos;re proudly led by our founder, {site.director}, and a team of experienced local
              guides who bring the island&apos;s history, culture and hidden corners to life.
            </p>
          </div>
          <SmartImage slot={storyImage} hint className="shadow-card" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </Section>

      {/* Facts strip */}
      <Section surface="lagoon-mist" spacing="md" waveInto="canvas">
        <TrustStrip variant="grid" />
      </Section>

      {/* Values */}
      <Section surface="canvas">
        <div className="flex flex-col gap-10">
          <SectionHeader eyebrow="What we stand for" title="Our mission, in three commitments" />
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lagoon-mist text-ocean">
                  <Icon name={v.icon} size={24} />
                </span>
                <h3 className="text-xl">{v.title}</h3>
                <p className="leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Certificates */}
      <Section surface="sand-mist" waveInto="ink">
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Licensed & accredited"
            title="Credentials you can check"
            subtitle="We're a registered, licensed and accredited travel business. Certificates will be displayed here once supplied."
          />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {certificates.map((c) => (
              <li key={c.title} className="flex flex-col items-center gap-4 rounded-card border-2 border-dashed border-gold/50 bg-white p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lagoon-mist text-ocean">
                  <Icon name={c.icon} size={28} />
                </span>
                <h3 className="text-lg">{c.title}</h3>
                <span className="rounded-full bg-sand-mist px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-ink">
                  Certificate — to be supplied
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <QuoteCta
        eyebrow="Let's talk"
        title="Plan your trip with a team you can trust"
        subtitle="Tell us what you're dreaming of and we'll send a personalized, no-obligation quote — usually within 24 hours."
      />

      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ])}
      />
    </>
  );
}
