import { Metadata } from "next";
import Link from "next/link";
import { getPageByUri } from "@/lib/wordpress";
import { generatePageMetadata } from "@/lib/seo";
import ContentRenderer from "@/components/ContentRenderer";
import ServiceCTA from "@/components/ServiceCTA";
import CaseStudy from "@/components/CaseStudy";
import HeroVideo from "@/components/HeroVideo";
import ContactFormSimple from "@/components/ContactFormSimple";
import H1CTAs from "@/components/H1CTAs";

// Generate metadata using WordPress ACF fields
export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByUri("home");
  return generatePageMetadata(page, "Landscaping Digital Marketing");
}

export default async function HomePage() {
  // Fetch home page from WordPress by URI
  const page = await getPageByUri("home");

  // Extract ACF fields with graceful fallbacks
  const pageHeadline = page?.acfFields?.pageHeadline;
  const pageBody = page?.acfFields?.pageBody;
  const heroHeading =
    page?.acfFields?.heroHeading || "Landscaping Digital Marketing";
  const heroSubheading =
    page?.acfFields?.heroSubheading ||
    "We help landscaping companies grow their business with proven digital marketing strategies. Get found by homeowners searching for your services, generate qualified leads, and book more jobs.";

  return (
    <>
      <HeroVideo heading={heroHeading} subheading={heroSubheading} />

      <div className="container">
        {/* Render pageHeadline as h1 if provided */}
        {pageHeadline && <h1>{pageHeadline}</h1>}

        {/* Render pageBody with dangerouslySetInnerHTML if provided */}
        {pageBody ? (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: pageBody }}
          />
        ) : (
          <div className="content">
            <h2>Our Landscaping Digital Marketing Services</h2>
            <p>
              We offer comprehensive digital marketing solutions specifically
              designed for landscaping companies. Our services work together to
              help you get found online, generate qualified leads, and book more
              jobs.
            </p>

            <div className="service-grid">
              <div className="service-card">
                <h3>SEO</h3>
                <p>
                  Get found on Google when homeowners search for landscaping
                  services. Long-term visibility that generates free traffic
                  month after month.
                </p>
                <Link href="/landscaping-seo">Learn More →</Link>
              </div>

              <div className="service-card">
                <h3>Paid Advertising</h3>
                <p>
                  Drive immediate leads with targeted Google Ads campaigns.
                  Start getting phone calls within days of launch.
                </p>
                <Link href="/landscaping-ads">Learn More →</Link>
              </div>

              <div className="service-card">
                <h3>Website Development</h3>
                <p>
                  Professional websites that showcase your work, load fast, and
                  convert visitors into customers. Mobile-responsive and
                  SEO-optimized.
                </p>
                <Link href="/landscaping-websites">Learn More →</Link>
              </div>
            </div>

            <h2>What is Landscaping Digital Marketing?</h2>
            <p>
              Landscaping digital marketing is the strategic use of online
              channels to reach homeowners and commercial property managers who
              need landscaping services. Unlike generic marketing agencies, we
              specialize exclusively in the landscaping industry. We understand
              your seasonal cycles, your local competition, and what makes
              customers choose one landscaper over another.
            </p>

            <h2>Why Landscapers Need Digital Marketing</h2>
            <p>
              Most landscaping companies rely on word-of-mouth and referrals.
              While those are valuable, they limit your growth. Here&apos;s what
              happens when you add landscaping digital marketing:
            </p>

            <ul className="benefits-list">
              <li>
                <strong>Fill your schedule faster:</strong> Generate leads even
                during slow seasons when referrals dry up
              </li>
              <li>
                <strong>Reach customers actively searching:</strong> Show up
                when homeowners type &quot;landscaper near me&quot; or &quot;lawn care
                services&quot;
              </li>
              <li>
                <strong>Compete with larger companies:</strong> Level the
                playing field against big franchises with bigger ad budgets
              </li>
              <li>
                <strong>Build your brand:</strong> Establish your company as the
                go-to landscaping expert in your area
              </li>
              <li>
                <strong>Track your ROI:</strong> Know exactly which marketing
                dollars are bringing in paying customers
              </li>
            </ul>

            <h2>How Our Landscaping Digital Marketing Generates Leads</h2>
            <p>
              Our approach combines search engine optimization (SEO), paid
              advertising, website optimization, and content marketing to create
              a complete system that generates leads year-round. Each service
              works together to maximize your online visibility and lead
              generation.
            </p>

            <h2>What Makes Us Different from Generic Marketing Agencies</h2>
            <p>
              Most marketing agencies work with dozens of industries. We focus
              exclusively on landscaping companies. This specialization means:
            </p>

            <ul className="benefits-list">
              <li>
                We understand your seasonal business cycles and plan campaigns
                accordingly
              </li>
              <li>
                We know which keywords actually convert (not just ones that
                sound good)
              </li>
              <li>
                We create content that speaks to homeowners&apos; real concerns about
                their yards
              </li>
              <li>
                We track metrics that matter: phone calls, quote requests, and
                booked jobs—not just website visits
              </li>
              <li>
                We&apos;ve tested what works for landscapers and what doesn&apos;t, so you
                don&apos;t waste money on experiments
              </li>
            </ul>
          </div>
        )}
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
