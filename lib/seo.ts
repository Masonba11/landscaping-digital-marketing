import { Metadata } from "next";
import { WordPressPage } from "./wordpress";

const siteName = "Landscape Digital Marketing";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://landscapedigitalmarketing.com";
const defaultDescription =
  "Professional digital marketing services for landscaping companies. Get found by homeowners, generate qualified leads, and book more jobs.";

export function generatePageMetadata(
  page: WordPressPage | null,
  fallbackTitle?: string
): Metadata {
  // Priority: ACF seoTitle > Rank Math SEO title > page title > fallback
  const title =
    page?.acfFields?.seoTitle ||
    page?.seo?.title ||
    page?.title ||
    fallbackTitle ||
    siteName;

  // Priority: ACF metaDescription > Rank Math metaDesc > default
  const description =
    page?.acfFields?.metaDescription ||
    page?.seo?.metaDesc ||
    defaultDescription;

  const canonical = page?.seo?.canonical || `${siteUrl}/${page?.slug || ""}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return generatePageMetadata(null, "Landscaping Digital Marketing");
}
