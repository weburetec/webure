import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.webp"
import footerMap from "../../assets/images/footer-map.webp"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">


<div class="container">
			<div class="row">
				<div class="col-sm-8 footer-menu">
					<div class="row">
						<div class="col-sm-3 menuBox">
							<h5 class="tap-click">Our Company</h5>
							<ul class="tap-content">
								<li><a href="https://www.uplers.com/about-us/">About Us</a></li>

								<li><a href="https://www.uplers.com/pricing/">Pricing</a></li>

								<li><a href="https://www.uplers.com/business-referral-program/">Referral Program</a></li>

								<li><a href="https://www.uplers.com/giving-back-to-community/">#GivingBackToCommunity</a></li>

								<li><a href="https://www.uplers.com/employee-referral/">Employee Referral</a></li>

								<li><a href="https://www.uplers.com/culture/">Our Culture</a></li>

								<li><a href="https://www.uplers.com/corporate-social-responsibility/">Corporate Social Responsibility</a></li>

								<li><a href="https://www.uplers.com/careers/">Careers</a></li>

								<li class="active"><a href="https://www.uplers.com/contact-us/">Contact Us</a></li>

								<li><a href="https://www.uplers.com/faqs/">FAQs</a></li>
							</ul>
						</div>
						<div class="col-sm-3 menuBox">
							<h5 class="tap-click"><a href="https://www.uplers.com/offshore-remote-teams/">Build Your Team</a></h5>
							<ul class="tap-content">
								<li><a href="https://www.uplers.com/how-it-works/">How It Works</a></li>

								<li><a href="https://www.uplers.com/why-offshore/">Why Offshore</a></li>
								
								<li><a href="https://www.uplers.com/offshore-pricing-estimator/">Pricing Estimator</a></li>

								<li><a href="https://www.uplers.com/video-profiles/">Video Profiles</a></li>

								<li><a href="https://www.uplers.com/about-uplers/">About Uplers</a></li>

								<li><a href="https://www.uplers.com/category/remote-team/">Remote Blogs</a></li>

								<li><a href="https://www.uplers.com/are-you-offshore-team-ready/">Take the Assessment</a></li>
							</ul>
						</div>
						<div class="col-sm-3 menuBox">
							<h5 class="tap-click">Services</h5>
							<ul class="tap-content">
								<li><a href="https://www.uplers.com/seo-services/">SEO Services</a></li>

								<li><a href="https://www.uplers.com/search-engine-marketing/">SEM Services</a></li>

								<li><a href="https://www.uplers.com/email-marketing/">Email Marketing</a></li>

								<li><a href="https://www.uplers.com/design-services/">Design Services</a></li>

								<li><a href="https://www.uplers.com/front-end-development-services/">Front-end Development</a></li>

								<li><a href="https://www.uplers.com/wordpress-development/">WordPress Development</a></li>


								<li><a href="https://www.uplers.com/hubspot-development/">HubSpot Development</a></li>

								<li><a href="https://www.uplers.com/dedicated-marketo-team/">Marketo Automation</a></li>

								<li><a href="https://www.uplers.com/salesforce-marketing-cloud-team/">Salesforce Automation</a></li>
							</ul>
						</div>
						<div class="col-sm-3 menuBox">
							<h5 class="tap-click">Resources</h5>
							<ul class="tap-content">
								<li><a href="https://www.uplers.com/blog/">Blogs</a></li>

								<li><a href="https://www.uplers.com/digital-mountaineers/">Podcast</a></li>

								<li><a href="https://www.uplers.com/case-studies/">Case Studies</a></li>

								<li><a href="https://www.uplers.com/testimonials/">Testimonials</a></li>

								<li><a href="https://www.uplers.com/ebooks/">eBooks</a></li>

								<li><a href="https://www.uplers.com/infographics/">Infographics</a></li>

							</ul>
						</div>
					</div>

					<div class="more-services">
						<h3 class="more-click">More Services<span class="arrow"></span></h3>
						<div class="more-content">
							<div class="row">
								<div class="col-sm-3 menuBox">
									<h5 class="tap-click">MarTech Services</h5>
									<ul class="tap-content">
										<li><a href="https://www.uplers.com/ppc-management-services/">PPC Management</a></li>

										<li><a href="https://www.uplers.com/local-seo-services/">Local SEO Services</a></li>

										<li><a href="https://www.uplers.com/shopify-development-services/">Shopify Development</a></li>

										<li><a href="https://www.uplers.com/woocommerce-development-services/">WooCommerce Development</a></li>

										<li><a href="https://www.uplers.com/link-building-services/">Link Building Services</a></li>

										<li><a href="https://www.uplers.com/guest-posting-services/">Guest Posting Services</a></li>

										
									</ul>
								</div>
								<div class="col-sm-3 menuBox">
									<h5 class="tap-click">White Label Services</h5>
									<ul class="tap-content">
										<li><a href="https://www.uplers.com/white-label-agency/">White Label Services</a></li>
										<li><a href="https://www.uplers.com/white-label-digital-marketing-services/">White Label Digital Marketing</a></li>
										<li><a href="https://www.uplers.com/white-label-web-design-development-services/">White Label Web Development &amp; Design</a></li>
									</ul>
								</div>
								<div class="col-sm-3 menuBox">
									<h5 class="tap-click">Hire Developers</h5>
									<ul class="tap-content">
										<li><a href="https://www.uplers.com/hire-front-end-developers/">Hire Front-end Developer</a></li>

										<li><a href="https://www.uplers.com/hire-wordpress-developers/">Hire WordPress Developer</a></li>

										<li><a href="https://www.uplers.com/hire-shopify-developers/">Hire Shopify Developer</a></li>

										<li><a href="https://www.uplers.com/hire-hubspot-developer/">Hire HubSpot Developer</a></li>

										<li><a href="https://www.uplers.com/hire-woocommerce-developer/">Hire WooCommerce Developer</a></li>
									</ul>
								</div>
								<div class="col-sm-3 menuBox">
									<h5 class="tap-click">Hire Marketers</h5>
									<ul class="tap-content">
										<li><a href="https://www.uplers.com/hire-seo-expert/">Hire SEO Expert</a></li>
										<li><a href="https://www.uplers.com/hire-ppc-expert/">Hire PPC Expert</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>


				</div>

				<div class="col-sm-4 footer-right">

						<!-- subscribe START -->
						<div class="subscribe">
							<div class="inputbox">
								<form id="newslater-form">
									<div class="input">
										<input type="hidden" name="action" value="newsletter_subscription">
										<input type="hidden" name="page_title" value="Contact">
										<input type="text" placeholder="Work Email*" name="email">
									</div>
									<button class="cta-button" type="submit" name="subscribeBtn">subscribe</button>
									<div class="form-loader" style="display: none;"><img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/loader.svg" alt="loader" /></div>									<div class="ajax-message"></div>
								</form>
							</div>
						</div>
						<!-- subscribe END -->

						<!-- footer-contact START -->
						<div class="footer-contact">
							<div class="call">
								<a href="tel:+917940324566">+91 79 4032 4566</a>							</div>
							<div class="email"><a href="mailto:hello@uplers.com">hello@uplers.com</a></div>							
						</div>
						<!-- footer-contact END -->

						<!-- social START -->
						<div class="social">
							<h5 class="s-title">Follow:</h5>
							<ul><li><a href="https://www.facebook.com/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-facebook"></i></a></li><li><a href="https://twitter.com/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.linkedin.com/company/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-linkedin"></i></a></li><li><a href="https://www.instagram.com/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-instagram"></i></a></li><li><a href="https://www.youtube.com/c/Uplers" target="_blank" rel="nofollow"><i class="fa fa-youtube-play"></i></a></li></ul>						</div>
						<!-- social END -->
				</div>
			</div>
				
			<div class="ftr-locations">
				<ul>
					<li>
						<h3 class="coutry-name tap-click">United States</h3>
						<div class="tap-content">
							<h4 class="area">San Diego</h4>
							<div class="address">
								<a href="https://g.page/uplers?share" target="_blank">9655 Granite Ridge <br> Dr Suite 200, CA 92123</a>
							</div>
						</div>
					</li>
					<li>
						<h3 class="coutry-name tap-click">Australia</h3>
						<div class="tap-content">
							<h4 class="area">Sydney</h4>
							<div class="address">
								<a href="https://goo.gl/maps/hXgD6hPTjBzKESW59" target="_blank">Level 6, 241 Commonwealth <br> Street, Surry Hills, NSW 2010</a>
							</div>
						</div>
					</li>
					<li>
						<h3 class="coutry-name tap-click">Netherlands</h3>
						<div class="tap-content">
							<h4 class="area">Amsterdam</h4>
							<div class="address">
								<a href="https://goo.gl/maps/PmenbQADqdCug5YTA" target="_blank">Wilhelminastraat 14, 2011VM, <br> Haarlem, The Netherlands
								</a>
							</div>
						</div>
					</li>
					<li>
						<h3 class="coutry-name tap-click">India</h3>
						<div class="tap-content">
							<h4 class="area">Ahmedabad</h4>
							<div class="address">
								<a href="https://goo.gl/maps/aDb6AHgEz5S9a8a9A" target="_blank">Uplers House, Next to Kalasagar Mall, Sattadhar Cross Roads, Ahmedabad 380061</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
				
			<div class="copyrights">© 2021 Webure Technologies. All rights reserved. <a href="https://www.uplers.com/privacy-policy/" class="policy">Privacy Policy</a> &nbsp;|&nbsp; <a href="https://www.uplers.com/isms-policy/" class="policy">ISMS Policy</a>
			</div>
		</div>


            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;