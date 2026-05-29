import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sm-stratagem.com";
  return [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/insights",
    "/contact"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}
