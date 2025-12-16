<?php
/**
 * Service Schema Markup (Per Service Page)
 *
 * @package Landscape_Digital_Marketing
 */

// This file is included within the loop, so we can use global $post
global $post;

if (!$post) {
    return;
}

$service_name = get_the_title($post->ID);
$service_url = get_permalink($post->ID);
$service_content = get_post_field('post_content', $post->ID);
$service_description = wp_trim_words(wp_strip_all_tags($service_content), 30, '...');

$schema = array(
    '@context' => 'https://schema.org',
    '@type' => 'Service',
    'name' => $service_name,
    'description' => $service_description,
    'provider' => array(
        '@type' => 'LocalBusiness',
        'name' => get_bloginfo('name'),
        'url' => home_url('/'),
    ),
    'areaServed' => array(
        '@type' => 'Country',
        'name' => 'United States',
    ),
    'serviceType' => $service_name,
    'url' => $service_url,
);

echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';
?>

