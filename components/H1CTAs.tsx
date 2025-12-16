'use client'

import Link from 'next/link'

export default function H1CTAs() {
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

  const handleViewExamples = () => {
    // Try examples section first, fallback to case study
    const examplesSection = document.getElementById('examples-of-our-work')
    if (examplesSection) {
      scrollToSection('examples-of-our-work', 120)
    } else {
      scrollToSection('case-study', 120)
    }
  }

  return (
    <div className="h1-ctas">
      <button
        onClick={handleViewExamples}
        className="cta-button h1-cta-button"
      >
        View Examples
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

