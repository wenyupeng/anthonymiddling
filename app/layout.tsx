import type { Metadata } from "next";
import { BackToTop } from "@/components/back-to-top";
import { contactDetails, services } from "@/lib/site-data";
import {
  absoluteUrl,
  defaultSeoDescription,
  seoKeywords,
  siteName,
  siteUrl
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Building Permits, Inspections and Compliance`,
    template: `%s | ${siteName}`
  },
  description: defaultSeoDescription,
  keywords: seoKeywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName,
    title: `${siteName} | Building Permits, Inspections and Compliance`,
    description: defaultSeoDescription,
    images: [
      {
        url: "/images/service-permits-v2.png",
        alt: "Building permit documents and architectural plans"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Building Permits, Inspections and Compliance`,
    description: defaultSeoDescription,
    images: ["/images/service-permits-v2.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: contactDetails.companyName,
    legalName: contactDetails.companyName,
    url: siteUrl,
    telephone: contactDetails.phone,
    email: contactDetails.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "SPACES - Office 1107, 1 Main Street",
      addressLocality: "Box Hill",
      addressRegion: "VIC",
      postalCode: "3128",
      addressCountry: "AU"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Victoria"
    },
    description: defaultSeoDescription,
    serviceType: services.map((service) => service.title)
  };

  return (
    <html lang="en">
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
