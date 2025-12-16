import { Metadata } from "next";

const siteName = "Landscaping Digital Marketing";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://landscapingdigitalmarketing.com";
const defaultDescription =
  "Professional digital marketing services for landscaping companies. Get found by homeowners, generate qualified leads, and book more jobs.";

export function generatePageMetadata(
  title?: string,
  description?: string,
  slug?: string
): Metadata {
  const pageTitle = title || siteName;
  const pageDescription = description || defaultDescription;
  const canonical = slug ? `${siteUrl}/${slug}` : siteUrl;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return generatePageMetadata(
    "Landscaping Digital Marketing",
    defaultDescription
  );
}
