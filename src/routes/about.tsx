import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-door-repair.jpg";
import { serviceAreas } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | East London Door & Window Repair Specialists" },
      {
        name: "description",
        content:
          "Experienced uPVC and aluminium door and window repairers serving East London homes, landlords and businesses with honest pricing.",
      },
      { property: "og:title", content: "About East London Repairs" },
      {
        property: "og:description",
        content: "Experienced local door and window repair specialists serving East London.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl">About East London Repairs</h1>
          <p className="mt-5 text-muted-foreground">
            We are one of the most experienced repairers of uPVC and aluminium doors and windows in
            East London. For over fifteen years we have kept front doors locking, windows opening
            and shop fronts trading — with good service at a fair price.
          </p>
          <p className="mt-4 text-muted-foreground">
            Every repair uses the best quality material we can source, because we want customers to
            feel secure long after we have packed up. If a door can be repaired we will repair it,
            and we will always tell you honestly when replacement is the better option.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["15+", "Years repairing"],
              ["240+", "Local jobs a year"],
              ["4.9", "Average rating"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-sm border border-border bg-card p-4">
                <dt className="font-display text-3xl font-extrabold">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img
          src={heroImg}
          alt="East London Repairs engineer repairing a uPVC front door"
          loading="lazy"
          width={1600}
          height={1104}
          className="aspect-[4/3] w-full rounded-sm object-cover"
          style={{ boxShadow: "var(--shadow-card)" }}
        />
      </div>

      <section className="mt-16 rounded-sm border border-border bg-card p-8">
        <h2 className="text-2xl">Where we work</h2>
        <p className="mt-3 text-muted-foreground">{serviceAreas}</p>
      </section>
    </div>
  );
}