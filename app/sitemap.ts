import { MetadataRoute } from "next";
import { services } from "@/utils/constants";

// 1. Define your base URL (change this to your real domain)
const BASE_URL = "https://primehealthcentre.co.zw";

export default function sitemap(): MetadataRoute.Sitemap {
  // 2. List of your static pages
  const staticRoutes = [
    "", // Home
    "/about", // About
    "/contact", // Contact
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8, // Home is highest priority
  }));

  // 3. List of your services (matches the array we created for the Header)

  const serviceRoutes = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9, // Services are high priority
  }));

  // 4. Combine them into one array
  return [...staticRoutes, ...serviceRoutes];
}
