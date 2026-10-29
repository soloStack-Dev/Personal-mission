import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function SellingPlatform() {
  return (
    <section id="templates" className="border-b border-line bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:py-32">
        <SectionHeading
          index="03"
          command="platform --selling"
          title="Web Templates & Selling Platform"
          description="A platform built to showcase and sell ready-made website templates. Browse live demos, pricing, and get started with production-ready templates."
        />

        <article
          data-reveal
          className="group grid overflow-hidden border border-line border-l-[3px] border-l-brand bg-surface transition-colors duration-300 hover:border-line hover:border-l-brand lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink lg:border-b-0 lg:border-r">
            <Image
              src="/images/projects/personal-selling-source.png"
              alt="Personal Selling Source web templates platform preview"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover grayscale-[8%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink/15 transition-colors duration-300 group-hover:bg-ink/5"
            />
            <span className="absolute top-4 left-4 border border-line bg-ink/85 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.24em] text-white backdrop-blur-sm">
              Web Studio / Templates
            </span>
            <span className="absolute right-4 bottom-4 flex size-9 items-center justify-center border border-brand bg-brand text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <ArrowUpRight size={16} />
            </span>
          </div>

          <div className="flex flex-col p-6 md:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                Platform / 01
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-brand">
                2026
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold uppercase leading-[1.05] tracking-[-0.02em] md:text-3xl">
              Personal Selling Source
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A personal web studio platform showcasing sellable website templates and client work with editorial design, project galleries, pricing packages, and a streamlined enquiry flow via WhatsApp integration.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-[11px] leading-5 text-dim">
                <span className="mt-1 shrink-0 text-brand">•</span>
                Editorial portfolio with case studies
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-5 text-dim">
                <span className="mt-1 shrink-0 text-brand">•</span>
                Sellable website templates
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-5 text-dim">
                <span className="mt-1 shrink-0 text-brand">•</span>
                Service packages and pricing
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-5 text-dim">
                <span className="mt-1 shrink-0 text-brand">•</span>
                WhatsApp-integrated enquiries
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-5 text-dim">
                <span className="mt-1 shrink-0 text-brand">•</span>
                AI smart features & chatbot
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-5 text-dim">
                <span className="mt-1 shrink-0 text-brand">•</span>
                Responsive with GSAP animations
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"].map((tech) => (
                <span
                  key={tech}
                  className="border border-[#3a3a3a] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:border-brand hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2.5 pt-8">
              <a
                href="https://personal-selling-source.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 border border-line px-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <ExternalLink size={14} />
                Live Website
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
