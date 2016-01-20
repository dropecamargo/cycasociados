<!-- =========================
 SECTION: CONTACT INFO
============================== -->
<?php
	$parallax_one_contact_info_item = get_theme_mod('parallax_one_contact_info_content',
		json_encode(
			array(
					array("icon_value" => "icon-basic-mail" ,"text" => "contact@site.com", "link" => "#" ),
					array("icon_value" => "icon-basic-geolocalize-01" ,"text" => "Company address", "link" => "#" ),
					array("icon_value" => "icon-basic-tablet" ,"text" => "0 332 548 954", "link" => "#" )
				)
		)
	);

	if( !parallax_one_general_repeater_is_empty($parallax_one_contact_info_item) ){
		$parallax_one_contact_info_item_decoded = json_decode($parallax_one_contact_info_item);
	?>
			<div class="contact-info" id="contactinfo" role="region" aria-label="<?php esc_html_e('Contact Info','parallax-one'); ?>">
				<div class="section-overlay-layer">
					<div class="section-header">
						<h2 class="dark-text">Contáctenos</h2><div class="colored-line"></div>
					</div>
					<div class="container">

						<div class="row">
							<div class="col-md-6">
								<!-- CONTACT INFO -->
								<div class="row contact-links">

									<?php

										if(!empty($parallax_one_contact_info_item_decoded)){

												foreach($parallax_one_contact_info_item_decoded as $parallax_one_contact_item){
													if(!empty($parallax_one_contact_item->link)){
														echo '<div class="contact-link-box col-xs-12"><div class="container-contact-item">';
														if(!empty($parallax_one_contact_item->icon_value)){
															echo '<div class="icon-container"><span class="'.esc_attr($parallax_one_contact_item->icon_value).' colored-text"></span></div>';
														}
														if(!empty($parallax_one_contact_item->text)){
															echo '<a href="'.$parallax_one_contact_item->link.'" class="strong">'.$parallax_one_contact_item->text.'</a>';
														}
														echo '</div></div>';
													} else {

														echo '<div class="contact-link-box  col-xs-12">';
														if(!empty($parallax_one_contact_item->icon_value)){
															echo '<div class="icon-container"><span class="'.esc_attr($parallax_one_contact_item->icon_value).' colored-text"></span></div>';
														}
														if(!empty($parallax_one_contact_item->text)){
															if(function_exists('icl_translate')){
																echo '<a href="" class="strong">'.icl_translate('Contact',$parallax_one_contact_item->id.'_contact',esc_attr($parallax_one_contact_item->text)).'</a>';
															} else {
																echo '<a href="" class="strong">'.esc_attr($parallax_one_contact_item->text).'</a>';
															}
														}
														echo '</div>';
													}
												}
										}

									?>
								</div><!-- .contact-links -->
							</div>
							<div class="col-md-6">
								<?php
									$cycasociados_contact_form_shortcode = get_theme_mod('cycasociados_contact_form_shortcode');
								?>
								<?php
									if(!empty($cycasociados_contact_form_shortcode)) {
										echo do_shortcode( $cycasociados_contact_form_shortcode );
									}
								?>
								<?php echo do_shortcode( '[pirate_forms]' ) ?>
							</div>
						</div>

					</div><!-- .container -->
				</div>
			</div><!-- .contact-info -->
<?php
	}
?>
