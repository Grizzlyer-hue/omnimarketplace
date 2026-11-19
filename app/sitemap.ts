import type { MetadataRoute } from "next";
import { SERVICE_PATHS } from "@/lib/site";

const BASE = "https://omnimarketplace.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...Object.values(SERVICE_PATHS).map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
