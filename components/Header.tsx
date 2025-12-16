'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const services = [
    { name: 'SEO', slug: 'landscaping-seo', fullName: 'Landscaping SEO' },
    { name: 'Paid Advertising', slug: 'landscaping-ads', fullName: 'Landscaping Ads' },
    { name: 'Website Development', slug: 'landscaping-websites', fullName: 'Landscaping Websites' },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <Image
            src="/LDMLOGO.png"
            alt="Landscape Digital Marketing Logo"
            width={400}
            height={120}
            className="logo-image"
            priority
          />
        </Link>
        <nav className="nav">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <div
            className="nav-dropdown"
            ref={dropdownRef}
          >
            <button
              className="nav-link nav-link-dropdown"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <svg
                className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}
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
            onClick={() => {
              const contactForm = document.getElementById('contact-form')
              if (contactForm) {
                const elementPosition = contactForm.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - 120
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
              } else {
                // If no form on current page, navigate to home and then scroll
                window.location.href = '/#contact-form'
              }
            }}
            className="nav-link nav-link-cta"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
