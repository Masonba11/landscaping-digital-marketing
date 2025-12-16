import { MetadataRoute } from 'next'
import { getAllPages } from '@/lib/wordpress'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://landscapedigitalmarketing.com'
  const baseUrl = siteUrl.replace(/\/$/, '')

  // Get all pages from WordPress
  const pages = await getAllPages()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Service pages - all landscaping digital marketing services
  const servicePages = [
    {
      url: `${baseUrl}/landscaping-digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/landscaping-seo`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/landscaping-ads`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/landscaping-websites`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Dynamic pages from WordPress
  const dynamicPages = pages
    .filter((page) => {
      // Exclude pages that are already in static or service pages
      const excludedSlugs = [
        'home',
        'about',
        'contact',
        'services',
        'landscaping-digital-marketing',
        'landscaping-seo',
        'landscaping-ads',
        'landscaping-websites',
      ]
      return !excludedSlugs.includes(page.slug)
    })
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticPages, ...servicePages, ...dynamicPages]
}

