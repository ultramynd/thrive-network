import type { MetadataRoute } from "next";
import { blogPosts, services, site, teamMembers } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/what-we-do",
    "/about",
    "/team",
    "/insights",
    "/contact",
    "/book-consultation",
    "/get-help",
    "/assessment",
    "/privacy-policy",
    "/terms",
    "/accessibility",
    ...services.map((service) => `/${service.slug}`),
    ...teamMembers.map((member) => `/team/${member.slug}`),
    ...blogPosts.map((post) => `/insights/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
