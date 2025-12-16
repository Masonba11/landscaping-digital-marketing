import { Metadata } from 'next'
import Link from 'next/link'
import { getPageBySlug, getServicePages } from '@/lib/wordpress'
import { generatePageMetadata } from '@/lib/seo'
import { getServiceDisplayName } from '@/lib/service-names'
import ContentRenderer from '@/components/ContentRenderer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceCTA from '@/components/ServiceCTA'
import CaseStudy from '@/components/CaseStudy'
import HeroVideo from '@/components/HeroVideo'
import ContactFormSimple from '@/components/ContactFormSimple'
import H1CTAs from '@/components/H1CTAs'

export const metadata: Metadata = generatePageMetadata(
  await getPageBySlug('services'),
  'Landscaping Digital Marketing Services'
)

export default async function ServicesPage() {
  const page = await getPageBySlug('services')
  const servicePages = await getServicePages()

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]

  return (
    <>
      {page?.acfFields?.heroHeading && (
        <HeroVideo 
          heading={page.acfFields.heroHeading} 
          subheading={page.acfFields.heroSubheading} 
        />
      )}

      <div className="container">
        <div className="content">
          {!page?.acfFields?.heroHeading && (
            <>
              <h1>{page?.title || 'Landscaping Digital Marketing Services'}</h1>
              <H1CTAs />
            </>
          )}
          
          {page?.content ? (
            <ContentRenderer content={page.content} />
          ) : (
            <>
              <p>
                We help landscaping companies grow their business with proven digital marketing
                strategies. Our services are designed specifically for the landscaping industry—we
                understand your seasonal cycles, your local competition, and what makes customers
                choose one landscaper over another.
              </p>

              <h2>Our Services</h2>

              <div className="service-grid">
                {servicePages.map((service) => {
                  const displayName = getServiceDisplayName(service.slug)
                  return (
                    <div key={service.id} className="service-card">
                      <h3>{displayName}</h3>
                      <p>{service.acfFields?.heroSubheading || 'Professional landscaping services.'}</p>
                      <Link href={`/${service.slug}`}>Learn More →</Link>
                    </div>
                  )
                })}
              </div>

              <h2>Why Choose Us?</h2>

              <p>
                Most marketing agencies work with dozens of industries. We focus exclusively on
                landscaping companies. This specialization means we understand your business, your
                customers, and what actually works to generate leads and book jobs.
              </p>

              <ul className="benefits-list">
                <li>
                  <strong>Industry expertise:</strong> We&apos;ve tested what works for landscapers and
                  what doesn&apos;t
                </li>
                <li>
                  <strong>Proven results:</strong> Our clients see increased leads, more phone calls,
                  and booked jobs
                </li>
                <li>
                  <strong>Full transparency:</strong> You&apos;ll know exactly what we&apos;re doing and how
                  it&apos;s performing
                </li>
                <li>
                  <strong>Landscaping-focused:</strong> Every strategy is tailored to your industry,
                  not generic business advice
                </li>
              </ul>
            </>
          )}
        </div>
      </div>

      <CaseStudy />

      <div id="contact-form" className="container">
        <div className="content">
          <h2>Get Started Today</h2>
          <p>Ready to grow your landscaping business? Fill out the form below and we will get back to you soon.</p>
          <ContactFormSimple />
        </div>
      </div>
    </>
  )
}

