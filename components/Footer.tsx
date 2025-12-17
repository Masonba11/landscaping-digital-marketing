"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact-form");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Landscape Digital Marketing</h3>
            <p className="footer-description">
              Professional digital marketing services designed specifically for
              landscaping companies.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="/landscaping-seo">SEO</Link>
              </li>
              <li>
                <Link href="/landscaping-ads">Paid Advertising</Link>
              </li>
              <li>
                <Link href="/landscaping-websites">Website Development</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <a
                  href="#contact-form"
                  onClick={scrollToContactForm}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Landscape Digital Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
