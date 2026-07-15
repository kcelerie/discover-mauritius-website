import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/content/services";
import { copy } from "@/content/copy";
import type { Surface } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ServicesSection({ waveInto }: { waveInto?: Surface }) {
  return (
    <Section surface="lagoon-mist" waveInto={waveInto}>
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow={copy.home.services.eyebrow}
          title={copy.home.services.title}
          subtitle={copy.home.services.subtitle}
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug} className={cn(i === 0 && "sm:col-span-2 lg:col-span-1")}>
              <Link
                href={s.href}
                className="group flex h-full flex-col gap-4 rounded-card border border-hairline bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lagoon-mist text-ocean transition-colors group-hover:bg-ocean group-hover:text-white">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="text-xl">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-ocean">
                  {s.cta}
                  <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
