import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { serviceAreas } from "@/components/site-footer";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Book a Door Repair in East London" },
      {
        name: "description",
        content:
          "Call 079 3951 6326 or send a message for a free quote on door, lock, window and glass repairs across East London.",
      },
      { property: "og:title", content: "Contact East London Repairs" },
      {
        property: "og:description",
        content: "Free quotes on door and window repairs across East London.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Postcode: ${data.get("postcode")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:eastlondonrepairs@yahoo.com?subject=${encodeURIComponent(
      `Repair enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl">Book a repair or get a quote</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Tell us what the door or window is doing and we will give you an honest price. For
        emergencies, calling is always fastest.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-border bg-card p-6 sm:p-8"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Phone number" name="phone" type="tel" required />
            <Field label="Postcode" name="postcode" required />
            <label className="block text-sm font-medium">
              Service needed
              <select
                name="service"
                className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-ring"
              >
                {services.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
                <option>Something else</option>
              </select>
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium">
            What is the problem?
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-ring"
              placeholder="e.g. Front door handle goes floppy and the key won't turn."
            />
          </label>

          <button
            type="submit"
            className="mt-6 rounded-sm bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Send enquiry
          </button>
          {sent ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Your email app should now be open with the details filled in. If not, email us at
              eastlondonrepairs@yahoo.com.
            </p>
          ) : null}
        </form>

        <aside className="space-y-6">
          <div className="rounded-sm border border-border bg-card p-6">
            <h2 className="text-xl">Talk to us</h2>
            <a href="tel:07939516326" className="mt-4 flex items-center gap-2 font-semibold">
              <Phone className="size-4 text-accent" aria-hidden="true" /> 079 3951 6326
            </a>
            <a
              href="mailto:eastlondonrepairs@yahoo.com"
              className="mt-3 flex items-center gap-2 text-sm"
            >
              <Mail className="size-4 text-accent" aria-hidden="true" /> eastlondonrepairs@yahoo.com
            </a>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              Mon–Sat 8am–7pm · Emergency call-outs available
            </p>
          </div>
          <div className="rounded-sm border border-border bg-secondary/60 p-6">
            <h2 className="text-lg">Areas we cover</h2>
            <p className="mt-3 text-sm text-muted-foreground">{serviceAreas}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-ring"
      />
    </label>
  );
}