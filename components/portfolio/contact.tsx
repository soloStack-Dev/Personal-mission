import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { LinkedinIcon } from "@/components/portfolio/brand-icons";
import { site } from "@/lib/site-data";

const contactItems = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    Icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: site.linkedin,
    href: site.linkedinHref,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Location",
    value: site.location,
    href: undefined,
    Icon: MapPin,
    external: false,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-line bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-10 hidden select-none text-[clamp(6rem,14vw,13rem)] font-black uppercase leading-none tracking-[-0.06em] text-white/[0.025] xl:block"
      >
        Contact
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:py-32">
        <SectionHeading
          index="05"
          command="connect --secure"
          title="Let's Build Together"
          description="I am open to entry-level Java developer roles and AI engineering work. If you need someone who can own the backend and connect it to real AI workflows, let's talk."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              data-reveal-group
              className="grid gap-3 sm:grid-cols-2"
            >
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center border border-line text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <item.Icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[8px] uppercase tracking-[0.24em] text-faint">
                        {item.label}
                      </span>
                      <span className="mt-1 block truncate text-sm text-muted-foreground transition-colors group-hover:text-white">
                        {item.value}
                      </span>
                    </span>
                    {item.href ? (
                      <ArrowUpRight
                        size={15}
                        className="ml-auto shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      />
                    ) : null}
                  </>
                );

                if (!item.href) {
                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 border border-line bg-surface p-4"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 border border-line bg-surface p-4 transition-colors hover:border-brand/60"
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div
              data-reveal
              className="mt-3 flex flex-col gap-4 border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-white">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                {site.availability} — entry level
              </span>
              <a
                href={`mailto:${site.email}?subject=Opportunity%20for%20Faleel%20H`}
                className="group inline-flex h-11 items-center justify-center gap-2 border border-brand bg-brand px-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                Send an email
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div data-reveal className="lg:col-span-5">
            <div className="overflow-hidden border border-line bg-code-bg">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="size-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                  status --check
                </span>
              </div>

              <div className="p-5 font-mono text-[11px] leading-7 text-[#c9d1d9] md:p-6">
                <p>
                  <span className="text-faint">$</span>{" "}
                  <span className="text-code-blue">whoami</span>
                </p>
                <p className="mt-1 text-white">faleel_h</p>

                <div className="mt-5 space-y-2">
                  <p className="flex justify-between gap-4 border-b border-white/5 pb-2">
                    <span className="text-faint">role</span>
                    <span className="text-right text-code-green">
                      java + ai engineer
                    </span>
                  </p>
                  <p className="flex justify-between gap-4 border-b border-white/5 pb-2">
                    <span className="text-faint">status</span>
                    <span className="text-right text-code-green">
                      open_to_work
                    </span>
                  </p>
                  <p className="flex justify-between gap-4 border-b border-white/5 pb-2">
                    <span className="text-faint">focus</span>
                    <span className="text-right text-code-yellow">
                      spring boot / rag
                    </span>
                  </p>
                  <p className="flex justify-between gap-4 border-b border-white/5 pb-2">
                    <span className="text-faint">location</span>
                    <span className="text-right">tamil nadu, in</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span className="text-faint">response</span>
                    <span className="text-right text-code-green">
                      within 24h
                    </span>
                  </p>
                </div>

                <p className="mt-6">
                  <span className="text-faint">$</span>{" "}
                  <span className="text-code-blue">mail</span>{" "}
                  {site.email}
                </p>
                <p className="mt-1 flex items-center gap-2 text-faint">
                  <span className="inline-block size-1.5 animate-pulse rounded-full bg-code-green" />
                  awaiting your message_
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
