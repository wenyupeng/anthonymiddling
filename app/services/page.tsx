import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/public/page-hero";
import { QuotationList } from "@/components/public/quotation-list";
import { SectionHeading, InnerPageFlow } from "@/components/public/section-heading";
import {
  PageFeatureServiceCard,
  SecondaryServiceCard
} from "@/components/public/service-cards";
import { SiteHeader } from "@/components/site-header";
import { adviceAreas, quotationItems, services } from "@/lib/site-data";
import { serviceVisuals } from "@/lib/service-visuals";

export default function ServicesPage() {
  const primaryServices = services.slice(0, 3);
  const secondaryServices = services.slice(3);

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Permit services for each project stage."
        description="Start with the right approval, inspection or compliance pathway before documentation slows the project down."
        variant="services"
      />

      <InnerPageFlow>
        <section className="section-band section-band--tight">
          <SectionHeading
            eyebrow="Core service path"
            title="Choose the service that matches the next approval step."
            summary="The main services cover assessment, inspections and certification for commercial and residential work across Victoria."
          />

          <div className="page-media-grid page-media-grid--services">
            {primaryServices.map((service, index) => (
              <PageFeatureServiceCard
                key={service.title}
                service={service}
                index={index}
                visual={serviceVisuals[index]}
                priority={index === 0}
              />
            ))}
          </div>

          <div
            className="secondary-service-list secondary-service-list--visual"
            aria-label="Additional services"
          >
            {secondaryServices.map((service, index) => (
              <SecondaryServiceCard
                key={service.title}
                service={service}
                visual={serviceVisuals[index + primaryServices.length]}
              />
            ))}
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
          <QuotationList
            ariaLabel="Quotation preparation items"
            items={quotationItems}
            variant="services"
          />
        </section>
      </InnerPageFlow>
    </main>
  );
}
