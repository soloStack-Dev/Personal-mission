import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons";
import { navLinks, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-line bg-[#070707]">
      <div className="grid lg:grid-cols-2">
        <div
          data-reveal
          className="flex flex-col justify-between px-6 py-16 md:px-10 md:py-20 lg:min-h-[560px]"
        >
          <div>
            <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-brand">
              <span aria-hidden="true" className="text-lg leading-none">
                +
              </span>
              Let&apos;s work together
            </p>
            <h2 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
              Have an idea?
              <br />
              <span className="text-brand">Let&apos;s ship it.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              Available for entry-level Java developer roles, backend
              engineering, and AI-powered application work. Based in Tamil
              Nadu, open to remote and on-site opportunities.
            </p>
            <a
              href={`mailto:${site.email}?subject=Let%27s%20work%20together`}
              className="group mt-8 inline-flex h-12 items-center justify-center gap-2 border border-brand px-6 font-mono text-[9px] uppercase tracking-[0.22em] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Start a conversation
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Faleel H on LinkedIn"
                className="flex size-10 items-center justify-center border border-line text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://github.com/soloStack-Dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Faleel H on GitHub"
                className="flex size-10 items-center justify-center border border-line text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email Faleel H"
                className="flex size-10 items-center justify-center border border-line text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border-t border-line lg:min-h-[560px] lg:border-t-0 lg:border-l">
          <Image
            src="/images/developer-workspace.png"
            alt="Cinematic red-lit developer workspace with a code editor"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-right-bottom opacity-90 grayscale-[10%] contrast-110"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/65"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-grid opacity-30"
          />

          <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
            <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-[8px] uppercase tracking-[0.22em] text-white/60">
              <span>Cinematic dev workspace</span>
              <span className="text-brand">Red / Dark</span>
            </div>

            <div className="my-8 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 border border-white/10 bg-ink/50 px-4 py-3 backdrop-blur-sm transition-colors hover:border-brand"
              >
                <Mail size={15} className="shrink-0 text-brand" />
                <span className="min-w-0">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                    Email
                  </span>
                  <span className="block truncate text-sm text-white/85 group-hover:text-white">
                    {site.email}
                  </span>
                </span>
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="group flex items-center gap-3 border border-white/10 bg-ink/50 px-4 py-3 backdrop-blur-sm transition-colors hover:border-brand"
              >
                <Phone size={15} className="shrink-0 text-brand" />
                <span>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                    Phone
                  </span>
                  <span className="block text-sm text-white/85 group-hover:text-white">
                    {site.phone}
                  </span>
                </span>
              </a>
              <a
                href={site.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-white/10 bg-ink/50 px-4 py-3 backdrop-blur-sm transition-colors hover:border-brand"
              >
                <LinkedinIcon className="size-4 shrink-0 text-brand" />
                <span className="min-w-0">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                    LinkedIn
                  </span>
                  <span className="block truncate text-sm text-white/85 group-hover:text-white">
                    {site.linkedin}
                  </span>
                </span>
              </a>
            </div>

            <div className="flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-brand" />
                {site.location}
              </span>
              <span className="hidden sm:inline">UTC +05:30</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-6 font-mono text-[9px] uppercase tracking-[0.18em] text-faint md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Faleel H. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; GSAP</p>
        </div>
      </div>
    </footer>
  );
}
