import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock, PoundSterling, ShieldCheck, Wrench } from "lucide-react";

import heroImg from "@/assets/hero-door-repair.jpg";
import { services } from "@/data/services";
import { ReviewsSection } from "@/components/reviews";
import { serviceAreas } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Door Repair East London | uPVC & Aluminium Door Specialists" },
      {
        name: "description",
        content:
          "Same-day uPVC, aluminium and composite door repairs in East London. Locks, cylinders, hinges, alignment, glass units. Call 079 3951 6326.",
      },
      { property: "og:title", content: "Door Repair East London | uPVC & Aluminium Door Specialists" },
      {
        property: "og:description",
        content:
          "Same-day uPVC, aluminium and composite door repairs in East London. Locks, cylinders, hinges, alignment, glass units. Call 079 3951 6326.",
      },
    ],
  }),
  component: Index,
});

const trust = [
  { icon: Clock, title: "Same-day call-outs", text: "Most repairs completed on the first visit." },
  { icon: ShieldCheck, title: "Security first", text: "Anti-snap, anti-bump locks as standard." },
  { icon: PoundSterling, title: "Repair, not replace", text: "We fix doors others say to replace." },
  { icon: BadgeCheck, title: "6+ years local", text: "Trusted by East London homes and shops." },
];

function Index() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Door repair engineer fitting a new lock to a uPVC front door in East London"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="max-w-2xl text-surface-dark-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              East London · Same day service
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
              Door repairs done properly, first time.
            </h1>
            <p className="mt-5 max-w-xl text-base text-surface-dark-foreground/80 sm:text-lg">
              Jammed locks, dropped doors, broken handles and misted glass — we repair uPVC,
              aluminium and composite doors and windows across East London, for homes, landlords and
              shop fronts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:07939516326"
                className="rounded-sm bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Call 079 3951 6326
              </a>
              <Link
                to="/contact"
                className="rounded-sm border border-surface-dark-foreground/40 px-6 py-3 font-semibold text-surface-dark-foreground transition-colors hover:bg-surface-dark-foreground/10"
              >
                Request a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex gap-3">
              <t.icon className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-base">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Our services
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Every part of your door and window</h2>
            <p className="mt-3 text-muted-foreground">
              From a sticking front door to a smashed shop front, we carry the parts and the
              experience to finish the job on site.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.slug}
                className="overflow-hidden rounded-sm border border-border bg-card"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground"
                  >
                    Read more <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-16 text-surface-dark-foreground sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl">Local engineers who fix, not replace</h2>
            <p className="mt-4 text-surface-dark-foreground/80">
              We are one of the most experienced repairers of uPVC and aluminium doors and windows in
              East London. We use the best quality material for every repair, quote clearly before we
              start, and leave your home secure.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Fully insured, DBS-checked engineers",
                "Free, no-obligation quotes",
                "Emergency boarding up and lock changes",
                "Property management and landlord maintenance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Wrench className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-surface-dark-foreground/15 p-6">
            <h3 className="text-xl">Areas we cover</h3>
            <p className="mt-3 text-sm text-surface-dark-foreground/75">{serviceAreas}</p>
            <a
              href="tel:07939516326"
              className="mt-6 inline-block rounded-sm bg-accent px-5 py-3 font-semibold text-accent-foreground"
            >
              Book a repair today
            </a>
          </div>
        </div>
      </section>

      <ReviewsSection />
    </>
  );
}
