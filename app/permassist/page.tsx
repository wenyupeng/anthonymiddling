import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/public/page-hero";
import { PortalSection } from "@/components/public/portal-section";
import { InnerPageFlow } from "@/components/public/section-heading";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "PermAssist Online Building Permit Portal",
  description:
    "Use PermAssist to upload documents, track building permit application progress and keep approval communication organised.",
  alternates: {
    canonical: "/permassist"
  },
  openGraph: {
    title: "PermAssist Online Building Permit Portal",
    description:
      "Online permit administration for document upload, application progress and approval tasks.",
    url: "/permassist"
  }
};

export default function PermAssistPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="PermAssist"
        title="Online permit work without scattered documents."
        description="Lodge documents, track application status and keep approval communication in one practical workspace."
        variant="permassist"
      >
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
      </PageHero>

      <InnerPageFlow>
        <PortalSection
          eyebrow="Portal workflow"
          title="Keep the approval workflow visible from lodgement to response."
          description="PermAssist supports the administration around permit work: document upload, status tracking, critical alerts and direct technical communication by email or phone."
          primaryHref="https://permit.permassist.com.au"
          primaryLabel="Login to PermAssist"
          primaryExternal
          secondaryHref="/contact#quotation"
          secondaryLabel="Quotation checklist"
          secondaryIcon="arrow"
          statusDescription="Upload documents, monitor progress and respond to approval tasks."
        />
      </InnerPageFlow>
    </main>
  );
}
