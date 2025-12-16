/**
 * Utility function to convert HTML string to React elements
 * This is a simple implementation - you may want to use a library like html-react-parser
 */
export function parseHtml(html: string): string {
  // For now, we'll return the HTML string as-is
  // In production, you might want to use html-react-parser or similar
  return html
}

/**
 * Extract text content from HTML
 */
export function extractTextFromHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string, length: number = 155): string {
  const text = extractTextFromHtml(content)
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

/**
 * Check if a page is a service page
 */
export function isServicePage(slug: string): boolean {
  const serviceSlugs = [
    'landscaping-seo',
    'landscaping-ads',
    'landscaping-websites',
  ]
  return serviceSlugs.includes(slug)
}

