# Next.js Setup Guide

This is a production-ready Next.js website that uses WordPress as a headless CMS. The frontend is built with Next.js App Router and deployed to Vercel, while WordPress handles all content management.

## Architecture

- **Frontend**: Next.js 14 (App Router) with TypeScript
- **CMS**: WordPress (headless) with WPGraphQL
- **SEO**: Rank Math integration via WPGraphQL
- **Deployment**: Vercel (recommended)

## Prerequisites

1. **WordPress Installation** with:
   - WPGraphQL plugin installed and activated
   - Advanced Custom Fields (ACF) plugin
   - Rank Math SEO plugin
   - WPGraphQL for Advanced Custom Fields extension (if using ACF)

2. **Node.js** 18+ and npm/yarn

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add:
   - `NEXT_PUBLIC_WORDPRESS_URL`: Your WordPress site URL
   - `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL`: Your WordPress GraphQL endpoint (usually `https://your-site.com/graphql`)
   - `NEXT_PUBLIC_SITE_URL`: Your Next.js site URL (for production)
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: Your Web3Forms access key (for contact form)

3. **Configure WordPress**:
   - Install and activate WPGraphQL
   - Install and activate Advanced Custom Fields
   - Install WPGraphQL for ACF extension
   - Configure ACF fields for pages (see below)

## WordPress ACF Field Setup

Create the following ACF fields for Pages:

### Field Group: Page Settings
- **hero_heading** (Text) - Hero heading text
- **hero_subheading** (Textarea) - Hero subheading text
- **call_to_action_text** (Text) - CTA button text

Make sure these fields are available via GraphQL by:
1. Going to ACF > Settings
2. Enabling "Show in GraphQL"
3. Setting GraphQL field names (e.g., `heroHeading`, `heroSubheading`, `callToActionText`)

## WordPress Page Structure

Create the following pages in WordPress:

1. **Home** (slug: `home`)
2. **Services** (slug: `services`)
3. **About** (slug: `about`)
4. **Contact** (slug: `contact`)
5. **Landscaping Digital Marketing** (slug: `landscaping-digital-marketing`)
6. **Landscaping SEO** (slug: `landscaping-seo`)
7. **Landscaping Ads** (slug: `landscaping-ads`)
8. **Landscaping Websites** (slug: `landscaping-websites`)

Each page should have:
- Title
- Content (main body content)
- SEO Title (Rank Math)
- SEO Description (Rank Math)
- ACF fields (hero heading, subheading, CTA text)

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Vercel will automatically:
- Build your Next.js app
- Deploy to production
- Set up SSL
- Configure CDN

## GraphQL Query Examples

The site uses WPGraphQL to fetch content. Example queries:

### Get Page by Slug
```graphql
query GetPageBySlug($slug: String!) {
  pageBy(slug: $slug) {
    id
    title
    slug
    content
    seo {
      title
      metaDesc
    }
    acfFields {
      heroHeading
      heroSubheading
      callToActionText
    }
  }
}
```

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── [slug]/            # Dynamic page routing
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Breadcrumbs.tsx
│   ├── ServiceCTA.tsx
│   ├── ContactForm.tsx
│   └── ContentRenderer.tsx
├── lib/                   # Utilities
│   ├── wordpress.ts      # WPGraphQL client & queries
│   ├── seo.ts            # SEO metadata generation
│   ├── schema.ts         # JSON-LD schema generation
│   └── utils.ts          # Helper functions
└── package.json
```

## SEO Features

- Server-rendered metadata (titles, descriptions)
- JSON-LD schema markup (LocalBusiness, Service, Breadcrumb)
- Canonical URLs
- Open Graph tags
- Twitter Card tags
- Semantic HTML structure

## Client Experience

Clients can:
- ✅ Edit all page content in WordPress
- ✅ Edit SEO titles and meta descriptions (Rank Math)
- ✅ Edit hero headings and CTAs (ACF fields)
- ✅ Add new pages
- ✅ Publish updates

Clients cannot:
- ❌ Edit Next.js code
- ❌ Change layout or components
- ❌ Modify styling (without developer)

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary-green: #2d5016;
  --secondary-green: #4a7c2a;
  --accent-green: #6ba644;
  --light-green: #e8f5e3;
}
```

### Schema Data
Edit `lib/schema.ts` to update LocalBusiness schema with your business information.

## Troubleshooting

### GraphQL Errors
- Verify WPGraphQL is installed and activated
- Check GraphQL endpoint is accessible
- Ensure ACF fields are exposed to GraphQL

### Build Errors
- Check environment variables are set
- Verify WordPress URL is accessible
- Check GraphQL queries match your WordPress schema

### Content Not Updating
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check WordPress page is published

## Support

For issues or questions, check:
- Next.js documentation: https://nextjs.org/docs
- WPGraphQL documentation: https://www.wpgraphql.com/
- Vercel documentation: https://vercel.com/docs




