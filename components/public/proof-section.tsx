import { Award, BadgeCheck, Building2, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Achievement = {
  label: string;
};

type ProofSectionProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  achievements: Achievement[];
  compact?: boolean;
};

export function ProofSection({ eyebrow, title, summary, achievements, compact = false }: ProofSectionProps) {
  return (
    <section className={compact ? "proof-section proof-section--compact" : "proof-section"}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {summary && <p className="proof-summary">{summary}</p>}
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
  companyName: string;
  acn: string;
  registration: string;
  qualification: string;
};

export function CredentialSection({ companyName, acn, registration, qualification }: CredentialSectionProps) {
  return (
    <section className="credential-section credential-section--stacked">
      <div className="credential-card credential-card--identity">
        <Building2 size={22} aria-hidden="true" />
        <span>Company identity</span>
        <strong>{companyName}</strong>
        <dl className="credential-detail-list">
          <div>
            <dt>ACN</dt>
            <dd>{acn}</dd>
          </div>
        </dl>
      </div>
      <div className="credential-card credential-card--registration">
        <Award size={22} aria-hidden="true" />
        <span>Professional registration</span>
        <strong className="credential-registration-value">{registration}</strong>
        <dl className="credential-detail-list">
          <div>
            <dt>Qualification</dt>
            <dd>
              <GraduationCap size={16} aria-hidden="true" />
              {qualification}
            </dd>
          </div>
        </dl>
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
