import Image from "next/image";
import { ArrowUpRight, Check, ExternalLink, Mail } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { GithubIcon } from "@/components/portfolio/brand-icons";
import { projects, site } from "@/lib/site-data";

function LinkIcon({ icon }: { icon: "github" | "external" | "mail" }) {
  if (icon === "github") return <GithubIcon className="size-3.5" />;
  if (icon === "mail") return <Mail size={14} />;
  return <ExternalLink size={14} />;
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:py-32">
        <SectionHeading
          index="02"
          command="projects --featured"
          title="Featured Projects"
          description="Selected work across AI-powered enterprise tooling and production business websites. Each project is built end to end — architecture, implementation, testing, and deployment."
          action={
            <a
              href={site.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-brand"
            >
              More on LinkedIn
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          }
        />

        <div className="flex flex-col gap-10 md:gap-14">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-reveal
              className="group grid overflow-hidden border border-line border-l-[3px] border-l-brand bg-surface transition-colors duration-300 hover:border-line hover:border-l-brand lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden border-b border-line bg-ink lg:border-b-0 ${
                  index % 2 === 1
                    ? "lg:order-2 lg:border-l"
                    : "lg:border-r"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover grayscale-[8%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-ink/15 transition-colors duration-300 group-hover:bg-ink/5"
                />
                <span className="absolute top-4 left-4 border border-line bg-ink/85 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="absolute right-4 bottom-4 flex size-9 items-center justify-center border border-brand bg-brand text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="flex flex-col p-6 md:p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    Project / {project.number}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-brand">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold uppercase leading-[1.05] tracking-[-0.02em] md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[11px] leading-5 text-dim"
                    >
                      <Check
                        size={12}
                        className="mt-1 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#3a3a3a] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:border-brand hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2.5 pt-8">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex h-10 items-center gap-2 border border-line px-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                    >
                      <LinkIcon icon={link.icon} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
