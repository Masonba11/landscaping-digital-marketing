import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageBySlug, getAllPages } from '@/lib/wordpress'
import { generatePageMetadata } from '@/lib/seo'
import { generateServiceSchema } from '@/lib/schema'
import { isServicePage } from '@/lib/utils'
import { getServiceFallbackContent } from '@/lib/service-content'
import ContentRenderer from '@/components/ContentRenderer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceCTA from '@/components/ServiceCTA'
import CaseStudy from '@/components/CaseStudy'
import HeroVideo from '@/components/HeroVideo'
import ContactFormSimple from '@/components/ContactFormSimple'
import ContactFormWebsites from '@/components/ContactFormWebsites'
import H1CTAs from '@/components/H1CTAs'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all pages at build time
export async function generateStaticParams() {
  const pages = await getAllPages()
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isService = isServicePage(params.slug)
  const fallbackContent = isService ? getServiceFallbackContent(params.slug) : null
  
  let page = await getPageBySlug(params.slug)
  
  // If no WordPress page but we have fallback content, use it for metadata
  if (!page && fallbackContent) {
    page = {
      id: params.slug,
      title: fallbackContent.title,
      slug: params.slug,
      content: fallbackContent.content,
      seo: {
        title: fallbackContent.title,
        metaDesc: fallbackContent.heroSubheading,
      },
      acfFields: {
        heroHeading: fallbackContent.heroHeading,
        heroSubheading: fallbackContent.heroSubheading,
      },
    }
  }
  
  // If page exists but no SEO title, use fallback if available
  if (page && !page.seo?.title && fallbackContent) {
    page.seo = {
      ...page.seo,
      title: fallbackContent.title,
    }
  }
  
  return generatePageMetadata(page)
}

export default async function DynamicPage({ params }: PageProps) {
  const isService = isServicePage(params.slug)
  
  // Get fallback content for service pages if WordPress doesn't have content
  const fallbackContent = isService ? getServiceFallbackContent(params.slug) : null
  
  let page = await getPageBySlug(params.slug)
  
  // If no WordPress page but we have fallback content, use it
  if (!page && fallbackContent) {
    // Create a mock page object from fallback content
    page = {
      id: params.slug,
      title: fallbackContent.title,
      slug: params.slug,
      content: fallbackContent.content,
      seo: {
        title: fallbackContent.title,
        metaDesc: `${fallbackContent.heroSubheading}`,
      },
      acfFields: {
        heroHeading: fallbackContent.heroHeading,
        heroSubheading: fallbackContent.heroSubheading,
        callToActionText: 'Ready to Grow Your Landscaping Business?',
      },
    }
  }

  if (!page) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://landscapedigitalmarketing.com'

  // Use fallback content if WordPress content is empty
  const displayTitle = page.title || fallbackContent?.h1 || fallbackContent?.title || 'Page'
  const displayContent = page.content || fallbackContent?.content || ''
  const heroHeading = page.acfFields?.heroHeading || fallbackContent?.heroHeading || displayTitle
  const heroSubheading = page.acfFields?.heroSubheading || fallbackContent?.heroSubheading || ''

  // Generate breadcrumbs
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: displayTitle, url: `/${params.slug}` },
  ]

  // Generate service schema if this is a service page
  let serviceSchema = null
  if (isService && page) {
    serviceSchema = generateServiceSchema(page)
  }

  // Get CTA text from ACF or use defaults
  const ctaHeading = page.acfFields?.callToActionText
    ? page.acfFields.callToActionText
    : 'Ready to Grow Your Landscaping Business?'
  const ctaDescription = heroSubheading || undefined

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      {heroHeading && (
        <HeroVideo heading={heroHeading} subheading={heroSubheading} />
      )}

      <div className="container">
        <div className={`content ${isService ? 'service-content' : ''}`}>
          {!heroHeading && (
            <>
              <h1>{displayTitle}</h1>
              <H1CTAs />
            </>
          )}
          <ContentRenderer content={displayContent} />
        </div>
      </div>

      {isService && <CaseStudy />}

      {!isService && <CaseStudy />}

      <div id="contact-form" className="container">
        <div className="content">
          <h2>Get Started Today</h2>
          <p>Ready to grow your landscaping business? Fill out the form below and we will get back to you soon.</p>
          {params.slug === 'landscaping-websites' ? (
            <ContactFormWebsites />
          ) : (
            <ContactFormSimple />
          )}
        </div>
      </div>

      {isService && fallbackContent?.faqs && (
        <div className="container">
          <div className="content service-content">
            <div className="faq-section" style={{ marginTop: '3rem' }}>
              <h2>Frequently Asked Questions</h2>
              {fallbackContent.faqs.map((faq, index) => (
                <div key={index} className="faq-item" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(0, 102, 255, 0.05)', borderRadius: '12px' }}>
                  <h3 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>{faq.question}</h3>
                  <p style={{ lineHeight: '1.8', color: 'var(--dark-gray)' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

