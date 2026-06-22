import Image from "next/image";
import { PageHero } from "@/components/public/page-hero";
import { CredentialSection, ProofSection } from "@/components/public/proof-section";
import { InnerPageFlow } from "@/components/public/section-heading";
import { SiteHeader } from "@/components/site-header";
import { achievements, audienceGroups, contactDetails } from "@/lib/site-data";

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
        <section className="split-section page-section-card">
          <div className="page-copy-block">
            <p className="eyebrow">Approach</p>
            <h2>Timely advice with thorough NCC assessment.</h2>
            <p>
              We understand that council delays and documentation issues can affect
              project timelines. Plans and documents are checked thoroughly and
              approved in accordance with the National Construction Code.
            </p>
          </div>
          <div className="page-support-panel">
            <div className="page-support-image">
              <Image
                alt="Building assessment workspace with plans and inspection notes"
                fill
                sizes="(max-width: 1080px) 100vw, 42vw"
                src="/images/about-assessment-v2.png"
              />
            </div>
            <p>
              The service supports the people responsible for getting projects
              documented, approved and inspected without unnecessary friction.
            </p>
            <div className="audience-strip" aria-label="Who we work with">
              {audienceGroups.map((group) => (
                <span key={group}>{group}</span>
              ))}
            </div>
          </div>
        </section>

        <ProofSection
          eyebrow="Experience"
          title="Practical knowledge for approval decisions."
          achievements={achievements}
          compact
        />

        <CredentialSection
          registration={contactDetails.registration}
          qualification={contactDetails.qualification}
        />
      </InnerPageFlow>
    </main>
  );
}
