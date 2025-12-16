import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch to discuss your landscaping digital marketing needs. We'll help you understand how digital marketing can grow your business and generate more leads.",
};

export default function ContactPage() {
  const heroHeading = "Contact Us";
  const heroSubheading =
    "Get in touch to discuss your landscaping digital marketing needs. We'll help you understand how digital marketing can grow your business and generate more leads.";

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
