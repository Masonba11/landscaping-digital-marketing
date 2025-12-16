import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Landscaping Digital Marketing",
  description:
    "Thank you for contacting us. We'll get back to you soon to discuss your landscaping digital marketing needs.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="container">
      <div
        className="content"
        style={{
          textAlign: "center",
          padding: "4rem 1rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "0 auto 2rem" }}
          >
            <circle cx="40" cy="40" r="40" fill="#0066FF" fillOpacity="0.1" />
            <path
              d="M40 20C28.95 20 20 28.95 20 40C20 51.05 28.95 60 40 60C51.05 60 60 51.05 60 40C60 28.95 51.05 20 40 20ZM33.5 50L25 41.5L27.35 39.15L33.5 45.3L52.65 26.15L55 28.5L33.5 50Z"
              fill="#0066FF"
            />
          </svg>
        </div>

        <h1 style={{ marginBottom: "1rem", color: "var(--primary-blue)" }}>
          Thank You!
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.8",
            marginBottom: "2rem",
            color: "var(--dark-gray)",
          }}
        >
          Your message has been sent successfully. We&apos;ve received your
          inquiry and will get back to you within 24 hours to discuss your
          landscaping digital marketing needs.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="cta-button">
            Return Home
          </Link>
          <Link
            href="/services"
            className="cta-button"
            style={{
              background: "transparent",
              border: "2px solid var(--primary-blue)",
              color: "var(--primary-blue)",
            }}
          >
            View Our Services
          </Link>
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            background: "rgba(0, 102, 255, 0.05)",
            borderRadius: "12px",
          }}
        >
          <p
            style={{ margin: 0, fontSize: "0.9rem", color: "var(--dark-gray)" }}
          >
            <strong>What happens next?</strong>
            <br />
            Our team will review your submission and reach out via email or
            phone to schedule a consultation. We&apos;re excited to help grow
            your landscaping business!
          </p>
        </div>
      </div>
    </div>
  );
}
