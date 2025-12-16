import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wordpress";
import { generatePageMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = generatePageMetadata(
  await getPageBySlug("contact"),
  "Contact Us"
);

export default async function ContactPage() {
  const page = await getPageBySlug("contact");

  const heroHeading = page?.acfFields?.heroHeading || "Contact Us"
  const heroSubheading = page?.acfFields?.heroSubheading || "Get in touch to discuss your landscaping digital marketing needs. We'll help you understand how digital marketing can grow your business and generate more leads."

  return (
    <>
      <HeroVideo
        heading={heroHeading}
        subheading={heroSubheading}
      />

      <div id="contact-form" className="container">
        <ContactForm />
      </div>
    </>
  );
}
