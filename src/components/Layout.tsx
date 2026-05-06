"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Compass,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { services, site } from "@/lib/content";
import { ButtonLink } from "./Buttons";

type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const organisationItems: MegaMenuItem[] = [
  {
    title: "What We Do",
    description:
      "See the workstreams that carry Thrive's support across people, practice, and communities.",
    href: "/what-we-do",
    icon: Compass,
  },
  {
    title: "About",
    description:
      "Learn about the mission, values, and lived-experience approach behind Thrive Network.",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Team",
    description:
      "Meet the people leading the work across our specialist divisions and programmes.",
    href: "/team",
    icon: UsersRound,
  },
];

const serviceMenuDescriptions: Record<string, string> = {
  "thrive-men-empowerment": "Support and advocacy for male victims and survivors of domestic abuse.",
  "safeguarding-in-faith-communities":
    "Practical safeguarding training for churches and faith-based teams.",
  "leadership-development":
    "Reflective leadership programmes for ethical, confident decision-making.",
  "mentoring-and-coaching":
    "Tailored 1:1 support for clarity, confidence, and forward movement.",
  "bespoke-training-and-research":
    "Custom training and research solutions built around your organisation.",
  "thrive-creatives":
    "Books, toolkits, and public education content that amplify underrepresented voices.",
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [organisationOpen, setOrganisationOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <BrandMark />

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--ink)] lg:flex">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <OrganisationMegaMenu />
          <ServicesMegaMenu />
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
          <MobileMegaGroup
            close={() => setMenuOpen(false)}
            label="What We Do"
            open={organisationOpen}
            setOpen={setOrganisationOpen}
          />
          <MobileServicesGroup
            close={() => setMenuOpen(false)}
            open={servicesOpen}
            setOpen={setServicesOpen}
          />
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

function OrganisationMegaMenu() {
  return (
    <div className="group relative">
      <button className="nav-link flex items-center gap-1.5" type="button">
        What We Do
        <ChevronDown
          aria-hidden="true"
          className="transition group-hover:rotate-180 group-focus-within:rotate-180"
          size={15}
        />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 translate-y-4 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
        <div className="mt-5 grid grid-cols-[0.95fr_1.35fr] gap-2 rounded-lg border border-black/10 bg-white p-2 shadow-2xl shadow-[var(--ink)]/18">
          <Link
            href="/what-we-do"
            className="flex min-h-[250px] flex-col justify-between rounded-lg bg-[var(--ink)] p-5 text-white transition hover:bg-[var(--violet)]"
          >
            <span>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/12 text-[var(--gold)]">
                <Sparkles aria-hidden="true" size={22} />
              </span>
              <span className="mt-5 block text-lg font-black leading-tight">
                Thrive Network
              </span>
              <span className="mt-3 block text-sm font-medium leading-6 text-white/72">
                Work that strengthens people, practice, and community support
                through specialist, trauma-aware programmes.
              </span>
            </span>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--gold)]">
              Explore our work
              <ArrowUpRight aria-hidden="true" size={16} />
            </span>
          </Link>
          <div className="grid gap-1">
            {organisationItems.map((item) => (
              <MegaMenuLink key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesMegaMenu() {
  return (
    <div className="group relative">
      <button className="nav-link flex items-center gap-1.5" type="button">
        Services
        <ChevronDown
          aria-hidden="true"
          className="transition group-hover:rotate-180 group-focus-within:rotate-180"
          size={15}
        />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-[780px] -translate-x-1/2 translate-y-4 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
        <div className="mt-5 rounded-lg border border-black/10 bg-white p-2 shadow-2xl shadow-[var(--ink)]/18">
          <div className="grid grid-cols-[0.85fr_1.55fr] gap-2">
            <Link
              href="/what-we-do"
              className="flex min-h-[330px] flex-col justify-between rounded-lg bg-[var(--soft)] p-5 transition hover:bg-[var(--lavender)]"
            >
              <span>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-[var(--violet)] shadow-sm">
                  <BriefcaseBusiness aria-hidden="true" size={22} />
                </span>
                <span className="mt-5 block text-lg font-black leading-tight text-[var(--ink)]">
                  Specialist Support
                </span>
                <span className="mt-3 block text-sm font-medium leading-6 text-[var(--muted)]">
                  Browse Thrive&apos;s service divisions, from men empowerment and
                  safeguarding to coaching, research, leadership, and creative
                  programmes.
                </span>
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--violet)]">
                View all services
                <ArrowUpRight aria-hidden="true" size={16} />
              </span>
            </Link>
            <div className="grid grid-cols-2 gap-1">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="group/service flex gap-3 rounded-lg p-4 transition hover:bg-[var(--soft)]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--lavender)] text-[var(--violet)] transition group-hover/service:bg-[var(--violet)] group-hover/service:text-white">
                      <Icon aria-hidden="true" size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-black leading-5 text-[var(--ink)]">
                        {service.navTitle}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-xs font-medium leading-5 text-[var(--muted)]">
                        {serviceMenuDescriptions[service.slug]}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaMenuLink({ item }: { item: MegaMenuItem }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="group/item flex items-start gap-4 rounded-lg p-4 transition hover:bg-[var(--soft)]"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--lavender)] text-[var(--violet)] transition group-hover/item:bg-[var(--violet)] group-hover/item:text-white">
        <Icon aria-hidden="true" size={21} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
          {item.title}
          <ArrowUpRight
            aria-hidden="true"
            className="opacity-0 transition group-hover/item:opacity-100"
            size={14}
          />
        </span>
        <span className="mt-1 block text-xs font-medium leading-5 text-[var(--muted)]">
          {item.description}
        </span>
      </span>
    </Link>
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

function MobileMegaGroup({
  close,
  label,
  open,
  setOpen,
}: {
  close: () => void;
  label: string;
  open: boolean;
  setOpen: (open: boolean | ((open: boolean) => boolean)) => void;
}) {
  return (
    <>
      <button
        className="mobile-link"
        onClick={() => setOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span>{label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`transition ${open ? "rotate-180" : ""}`}
          size={18}
        />
      </button>
      <div className={`mobile-subnav ${open ? "mobile-subnav-open" : ""}`}>
        {organisationItems.map((item) => (
          <MobileMegaLink close={close} item={item} key={item.href} />
        ))}
      </div>
    </>
  );
}

function MobileServicesGroup({
  close,
  open,
  setOpen,
}: {
  close: () => void;
  open: boolean;
  setOpen: (open: boolean | ((open: boolean) => boolean)) => void;
}) {
  return (
    <>
      <button
        className="mobile-link"
        onClick={() => setOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span>Services</span>
        <ChevronDown
          aria-hidden="true"
          className={`transition ${open ? "rotate-180" : ""}`}
          size={18}
        />
      </button>
      <div className={`mobile-subnav ${open ? "mobile-subnav-open" : ""}`}>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              className="mobile-sublink"
              href={`/${service.slug}`}
              key={service.slug}
              onClick={close}
            >
              <span className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/8 text-[var(--gold)]">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <span>
                  <span className="block font-semibold">{service.navTitle}</span>
                  <span className="line-clamp-2 text-xs text-white/50">
                    {serviceMenuDescriptions[service.slug]}
                  </span>
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

function MobileMegaLink({
  close,
  item,
}: {
  close: () => void;
  item: MegaMenuItem;
}) {
  const Icon = item.icon;

  return (
    <Link className="mobile-sublink" href={item.href} onClick={close}>
      <span className="flex items-start gap-3">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/8 text-[var(--gold)]">
          <Icon aria-hidden="true" size={18} />
        </span>
        <span>
          <span className="block font-semibold">{item.title}</span>
          <span className="text-xs text-white/50">{item.description}</span>
        </span>
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
            <div className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 shrink-0" size={18} />
              <div className="space-y-1">
                {site.emails.map((email) => (
                  <a
                    className="block hover:text-white"
                    href={`mailto:${email}`}
                    key={email}
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
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
