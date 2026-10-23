import type { ReactNode } from "react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { CopyButton } from "@/components/portfolio/copy-button";
import { codeSnippet, skillGroups } from "@/lib/site-data";

const codeLines: ReactNode[] = [
  <>
    <span className="text-code-red">public</span>{" "}
    <span className="text-code-red">class</span>{" "}
    <span className="text-code-yellow">Developer</span> {"{"}
  </>,
  <>
    {"  "}
    <span className="text-code-red">private final</span>{" "}
    <span className="text-code-blue">String</span> name ={" "}
    <span className="text-code-green">&quot;Faleel H&quot;</span>;
  </>,
  <>
    {"  "}
    <span className="text-code-red">private final</span>{" "}
    <span className="text-code-blue">String</span> role ={" "}
    <span className="text-code-green">
      &quot;Java Developer &amp; AI Engineer&quot;
    </span>
    ;
  </>,
  <>
    {"  "}
    <span className="text-code-red">private final</span>{" "}
    <span className="text-code-blue">String[]</span> focus = {"{"}{" "}
    <span className="text-code-green">&quot;Spring Boot&quot;</span>,{" "}
    <span className="text-code-green">&quot;Spring AI&quot;</span>,{" "}
    <span className="text-code-green">&quot;RAG&quot;</span> {"}"};
  </>,
  <>
    {"  "}
    <span className="text-code-red">private final</span>{" "}
    <span className="text-code-blue">boolean</span> openToWork ={" "}
    <span className="text-code-yellow">true</span>;
  </>,
  <>&nbsp;</>,
  <>
    {"  "}
    <span className="text-code-red">public</span>{" "}
    <span className="text-code-blue">String</span>{" "}
    <span className="text-code-yellow">build</span>(
    <span className="text-code-blue">String</span> problem) {"{"}
  </>,
  <>
    {"    "}
    <span className="text-code-red">return</span>{" "}
    <span className="text-code-yellow">architect</span>(problem)
  </>,
  <>
    {"        "}.<span className="text-code-yellow">develop</span>()
  </>,
  <>
    {"        "}.<span className="text-code-yellow">integrate</span>()
  </>,
  <>
    {"        "}.<span className="text-code-yellow">test</span>()
  </>,
  <>
    {"        "}.<span className="text-code-yellow">deploy</span>();
  </>,
  <>{"  }"}</>,
  <>{"}"}</>,
];

export function TechArsenal() {
  return (
    <section id="skills" className="border-b border-line bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:py-32">
        <SectionHeading
          index="01"
          command="skills --list"
          title="Technical Arsenal"
          description="A backend-first toolkit for building production systems, integrating AI services, and shipping clean full-stack applications."
          action={
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
              [ <span className="text-brand">{skillGroups.length}</span> modules
              loaded ]
            </p>
          }
        />

        <div
          data-reveal
          className="mb-6 overflow-hidden border border-line bg-code-bg"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#ff5f56]" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                developer.profile
              </span>
            </div>
            <CopyButton text={codeSnippet} />
          </div>
          <div className="overflow-x-auto p-4 md:p-5">
            <pre className="font-mono text-[11px] leading-6 text-[#c9d1d9] md:text-[12px] md:leading-7">
              <code>
                {codeLines.map((line, index) => (
                  <span key={index} className="flex">
                    <span className="w-8 shrink-0 select-none pr-4 text-right text-[#3d5a80]">
                      {index + 1}
                    </span>
                    <span className="whitespace-pre">{line}</span>
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>

        <div
          data-reveal-group
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <article
              key={group.label}
              className="group relative flex flex-col border border-line bg-surface p-5 transition-colors duration-300 hover:border-brand/70 md:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-brand">
                  <span className="text-faint">$</span> {group.command}
                </span>
                <span className="border border-line px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                  {group.items.length} tags
                </span>
              </div>
              <h3 className="mt-4 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-[#3a3a3a] px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-dim transition-colors duration-300 group-hover:border-brand/40 group-hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-0 h-px w-0 bg-brand transition-all duration-500 group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
