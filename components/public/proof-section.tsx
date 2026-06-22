import { BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Achievement = {
  label: string;
};

type ProofSectionProps = {
  eyebrow: string;
  title: string;
  achievements: Achievement[];
  compact?: boolean;
};

export function ProofSection({ eyebrow, title, achievements, compact = false }: ProofSectionProps) {
  return (
    <section className={compact ? "proof-section proof-section--compact" : "proof-section"}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className={compact ? "compact-proof-grid" : "proof-list"}>
        {achievements.map((item) => (
          <div className="proof-item" key={item.label}>
            <BadgeCheck size={20} aria-hidden="true" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

type CredentialSectionProps = {
  registration: string;
  qualification: string;
};

export function CredentialSection({ registration, qualification }: CredentialSectionProps) {
  return (
    <section className="credential-section credential-section--stacked">
      <div className="credential-card">
        <CheckCircle2 size={22} aria-hidden="true" />
        <span>Registration</span>
        <strong>{registration}</strong>
      </div>
      <div className="credential-card">
        <CheckCircle2 size={22} aria-hidden="true" />
        <span>Qualification</span>
        <strong>{qualification}</strong>
      </div>
      <div className="page-cta-panel">
        <p className="eyebrow">Next step</p>
        <h2>Send the project details for review.</h2>
        <div className="hero-actions">
          <Link className="primary-action" href="/contact">
            Prepare quotation enquiry <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
