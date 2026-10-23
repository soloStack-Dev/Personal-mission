"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let context: { revert: () => void } | undefined;
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        gsap.from("[data-hero]", {
          y: 32,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          delay: 0.1,
          ease: "power3.out",
        });

        gsap.fromTo(
          "[data-hero-bg]",
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            delay: 0.2,
            ease: "power3.out",
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });

        gsap.utils
          .toArray<HTMLElement>("[data-reveal-group]")
          .forEach((group) => {
            gsap.from(group.children, {
              y: 28,
              opacity: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: group,
                start: "top 88%",
                once: true,
              },
            });
          });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
          const end = Number(element.dataset.count ?? 0);
          const suffix = element.dataset.suffix ?? "";
          const counter = { value: 0 };

          gsap.to(counter, {
            value: end,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              once: true,
            },
            onUpdate: () => {
              element.textContent = `${Math.round(counter.value)}${suffix}`;
            },
          });
        });

        const progress = document.querySelector("[data-scroll-progress]");
        if (progress) {
          gsap.to(progress, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.4,
            },
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          const reducedTravel = window.innerWidth < 768 ? 2 : 5;
          gsap.fromTo(
            element,
            { yPercent: reducedTravel },
            {
              yPercent: -reducedTravel,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      const timeout = window.setTimeout(() => ScrollTrigger.refresh(), 600);

      cleanup = () => {
        window.removeEventListener("load", onLoad);
        window.clearTimeout(timeout);
      };

      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
      context?.revert();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      data-scroll-progress
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 w-full origin-left scale-x-0 bg-brand"
    />
  );
}
