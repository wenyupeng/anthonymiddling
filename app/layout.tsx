import type { Metadata } from "next";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Middling Building Surveyors",
  description:
    "Building permits, certification, inspections and swimming pool compliance reports for commercial and residential projects."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
