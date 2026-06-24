import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant: "services" | "about" | "permassist" | "contact" | "resources";
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  variant,
  children
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${variant}`}>
      <div className="page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
