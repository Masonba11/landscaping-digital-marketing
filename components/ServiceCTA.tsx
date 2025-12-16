import Link from 'next/link'

interface ServiceCTAProps {
  heading?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

export default function ServiceCTA({
  heading = 'Ready to Grow Your Landscaping Business?',
  description = "Let's discuss how we can help you generate more leads and book more jobs.",
  ctaText = 'Get Your Free Consultation',
  ctaLink = '/contact',
}: ServiceCTAProps) {
  return (
    <section className="service-cta">
      <div className="service-cta-container">
        <h2 className="service-cta-heading">{heading}</h2>
        {description && <p className="service-cta-description">{description}</p>}
        <Link href={ctaLink} className="cta-button">
          {ctaText}
        </Link>
      </div>
    </section>
  )
}




