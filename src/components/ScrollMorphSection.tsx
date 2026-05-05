"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/Buttons";

type ScrollMorphSectionProps = {
  eyebrow: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
  cta?: {
    label: string;
    href: string;
  };
};

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function ScrollMorphSection({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  cta,
}: ScrollMorphSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const stickyOffset = 72;
      const scrollableDistance = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );

      setProgress(clamp((stickyOffset - rect.top) / scrollableDistance));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const imageWidth = 50 + progress * 50;
  const contentWidth = 50 + progress * 50;
  const panelOpacity = Math.max(0, 1 - progress * 1.35);
  const overlayOpacity = progress * 0.7;
  const contentShift = progress * 22;

  return (
    <section ref={sectionRef} className="morph-section bg-[var(--violet)]">
      <div className="morph-stage">
        <div
          className="morph-image"
          style={{ width: `${imageWidth}%` }}
          aria-hidden="true"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="morph-overlay"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
        <div
          className="morph-content"
          style={{
            width: `${contentWidth}%`,
            backgroundColor: `rgb(103 84 233 / ${panelOpacity})`,
          }}
        >
          <div
            className="morph-content-inner"
            style={{ transform: `translateX(${contentShift}vw)` }}
          >
            <span className="text-xs font-black uppercase tracking-[0.16em] text-white/70">
              {eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-[1] text-white">
              {title}
            </h2>
            <span className="mt-5 block h-[3px] w-16 bg-white/35" aria-hidden="true" />
            <div className="mt-6 space-y-4 text-base leading-8 text-white/82">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {cta ? (
              <div className="mt-8">
                <ButtonLink href={cta.href} variant="light">
                  {cta.label}
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="morph-mobile">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[var(--violet)]/35" />
        </div>
        <div className="bg-[var(--violet)] px-5 py-14 text-white">
          <span className="text-xs font-black uppercase tracking-[0.16em] text-white/70">
            {eyebrow}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight">
            {title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/82">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {cta ? (
            <div className="mt-8">
              <ButtonLink href={cta.href} variant="light">
                {cta.label}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
