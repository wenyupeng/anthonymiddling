import type { MetadataRoute } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anthonymiddling.com.au";

export const siteName = "Anthony Middling Building Surveyors";

export const defaultSeoDescription =
  "Building permits, inspections, occupancy permits and swimming pool compliance reports for commercial and residential projects across Victoria.";

export const seoKeywords = [
  "building surveyor Victoria",
  "building permits Victoria",
  "building inspections Victoria",
  "occupancy permits Victoria",
  "swimming pool compliance Victoria",
  "NCC advice Victoria",
  "Box Hill building surveyor"
];

export const publicRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "monthly"
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly"
  },
  {
    path: "/resources",
    priority: 0.75,
    changeFrequency: "monthly"
  },
  {
    path: "/about",
    priority: 0.75,
    changeFrequency: "monthly"
  },
  {
    path: "/permassist",
    priority: 0.7,
    changeFrequency: "monthly"
  },
  {
    path: "/contact",
    priority: 0.85,
    changeFrequency: "monthly"
  }
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
