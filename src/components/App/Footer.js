import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.webp"
import footerMap from "../../assets/images/footer-map.webp"

const Footer = () => {

    return (
        <footer className="footer-area bg-color">
			<div class="container">
						<div class="row">
							<div class="col-12 col-md-8 footer-menu">
								<div class="row">
									<div class="col-12 col-md-3 menuBox">
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
									<div class="col-12 col-md-3 menuBox">
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
									<div class="col-12 col-md-3 menuBox">
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
									<div class="col-12 col-md-3 menuBox">
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
							</div>
							<div class="col-12 col-md-4 footer-right">
									<div class="subscribe">
										<div class="inputbox">
											<form>
												<div class="input">
													<input type="hidden" name="action" value="newsletter_subscription" />
													<input type="hidden" name="page_title" value="Contact" />
													<input type="text" placeholder="Work Email*" name="email" />
												</div>
			
												<button class=" mt-2 mb-2 btn btn-warning" type="submit" name="subscribeBtn">subscribe</button>
											
											</form>
										</div>
									</div>
									<div class=" mt-3 footer-contact calla">
										<div class="call">
											<a href="tel:+917940324566">+91 79 4032 4566</a>							
										</div>
										<div class=" email">
											<a href="mailto:connect@webure.in">connect@webure.in</a>
										</div>							
									</div>
									<div class="social">
										<h5 class="s-title">Follow:</h5>
										<ul class="row follow-liststyle">
											<li class="p-1"><a href="https://www.facebook.com/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-facebook"></i></a></li>
										    <li class="p-1"><a href="https://twitter.com/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-twitter"></i></a></li>
											<li class="p-1"><a href="https://www.linkedin.com/company/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-linkedin"></i></a></li>
											<li class="p-1"><a href="https://www.instagram.com/weareuplers" target="_blank" rel="nofollow"><i class="fa fa-instagram"></i></a></li>
											<li class="p-1"><a href="https://www.youtube.com/c/Uplers" target="_blank" rel="nofollow"><i class="fa fa-youtube-play"></i></a></li>
										</ul>		
									</div>
							</div>
						</div>
							
						
						<div class="row bar-location">
						<div class="col-12 col-md-6 col-lg-3 mt-3">
							<h3 class="footer-heading pb-2">India</h3>
							<h4 class="footer-list">Bangalore</h4>
							<div class="footer-text">#310G, Whitefield Post Office Road, Whiefield, Bangalore, Karnataka 560103, India</div>
                		</div>
						<div class="col-12 col-md-6 col-lg-3 mt-3">
							<h3 class="footer-heading pb-2">Cannada</h3>
							<h4 class="footer-list">Hamilton</h4>
							<div class="footer-text">155-2 King Street West Unit #145 Hamilton, ON L8P 4S0 Canada</div>
                		</div>
						<div class="col-12 col-md-6 col-lg-3 mt-3">
							<h3 class="footer-heading pb-2">New York</h3>
							<h4 class="footer-list">New York City</h4>
							<div class="footer-text">One World Trade Center, 285 Fulton Street Suite 8500, New York City NY 10007, USA</div>
                		</div>
						<div class="col-12 col-md-6 col-lg-3 mt-3">
							<h3 class="footer-heading pb-2">New Zealand</h3>
							<h4 class="footer-list">Auckland</h4>
							<div class="footer-text">Level 26, HSBC Tower, 188 Quay Street, Auckland, AUK 1010 New Zealand</div>
                		</div>

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