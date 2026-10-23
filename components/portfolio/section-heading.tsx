import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  command: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({
  index,
  command,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className="mb-12 flex flex-col gap-6 border-b border-line pb-8 md:mb-16 md:flex-row md:items-end md:justify-between"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand">
          {"// "}
          {index} — {command}
        </p>
        <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
