import {
  CodeXml,
  DraftingCompass,
  FlaskConical,
  PlugZap,
  Quote,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { processSteps } from "@/lib/site-data";

const stepIcons: LucideIcon[] = [
  DraftingCompass,
  CodeXml,
  PlugZap,
  FlaskConical,
  Rocket,
];

export function Process() {
  return (
    <>
      <section id="process" className="border-b border-line bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:py-32">
          <SectionHeading
            index="04"
            command="workflow --run"
            title="How I Build"
            description="A repeatable delivery process — from architecture and implementation to integration, testing, and a production-ready deploy."
          />

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-5 bottom-5 left-[21px] w-px bg-line md:top-[21px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto"
            />

            <div data-reveal-group className="grid gap-10 md:grid-cols-5 md:gap-4">
              {processSteps.map((step, index) => {
                const Icon = stepIcons[index] ?? Rocket;
                return (
                  <div
                    key={step.number}
                    className="group relative flex gap-5 md:block"
                  >
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-brand bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white md:size-11">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>
                    <div className="md:mt-6">
                      <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-brand">
                        {step.number}
                      </span>
                      <h3 className="mt-1 text-base font-bold uppercase tracking-[0.04em] md:text-[15px]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[260px] text-[11px] leading-5 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand bg-brand text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16 md:flex-row md:items-start md:gap-12 md:px-10 md:py-20">
          <Quote
            size={40}
            className="shrink-0 text-white/40"
            aria-hidden="true"
          />
          <div data-reveal>
            <blockquote className="max-w-4xl text-2xl font-medium italic leading-[1.2] tracking-[-0.01em] md:text-4xl">
              Good systems are not just written. They are architected to scale,
              tested to hold, and designed to be understood.
            </blockquote>
            <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/70">
              Faleel H — Engineering Principle
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
