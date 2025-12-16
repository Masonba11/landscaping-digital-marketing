import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || ''

if (!endpoint) {
  console.warn('NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL is not set')
}

export const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
})

// Types for WordPress data
export interface WordPressPage {
  id: string
  title: string
  slug: string
  content: string
  seo?: {
    title?: string
    metaDesc?: string
    canonical?: string
  }
  acfFields?: {
    heroHeading?: string
    heroSubheading?: string
    callToActionText?: string
    [key: string]: any
  }
}

export interface WordPressMenu {
  menuItems: {
    nodes: Array<{
      id: string
      label: string
      url: string
      path: string
    }>
  }
}

// GraphQL Queries
export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      id
      title
      slug
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
      }
    }
  }
`

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
`

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
`

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
`

// Helper functions
export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const data = await client.request<{ pageBy: WordPressPage }>(GET_PAGE_BY_SLUG, {
      slug,
    })
    return data.pageBy
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function getAllPages(): Promise<WordPressPage[]> {
  try {
    const data = await client.request<{ pages: { nodes: WordPressPage[] } }>(GET_ALL_PAGES)
    return data.pages.nodes
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

export async function getServicePages(): Promise<WordPressPage[]> {
  try {
    const data = await client.request<{ pages: { nodes: WordPressPage[] } }>(GET_SERVICE_PAGES)
    // Filter to service pages (you can customize this logic)
    const serviceSlugs = [
      'landscaping-seo',
      'landscaping-ads',
      'landscaping-websites',
    ]
    return data.pages.nodes.filter((page) => serviceSlugs.includes(page.slug))
  } catch (error) {
    console.error('Error fetching service pages:', error)
    return []
  }
}

