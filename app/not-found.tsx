import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container">
      <div className="content" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="cta-button" style={{ marginTop: '2rem' }}>
          Go Home
        </Link>
      </div>
    </div>
  )
}




