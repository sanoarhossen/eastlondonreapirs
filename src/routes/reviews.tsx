import { createFileRoute } from "@tanstack/react-router";

import { ReviewsSection } from "@/components/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | East London Repairs" },
      {
        name: "description",
        content:
          "Read reviews from East London homeowners, landlords and shop owners about our door lock, glass and window repairs.",
      },
      { property: "og:title", content: "Customer Reviews | East London Repairs" },
      {
        property: "og:description",
        content: "Rated 4.9 by East London customers for door and window repairs.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-surface-dark py-16 text-surface-dark-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl sm:text-5xl">Customer reviews</h1>
          <p className="mt-4 max-w-2xl text-surface-dark-foreground/80">
            Honest feedback from the people whose doors, windows and shop fronts we have repaired.
          </p>
        </div>
      </section>
      <ReviewsSection heading="Recent feedback from East London" />
    </>
  );
}