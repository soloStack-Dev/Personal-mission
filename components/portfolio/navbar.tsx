"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-background/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "h-16 shadow-[0_4px_20px_rgba(0,0,0,0.45)]" : "h-20"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-10">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Faleel H home"
          >
            <span className="flex size-9 items-center justify-center border border-brand font-mono text-[13px] font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              FH
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[14px] font-bold tracking-[0.02em]">
                {site.handle}
              </span>
              <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-muted-foreground">
                Faleel H · Java / AI
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <span className="flex items-center gap-2 border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </span>
            <a
              href="#contact"
              className="group flex items-center gap-2 border border-brand px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Hire me
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex size-11 items-center justify-center border border-line text-brand transition-colors hover:border-brand lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-background/98 backdrop-blur-xl lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-20 items-center justify-between border-b border-line px-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex size-11 items-center justify-center border border-line text-brand transition-colors hover:border-brand"
            >
              <X size={20} />
            </button>
          </div>

          <nav
            aria-label="Mobile navigation links"
            className="flex flex-1 flex-col justify-center gap-1 px-6"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-line/70 py-5 text-3xl font-black uppercase tracking-[-0.02em] transition-colors hover:text-brand animate-in fade-in slide-in-from-right-4 duration-300"
                style={{ animationDelay: `${index * 60 + 80}ms`, animationFillMode: "both" }}
              >
                {link.label}
                <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-line px-6 py-6">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </span>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block font-mono text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {site.email}
            </a>
            <a
              href={site.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-mono text-xs text-faint transition-colors hover:text-brand"
            >
              {site.linkedin}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
