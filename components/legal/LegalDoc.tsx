import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export function LegalDoc({
  title,
  label,
  href,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  label: string;
  href: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        breadcrumbs={[{ label: "Home", href: "/" }, { label }]}
      />
      <Section surface="canvas">
        <div className="mx-auto max-w-3xl">
          {/* DRAFT notice (Pending #9) */}
          <div className="mb-8 flex items-start gap-3 rounded-card border border-gold/50 bg-sand-mist px-5 py-4 text-sm text-gold-ink">
            <Icon name="sparkles" size={18} className="mt-0.5 shrink-0" />
            <p>
              <strong>DRAFT — for client review.</strong> This is placeholder legal copy. It must be
              reviewed and approved by the client (and ideally a qualified legal professional) before
              launch, and adapted to Mauritius law and the company&apos;s actual practices.
            </p>
          </div>

          <p className="text-sm text-muted">Last updated: {lastUpdated}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink">{intro}</p>

          <div className="mt-8 flex flex-col gap-8">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-2xl">
                  {i + 1}. {s.heading}
                </h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label, href }])} />
    </>
  );
}
