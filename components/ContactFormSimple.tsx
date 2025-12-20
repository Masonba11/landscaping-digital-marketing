"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactFormSimple() {
  const router = useRouter();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "6e25b526-dc74-441a-a8a0-0a266538ef42";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add Web3Forms access key
    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      "Contact Form Submission - Landscape Digital Marketing"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to thank you page
        router.push("/thank-you");
      } else {
        setStatus("error");
        setMessage(
          "Something went wrong. Please try again or contact us directly."
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  return (
    <form className="contact-form-simple" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
            required
            placeholder="John"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            required
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          required
          placeholder="your@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number <span className="required">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          required
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city" className="form-label">
          City / Service Area <span className="required">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="form-input"
          required
          placeholder="Your city or service area"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="form-input"
          placeholder="Your landscaping company"
        />
      </div>

      <div className="form-group">
        <label htmlFor="website" className="form-label">
          Company Website URL
        </label>
        <input
          type="url"
          id="website"
          name="website"
          className="form-input"
          placeholder="https://yourcompany.com"
        />
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "0.5rem",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            name="noWebsite"
            value="yes"
            style={{ cursor: "pointer" }}
            onChange={(e) => {
              const websiteInput = document.getElementById(
                "website"
              ) as HTMLInputElement;
              if (e.target.checked) {
                websiteInput.value = "";
                websiteInput.disabled = true;
              } else {
                websiteInput.disabled = false;
              }
            }}
          />
          <span>I don't currently have one</span>
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="budget" className="form-label">
          Estimated Monthly Marketing Budget <span className="required">*</span>
        </label>
        <select id="budget" name="budget" className="form-input" required>
          <option value="">Select budget range</option>
          <option value="under-1000">Under $1,000</option>
          <option value="1000-2000">$1,000–$2,000</option>
          <option value="2000-3500">$2,000–$3,500</option>
          <option value="3500-plus">$3,500+</option>
        </select>
        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "0.9rem",
            color: "var(--dark-gray)",
            lineHeight: "1.6",
          }}
        >
          Most landscaping clients invest between $1,500–$3,000/month depending
          on market competition.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          rows={4}
          placeholder="Tell us about your landscaping business and marketing goals..."
        />
      </div>

      <input
        type="hidden"
        name="from_name"
        value="Landscape Digital Marketing Contact Form"
      />

      {message && (
        <div
          className={`form-message ${
            status === "success" ? "success" : "error"
          }`}
        >
          {message}
        </div>
      )}

      <p
        style={{
          marginBottom: "1rem",
          fontSize: "0.9rem",
          color: "var(--dark-gray)",
          textAlign: "center",
        }}
      >
        You're not committing to anything — this just starts the conversation.
      </p>

      <button
        type="submit"
        className="cta-button form-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Get Started"}
      </button>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <a
          href="tel:4807370850"
          className="cta-button"
          style={{
            display: "inline-block",
            textDecoration: "none",
            backgroundColor: "var(--primary-blue)",
            color: "white",
            padding: "var(--spacing-sm) var(--spacing-lg)",
            borderRadius: "12px",
            fontWeight: 600,
            transition: "all 0.3s ease",
          }}
        >
          Call Us Now: (480) 737-0850
        </a>
      </div>
    </form>
  );
}
