import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  foundation: [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Our Programs" },
    { href: "/impact", label: "Our Impact" },
    { href: "/events", label: "Events" },
  ],
  getInvolved: [
    { href: "/sponsors", label: "Become a Sponsor" },
    { href: "/contact", label: "Partner With Us" },
    { href: "/contact", label: "Volunteer" },
    { href: "/contact", label: "Donate" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <span className="text-lg font-bold text-secondary-foreground">SF</span>
              </div>
              <span className="text-xl font-semibold">Saviour Foundation</span>
            </div>
            <p className="mt-4 text-sm text-background/70">
              Empowering the next generation through education, scholarships, and academic excellence programs in Delta State, Nigeria.
            </p>
          </div>

          {/* Foundation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Foundation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.foundation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.getInvolved.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Warri, Delta State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a href="mailto:info@saviourfoundation.org" className="hover:text-background">
                  info@saviourfoundation.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a href="tel:+2348000000000" className="hover:text-background">
                  +234 800 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            &copy; {new Date().getFullYear()} Saviour Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
