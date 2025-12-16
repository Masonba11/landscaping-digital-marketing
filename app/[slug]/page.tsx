import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateServiceSchema } from "@/lib/schema";
import { isServicePage } from "@/lib/utils";
import { getServiceFallbackContent } from "@/lib/service-content";
import ContentRenderer from "@/components/ContentRenderer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import CaseStudy from "@/components/CaseStudy";
import HeroVideo from "@/components/HeroVideo";
import ContactFormSimple from "@/components/ContactFormSimple";
import ContactFormWebsites from "@/components/ContactFormWebsites";
import H1CTAs from "@/components/H1CTAs";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for known pages
export async function generateStaticParams() {
  return [
    { slug: "landscaping-seo" },
    { slug: "landscaping-ads" },
    { slug: "landscaping-websites" },
    { slug: "landscaping-digital-marketing" },
  ];
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const isService = isServicePage(params.slug);
  const fallbackContent = isService
    ? getServiceFallbackContent(params.slug)
    : null;

  if (!fallbackContent) {
    return {
      title: params.slug,
      description: "Landscaping Digital Marketing",
    };
  }

  return {
    title: fallbackContent.title,
    description: fallbackContent.heroSubheading,
  };
}

export default function DynamicPage({ params }: PageProps) {
  const isService = isServicePage(params.slug);
  const fallbackContent = isService
    ? getServiceFallbackContent(params.slug)
    : null;

  if (!fallbackContent) {
    notFound();
  }

  const displayTitle = fallbackContent.h1 || fallbackContent.title;
  const displayContent = fallbackContent.content;
  const heroHeading = fallbackContent.heroHeading;
  const heroSubheading = fallbackContent.heroSubheading;

  // Generate breadcrumbs
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: displayTitle, url: `/${params.slug}` },
  ];

  // Generate service schema if this is a service page
  let serviceSchema = null;
  if (isService) {
    // Create a minimal page object for schema generation
    const pageForSchema = {
      id: params.slug,
      title: fallbackContent.title,
      slug: params.slug,
      uri: params.slug,
      content: fallbackContent.content,
      seo: {
        title: fallbackContent.title,
        metaDesc: fallbackContent.heroSubheading,
      },
    };
    serviceSchema = generateServiceSchema(pageForSchema);
  }

  // CTA defaults
  const ctaHeading = "Ready to Grow Your Landscaping Business?";
  const ctaDescription = heroSubheading;

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
        <div className={`content ${isService ? "service-content" : ""}`}>
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
          <p>
            Ready to grow your landscaping business? Fill out the form below and
            we will get back to you soon.
          </p>
          {params.slug === "landscaping-websites" ? (
            <ContactFormWebsites />
          ) : (
            <ContactFormSimple />
          )}
        </div>
      </div>

      {isService && fallbackContent?.faqs && (
        <div className="container">
          <div className="content service-content">
            <div className="faq-section" style={{ marginTop: "3rem" }}>
              <h2>Frequently Asked Questions</h2>
              {fallbackContent.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item"
                  style={{
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    background: "rgba(0, 102, 255, 0.05)",
                    borderRadius: "12px",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--primary-blue)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p style={{ lineHeight: "1.8", color: "var(--dark-gray)" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
