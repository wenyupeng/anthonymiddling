import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  tags?: string[];
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  summary,
  tags,
  className = "section-heading section-heading--compact"
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="section-heading-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {(summary || tags) && (
        <div className="section-heading-aside">
          {summary && <p className="section-heading-summary">{summary}</p>}
          {tags && (
            <div className="section-heading-tags" aria-label="Core service categories">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

type SectionShellProps = {
  children: ReactNode;
};

export function InnerPageFlow({ children }: SectionShellProps) {
  return <div className="inner-page-flow">{children}</div>;
}
