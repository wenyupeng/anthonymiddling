import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { achievements, audienceGroups, contactDetails } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero page-hero-about">
        <div className="page-hero-content">
          <p className="eyebrow">About us</p>
          <h1>Independent surveying support for practical approvals.</h1>
          <p>
            Practical permit, inspection and NCC advice for commercial and
            residential projects across Victoria.
          </p>
        </div>
      </section>

      <div className="inner-page-flow">
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

        <section className="proof-section proof-section--compact">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Practical knowledge for approval decisions.</h2>
          </div>
          <div className="compact-proof-grid">
            {achievements.map((item) => (
              <div className="proof-item" key={item.label}>
                <BadgeCheck size={20} aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="credential-section credential-section--stacked">
          <div className="credential-card">
            <CheckCircle2 size={22} aria-hidden="true" />
            <span>Registration</span>
            <strong>{contactDetails.registration}</strong>
          </div>
          <div className="credential-card">
            <CheckCircle2 size={22} aria-hidden="true" />
            <span>Qualification</span>
            <strong>{contactDetails.qualification}</strong>
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
      </div>
    </main>
  );
}