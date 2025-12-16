import { WordPressPage } from './wordpress'

const siteName = 'Landscape Digital Marketing'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://landscapedigitalmarketing.com'

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  '@id'?: string
  name: string
  url: string
  logo?: string | { '@type': string; url: string }
  image?: string
  description: string
  address: {
    '@type': string
    addressCountry: string
  }
  telephone?: string
  priceRange: string
  areaServed: {
    '@type': string
    name: string
  }
  serviceType: string
  sameAs?: string[]
  hasOfferCatalog: {
    '@type': string
    name: string
    itemListElement: Array<{
      '@type': string
      itemOffered: {
        '@type': string
        name: string
        url: string
        description?: string
      }
    }>
  }
}

export interface ServiceSchema {
  '@context': string
  '@type': string
  '@id'?: string
  name: string
  description: string
  provider: {
    '@type': string
    '@id'?: string
    name: string
    url: string
    logo?: string
  }
  areaServed: {
    '@type': string
    name: string
  }
  serviceType: string
  url: string
  offers?: {
    '@type': string
    priceCurrency: string
    availability: string
  }
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/LDMLOGO.png`,
    },
    image: `${siteUrl}/LDMLOGO.png`,
    description: 'Professional digital marketing services for landscaping companies. We help landscaping companies grow their business with proven digital marketing strategies including SEO, Google Ads, and website development.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: 'Digital Marketing Services',
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscaping SEO',
            url: `${siteUrl}/landscaping-seo`,
            description: 'Get found on Google when homeowners search for landscaping services. Long-term visibility that generates free traffic month after month.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscaping Ads',
            url: `${siteUrl}/landscaping-ads`,
            description: 'Drive immediate leads with targeted Google Ads campaigns. Start getting phone calls within days of launch.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscaping Websites',
            url: `${siteUrl}/landscaping-websites`,
            description: 'Professional websites that showcase your work, load fast, and convert visitors into customers. Mobile-responsive and SEO-optimized.',
          },
        },
      ],
    },
  }
}

export function generateServiceSchema(page: WordPressPage): ServiceSchema {
  const description = page.content
    ? page.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
    : page.seo?.metaDesc || `Professional ${page.title} services for landscaping companies.`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/${page.slug}#service`,
    name: page.title,
    description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/LDMLOGO.png`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: page.title,
    url: `${siteUrl}/${page.slug}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function generateBreadcrumbSchema(paths: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: paths.map((path, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: path.name,
      item: path.url,
    })),
  }
}




