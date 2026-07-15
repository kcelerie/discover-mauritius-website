import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { faqs as allFaqs } from "@/content/faqs";
import { copy } from "@/content/copy";
import type { Faq, Surface } from "@/lib/types";

/**
 * FAQ accordion built on native <details>/<summary> — fully accessible and
 * requires zero client JS (keeps First Load JS lean, brief §12).
 * Reused on Home and /faq. FAQPage JSON-LD is emitted at the page level.
 */
export function Faqs({
  items = allFaqs,
  eyebrow = copy.home.faq.eyebrow,
  title = copy.home.faq.title,
  subtitle = copy.home.faq.subtitle,
  surface = "canvas",
  waveInto,
  id,
}: {
  items?: Faq[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  surface?: Surface;
  waveInto?: Surface;
  id?: string;
}) {
  return (
    <Section surface={surface} waveInto={waveInto} id={id}>
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="overflow-hidden rounded-card border border-hairline bg-white">
          {items.map((f, i) => (
            <details
              key={i}
              className="group border-b border-hairline last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-medium text-ink transition-colors hover:bg-lagoon-mist/60">
                {f.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lagoon-mist text-ocean transition-transform duration-200 group-open:rotate-180">
                  <Icon name="chevron-down" size={18} />
                </span>
              </summary>
              <div className="px-6 pb-6 pr-16 leading-relaxed text-muted">{f.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
