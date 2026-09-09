import type { MetadataRoute } from "next";

const BASE_URL = "https://notioncall.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/notre-service", changeFrequency: "monthly", priority: 0.8 },
    { path: "/appel-decouverte", changeFrequency: "monthly", priority: 0.8 },
    { path: "/a-propos", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
