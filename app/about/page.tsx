import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, FileSearch, Handshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/public/page-hero";
import { CredentialSection, ProofSection } from "@/components/public/proof-section";
import { InnerPageFlow } from "@/components/public/section-heading";
import { SiteHeader } from "@/components/site-header";
import { achievements, audienceGroups, contactDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Anthony Middling Building Surveyors",
  description:
    "Learn about Anthony Middling Building Surveyors, an independent Victorian building surveying service for permits, inspections and NCC compliance advice.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Anthony Middling Building Surveyors",
    description:
      "Independent building surveying support backed by technical assessment and practical construction knowledge.",
    url: "/about"
  }
};

const approachItems = [
  {
    title: "Early risk review",
    description: "Map the permit pathway, likely approval risks and required documents before the project loses time.",
    icon: FileSearch
  },
  {
    title: "NCC assessment",
    description: "Review drawings and supporting material against the National Construction Code with practical building knowledge.",
    icon: ClipboardCheck
  },
  {
    title: "Clear coordination",
    description: "Keep owners, designers, builders and consultants aligned with direct advice and practical next steps.",
    icon: Handshake
  }
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="About us"
        title="Independent surveying support for practical approvals."
        description="Practical permit, inspection and NCC advice for commercial and residential projects across Victoria."
        variant="about"
      />

      <InnerPageFlow>
        <section className="split-section page-section-card about-approach-section">
          <div className="page-copy-block about-approach-copy">
            <p className="eyebrow">Approach</p>
            <h2>A structured approval pathway, backed by practical building knowledge.</h2>
            <p className="approach-lede">
              Anthony Middling Building Surveyors helps project teams identify documentation gaps,
              resolve technical questions and move through assessment with clear NCC guidance.
            </p>
            <div className="approach-highlight-grid" aria-label="Approach highlights">
              {approachItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="approach-highlight-card" key={item.title}>
                    <span className="approach-step-index">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={20} aria-hidden="true" />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="page-support-panel about-support-panel">
            <div className="page-support-image about-support-image">
              <Image
                alt="Building assessment workspace with plans and inspection notes"
                fill
                sizes="(max-width: 1080px) 100vw, 42vw"
                src="/images/about-assessment-v2.png"
              />
            </div>
            <div className="about-support-note">
              <ShieldCheck size={20} aria-hidden="true" />
              <p>
                Built for the people responsible for getting projects documented,
                approved and inspected with fewer avoidable delays.
              </p>
            </div>
            <div className="audience-strip" aria-label="Who we work with">
              {audienceGroups.map((group) => (
                <span key={group}>{group}</span>
              ))}
            </div>
          </div>
        </section>

        <ProofSection
          eyebrow="Experience"
          title="Experience that connects technical assessment with construction reality."
          summary="A building surveying service shaped by long-term industry experience, NCC assessment, trade knowledge and direct communication with project teams."
          achievements={achievements}
          compact
        />

        <CredentialSection
          companyName={contactDetails.companyName}
          acn={contactDetails.acn}
          registration={contactDetails.registration}
          qualification={contactDetails.qualification}
        />
      </InnerPageFlow>
    </main>
  );
}
