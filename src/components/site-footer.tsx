import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export const serviceAreas =
  "Barking, Beckton, Bethnal Green, Bow, Canning Town, Chingford, Clapton, Dagenham, Docklands, East Ham, Forest Gate, Goodmayes, Greenwich, Hackney, Ilford, Islington, Lewisham, Plaistow, Redbridge, Newham, Poplar, Shadwell, Stepney Green, Stratford, Tower Hamlets, Walthamstow, Wanstead, Whitechapel and Woolwich.";

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-xl">East London Repairs</h3>
          <p className="mt-3 text-sm text-surface-dark-foreground/70">
            Double glazing door and window repairs, locks, glass units and property maintenance
            across East London since 2009.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-base">Get in touch</h4>
          <a href="tel:07939516326" className="flex items-center gap-2">
            <Phone className="size-4 text-accent" aria-hidden="true" /> 079 3951 6326
          </a>
          <a href="mailto:eastlondonrepairs@yahoo.com" className="flex items-center gap-2">
            <Mail className="size-4 text-accent" aria-hidden="true" /> eastlondonrepairs@yahoo.com
          </a>
          <p className="flex items-start gap-2 text-surface-dark-foreground/70">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            Mobile service across East London &amp; Essex borders
          </p>
        </div>

        <div className="text-sm">
          <h4 className="text-base">Areas we cover</h4>
          <p className="mt-3 text-surface-dark-foreground/70">{serviceAreas}</p>
          <div className="mt-4 flex gap-4">
            <Link to="/services" className="underline underline-offset-4">
              Services
            </Link>
            <Link to="/areas" className="underline underline-offset-4">
              Coverage map
            </Link>
            <Link to="/contact" className="underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-dark-foreground/10 px-4 py-5 text-center text-xs text-surface-dark-foreground/60">
        © {new Date().getFullYear()} East London Repairs. All rights reserved.
      </div>
    </footer>
  );
}