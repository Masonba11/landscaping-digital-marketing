"use client";

interface ServiceCTAProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceCTA({
  heading = "Ready to Grow Your Landscaping Business?",
  description = "Let's discuss how we can help you generate more leads and book more jobs.",
  ctaText = "Get Your Free Consultation",
  ctaLink,
}: ServiceCTAProps) {
  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // If ctaLink is provided and it's not /contact, use it as a link
  // Otherwise, scroll to contact form on current page
  if (ctaLink && ctaLink !== "/contact") {
    return (
      <section className="service-cta">
        <div className="service-cta-container">
          <h2 className="service-cta-heading">{heading}</h2>
          {description && (
            <p className="service-cta-description">{description}</p>
          )}
          <a href={ctaLink} className="cta-button">
            {ctaText}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="service-cta">
      <div className="service-cta-container">
        <h2 className="service-cta-heading">{heading}</h2>
        {description && (
          <p className="service-cta-description">{description}</p>
        )}
        <button
          onClick={scrollToContactForm}
          className="cta-button"
          type="button"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
}
