import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ocean/50 to-lagoon/20" aria-hidden />
      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-lagoon ring-1 ring-white/20">
          <Icon name="compass" size={34} />
        </span>
        <p className="mt-6 font-display text-6xl font-semibold text-white">404</p>
        <h1 className="mt-3 text-2xl text-white">This page drifted off the map</h1>
        <p className="mt-3 max-w-md text-white/75">
          The page you&apos;re looking for isn&apos;t here — but your Mauritius adventure is just a click away.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" icon="arrow-right">
            Back to home
          </Button>
          <Button href="/tours" variant="onDark" icon="compass" iconPosition="left">
            Browse tours
          </Button>
        </div>
      </div>
    </section>
  );
}
