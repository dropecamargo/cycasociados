<?php
/**
 * CycAsociados functions and definitions
 *
 * @package cycasociados
 */


if ( ! function_exists( 'cycasociados_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function cycasociados_setup() {
	remove_theme_mod( 'parallax_one_logos_content' );
}
endif; // cycasociados_setup
add_action( 'after_setup_theme', 'cycasociados_setup' );

// get styles of parent theme
function child_enqueue_styles() {
	$parent_style = 'parent-style';
	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( $parent_style ));
}
add_action( 'wp_enqueue_scripts', 'child_enqueue_styles',99);

if ( get_stylesheet() !== get_template() ) {
	add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
		 update_option( 'theme_mods_' . get_template(), $value );
		 return $old_value; // prevent update to child theme mods
	}, 10, 2 );
	add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
		return get_option( 'theme_mods_' . get_template(), $default );
	} );
}

function remove_section_customize_register( $wp_customize ) {
	$wp_customize->remove_control("Clients");
}
add_action( 'customize_register', 'remove_section_customize_register' );
