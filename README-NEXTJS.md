# Landscape Digital Marketing - Next.js Frontend

A production-ready Next.js website that uses WordPress as a headless CMS. Built specifically for landscaping digital marketing agencies.

## 🎯 Project Overview

This is a **headless CMS architecture** where:
- **Next.js** handles all frontend rendering, layout, performance, and SEO
- **WordPress** is used ONLY for content editing and SEO management
- Clients edit content in WordPress without touching code

## ✨ Key Features

- ✅ **Server-Side Rendering (SSR)** for optimal SEO and performance
- ✅ **Dynamic Routing** - All WordPress pages automatically available
- ✅ **SEO Optimized** - Rank Math integration, JSON-LD schema, canonical URLs
- ✅ **Professional Design** - White + green color palette for landscaping industry
- ✅ **Mobile-First** - Responsive design with fast Core Web Vitals
- ✅ **Client-Friendly** - Content editable in WordPress, layout locked in Next.js

## 📋 Required Pages

### Core Pages
1. **Home** (`/`) - Hero, service overview, trust-building content
2. **Services** (`/services`) - Hub page for all services
3. **About** (`/about`) - Company story, differentiation, trust
4. **Contact** (`/contact`) - Contact form (Web3Forms)

### Service Pages
1. **Landscaping Digital Marketing** (`/landscaping-digital-marketing`)
2. **Landscaping SEO** (`/landscaping-seo`)
3. **Landscaping Ads** (`/landscaping-ads`)
4. **Landscaping Websites** (`/landscaping-websites`)

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **CMS**: WordPress (headless) + WPGraphQL
- **SEO**: Rank Math + custom schema markup
- **Forms**: Web3Forms
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   ```bash
   cp env.example .env.local
   # Edit .env.local with your WordPress URL and API keys
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

See [NEXTJS-SETUP.md](./NEXTJS-SETUP.md) for detailed setup instructions.

## 📁 Project Structure

```
/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (Header, Footer, schema)
│   ├── page.tsx             # Home page
│   ├── [slug]/page.tsx      # Dynamic page routing
│   ├── services/page.tsx    # Services overview
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── not-found.tsx        # 404 page
│   └── globals.css          # Global styles
│
├── components/               # Reusable React components
│   ├── Header.tsx           # Site header/navigation
│   ├── Footer.tsx           # Site footer
│   ├── Breadcrumbs.tsx      # Breadcrumb navigation + schema
│   ├── ServiceCTA.tsx      # Reusable CTA section
│   ├── ContactForm.tsx     # Web3Forms contact form
│   └── ContentRenderer.tsx  # WordPress content renderer
│
├── lib/                     # Utilities and helpers
│   ├── wordpress.ts        # WPGraphQL client & queries
│   ├── seo.ts              # SEO metadata generation
│   ├── schema.ts           # JSON-LD schema generation
│   └── utils.ts            # Helper functions
│
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2d5016` - Headings, CTAs, links
- **Secondary Green**: `#4a7c2a` - Hover states, accents
- **Accent Green**: `#6ba644` - Highlights, checkmarks
- **Light Green**: `#e8f5e3` - Backgrounds, sections
- **White**: `#ffffff` - Base background

### Typography
- **Headings**: Bold, primary green
- **Body**: Regular, dark gray
- **Links**: Primary green with hover states

## 🔍 SEO Implementation

### Metadata
- Server-rendered titles and descriptions from Rank Math
- Fallback metadata if WordPress fields are empty
- Open Graph and Twitter Card tags

### Schema Markup
- **LocalBusiness** schema on all pages (sitewide)
- **Service** schema on individual service pages
- **BreadcrumbList** schema for navigation

### Technical SEO
- Semantic HTML5 structure
- One H1 per page
- Canonical URLs
- Fast Core Web Vitals

## 📝 WordPress Content Model

Pages in WordPress should have:

### Standard Fields
- `title` - Page title
- `slug` - URL slug
- `content` - Main HTML content
- `seo.title` - SEO title (Rank Math)
- `seo.metaDesc` - Meta description (Rank Math)

### ACF Fields
- `heroHeading` - Hero section heading
- `heroSubheading` - Hero section subheading
- `callToActionText` - CTA button text

## 🔐 Client Permissions

### ✅ Clients CAN:
- Edit all page content in WordPress
- Edit SEO titles and meta descriptions
- Edit hero headings and CTAs
- Add new pages
- Publish/unpublish content

### ❌ Clients CANNOT:
- Edit Next.js code
- Change layout or components
- Modify styling (without developer)
- Access GitHub or deployment

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy automatically

### Environment Variables
- `NEXT_PUBLIC_WORDPRESS_URL` - WordPress site URL
- `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` - GraphQL endpoint
- `NEXT_PUBLIC_SITE_URL` - Production site URL
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` - Web3Forms key

## 📚 Documentation

- [NEXTJS-SETUP.md](./NEXTJS-SETUP.md) - Detailed setup guide
- [Next.js Docs](https://nextjs.org/docs)
- [WPGraphQL Docs](https://www.wpgraphql.com/)

## 🎯 Future Enhancements

- Image optimization with Next.js Image component
- Blog functionality (if needed)
- Analytics integration
- A/B testing capabilities
- Multi-site support (scalable architecture)

## 📄 License

This project is built for landscaping digital marketing agencies. Customize as needed for your clients.

---

**Built with ❤️ for landscaping companies**




