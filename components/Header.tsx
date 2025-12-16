"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
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
          <Link href="/contact" className="nav-link nav-link-cta">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-fullscreen">
          <div className="mobile-menu-content">
            <Link
              href="/"
              className="mobile-menu-item"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                setTimeout(() => {
                  window.location.href = "/";
                }, 100);
              }}
            >
              Home
            </Link>

            <div className="mobile-menu-section">
              <button
                className="mobile-menu-item mobile-menu-toggle-btn"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                type="button"
              >
                Services
                <svg
                  className={`mobile-menu-arrow ${
                    isServicesOpen ? "open" : ""
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="mobile-menu-submenu">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="mobile-menu-subitem"
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenu();
                        setTimeout(() => {
                          window.location.href = `/${service.slug}`;
                        }, 100);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="mobile-menu-subitem mobile-menu-subitem-all"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMobileMenu();
                      setTimeout(() => {
                        window.location.href = "/services";
                      }, 100);
                    }}
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="mobile-menu-item"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                setTimeout(() => {
                  window.location.href = "/about";
                }, 100);
              }}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="mobile-menu-item mobile-menu-cta"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                setTimeout(() => {
                  window.location.href = "/contact";
                }, 100);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
