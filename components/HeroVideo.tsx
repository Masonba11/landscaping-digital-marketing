import H1CTAs from './H1CTAs'

interface HeroVideoProps {
  heading?: string
  subheading?: string
}

export default function HeroVideo({ heading, subheading }: HeroVideoProps) {
  return (
    <section className="hero-video-section">
      <div className="hero-video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/landscapingdigitalmarektinghero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
        <div className="hero-video-content">
          <div className="hero-container">
            {heading && <h1 className="hero-heading">{heading}</h1>}
            {subheading && <p className="hero-subheading">{subheading}</p>}
            {heading && <H1CTAs />}
          </div>
        </div>
      </div>
    </section>
  )
}




