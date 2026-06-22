import {
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  FileCheck2,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AutoCarousel } from "@/components/auto-carousel";
import { SiteHeader } from "@/components/site-header";
import {
  achievements,
  contactDetails,
  portalBenefits,
  services,
} from "@/lib/site-data";

const coreServiceVisuals = [
  {
    alt: "Architectural plans and permit documents on a desk",
    image: "/images/service-permits-v2.png",
  },
  {
    alt: "Inspection checklist with construction tools and drawings",
    image: "/images/service-inspections-v2.png",
  },
  {
    alt: "Occupancy permit review with level, clipboard and plans",
    image: "/images/service-occupancy-v2.png",
  },
];

export default function HomePage() {
  const featuredServices = services;

  return (
    <main>
      <SiteHeader />
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Building Surveyors Pty Ltd</p>
          <h1>
            Building permits and certification without unnecessary delays.
          </h1>
          <p className="hero-text">
            Anthony Middling provides building permits, certification,
            inspections and swimming pool compliance reports for commercial and
            residential projects across Victoria.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact#quotation">
              Prepare quotation enquiry{" "}
              <ArrowRight size={18} aria-hidden="true" />
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
          <p className="hero-note">
            20+ years of building surveying and trade experience.
          </p>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="eyebrow">How we help</p>
          <h2>
            Clear permit pathways for commercial and residential projects.
          </h2>
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
            <Link
              className="intro-image-card intro-image-card--services"
              href="/services"
            >
              <span className="intro-card-meta">
                <span className="intro-step">01</span>
                <FileCheck2 size={18} aria-hidden="true" />
              </span>
              <strong>Services</strong>
              <small>Permits and compliance.</small>
            </Link>
            <Link
              className="intro-image-card intro-image-card--about"
              href="/about"
            >
              <span className="intro-card-meta">
                <span className="intro-step">02</span>
                <BadgeCheck size={18} aria-hidden="true" />
              </span>
              <strong>Approach</strong>
              <small>Practical assessment.</small>
            </Link>
            <Link
              className="intro-image-card intro-image-card--contact"
              href="/contact"
            >
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
        <div className="section-heading section-heading--compact">
          <div className="section-heading-copy">
            <p className="eyebrow">Core services</p>
            <h2>Start with the permit services most projects need.</h2>
          </div>
          <div className="section-heading-aside">
            <p className="section-heading-summary">
              Choose the right starting point before sending plans, costs or
              inspection details.
            </p>
            <div
              className="section-heading-tags"
              aria-label="Core service categories"
            >
              <span>Permits</span>
              <span>Inspections</span>
              <span>Occupancy</span>
            </div>
          </div>
        </div>
        <div className="service-carousel" aria-label="Core services">
          <AutoCarousel className="service-track" intervalMs={7000}>
            {featuredServices.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-media">
                  <Image
                    alt={
                      coreServiceVisuals[index % coreServiceVisuals.length].alt
                    }
                    className="service-card-image"
                    fill
                    priority={index === 0}
                    sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    src={
                      coreServiceVisuals[index % coreServiceVisuals.length]
                        .image
                    }
                  />
                  <span className="service-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="service-card-body">
                  <service.icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </AutoCarousel>
        </div>
        <div className="section-action">
          <Link className="secondary-action" href="/services">
            See all services <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="proof-section">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Practical advice backed by technical building knowledge.</h2>
        </div>
        <div className="proof-list">
          {achievements.map((item) => (
            <div className="proof-item" key={item.label}>
              <BadgeCheck size={20} aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="portal-section portal-section--redesigned">
        <div className="portal-copy">
          <p className="eyebrow">PermAssist</p>
          <h2>Keep approvals, documents and advice moving in one portal.</h2>
          <p>
            PermAssist supports the practical administration around permit work:
            lodging documents, tracking application status, sharing checklists
            and keeping technical advice in one place.
          </p>
          <div className="portal-actions">
            <Link className="primary-action" href="/permassist">
              Learn about PermAssist <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              className="secondary-action"
              href="https://permit.permassist.com.au"
              target="_blank"
              rel="noreferrer"
            >
              Portal login <ExternalLink size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="portal-workspace">
          <div className="portal-status-panel">
            <span>Online permit workspace</span>
            <strong>permit.permassist.com.au</strong>
            <p>
              Upload documents, check progress and keep approval tasks moving.
            </p>
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
              Prepare quotation enquiry{" "}
              <ArrowRight size={17} aria-hidden="true" />
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
          <ol className="home-enquiry-order" aria-label="Quotation details in order">
            <li>
              <span className="home-enquiry-order-number">01</span>
              <div>
                <strong>Owner&apos;s name, mobile number, and email address</strong>
                <p>Use the main contact for the project.</p>
              </div>
            </li>
            <li>
              <span className="home-enquiry-order-number">02</span>
              <div>
                <strong>Property address</strong>
                <p>Include the site location and any lot details.</p>
              </div>
            </li>
            <li>
              <span className="home-enquiry-order-number">03</span>
              <div>
                <strong>Description of the project</strong>
                <p>Summarise the proposed works in a few lines.</p>
              </div>
            </li>
            <li>
              <span className="home-enquiry-order-number">04</span>
              <div>
                <strong>Engineering design and architectural plans</strong>
                <p>Attach any drawings, design documents, or revisions.</p>
              </div>
            </li>
            <li>
              <span className="home-enquiry-order-number">05</span>
              <div>
                <strong>Estimated construction cost inclusive of GST</strong>
                <p>Provide the best current estimate for the works.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
