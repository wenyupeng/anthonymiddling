import type { Metadata } from "next";
import { ArrowRight, ClipboardList, Download, FileText } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/public/page-hero";
import { InnerPageFlow } from "@/components/public/section-heading";
import { SiteHeader } from "@/components/site-header";

const resourceFiles = [
  {
    title: "Form 1 Building Permit Application Owner Builder",
    label: "Form 1",
    description: "Building permit application form for owner builder projects.",
    href: "/files/Template%20-%20Form%201%20BP%20Application%20Owner%20Builder.pdf"
  },
  {
    title: "Form 1 Building Permit Application Fixed Price and Cost Plus",
    label: "Form 1",
    description: "Building permit application form for fixed price and cost plus contracts.",
    href: "/files/Template%20-%20Form%201%20BP%20Application%20Fixed%20Price%20and%20Cost%20Plus.pdf"
  },
  {
    title: "Form 7 - Protection Works Notice",
    label: "Form 7",
    description: "Notice document for protection works affecting adjoining property.",
    href: "/files/form-7-protection-works-notice.pdf"
  },
  {
    title: "Form 8 - Protection Works Response",
    label: "Form 8",
    description: "Response document for protection works notices.",
    href: "/files/form-8-protection-works-response.pdf"
  },
  {
    title: "Form 15 - Occupancy Permit Application",
    label: "Form 15",
    description: "Occupancy permit application form.",
    href: "/files/form-15-occupancy-permit-application.pdf"
  },
  {
    title: "Protection Work Statement",
    label: "Statement",
    description: "Supporting statement for protection work requirements.",
    href: "/files/protection-work-statement.pdf"
  }
];

export const metadata: Metadata = {
  title: "Building Permit Forms and Protection Works Resources",
  description:
    "Download building permit application forms, protection works notices, occupancy permit forms and supporting resources for Victorian projects.",
  alternates: {
    canonical: "/resources"
  },
  openGraph: {
    title: "Building Permit Forms and Protection Works Resources",
    description:
      "Download commonly requested permit, occupancy and protection works forms.",
    url: "/resources"
  }
};

export default function ResourcesPage() {
  const resourcesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: resourceFiles.map((file, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "DigitalDocument",
        name: file.title,
        description: file.description,
        encodingFormat: "application/pdf",
        url: file.href
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesJsonLd) }}
      />
      <SiteHeader />
      <PageHero
        eyebrow="Resources"
        title="Building permit and protection works forms."
        description="Download the forms commonly needed for permit applications, occupancy permits and protection works responses."
        variant="resources"
      />

      <InnerPageFlow>
        <section className="resources-section resources-section--library" aria-labelledby="resources-title">
          <div className="resources-intro resources-intro--stacked">
            <div>
              <p className="eyebrow">Document library</p>
              <h2 id="resources-title">Download the file you need.</h2>
            </div>
            <p>
              Forms are grouped as a compact list so the title, purpose and download action stay
              together. Each button opens the matching PDF from this website.
            </p>
          </div>

          <div className="resource-file-list">
            {resourceFiles.map((file) => (
              <article className="resource-file-row" key={file.title}>
                <div className="resource-file-icon" aria-hidden="true">
                  <FileText size={22} />
                </div>
                <div className="resource-file-copy">
                  <span>{file.label}</span>
                  <h3>{file.title}</h3>
                  <p>{file.description}</p>
                </div>
                <a
                  className="resource-download-button"
                  href={file.href}
                  download
                  aria-label={`Download ${file.title}`}
                >
                  Download <Download size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="resources-next-step resources-next-step--compact" aria-labelledby="resources-next-title">
          <div className="resources-next-copy">
            <p className="eyebrow">Project support</p>
            <h2 id="resources-next-title">Need help choosing the right form?</h2>
            <p>
              Send the project address, owner details, plans and a brief scope so the permit
              pathway can be reviewed before documents are lodged.
            </p>
          </div>
          <Link className="primary-action" href="/contact#quotation">
            Prepare quotation enquiry <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <div className="resources-next-note">
            <ClipboardList size={20} aria-hidden="true" />
            <span>Include engineering, architectural plans and the estimated construction cost where available.</span>
          </div>
        </section>
      </InnerPageFlow>
    </main>
  );
}
