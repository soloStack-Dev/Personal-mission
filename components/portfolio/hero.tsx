import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { site, stats } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line bg-background pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[7%] select-none text-center text-[clamp(4.2rem,18vw,16rem)] font-black uppercase leading-none tracking-[-0.06em] text-brand/10 md:top-[9%]"
        data-hero-bg
      >
        Developer
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-4 hidden select-none font-mono text-[9px] uppercase tracking-[0.5em] text-faint xl:block writing-vertical"
      >
        Java · Spring · RAG · AI
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-4 hidden select-none font-mono text-[9px] uppercase tracking-[0.5em] text-faint xl:block writing-vertical"
      >
        Portfolio / 2026
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center md:px-10">
        <div
          data-hero
          className="inline-flex items-center gap-2.5 border border-line bg-surface/80 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.26em] text-white backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {site.availability}
        </div>

        <p data-hero className="mt-8 font-serif text-lg italic text-white/90 md:text-xl">
          Hello, I&apos;m
        </p>
        <h1
          data-hero
          className="mt-2 text-[clamp(3.2rem,10.5vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.055em]"
        >
          Faleel <span className="text-brand">H</span>
        </h1>

        <div
          data-hero
          data-parallax
          className="relative mt-7 w-full max-w-[330px] md:mt-8 md:max-w-[360px]"
        >
          <div
            aria-hidden="true"
            className="absolute -top-3 -left-3 h-full w-full border border-brand/60"
          />
          <div
            aria-hidden="true"
            className="absolute -right-3 -bottom-3 h-full w-full border border-line"
          />
          <div className="group relative aspect-[3/4] overflow-hidden border border-line bg-surface">
            <Image
              src="/images/faleel-h.png"
              alt="Portrait of Faleel H, Java developer and AI engineer"
              width={433}
              height={577}
              preload
              sizes="(max-width: 768px) 78vw, 360px"
              className="h-full w-full object-cover object-top grayscale-[12%] contrast-110 transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border border-white/5"
            />
            <span className="absolute top-3 left-3 border border-line/80 bg-ink/85 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
              01 / Portrait
            </span>
            <span className="absolute right-3 bottom-3 border border-brand/70 bg-ink/85 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.22em] text-brand backdrop-blur-sm">
              Java · AI
            </span>
          </div>
        </div>

        <p
          data-hero
          className="mt-8 font-mono text-[10px] uppercase tracking-[0.34em] text-brand md:text-xs"
        >
          {site.role}
        </p>
        <p
          data-hero
          className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-[15px]"
        >
          {site.summary} I build AI-powered enterprise systems that turn
          documents into grounded, useful answers.
        </p>
        <p
          data-hero
          className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint"
        >
          <MapPin size={13} className="text-brand" />
          {site.location}
        </p>

        <div
          data-hero
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex h-12 items-center justify-center gap-2 border border-brand bg-brand px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            View Projects
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 border border-line px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-white hover:text-white"
          >
            Contact Me
          </a>
        </div>

        <div
          data-hero
          className="mt-12 grid w-full max-w-2xl grid-cols-3 divide-x divide-line border-y border-line bg-surface/40"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-5 md:px-6 md:py-6">
              <p className="text-2xl font-black tracking-tight text-brand md:text-4xl">
                <span data-count={stat.value} data-suffix={stat.suffix}>
                  {stat.value}
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground md:text-[9px] md:tracking-[0.22em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#skills"
          className="mt-10 flex flex-col items-center gap-2 font-mono text-[8px] uppercase tracking-[0.3em] text-faint transition-colors hover:text-white"
        >
          Scroll to explore
          <span className="relative h-10 w-px overflow-hidden bg-line">
            <span className="animate-scroll-line absolute inset-x-0 top-0 h-4 bg-brand" />
          </span>
        </a>
      </div>
    </section>
  );
}
