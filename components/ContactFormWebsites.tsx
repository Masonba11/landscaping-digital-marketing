"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactFormWebsites() {
  const router = useRouter();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [hasWebsite, setHasWebsite] = useState<string>("");

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
      "Website Development Inquiry - Landscape Digital Marketing"
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
        <label htmlFor="hasWebsite" className="form-label">
          Do you have a website currently? <span className="required">*</span>
        </label>
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="hasWebsite"
              value="yes"
              checked={hasWebsite === "yes"}
              onChange={(e) => setHasWebsite(e.target.value)}
              required
              style={{ cursor: "pointer" }}
            />
            <span>Yes</span>
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="hasWebsite"
              value="no"
              checked={hasWebsite === "no"}
              onChange={(e) => setHasWebsite(e.target.value)}
              required
              style={{ cursor: "pointer" }}
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {hasWebsite === "yes" && (
        <div className="form-group">
          <label htmlFor="currentWebsite" className="form-label">
            Current Website URL
          </label>
          <input
            type="url"
            id="currentWebsite"
            name="currentWebsite"
            className="form-input"
            placeholder="https://yourcurrentwebsite.com"
          />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          rows={4}
          placeholder="Tell us about your website needs and goals..."
        />
      </div>

      <div className="form-group">
        <label className="form-checkbox">
          <input
            type="checkbox"
            name="budgetConfirmation"
            value="yes"
            required
            className="form-checkbox-input"
          />
          <span className="form-checkbox-label">
            I have $1,000 to invest into a website.{" "}
            <span className="required">*</span>
          </span>
        </label>
      </div>

      <input
        type="hidden"
        name="from_name"
        value="Landscape Digital Marketing Website Development Form"
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

      <button
        type="submit"
        className="cta-button form-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Get Started"}
      </button>
    </form>
  );
}
