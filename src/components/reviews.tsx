import { Star } from "lucide-react";

export const reviews = [
  {
    name: "Sarah Ahmed",
    area: "Stratford, E15",
    job: "uPVC door lock replacement",
    rating: 5,
    text: "My front door wouldn't lock at all and I was panicking. Called in the morning and it was fixed the same afternoon with a new anti-snap cylinder. Tidy, polite and fairly priced.",
  },
  {
    name: "Michael O'Connor",
    area: "Hackney, E8",
    job: "Misted glass unit replacement",
    rating: 5,
    text: "Two misted double glazed units replaced in a bay window. The finish is spotless and the new glass has made a real difference to the cold coming in.",
  },
  {
    name: "Priya Sharma",
    area: "Ilford, IG1",
    job: "Door alignment & hinge repair",
    rating: 5,
    text: "The back door had dropped and was catching on the frame. Realigned the hinges and adjusted the mechanism in under an hour. Honest advice, no upselling.",
  },
  {
    name: "David Whitfield",
    area: "Walthamstow, E17",
    job: "Shop front glass repair",
    rating: 5,
    text: "Our shop front glass was smashed overnight. Boarded up quickly and new laminated glass fitted the next day so we barely lost any trading time.",
  },
  {
    name: "Fatima Begum",
    area: "Whitechapel, E1",
    job: "Window handles & hinges",
    rating: 5,
    text: "Replaced five window handles and a set of hinges in my flat. Great quality parts and everything opens smoothly again. Would recommend to any landlord.",
  },
  {
    name: "Tom Bailey",
    area: "Canning Town, E16",
    job: "Multipoint mechanism repair",
    rating: 4,
    text: "Jammed multipoint lock on a composite door sorted properly rather than replacing the whole door like another firm suggested. Saved me a lot of money.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating ? "size-4 fill-accent text-accent" : "size-4 text-muted-foreground/40"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection({ heading = "What our customers say" }: { heading?: string }) {
  return (
    <section className="border-y border-border bg-secondary/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Reviews
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">{heading}</h2>
          </div>
          <div className="flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3">
            <span className="font-display text-3xl font-extrabold">5</span>
            <div>
              <Stars rating={5} />
              <p className="mt-1 text-xs text-muted-foreground">Based on 221 local jobs</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-sm border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <span className="block text-sm font-semibold">{r.name}</span>
                <span className="block text-xs text-muted-foreground">
                  {r.area} · {r.job}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}