import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { portalBenefits } from "@/lib/site-data";

type PortalSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  primaryExternal?: boolean;
  secondaryHref: string;
  secondaryLabel: string;
  secondaryExternal?: boolean;
  secondaryIcon?: "arrow" | "external";
  statusDescription: string;
};

export function PortalSection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  primaryExternal = false,
  secondaryHref,
  secondaryLabel,
  secondaryExternal = false,
  secondaryIcon = "external",
  statusDescription
}: PortalSectionProps) {
  return (
    <section className="portal-section portal-section--redesigned">
      <div className="portal-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="portal-actions">
          <Link
            className="primary-action"
            href={primaryHref}
            target={primaryExternal ? "_blank" : undefined}
            rel={primaryExternal ? "noreferrer" : undefined}
          >
            {primaryLabel}{" "}
            {primaryExternal ? (
              <ExternalLink size={17} aria-hidden="true" />
            ) : (
              <ArrowRight size={17} aria-hidden="true" />
            )}
          </Link>
          <Link
            className="secondary-action"
            href={secondaryHref}
            target={secondaryExternal ? "_blank" : undefined}
            rel={secondaryExternal ? "noreferrer" : undefined}
          >
            {secondaryLabel}{" "}
            {secondaryIcon === "arrow" ? (
              <ArrowRight size={17} aria-hidden="true" />
            ) : (
              <ExternalLink size={17} aria-hidden="true" />
            )}
          </Link>
        </div>
      </div>
      <div className="portal-workspace">
        <div className="portal-status-panel">
          <span>Online permit workspace</span>
          <strong>permit.permassist.com.au</strong>
          <p>{statusDescription}</p>
        </div>
        <div className="portal-benefit-grid">
          {portalBenefits.map((benefit) => (
            <article className="portal-benefit-card" key={benefit.title}>
              <benefit.icon size={21} aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
