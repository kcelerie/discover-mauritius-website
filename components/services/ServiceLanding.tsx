import type { ReactNode } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Faqs } from "@/components/sections/Faqs";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { whatsappLink } from "@/lib/utils";
import { copy } from "@/content/copy";
import type { Service, Faq, ImageSlot, IconName } from "@/lib/types";

export interface ServiceLandingProps {
  service: Service;
  hero: ImageSlot;
  subtitle: string;
  lead: string;
  keyFacts: { icon: IconName; label: string; value: string }[];
  features: { icon: IconName; title: string; body: string }[];
  steps: { title: string; description: string }[];
  faqs: Faq[];
  quoteServiceKey: string;
  children?: ReactNode;
}

export function ServiceLanding({
  service,
  hero,
  subtitle,
  lead,
  keyFacts,
  features,
  steps,
  faqs,
  quoteServiceKey,
  children,
}: ServiceLandingProps) {
  const quoteHref = `/contact?service=${quoteServiceKey}`;
  const waMessage = `Hello! I'm interested in ${service.name} in Mauritius.`;

  return (
    <>
      <PageHeader
        image={hero}
        eyebrow={service.name}
        title={service.title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: service.name }]}
        actions={
          <>
            <Button href={quoteHref} size="lg" icon="arrow-right">
              {service.cta}
            </Button>
            <Button href={whatsappLink(waMessage)} variant="whatsapp" size="lg" icon="whatsapp" iconPosition="left" target="_blank">
              {copy.ctas.whatsapp}
            </Button>
          </>
        }
      />

      {/* Overview + key facts */}
      <Section surface="canvas">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeader align="left" eyebrow="Overview" title={service.hook} />
            <p className="text-lg leading-relaxed text-ink">{lead}</p>
            <p className="text-muted">{service.description}</p>
          </div>
          <div className="rounded-card border border-hairline bg-lagoon-mist/50 p-6 lg:p-7">
            <h3 className="text-lg font-semibold text-ink">At a glance</h3>
            <dl className="mt-4 flex flex-col divide-y divide-hairline">
              {keyFacts.map((f) => (
                <div key={f.label} className="flex items-start gap-3 py-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-ocean">
                    <Icon name={f.icon} size={17} />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{f.label}</dt>
                    <dd className="text-ink">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section surface="lagoon-mist" waveInto="canvas">
        <div className="flex flex-col gap-10">
          <SectionHeader eyebrow="What you get" title={`Why book ${service.name.toLowerCase()} with us`} />
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li key={f.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lagoon-mist text-ocean">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="text-lg">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Steps */}
      <Section surface="canvas">
        <div className="flex flex-col gap-10">
          <SectionHeader align="left" eyebrow="How it works" title="Simple from first message to arrival" />
          <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-ink">
                  {i + 1}
                </span>
                <h3 className="text-xl">{step.title}</h3>
                <p className="leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {children}

      <Faqs items={faqs} eyebrow="Good to know" title={`${service.name} — your questions`} subtitle={undefined} surface="sand-mist" waveInto="ink" />

      <QuoteCta
        eyebrow="Ready to plan?"
        title={service.title}
        subtitle={subtitle}
        primaryLabel={service.cta}
        primaryHref={quoteHref}
      />

      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: service.name, href: service.href },
          ]),
        ]}
      />
    </>
  );
}
