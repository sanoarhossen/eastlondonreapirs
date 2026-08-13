import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Door & Window Repair Services | East London Repairs" },
      {
        name: "description",
        content:
          "Door locks, cylinders, alignment, window hinges, misted glass units, integral blinds and shop front repairs across East London.",
      },
      { property: "og:title", content: "Door & Window Repair Services | East London Repairs" },
      {
        property: "og:description",
        content:
          "Full list of uPVC and aluminium door and window repairs we carry out across East London.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-surface-dark py-16 text-surface-dark-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl sm:text-5xl">Our repair services</h1>
          <p className="mt-4 max-w-2xl text-surface-dark-foreground/80">
            Everything we repair on uPVC, aluminium and composite doors and windows — for
            homeowners, landlords and commercial premises across East London.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:py-20">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="grid scroll-mt-28 gap-8 md:grid-cols-2 md:items-center"
          >
            <img
              src={s.image}
              alt={s.alt}
              loading="lazy"
              width={1024}
              height={768}
              className={`aspect-[4/3] w-full rounded-sm object-cover ${i % 2 ? "md:order-2" : ""}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            />
            <div>
              <h2 className="text-2xl sm:text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.summary}</p>
              <ul className="mt-5 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}