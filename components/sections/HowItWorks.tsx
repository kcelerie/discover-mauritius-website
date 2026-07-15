import { Section, SectionHeader } from "@/components/ui/Section";
import { copy } from "@/content/copy";
import type { Surface } from "@/lib/types";

export function HowItWorks({ waveInto }: { waveInto?: Surface }) {
  const { how } = copy.home;
  return (
    <Section surface="ocean" waveInto={waveInto}>
      <div className="flex flex-col gap-12">
        <SectionHeader onDark eyebrow={how.eyebrow} title={how.title} />
        <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {how.steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-display text-xl font-semibold text-ink">
                  {i + 1}
                </span>
                {i < how.steps.length - 1 ? (
                  <span aria-hidden className="hidden h-px flex-1 bg-white/25 md:block" />
                ) : null}
              </div>
              <h3 className="text-2xl text-white">{step.title}</h3>
              <p className="leading-relaxed text-white/80">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
