# WordPress Headless CMS Setup Guide

This guide explains how to set up WordPress as a headless CMS for the Next.js frontend.

## Required WordPress Plugins

### 1. WPGraphQL
**Purpose**: Exposes WordPress data via GraphQL API

**Installation**:
1. Go to WordPress Admin > Plugins > Add New
2. Search for "WPGraphQL"
3. Install and activate

**Configuration**:
- No additional configuration needed
- GraphQL endpoint will be available at: `https://your-site.com/graphql`
- Test it by visiting: `https://your-site.com/graphql` (you should see GraphQL playground)

### 2. Advanced Custom Fields (ACF)
**Purpose**: Add custom fields to pages (hero headings, CTAs, etc.)

**Installation**:
1. Go to WordPress Admin > Plugins > Add New
2. Search for "Advanced Custom Fields"
3. Install and activate

**Configuration**:
1. Go to Custom Fields > Add New
2. Create a new Field Group called "Page Settings"
3. Add the following fields:

   **Field 1: Hero Heading**
   - Field Label: `Hero Heading`
   - Field Name: `hero_heading`
   - Field Type: `Text`
   - Location Rules: Show this field group if `Post Type` is equal to `Page`

   **Field 2: Hero Subheading**
   - Field Label: `Hero Subheading`
   - Field Name: `hero_subheading`
   - Field Type: `Textarea`
   - Location Rules: Show this field group if `Post Type` is equal to `Page`

   **Field 3: Call to Action Text**
   - Field Label: `Call to Action Text`
   - Field Name: `call_to_action_text`
   - Field Type: `Text`
   - Location Rules: Show this field group if `Post Type` is equal to `Page`

4. **Important**: For each field, scroll down to "GraphQL" section:
   - Check "Show in GraphQL"
   - Set "GraphQL Field Name" to camelCase:
     - `hero_heading` → `heroHeading`
     - `hero_subheading` → `heroSubheading`
     - `call_to_action_text` → `callToActionText`

### 3. WPGraphQL for Advanced Custom Fields
**Purpose**: Makes ACF fields available in GraphQL queries

**Installation**:
1. Go to WordPress Admin > Plugins > Add New
2. Search for "WPGraphQL for Advanced Custom Fields"
3. Install and activate

**Configuration**:
- No additional configuration needed
- ACF fields will automatically appear in GraphQL queries

### 4. Rank Math SEO
**Purpose**: SEO title and meta description management

**Installation**:
1. Go to WordPress Admin > Plugins > Add New
2. Search for "Rank Math SEO"
3. Install and activate

**Configuration**:
1. Complete the setup wizard (or skip)
2. Go to Rank Math > Settings > General
3. Ensure "Enable SEO Analysis" is on
4. For each page, you can now edit:
   - SEO Title
   - Meta Description
   - Focus Keyword
   - Schema settings

**GraphQL Integration**:
- Rank Math fields are automatically exposed via WPGraphQL
- Available in queries as `seo { title, metaDesc, canonical }`

## Creating Required Pages

Create the following pages in WordPress Admin > Pages > Add New:

### 1. Home Page
- **Title**: Home
- **Slug**: `home` (set in Permalink)
- **Content**: Add your home page content
- **ACF Fields**: 
  - Hero Heading: "Landscaping Digital Marketing Services"
  - Hero Subheading: "We help landscaping companies grow..."
- **SEO**: Set SEO title and meta description

### 2. Services Page
- **Title**: Services
- **Slug**: `services`
- **Content**: Services overview content
- **ACF Fields**: Hero heading and subheading
- **SEO**: Set SEO title and meta description

### 3. About Page
- **Title**: About Us
- **Slug**: `about`
- **Content**: About page content
- **ACF Fields**: Hero heading and subheading
- **SEO**: Set SEO title and meta description

### 4. Contact Page
- **Title**: Contact
- **Slug**: `contact`
- **Content**: Contact page content
- **ACF Fields**: Hero heading and subheading
- **SEO**: Set SEO title and meta description

### 5-8. Service Pages

Create these four service pages:

**Landscaping Digital Marketing**
- **Title**: Landscaping Digital Marketing
- **Slug**: `landscaping-digital-marketing`
- **Content**: Full service page content
- **ACF Fields**: Hero heading, subheading, CTA text
- **SEO**: 
  - SEO Title: "Landscaping Digital Marketing | [Site Name]"
  - Meta Description: "Professional landscaping digital marketing services..."

**Landscaping SEO**
- **Title**: Landscaping SEO
- **Slug**: `landscaping-seo`
- **Content**: Full service page content
- **ACF Fields**: Hero heading, subheading, CTA text
- **SEO**: Optimize for "landscaping seo"

**Landscaping Ads**
- **Title**: Landscaping Ads
- **Slug**: `landscaping-ads`
- **Content**: Full service page content
- **ACF Fields**: Hero heading, subheading, CTA text
- **SEO**: Optimize for "landscaping ads"

**Landscaping Websites**
- **Title**: Landscaping Websites
- **Slug**: `landscaping-websites`
- **Content**: Full service page content
- **ACF Fields**: Hero heading, subheading, CTA text
- **SEO**: Optimize for "landscaping websites"

## Setting Home Page

1. Go to Settings > Reading
2. Under "Your homepage displays", select "A static page"
3. Choose "Home" as your homepage
4. Save changes

## Testing GraphQL Queries

Visit your GraphQL endpoint: `https://your-site.com/graphql`

Try this query to test:

```graphql
query TestQuery {
  pages(first: 5) {
    nodes {
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
}
```

If you see data, your setup is working!

## Permissions & Security

### CORS Configuration
If your WordPress and Next.js are on different domains:

1. Install "WPGraphQL CORS" plugin, OR
2. Add to `functions.php`:
```php
add_action('graphql_init', function() {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
});
```

### GraphQL Access
- By default, WPGraphQL is publicly accessible
- For production, consider adding authentication or IP restrictions
- Or use environment variables in Next.js to keep WordPress URL private

## Content Editing Workflow

1. **Client logs into WordPress**
2. **Edits page content** in the WordPress editor
3. **Edits SEO fields** via Rank Math meta box
4. **Edits ACF fields** (hero heading, CTA text) via custom fields
5. **Publishes** the page
6. **Next.js automatically fetches** updated content on next request

## Troubleshooting

### ACF Fields Not Showing in GraphQL
- Verify "Show in GraphQL" is checked for each field
- Check GraphQL field names are set correctly (camelCase)
- Ensure "WPGraphQL for ACF" plugin is activated
- Clear WordPress cache if using caching plugins

### Rank Math Fields Not Available
- Ensure Rank Math is activated
- Check that pages have SEO data saved
- Verify WPGraphQL is up to date

### GraphQL Endpoint Not Working
- Check WPGraphQL plugin is activated
- Visit `/graphql` endpoint directly
- Check for PHP errors in WordPress debug log
- Verify WordPress version compatibility

### Content Not Updating in Next.js
- Clear Next.js cache: `rm -rf .next`
- Rebuild Next.js app
- Check WordPress page is published (not draft)
- Verify GraphQL query is correct

## Next Steps

Once WordPress is configured:
1. Test GraphQL endpoint
2. Create all required pages
3. Add content to each page
4. Set SEO fields
5. Configure Next.js environment variables
6. Test Next.js connection to WordPress

See [NEXTJS-SETUP.md](./NEXTJS-SETUP.md) for Next.js configuration.




