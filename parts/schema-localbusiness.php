<?php
/**
 * LocalBusiness Schema Markup (Sitewide)
 *
 * @package Landscape_Digital_Marketing
 */

$schema = array(
    '@context' => 'https://schema.org',
    '@type' => 'LocalBusiness',
    'name' => get_bloginfo('name'),
    'url' => home_url('/'),
    'description' => get_bloginfo('description') ?: 'Professional digital marketing services for landscaping companies',
    'address' => array(
        '@type' => 'PostalAddress',
        'addressCountry' => 'US',
    ),
    'telephone' => '', // Add phone number in theme customization
    'priceRange' => '$$',
    'areaServed' => array(
        '@type' => 'Country',
        'name' => 'United States',
    ),
    'serviceType' => 'Digital Marketing Services',
    'hasOfferCatalog' => array(
        '@type' => 'OfferCatalog',
        'name' => 'Landscaping Digital Marketing Services',
        'itemListElement' => array(
            array(
                '@type' => 'Offer',
                'itemOffered' => array(
                    '@type' => 'Service',
                    'name' => 'Landscaping Digital Marketing',
                    'url' => home_url('/landscaping-digital-marketing'),
                ),
            ),
            array(
                '@type' => 'Offer',
                'itemOffered' => array(
                    '@type' => 'Service',
                    'name' => 'Landscaping SEO',
                    'url' => home_url('/landscaping-seo'),
                ),
            ),
            array(
                '@type' => 'Offer',
                'itemOffered' => array(
                    '@type' => 'Service',
                    'name' => 'Landscaping Ads',
                    'url' => home_url('/landscaping-ads'),
                ),
            ),
            array(
                '@type' => 'Offer',
                'itemOffered' => array(
                    '@type' => 'Service',
                    'name' => 'Landscaping Websites',
                    'url' => home_url('/landscaping-websites'),
                ),
            ),
        ),
    ),
);

echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';
?>





