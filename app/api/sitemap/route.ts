import { MetadataRoute } from "next"

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bournetoclimb.com"

  // Define all pages with their priority and change frequency
  const pages: Array<{
    path: string
    priority: number
    changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  }> = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/services", priority: 0.9, changefreq: "monthly" },
    { path: "/gallery", priority: 0.8, changefreq: "monthly" },
    { path: "/about", priority: 0.7, changefreq: "monthly" },
    { path: "/reviews", priority: 0.8, changefreq: "weekly" },
    { path: "/contact", priority: 0.9, changefreq: "weekly" },
    { path: "/privacy", priority: 0.3, changefreq: "yearly" },
    { path: "/terms", priority: 0.3, changefreq: "yearly" },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`,
    )
    .join("")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
