import { Award, CircleCheck, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { certifications, education } from "@/lib/site-data";

export function Credentials() {
  return (
    <section id="credentials" className="border-b border-line bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:py-32">
        <SectionHeading
          index="03"
          command="credentials --verify"
          title="Education & Certifications"
          description="A computer applications foundation paired with focused, current training in generative AI, MCP, and modern AI-assisted development."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-5">
            <div className="flex h-full flex-col border border-line bg-surface p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center border border-brand text-brand">
                  <GraduationCap size={18} />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-brand">
                  Education
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold uppercase leading-snug tracking-[-0.01em] md:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {education.institution}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-px border border-line bg-line">
                <div className="bg-ink px-4 py-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
                    Expected
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    May 2026
                  </p>
                </div>
                <div className="bg-ink px-4 py-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
                    CGPA
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand">
                    {education.cgpa}
                  </p>
                </div>
              </div>

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                Relevant coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="border border-[#3a3a3a] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.06em] text-dim"
                  >
                    {course}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 border-t border-line pt-6 text-[11px] text-faint">
                <span className="size-1.5 rounded-full bg-brand" />
                {education.expected}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                <Award size={13} className="text-brand" />
                Certifications
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                {certifications.length} credentials
              </span>
            </div>
            <div data-reveal-group className="grid gap-4 sm:grid-cols-2">
              {certifications.map((certification, index) => (
                <article
                  key={certification.title}
                  className="group flex flex-col border border-line bg-surface p-5 transition-colors duration-300 hover:border-brand/70 md:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand">
                      0{index + 1}
                    </span>
                    <CircleCheck
                      size={15}
                      className="text-faint transition-colors group-hover:text-brand"
                    />
                  </div>
                  <h3 className="mt-7 text-[15px] font-bold uppercase leading-snug tracking-[0.01em]">
                    {certification.title}
                  </h3>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                    <span className="text-xs text-muted-foreground">
                      {certification.issuer}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                      {certification.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
