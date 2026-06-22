import {
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  FileCheck2,
  Phone
} from "lucide-react";
import Link from "next/link";
import { AutoCarousel } from "@/components/auto-carousel";
import { PortalSection } from "@/components/public/portal-section";
import { ProofSection } from "@/components/public/proof-section";
import { homeQuotationItems, QuotationList } from "@/components/public/quotation-list";
import { SectionHeading } from "@/components/public/section-heading";
import { ServiceCard } from "@/components/public/service-cards";
import { SiteHeader } from "@/components/site-header";
import { achievements } from "@/lib/site-data";
import { homeCoreServices } from "@/lib/service-visuals";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Building Surveyors Pty Ltd</p>
          <h1>Building permits and certification without unnecessary delays.</h1>
          <p className="hero-text">
            Anthony Middling provides building permits, certification,
            inspections and swimming pool compliance reports for commercial and
            residential projects across Victoria.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact#quotation">
              Prepare quotation enquiry <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              className="secondary-action"
              href="https://permit.permassist.com.au"
              target="_blank"
              rel="noreferrer"
            >
              Login to PermAssist <ExternalLink size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-note">20+ years of building surveying and trade experience.</p>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="eyebrow">How we help</p>
          <h2>Clear permit pathways for commercial and residential projects.</h2>
          <p className="home-intro-lede">
            Start with the right service, understand the approval workflow, then
            send the project details needed for a practical response.
          </p>
        </div>
        <div className="intro-copy">
          <p>
            Use the site like a short project pathway: check the core services,
            learn how PermAssist supports approvals, then send the quotation
            details we need to review your job efficiently.
          </p>
          <div className="intro-visual-grid" aria-label="Project pathway">
            <Link className="intro-image-card intro-image-card--services" href="/services">
              <span className="intro-card-meta">
                <span className="intro-step">01</span>
                <FileCheck2 size={18} aria-hidden="true" />
              </span>
              <strong>Services</strong>
              <small>Permits and compliance.</small>
            </Link>
            <Link className="intro-image-card intro-image-card--about" href="/about">
              <span className="intro-card-meta">
                <span className="intro-step">02</span>
                <BadgeCheck size={18} aria-hidden="true" />
              </span>
              <strong>Approach</strong>
              <small>Practical assessment.</small>
            </Link>
            <Link className="intro-image-card intro-image-card--contact" href="/contact">
              <span className="intro-card-meta">
                <span className="intro-step">03</span>
                <Phone size={18} aria-hidden="true" />
              </span>
              <strong>Contact</strong>
              <small>Send the right details.</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band section-band--tight section-band--services">
        <SectionHeading
          eyebrow="Core services"
          title="Start with the permit services most projects need."
          summary="Choose the right starting point before sending plans, costs or inspection details."
          tags={["Permits", "Inspections", "Occupancy"]}
        />
        <div className="service-carousel" aria-label="Core services">
          <AutoCarousel className="service-track" intervalMs={7000}>
            {homeCoreServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                visual={service.visual}
                priority={index === 0}
              />
            ))}
          </AutoCarousel>
        </div>
        <div className="section-action">
          <Link className="secondary-action" href="/services">
            See all services <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ProofSection
        eyebrow="Experience"
        title="Practical advice backed by technical building knowledge."
        achievements={achievements}
      />

      <PortalSection
        eyebrow="PermAssist"
        title="Keep approvals, documents and advice moving in one portal."
        description="PermAssist supports the practical administration around permit work: lodging documents, tracking application status, sharing checklists and keeping technical advice in one place."
        primaryHref="/permassist"
        primaryLabel="Learn about PermAssist"
        secondaryHref="https://permit.permassist.com.au"
        secondaryLabel="Portal login"
        secondaryExternal
        statusDescription="Upload documents, check progress and keep approval tasks moving."
      />

      <section className="home-enquiry-section">
        <div className="home-enquiry-copy">
          <p className="eyebrow">Ready to enquire?</p>
          <h2>Send the documents in order so the quotation can move quickly.</h2>
          <p>
            Please follow this sequence. It keeps the first review clear and
            avoids back-and-forth on missing project details.
          </p>
          <div className="home-enquiry-flow" aria-label="Quotation flow">
            <span>Project details</span>
            <span>Permit review</span>
            <span>Quotation response</span>
          </div>
          <div className="home-enquiry-actions">
            <Link className="primary-action" href="/contact">
              Prepare quotation enquiry <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="home-enquiry-fineprint">
            One complete submission gives us enough context to confirm the
            permit pathway and the next practical step.
          </p>
        </div>
        <div className="home-enquiry-order-panel">
          <div className="home-enquiry-order-intro">
            <span className="home-enquiry-order-kicker">Include these in order</span>
            <strong>The sequence below keeps the review moving.</strong>
          </div>
          <QuotationList
            ariaLabel="Quotation details in order"
            items={homeQuotationItems}
            variant="home"
          />
        </div>
      </section>
    </main>
  );
}
