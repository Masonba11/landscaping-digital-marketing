import { GraphQLClient } from "graphql-request";

// Support both WP_GRAPHQL_URL and NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL for backward compatibility
const endpoint =
  process.env.WP_GRAPHQL_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
  "";

if (!endpoint) {
  console.warn(
    "WP_GRAPHQL_URL or NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL is not set"
  );
}

export const client = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
});

// Types for WordPress data
export interface WordPressPage {
  id: string;
  title: string;
  slug: string;
  uri: string;
  content: string;
  seo?: {
    title?: string;
    metaDesc?: string;
    canonical?: string;
  };
  acfFields?: {
    // Legacy fields (for backward compatibility)
    heroHeading?: string;
    heroSubheading?: string;
    callToActionText?: string;
    // New ACF fields from "Page Content" field group
    pageHeadline?: string;
    pageBody?: string;
    seoTitle?: string;
    metaDescription?: string;
    [key: string]: any;
  };
}

export interface WordPressMenu {
  menuItems: {
    nodes: Array<{
      id: string;
      label: string;
      url: string;
      path: string;
    }>;
  };
}

// GraphQL Queries
export const GET_PAGE_BY_URI = `
  query GetPageByUri($uri: String!) {
    pageBy(uri: $uri) {
      id
      title
      slug
      uri
      content
      seo {
        title
        metaDesc
        canonical
      }
      acfFields {
        # Legacy fields (for backward compatibility)
        heroHeading
        heroSubheading
        callToActionText
        # New ACF fields from "Page Content" field group
        pageHeadline
        pageBody
        seoTitle
        metaDescription
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      id
      title
      slug
      uri
      content
      seo {
        title
        metaDesc
        canonical
      }
      acfFields {
        heroHeading
        heroSubheading
        callToActionText
        pageHeadline
        pageBody
        seoTitle
        metaDescription
      }
    }
  }
`;

export const GET_ALL_PAGES = `
  query GetAllPages {
    pages(first: 100) {
      nodes {
        id
        title
        slug
        content
        seo {
          title
          metaDesc
        }
        acfFields {
          heroHeading
          heroSubheading
        }
      }
    }
  }
`;

export const GET_SERVICE_PAGES = `
  query GetServicePages {
    pages(first: 100, where: {parent: 0}) {
      nodes {
        id
        title
        slug
        content
        seo {
          title
          metaDesc
        }
        acfFields {
          heroHeading
          heroSubheading
          callToActionText
        }
      }
    }
  }
`;

export const GET_MENU = `
  query GetMenu($location: MenuLocationEnum!) {
    menuItems(where: {location: $location}) {
      nodes {
        id
        label
        url
        path
      }
    }
  }
`;

// Helper functions
/**
 * Fetch a page by URI (e.g., "home", "about", "landscaping-seo")
 * This is the preferred method for fetching pages as it matches WordPress routing
 */
export async function getPageByUri(uri: string): Promise<WordPressPage | null> {
  // Normalize URI: remove leading/trailing slashes, handle empty string
  const normalizedUri = uri.trim().replace(/^\/+|\/+$/g, "") || "home";

  // If endpoint is not configured, return null gracefully
  if (!endpoint) {
    return null;
  }

  try {
    const data = await client.request<{ pageBy: WordPressPage | null }>(
      GET_PAGE_BY_URI,
      {
        uri: normalizedUri,
      }
    );
    return data.pageBy;
  } catch (error) {
    // Log error but don't crash - fail gracefully
    console.error(`Error fetching page with URI "${normalizedUri}":`, error);
    return null;
  }
}

/**
 * Fetch a page by slug (for backward compatibility)
 */
export async function getPageBySlug(
  slug: string
): Promise<WordPressPage | null> {
  if (!endpoint) {
    return null;
  }

  try {
    const data = await client.request<{ pageBy: WordPressPage | null }>(
      GET_PAGE_BY_SLUG,
      {
        slug,
      }
    );
    return data.pageBy;
  } catch (error) {
    console.error(`Error fetching page with slug "${slug}":`, error);
    return null;
  }
}

export async function getAllPages(): Promise<WordPressPage[]> {
  try {
    const data = await client.request<{ pages: { nodes: WordPressPage[] } }>(
      GET_ALL_PAGES
    );
    return data.pages.nodes;
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

export async function getServicePages(): Promise<WordPressPage[]> {
  try {
    const data = await client.request<{ pages: { nodes: WordPressPage[] } }>(
      GET_SERVICE_PAGES
    );
    // Filter to service pages (you can customize this logic)
    const serviceSlugs = [
      "landscaping-seo",
      "landscaping-ads",
      "landscaping-websites",
    ];
    return data.pages.nodes.filter((page) => serviceSlugs.includes(page.slug));
  } catch (error) {
    console.error("Error fetching service pages:", error);
    return [];
  }
}
