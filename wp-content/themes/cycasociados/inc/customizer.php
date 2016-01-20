<?php
function parallax_one_cycasociados_customize_register( $wp_customize ) {
// $wp_customize->add_setting( 'parallax_image_child' );
// $wp_customize->add_control(
//     new WP_Customize_Image_Control( $wp_customize,'parallax_image_child',
//         array(
//             'label' => __('New parallax control from child theme','parallax-one'),
//             'section' => 'parallax_one_ribbon_section',
//             'priority'   => 15
//         )
//     )

// );

	/* Contact Form ShortCode  */
	$wp_customize->add_setting( 'cycasociados_contact_form_shortcode', array(
		'default' => '',
		'sanitize_callback' => 'parallax_one_sanitize_text'
	));
	$wp_customize->add_control( 'cycasociados_contact_form_shortcode', array(
		'label'    => esc_html__( 'Contact form shortcode', 'parallax-one' ),
		'description' => __('Create a form, copy the shortcode generated and paste it here. We recommend <a href="https://wordpress.org/plugins/contact-form-7/">Contact Form 7</a> but you can use any plugin you like.','parallax-one'),
		'section'  => 'parallax_one_contact_section',
		'active_callback' => 'parallax_one_show_on_front',
		'priority'    => 20
	));
}
add_action( 'customize_register', 'parallax_one_childtheme_customize_register' );
