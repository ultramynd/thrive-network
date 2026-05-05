import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles = {
    primary: "bg-[var(--violet)] text-white hover:bg-[var(--violet-dark)]",
    secondary:
      "border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
    light:
      "border border-white/35 bg-white text-[var(--ink)] hover:bg-[var(--gold)] hover:text-[var(--ink)]",
  };

  return (
    <Link
      href={href}
      className={`button-motion inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="button-motion-icon"
        size={18}
        strokeWidth={2.2}
      />
    </Link>
  );
}

export function SectionHeader({
  title,
  intro,
  align = "left",
}: {
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      } reveal`}
    >
      <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{intro}</p>
      ) : null}
    </div>
  );
}
