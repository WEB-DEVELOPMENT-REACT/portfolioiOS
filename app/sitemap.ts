import { MetadataRoute } from "next";

const DEFAULT_SITE_URL = "https://elduverx.com";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/dashboard", priority: 0.9 },
  { path: "/work", priority: 0.9 },
  { path: "/aboutme", priority: 0.8 },
  { path: "/stack", priority: 0.7 },
  { path: "/experience", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
