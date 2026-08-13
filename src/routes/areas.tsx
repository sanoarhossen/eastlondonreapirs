import { createFileRoute, Link } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { CheckCircle2, MapPin, Phone, Search, XCircle } from "lucide-react";
import { lazy, Suspense, useMemo, useState, type FormEvent } from "react";

import { coverageAreas, findAreasForPostcode, type CoverageArea } from "@/data/coverage";

const CoverageMap = lazy(() => import("@/components/coverage-map"));

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas We Cover | Door Repair Coverage Map East London" },
      {
        name: "description",
        content:
          "Check your postcode on our interactive coverage map. Door, lock, window and glass repairs across East London, Essex borders and beyond.",
      },
      { property: "og:title", content: "Areas We Cover | East London Repairs" },
      {
        property: "og:description",
        content: "Interactive map and postcode checker for our East London door repair coverage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AreasPage,
});

type Result =
  | { status: "idle" }
  | { status: "covered"; outcode: string; areas: CoverageArea[] }
  | { status: "unknown"; outcode: string }
  | { status: "invalid" };

function AreasPage() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<Result>({ status: "idle" });
  const [selected, setSelected] = useState<CoverageArea | null>(null);

  const highlighted = useMemo(
    () => (result.status === "covered" ? result.areas.map((a) => a.name) : []),
    [result],
  );

  function check(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { outcode, areas } = findAreasForPostcode(postcode);
    setSelected(null);
    if (!outcode) return setResult({ status: "invalid" });
    setResult(areas.length ? { status: "covered", outcode, areas } : { status: "unknown", outcode });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl">Areas we cover</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Enter your postcode to confirm coverage, or explore the map and pick your area to see how
        quickly we can get to you.
      </p>

      <form onSubmit={check} className="mt-8 flex max-w-lg flex-wrap gap-3">
        <label className="sr-only" htmlFor="postcode">
          Your postcode
        </label>
        <input
          id="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder="e.g. E14 9SH"
          className="min-w-48 flex-1 rounded-sm border border-input bg-background px-3 py-3 text-sm outline-none focus:border-ring"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Search className="size-4" aria-hidden="true" /> Check coverage
        </button>
      </form>

      <div aria-live="polite" className="mt-4 max-w-2xl text-sm">
        {result.status === "invalid" ? (
          <p className="flex items-center gap-2 text-muted-foreground">
            <XCircle className="size-4" aria-hidden="true" /> That doesn&apos;t look like a UK
            postcode — try something like E14 or IG11.
          </p>
        ) : null}
        {result.status === "unknown" ? (
          <p className="flex items-start gap-2 rounded-sm border border-border bg-secondary/60 p-4">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {result.outcode} is outside our usual patch, but we often travel further for bigger
              jobs.{" "}
              <a href="tel:07939516326" className="font-semibold underline underline-offset-4">
                Call 079 3951 6326
              </a>{" "}
              and we&apos;ll let you know.
            </span>
          </p>
        ) : null}
        {result.status === "covered" ? (
          <p className="flex items-start gap-2 rounded-sm border border-accent/40 bg-accent/10 p-4">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              Yes — we cover {result.outcode} ({result.areas.map((a) => a.name).join(", ")}).{" "}
              {result.areas[0]?.note}.{" "}
              <Link to="/contact" className="font-semibold underline underline-offset-4">
                Book a repair
              </Link>
              .
            </span>
          </p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div
          className="overflow-hidden rounded-sm border border-border bg-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <ClientOnly fallback={<div className="h-[420px] w-full animate-pulse bg-secondary" />}>
            <Suspense fallback={<div className="h-[420px] w-full animate-pulse bg-secondary" />}>
              <CoverageMap
                selected={selected?.name ?? null}
                highlighted={highlighted}
                onSelect={(area) => {
                  setSelected(area);
                  setResult({ status: "idle" });
                }}
              />
            </Suspense>
          </ClientOnly>
        </div>

        <aside className="rounded-sm border border-border bg-card p-6">
          <h2 className="text-xl">Pick your area</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {selected
              ? `${selected.name} · ${selected.outcodes.join(", ")} · ${selected.note}`
              : "Select an area to centre the map."}
          </p>
          <div className="mt-4 flex max-h-64 flex-wrap gap-2 overflow-y-auto">
            {coverageAreas.map((area) => (
              <button
                key={area.name}
                type="button"
                onClick={() => {
                  setSelected(area);
                  setResult({ status: "idle" });
                }}
                aria-pressed={selected?.name === area.name}
                className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${
                  selected?.name === area.name
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border hover:bg-secondary"
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
          <a
            href="tel:07939516326"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-semibold text-accent-foreground"
          >
            <Phone className="size-4" aria-hidden="true" /> 079 3951 6326
          </a>
        </aside>
      </div>
    </div>
  );
}
