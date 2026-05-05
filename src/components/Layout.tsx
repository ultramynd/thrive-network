"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { services, site } from "@/lib/content";
import { ButtonLink } from "./Buttons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <BrandMark />

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--ink)] lg:flex">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/what-we-do">
            What We Do
          </Link>
          <div className="group relative">
            <button className="nav-link flex items-center gap-1" type="button">
              Services
              <ChevronDown aria-hidden="true" size={15} />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[540px] -translate-x-1/2 translate-y-3 rounded-xl border border-black/10 bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="rounded-lg p-4 transition hover:bg-[var(--soft)]"
                  >
                    <span className="block text-sm font-bold text-[var(--ink)]">
                      {service.navTitle}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-5 text-[var(--muted)]">
                      {service.summary}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className="nav-link" href="/about">
            About
          </Link>
          <Link className="nav-link" href="/team">
            Team
          </Link>
          <Link className="nav-link" href="/insights">
            Insights
          </Link>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/book-consultation">Book a Consultation</ButtonLink>
        </div>
        <button
          aria-label="Open menu"
          className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--violet)] text-white lg:hidden"
          onClick={() => setMenuOpen(true)}
          type="button"
        >
          <Menu aria-hidden="true" />
        </button>
      </div>

      <div
        className={`mobile-overlay ${menuOpen ? "mobile-overlay-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        aria-hidden={!menuOpen}
        className={`mobile-drawer fixed inset-y-0 right-0 z-[70] flex h-dvh w-[340px] max-w-[88vw] flex-col ${
          menuOpen ? "mobile-drawer-open" : ""
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 p-5">
          <BrandMark light />
          <button
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white"
            onClick={() => setMenuOpen(false)}
            type="button"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav className="min-h-0 flex-1 overflow-y-auto p-5">
          <MobileLink href="/" label="Home" close={() => setMenuOpen(false)} />
          <MobileLink
            href="/what-we-do"
            label="What We Do"
            close={() => setMenuOpen(false)}
          />
          <button
            className="mobile-link"
            onClick={() => setServicesOpen((open) => !open)}
            type="button"
          >
            <span>Services</span>
            <ChevronDown
              aria-hidden="true"
              className={`transition ${servicesOpen ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
          <div className={`mobile-subnav ${servicesOpen ? "mobile-subnav-open" : ""}`}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="mobile-sublink"
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-semibold">{service.navTitle}</span>
                <span className="text-xs text-white/50 line-clamp-2">
                  {service.summary}
                </span>
              </Link>
            ))}
          </div>
          <MobileLink href="/about" label="About" close={() => setMenuOpen(false)} />
          <MobileLink href="/team" label="Team" close={() => setMenuOpen(false)} />
          <MobileLink
            href="/insights"
            label="Insights"
            close={() => setMenuOpen(false)}
          />
          <MobileLink
            href="/contact"
            label="Contact"
            close={() => setMenuOpen(false)}
          />
        </nav>
        <div className="grid shrink-0 gap-3 border-t border-white/10 p-5">
          <Link
            href="/book-consultation"
            className="button-motion min-h-12 rounded-lg bg-[var(--gold)] px-5 py-3 text-center text-sm font-bold text-[var(--ink)]"
            onClick={() => setMenuOpen(false)}
          >
            Book a Consultation
          </Link>
          <Link
            href="/get-help"
            className="button-motion min-h-12 rounded-lg border border-white/25 px-5 py-3 text-center text-sm font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Get Help
          </Link>
        </div>
      </aside>
    </header>
  );
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center">
      <span className={light ? "rounded-lg bg-white px-3 py-2" : ""}>
        <Image
          src="/brand/thrive-network-logo.png"
          alt="Thrive Network"
          width={117}
          height={72}
          priority
          className="h-12 w-auto"
        />
      </span>
    </Link>
  );
}

function MobileLink({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) {
  return (
    <Link href={href} className="mobile-link" onClick={close}>
      <span>{label}</span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-lg bg-white px-3 py-2">
            <Image
              src="/brand/thrive-network-logo.png"
              alt="Thrive Network"
              width={117}
              height={72}
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
            Empowering people, strengthening practice, and transforming lives
            through safeguarding, leadership, coaching, research, and specialist
            support.
          </p>
          <div className="mt-7 space-y-3 text-sm text-white/72">
            <p className="flex gap-3">
              <Mail aria-hidden="true" size={18} /> {site.email}
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" size={18} /> {site.phone}
            </p>
            <p className="flex gap-3">
              <MapPin aria-hidden="true" size={18} /> {site.address}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/76">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-white" href={`/${service.slug}`}>
                  {service.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">
            Website
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/76">
            {[
              ["What We Do", "/what-we-do"],
              ["About", "/about"],
              ["Team", "/team"],
              ["Insights", "/insights"],
              ["Get Help", "/get-help"],
              ["Contact", "/contact"],
              ["Privacy Policy", "/privacy-policy"],
              ["Accessibility", "/accessibility"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-white" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/52">
        © {new Date().getFullYear()} Thrive Network. All rights reserved.
      </div>
    </footer>
  );
}
