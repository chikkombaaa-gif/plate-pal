import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-lg">🍜</span>
            <span className="text-2xl font-extrabold">Foodie</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70">
            Handpicked kitchens, honest pricing and hot food at your door in under 30 minutes.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Company"
          links={["About us", "Careers", "Foodie for Business", "Press", "Blog"]}
        />
        <FooterCol
          title="Help"
          links={["Order support", "Delivery areas", "Partner with us", "Terms of service", "Privacy policy"]}
        />

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground/60">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              80 Feet Road, Koramangala, Bengaluru 560034
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" /> +91 80 4567 1200
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" /> hello@foodie.in
            </li>
          </ul>
          <Link
            to="/checkout"
            className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Go to checkout
          </Link>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 px-4 py-5 text-center text-xs text-secondary-foreground/60">
        © {new Date().getFullYear()} Foodie Technologies Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground/60">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/80">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-primary">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
