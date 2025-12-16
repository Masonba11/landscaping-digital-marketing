const siteName = "Landscaping Digital Marketing";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://landscapingdigitalmarketing.com";

export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  "@id"?: string;
  name: string;
  url: string;
  logo?: string | { "@type": string; url: string };
  image?: string;
  description: string;
  address: {
    "@type": string;
    addressCountry: string;
  };
  telephone?: string;
  priceRange?: string;
  areaServed: {
    "@type": string;
    name: string;
  };
  sameAs?: string[];
}

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  "@id"?: string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    "@id"?: string;
    name: string;
    url: string;
    logo?: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  };
  serviceType: string;
  url: string;
  offers?: {
    "@type": string;
    priceCurrency: string;
    availability: string;
  };
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/LDMLOGO.png`,
    },
    image: `${siteUrl}/LDMLOGO.png`,
    description:
      "Professional digital marketing services for landscaping companies. We help landscaping companies grow their business with proven digital marketing strategies including SEO, Google Ads, and website development.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [],
  };
}

/**
 * Generate Service schema for a specific service
 */
export function generateServiceSchemaForService(
  name: string,
  slug: string,
  description: string
): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${slug}#service`,
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/LDMLOGO.png`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: name,
    url: `${siteUrl}/${slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Generate all Service schemas for the business
 */
export function generateAllServiceSchemas(): ServiceSchema[] {
  return [
    generateServiceSchemaForService(
      "Digital Marketing Services",
      "landscaping-digital-marketing",
      "Complete digital marketing solutions that combine SEO, paid advertising, and website optimization to generate leads year-round for landscaping companies."
    ),
    generateServiceSchemaForService(
      "Landscaping SEO",
      "landscaping-seo",
      "Get found on Google when homeowners search for landscaping services. Long-term visibility that generates free traffic month after month."
    ),
    generateServiceSchemaForService(
      "Landscaping Google Ads",
      "landscaping-ads",
      "Drive immediate leads with targeted Google Ads campaigns. Start getting phone calls within days of launch."
    ),
    generateServiceSchemaForService(
      "Landscaping Website Development",
      "landscaping-websites",
      "Professional websites that showcase your work, load fast, and convert visitors into customers. Mobile-responsive and SEO-optimized."
    ),
  ];
}

/**
 * Generate combined schema with LocalBusiness and all Service schemas
 * Returns an array suitable for JSON-LD output
 */
export function generateCombinedSchema(): Array<
  LocalBusinessSchema | ServiceSchema
> {
  return [generateLocalBusinessSchema(), ...generateAllServiceSchemas()];
}

export function generateServiceSchema(page: {
  id: string;
  title: string;
  slug: string;
  uri?: string;
  content?: string;
  seo?: {
    title?: string;
    metaDesc?: string;
    canonical?: string;
  };
}): ServiceSchema {
  const description = page.content
    ? page.content.replace(/<[^>]*>/g, "").substring(0, 200) + "..."
    : page.seo?.metaDesc ||
      `Professional ${page.title} services for landscaping companies.`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${page.slug}#service`,
    name: page.title,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/LDMLOGO.png`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: page.title,
    url: `${siteUrl}/${page.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateBreadcrumbSchema(
  paths: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: paths.map((path, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: path.name,
      item: path.url,
    })),
  };
}
