<?php
/**
 *
 * Template Name: Página base cyc
 */

	get_header(); 
?>

	</div>
	<!-- /END COLOR OVER IMAGE -->
</header>
<!-- /END HOME / HEADER  -->

<div id="content" class="content-warp" style="background:#F2F2F2">
	<div class="container">

		<div id="primary" class="content-area col-md-12">
			<main itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage" id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; // end of the loop. ?>

			</main><!-- #main -->
		</div><!-- #primary -->
	</div>
</div><!-- .content-wrap -->
<?php parallax_one_get_template_part('sections/parallax_one_contact_info_section'); ?>	
<?php parallax_one_get_template_part('sections/parallax_one_map_section'); ?>	
<?php get_footer(); ?>
