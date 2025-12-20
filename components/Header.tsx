"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: "SEO", slug: "landscaping-seo", fullName: "Landscaping SEO" },
    {
      name: "Paid Advertising",
      slug: "landscaping-ads",
      fullName: "Landscaping Ads",
    },
    {
      name: "Website Development",
      slug: "landscaping-websites",
      fullName: "Landscaping Websites",
    },
  ];

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleMobileNav = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    closeMobileMenu();
    // Use setTimeout to ensure menu closes before navigation
    setTimeout(() => {
      router.push(path);
    }, 150);
  };

  const scrollToContactForm = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    closeMobileMenu();
    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
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
    }, 150);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <Image
            src="/LDMLOGO.png"
            alt="Landscape Digital Marketing Logo"
            width={400}
            height={120}
            className="logo-image"
            priority
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-link nav-link-dropdown"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              type="button"
            >
              Services
              <svg
                className={`dropdown-arrow ${isServicesOpen ? "open" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="dropdown-menu">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="dropdown-item"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="dropdown-item dropdown-item-all"
                  onClick={() => setIsServicesOpen(false)}
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <button
            onClick={scrollToContactForm}
            className="nav-link nav-link-cta"
            type="button"
          >
            Contact
          </button>
          <a
            href="tel:4807370850"
            className="nav-link nav-link-cta nav-link-call"
            style={{
              backgroundColor: "var(--primary-blue)",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            (480) 737-0850
          </a>
        </nav>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-fullscreen">
          <div className="mobile-menu-content">
            <button
              className="mobile-menu-item"
              onClick={(e) => handleMobileNav("/", e)}
              type="button"
            >
              Home
            </button>

            {services.map((service) => (
              <button
                key={service.slug}
                className="mobile-menu-item"
                onClick={(e) => handleMobileNav(`/${service.slug}`, e)}
                type="button"
              >
                {service.name}
              </button>
            ))}

            <button
              className="mobile-menu-item"
              onClick={(e) => handleMobileNav("/about", e)}
              type="button"
            >
              About
            </button>

            <button
              className="mobile-menu-item mobile-menu-cta"
              onClick={scrollToContactForm}
              type="button"
            >
              Contact
            </button>

            <a
              href="tel:4807370850"
              className="mobile-menu-item mobile-menu-cta"
              style={{
                backgroundColor: "var(--primary-blue)",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontWeight: 600,
              }}
              onClick={closeMobileMenu}
            >
              Call: (480) 737-0850
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
