import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { adviceAreas, quotationItems, services } from "@/lib/site-data";

const serviceVisuals = [
  {
    alt: "Architectural drawings and permit documents prepared for assessment",
    image: "/images/service-permits-v2.png"
  },
  {
    alt: "Building inspection checklist with drawings and construction tools",
    image: "/images/service-inspections-v2.png"
  },
  {
    alt: "Occupancy permit review workspace with plans and measuring tools",
    image: "/images/service-occupancy-v2.png"
  },
  {
    alt: "Swimming pool barrier compliance workspace with plans and safety checklist",
    image: "/images/service-pool-compliance-v2.png"
  },
  {
    alt: "Pre-design advice workspace with concept plans and building code review materials",
    image: "/images/service-pre-design-v2.png"
  },
  {
    alt: "Council consultation workspace with planning documents and approval pathway notes",
    image: "/images/service-council-consultation-v2.png"
  }
];

export default function ServicesPage() {
  const primaryServices = services.slice(0, 3);
  const secondaryServices = services.slice(3);

  return (
    <main>
      <SiteHeader />
      <section className="page-hero page-hero-services">
        <div className="page-hero-content">
          <p className="eyebrow">Services</p>
          <h1>Permit services for each project stage.</h1>
          <p>
            Start with the right approval, inspection or compliance pathway
            before documentation slows the project down.
          </p>
        </div>
      </section>

      <div className="inner-page-flow">
        <section className="section-band section-band--tight">
          <div className="section-heading section-heading--compact">
            <div className="section-heading-copy">
              <p className="eyebrow">Core service path</p>
              <h2>Choose the service that matches the next approval step.</h2>
            </div>
            <div className="section-heading-aside">
              <p className="section-heading-summary">
                The main services cover assessment, inspections and certification
                for commercial and residential work across Victoria.
              </p>
            </div>
          </div>
  
          <div className="page-media-grid page-media-grid--services">
            {primaryServices.map((service, index) => (
              <article className="page-feature-card" key={service.title}>
                <div className="page-feature-media">
                  <Image
                    alt={serviceVisuals[index].alt}
                    className="page-feature-image"
                    fill
                    priority={index === 0}
                    sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    src={serviceVisuals[index].image}
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="page-feature-body">
                  <service.icon size={23} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
  
          <div
            className="secondary-service-list secondary-service-list--visual"
            aria-label="Additional services"
          >
            {secondaryServices.map((service, index) => {
              const visual = serviceVisuals[index + primaryServices.length];

              return (
                <article
                  className="secondary-service-item secondary-service-item--visual"
                  key={service.title}
                >
                  <div className="secondary-service-media">
                    <Image
                      alt={visual.alt}
                      className="secondary-service-image"
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
                      src={visual.image}
                    />
                  </div>
                  <div className="secondary-service-body">
                    <service.icon size={20} aria-hidden="true" />
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
  
        <section className="advice-section">
          <div className="advice-panel">
            <p className="eyebrow">Technical advice</p>
            <h2>Resolve code questions before plans become expensive to change.</h2>
            <p>
              Get clear direction on the parts of the NCC, accessibility,
              energy design and alternative solutions that affect approvals.
            </p>
          </div>
          <div className="advice-list">
            {adviceAreas.map((area) => (
              <div className="advice-item" key={area}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>
  
        <section className="services-next-step">
          <div className="services-next-copy">
            <p className="eyebrow">Next step</p>
            <h2>Send the right details once, then we can review the pathway.</h2>
            <p>
              Prepare the core project information before requesting a quotation
              so the first response can be specific.
            </p>
            <Link className="primary-action" href="/contact#quotation">
              Open quotation checklist <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="services-next-panel" aria-label="Quotation preparation items">
            {quotationItems.map((item, index) => (
              <div className="services-next-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
