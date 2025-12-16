<?php
/**
 * Template Name: Service
 * Template for displaying service pages
 *
 * @package Landscape_Digital_Marketing
 */

get_header();
?>

<main class="site-main">
    <?php landscape_digital_marketing_breadcrumbs(); ?>
    
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('content-section'); ?>>
            <div class="entry-content">
                <?php the_content(); ?>
            </div>
        </article>
        
        <?php
        // Output Service schema for this page
        if (file_exists(get_template_directory() . '/parts/schema-service.php')) {
            include get_template_directory() . '/parts/schema-service.php';
        }
        ?>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>





