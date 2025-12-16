import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wordpress";
import { generatePageMetadata } from "@/lib/seo";
import ContentRenderer from "@/components/ContentRenderer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCTA from "@/components/ServiceCTA";
import CaseStudy from "@/components/CaseStudy";
import HeroVideo from "@/components/HeroVideo";
import ContactFormSimple from "@/components/ContactFormSimple";
import H1CTAs from "@/components/H1CTAs";

export const metadata: Metadata = generatePageMetadata(
  await getPageBySlug("about"),
  "About Us"
);

export default async function AboutPage() {
  const page = await getPageBySlug("about");

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  const heroHeading = page?.acfFields?.heroHeading || "About Us"
  const heroSubheading = page?.acfFields?.heroSubheading || "A specialized digital marketing agency built exclusively for landscaping companies."

  return (
    <>
      <HeroVideo
        heading={heroHeading}
        subheading={heroSubheading}
      />

      <div className="container">
        <div className="content">

          {page?.content ? (
            <ContentRenderer content={page.content} />
          ) : (
            <>
              <h2>Who We Are</h2>
              <p>
                Landscape Digital Marketing is a specialized digital marketing
                agency built exclusively for landscaping companies. We
                understand that your business has unique needs, seasonal cycles,
                and local competition that generic marketing agencies simply
                don't grasp.
              </p>

              <h2>Built for Landscaping Businesses</h2>
              <p>
                We created this agency because we saw too many landscaping
                companies struggling with marketing agencies that treated them
                like any other business. Landscaping isn't like other
                industries—you have seasonal peaks and valleys, local
                competition that changes by the block, and customers who need
                immediate solutions.
              </p>

              <h2>Why Our Niche Focus Matters</h2>
              <p>
                When you work with a generic agency, you get generic strategies.
                When you work with us, you get marketing strategies that are
                specifically designed for landscaping companies. We know:
              </p>

              <ul className="benefits-list">
                <li>
                  Which keywords actually convert for landscapers (not just ones
                  that sound good)
                </li>
                <li>
                  How to plan campaigns around your seasonal business cycles
                </li>
                <li>
                  What content resonates with homeowners looking for landscaping
                  services
                </li>
                <li>
                  How to track metrics that matter: phone calls, quote requests,
                  and booked jobs
                </li>
                <li>
                  What works for landscapers and what doesn't (so you don't
                  waste money on experiments)
                </li>
              </ul>

              <h2>Our Differentiation</h2>
              <p>
                Unlike generic agencies that work with dozens of industries, we
                focus exclusively on landscaping. This specialization means
                every strategy, every campaign, and every piece of content is
                tailored to your industry. We've tested what works for
                landscapers, and we bring that expertise to every client.
              </p>

              <p>
                We're not here to give you generic business advice. We're here
                to help you get found by homeowners, generate qualified leads,
                and book more jobs.
              </p>
            </>
          )}
        </div>
      </div>

      <CaseStudy />

      <div id="contact-form" className="container">
        <div className="content">
          <h2>Get Started Today</h2>
          <p>
            Ready to grow your landscaping business? Fill out the form below and
            we will get back to you soon.
          </p>
          <ContactFormSimple />
        </div>
      </div>
    </>
  );
}
