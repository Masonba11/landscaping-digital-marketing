# Quick Start Guide - Next.js + WordPress Headless

Get your Next.js frontend connected to WordPress in 5 minutes.

## Step 1: WordPress Setup (5 min)

1. **Install Plugins**:
   - WPGraphQL
   - Advanced Custom Fields (ACF)
   - WPGraphQL for ACF
   - Rank Math SEO

2. **Create ACF Field Group**:
   - Name: "Page Settings"
   - Add 3 fields:
     - `hero_heading` (Text) → GraphQL name: `heroHeading`
     - `hero_subheading` (Textarea) → GraphQL name: `heroSubheading`
     - `call_to_action_text` (Text) → GraphQL name: `callToActionText`
   - Enable "Show in GraphQL" for each field
   - Set location: Show if Post Type = Page

3. **Create Pages**:
   - Home (slug: `home`)
   - Services (slug: `services`)
   - About (slug: `about`)
   - Contact (slug: `contact`)
   - Landscaping Digital Marketing (slug: `landscaping-digital-marketing`)
   - Landscaping SEO (slug: `landscaping-seo`)
   - Landscaping Ads (slug: `landscaping-ads`)
   - Landscaping Websites (slug: `landscaping-websites`)

4. **Test GraphQL**:
   - Visit: `https://your-wordpress-site.com/graphql`
   - Run test query (see WORDPRESS-SETUP.md)

## Step 2: Next.js Setup (3 min)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create `.env.local`**:
   ```env
   NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
   NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-wordpress-site.com/graphql
   NEXT_PUBLIC_SITE_URL=https://landscapingdigitalmarketing.com
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```

3. **Run dev server**:
   ```bash
   npm run dev
   ```

4. **Visit**: http://localhost:3000

## Step 3: Verify Connection

1. Check browser console for errors
2. Verify pages load from WordPress
3. Test contact form (get Web3Forms key from web3forms.com)

## Step 4: Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

## Troubleshooting

**GraphQL errors?**
- Check WordPress plugins are activated
- Verify GraphQL endpoint: `/graphql`
- Test query in GraphQL playground

**ACF fields not showing?**
- Check "Show in GraphQL" is enabled
- Verify GraphQL field names (camelCase)
- Ensure WPGraphQL for ACF is activated

**Content not updating?**
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check WordPress page is published

## Next Steps

- Add content to WordPress pages
- Customize colors in `app/globals.css`
- Update schema data in `lib/schema.ts`
- Deploy to production

See full documentation:
- [NEXTJS-SETUP.md](./NEXTJS-SETUP.md) - Detailed Next.js setup
- [WORDPRESS-SETUP.md](./WORDPRESS-SETUP.md) - Detailed WordPress setup
- [README-NEXTJS.md](./README-NEXTJS.md) - Project overview




