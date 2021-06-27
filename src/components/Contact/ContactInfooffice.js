import React from 'react'
import contact01 from '../../assets/images/contact-01.webp'
import contact02 from '../../assets/images/contact-02.webp'
import contact03 from '../../assets/images/contact-03.webp'
import contact04 from '../../assets/images/contact-04.webp'
import CareerFormRevised from './CareerFormRevised'
import map from '../../assets/images/events/map-1024x655.webp'

const ContactInfooffice = () => {
    return (
        <div className="contact-info-area pb-70">
            <div className="container">
				<div class="row">
					<div class="col-lg-4 col-sm-6">
						<hr class="new1" />
						<br />
						<h2><strong>We have a list of<br /> <br /><span class="contactopening">openings</span></strong></h2>
					</div>
					<div class="col-lg-8 col-sm-6 mt-4">
						<div class="row">
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">UI/UX Designer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">Flutter Developer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">People Manager</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">Business Manager</p>
								</div>					
							</div>	
						</div>
						<div class="row">
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">UI/UX Designer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">Flutter Developer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">People Manager</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p class="color1">Business Manager</p>
								</div>					
							</div>	
						</div>
					</div>
				</div>
				<br />
				<br />
				
	            </div>
			
			
			
			<section class="locations-main">
					<div class="row mainTabing">
						<div class="map-part col-12 col-md-8">
							<div class="accMainDiv">
								<div class="accoContain current in">
									<div class="map-block">						
										<img class='imgmap' src={map} alt="map" />
									</div>
								</div>
							</div>					
						</div>
						<div class="address-part detailTab col-12 col-md-4">
							<div class="location-box tabing current">
								<div class="contact-info">
									<h4 class="name">India</h4>
									<div class="address">#310G, Whitefield Post Office Road, Whiefield, Bangalore, Karnataka 560103, India</div>
									<div><a href="tel:+12136746665">+1 213 674 6665</a></div>
								</div>
								<div class="direction-btn">
									<a href="https://g.page/uplers?share" target="_blank" class="cta-button">Get Directions</a>
								</div>
							</div>
							<div class="location-box tabing">
								<div class="contact-info">
									<h4 class="name">Canada</h4>
									<div class="address">155-2 King Street West Unit #145 Hamilton, ON L8P 4S0 Canada</div>
									<div><a href="tel:+610872006665">+61 08 7200 6665</a></div>
								</div>
								<div class="direction-btn">
									<a href="https://goo.gl/maps/Y1JgSndRuWSJbjRR9" target="_blank" class="cta-button">Get Directions</a>
								</div>
							</div>
							<div class="location-box tabing">
								<div class="contact-info">
									<h4 class="name">New York</h4>
									<div class="address">One World Trade Center, 285 Fulton Street Suite 8500, New York City NY 10007, USA</div>
									<div><a href="tel:+31647076508">+31 23 204 9966</a></div>
								</div>
								<div class="direction-btn">
									<a href="https://goo.gl/maps/dqQRhH6JDN5SUwG3A" target="_blank" class="cta-button">Get Directions</a>
								</div>
							</div>
							<div class="location-box tabing">
								<div class="contact-info">
									<h4 class="name">New Zealand</h4>
									<div class="address">Level 26, HSBC Tower, 188 Quay Street, Auckland, AUK 1010 New Zealand</div>
									<div><a href="tel:+917940324566">+91 79 40324566</a></div>
								</div>
								<div class="direction-btn">
									<a href="https://goo.gl/maps/B4tJbY7KLmuMYfW88" target="_blank" class="cta-button">Get Directions</a>
								</div>
							</div>
						</div>
					</div>
				</section>			
        </div>
    )
}
export default ContactInfooffice