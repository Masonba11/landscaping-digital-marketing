'use client'

import { usePathname } from 'next/navigation'

export default function H1CTAs() {
  const pathname = usePathname()
  
  const scrollToSection = (sectionId: string, offset: number = 100) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Check if we're on the website development page
  const isWebsiteDevelopmentPage = pathname === '/landscaping-websites'
  
  const handleFirstCTA = () => {
    if (isWebsiteDevelopmentPage) {
      // On website development page, go to examples section
      const examplesSection = document.getElementById('examples-of-our-work')
      if (examplesSection) {
        scrollToSection('examples-of-our-work', 120)
      } else {
        scrollToSection('case-study', 120)
      }
    } else {
      // On other pages (home, SEO, paid advertising), go directly to case study
      scrollToSection('case-study', 120)
    }
  }

  return (
    <div className="h1-ctas">
      <button
        onClick={handleFirstCTA}
        className="cta-button h1-cta-button"
      >
        {isWebsiteDevelopmentPage ? 'View Examples' : 'View Case Study'}
      </button>
      <button
        onClick={() => scrollToSection('contact-form', 120)}
        className="cta-button h1-cta-button"
      >
        Get Started
      </button>
    </div>
  )
}

