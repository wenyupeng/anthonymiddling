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
import { QuotationList } from "@/components/public/quotation-list";
import { SectionHeading } from "@/components/public/section-heading";
import { ServiceCard } from "@/components/public/service-cards";
import { SiteHeader } from "@/components/site-header";
import {
  homeEnquirySection,
  homeHero,
  homePathCards,
  homePortalSection,
  homeProofSection,
  homeQuotationItems,
  homeServiceSection,
  homeValueSection
} from "@/lib/home-content";
import { achievements } from "@/lib/site-data";
import { homeCoreServices } from "@/lib/service-visuals";
const pathCardIcons = {
  "/services": FileCheck2,
  "/about": BadgeCheck,
  "/contact": Phone
} as const;


export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">{homeHero.eyebrow}</p>
          <h1>{homeHero.title}</h1>
          <p className="hero-text">{homeHero.description}</p>
          <div className="hero-actions">
            <Link className="primary-action" href="/contact#quotation">
              {homeHero.primaryAction} <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              className="secondary-action"
              href="https://permit.permassist.com.au"
              target="_blank"
              rel="noreferrer"
            >
              {homeHero.secondaryAction} <ExternalLink size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-note">{homeHero.note}</p>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="eyebrow">{homeValueSection.eyebrow}</p>
          <h2>{homeValueSection.title}</h2>
          <p className="home-intro-lede">{homeValueSection.summary}</p>
        </div>
        <div className="intro-copy">
          <p>{homeValueSection.body}</p>
          <div className="intro-visual-grid" aria-label="Project pathway">
            {homePathCards.map((card) => {
              const Icon = pathCardIcons[card.href];

              return (
                <Link className={`intro-image-card ${card.className}`} href={card.href} key={card.title}>
                  <span className="intro-card-meta">
                    <span className="intro-step">{card.step}</span>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <strong>{card.title}</strong>
                  <small>{card.description}</small>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band section-band--tight section-band--services">
        <SectionHeading
          eyebrow={homeServiceSection.eyebrow}
          title={homeServiceSection.title}
          summary={homeServiceSection.summary}
          tags={[...homeServiceSection.tags]}
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
        eyebrow={homeProofSection.eyebrow}
        title={homeProofSection.title}
        summary={homeProofSection.summary}
        achievements={achievements}
      />

      <PortalSection
        eyebrow={homePortalSection.eyebrow}
        title={homePortalSection.title}
        description={homePortalSection.description}
        primaryHref="/permassist"
        primaryLabel="Learn about PermAssist"
        secondaryHref="https://permit.permassist.com.au"
        secondaryLabel="Portal login"
        secondaryExternal
        statusDescription={homePortalSection.statusDescription}
      />

      <section className="home-enquiry-section">
        <div className="home-enquiry-copy">
          <p className="eyebrow">{homeEnquirySection.eyebrow}</p>
          <h2>{homeEnquirySection.title}</h2>
          <p>{homeEnquirySection.summary}</p>
          <div className="home-enquiry-flow" aria-label="Quotation flow">
            {homeEnquirySection.flow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <div className="home-enquiry-actions">
            <Link className="primary-action" href="/contact">
              Prepare quotation enquiry <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="home-enquiry-fineprint">{homeEnquirySection.fineprint}</p>
        </div>
        <div className="home-enquiry-order-panel">
          <div className="home-enquiry-order-intro">
            <span className="home-enquiry-order-kicker">Enquiry checklist</span>
            <strong>{homeEnquirySection.checklistTitle}</strong>
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
