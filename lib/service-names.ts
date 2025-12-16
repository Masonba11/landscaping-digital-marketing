/**
 * Service name mappings - display names vs slugs
 */

export const SERVICE_NAMES: Record<string, { display: string; full: string }> = {
  'landscaping-seo': {
    display: 'SEO',
    full: 'Landscaping SEO',
  },
  'landscaping-ads': {
    display: 'Paid Advertising',
    full: 'Landscaping Ads',
  },
  'landscaping-websites': {
    display: 'Website Development',
    full: 'Landscaping Websites',
  },
}

export function getServiceDisplayName(slug: string): string {
  return SERVICE_NAMES[slug]?.display || slug
}

export function getServiceFullName(slug: string): string {
  return SERVICE_NAMES[slug]?.full || slug
}




