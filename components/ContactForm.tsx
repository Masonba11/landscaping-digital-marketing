"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
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
        setStatus("success");
        setMessage(
          "Thank you! Your message has been sent. We'll get back to you soon."
        );
        form.reset();
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          required
          placeholder="Your name"
        />
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
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
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
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          rows={6}
          required
          placeholder="Tell us about your landscaping business and marketing goals..."
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
            I understand that our minimum monthly investment is $2,000 (this
            includes compensation for all the services we&apos;d perform and the
            total ad spend your business would need).{" "}
            <span className="required">*</span>
          </span>
        </label>
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

      <button
        type="submit"
        className="cta-button form-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
