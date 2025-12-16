interface ContentRendererProps {
  content: string
}

/**
 * Renders HTML content from WordPress
 * In production, you might want to use a library like html-react-parser
 * or sanitize the HTML for security
 */
export default function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}




