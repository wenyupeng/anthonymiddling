import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { portalBenefits } from "@/lib/site-data";

export default function PermAssistPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero page-hero-permassist">
        <div className="page-hero-content">
          <p className="eyebrow">PermAssist</p>
          <h1>Online permit work without scattered documents.</h1>
          <p>
            Lodge documents, track application status and keep approval
            communication in one practical workspace.
          </p>
          <div className="hero-actions">
            <Link
              className="primary-action"
              href="https://permit.permassist.com.au"
              target="_blank"
              rel="noreferrer"
            >
              Login to PermAssist <ExternalLink size={17} aria-hidden="true" />
            </Link>
            <Link className="secondary-action" href="/contact#quotation">
              Quotation checklist
            </Link>
          </div>
        </div>
      </section>

      <div className="inner-page-flow">
        <section className="portal-section portal-section--redesigned">
          <div className="portal-copy">
            <p className="eyebrow">Portal workflow</p>
            <h2>Keep the approval workflow visible from lodgement to response.</h2>
            <p>
              PermAssist supports the administration around permit work: document
              upload, status tracking, critical alerts and direct technical
              communication by email or phone.
            </p>
            <div className="portal-actions">
              <Link
                className="primary-action"
                href="https://permit.permassist.com.au"
                target="_blank"
                rel="noreferrer"
              >
                Login to PermAssist <ExternalLink size={17} aria-hidden="true" />
              </Link>
              <Link className="secondary-action" href="/contact#quotation">
                Quotation checklist <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="portal-workspace">
            <div className="portal-status-panel">
              <span>Online permit workspace</span>
              <strong>permit.permassist.com.au</strong>
              <p>Upload documents, monitor progress and respond to approval tasks.</p>
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
      </div>
    </main>
  );
}