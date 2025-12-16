import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generateLocalBusinessSchema } from '@/lib/schema'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Landscape Digital Marketing',
    template: '%s',
  },
  description:
    'Professional digital marketing services for landscaping companies. Get found by homeowners, generate qualified leads, and book more jobs.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://landscapedigitalmarketing.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/LDMLOGO.png', type: 'image/png', sizes: 'any' },
    ],
    apple: [
      { url: '/LDMLOGO.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate LocalBusiness schema for all pages
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/LDMLOGO.png" type="image/png" />
        <link rel="apple-touch-icon" href="/LDMLOGO.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

