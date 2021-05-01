import React from 'react'
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
import ContactForm from './ContactForm'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'
import bannerhex from '../../assets/images/banner-hex.webp'

const CareerDetailsContent = () => {
    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
						<h2 class="font-size-6 mb-0"><strong>ROI Driven digital marketing agency  in Bengaluru, India</strong></h2>
						<div class="ahl"></div>
						<span class="font-size-3 text-gray line-height-2">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential.</span>
						<br/>				
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<h2 class="font-size-8 mb-0"><strong>Get more leads and sales with Digital Marketing</strong></h2>						
							</div>						
							<div className="col-lg-8 col-md-12">
								<span class="font-size-8 mb-0">Do you have an idea for an app and are looking for a trusted app design and development agency in India ? Look no further ! The experienced digital marketing professionals at Webure Technologies work with you to develop a media strategy, conduct media research, create a media plan and ultimately help you to launch and optimize your online digital campaign. Webure Technologies offers complete Digital Marketing package including web design , website development, Internet marketing. Our range of internet marketing services includes search engine optimization (SEO), Google Ads, email marketing solution etc.</span>						
							</div>						
						</div>
						<br/><br/>
						<div className="row">						
							<div className="col-lg-2 col-md-12">
								<div class="services-box">
									<div class="service-warp wrap1">
										<a href="https://www.dimakhconsultants.com/digital-marketing/google-partners-certified-company-pune" class="service service1 bg-blue">
											<img src="https://www.dimakhconsultants.com/img/digital-marketing/Google-partner.png" alt=""/>
											<h5>Google Partner</h5>
										</a>									
									</div>
								</div>
							</div>				
							<div className="col-lg-2 col-md-12">
								<div class="services-box">
									<div class="service-warp wrap1">
										<a href="https://www.dimakhconsultants.com/digital-marketing/seo-marketing-company-pune-india" class="service service2 bg-limegreen">
											<img src="https://www.dimakhconsultants.com/img/digital-marketing/Search-engine-optimization.png" alt=""/>
											<h5>Search Engine Optimization</h5>
										</a>								
									</div>
								</div>
							</div>								
							<div className="col-lg-2 col-md-12">
								<div class="services-box">
									<div class="service-warp wrap1">
										<a href="https://www.dimakhconsultants.com/digital-marketing/conversion-rate-optimisation-company-pune-india" class="service service3 bg-skyblue">
											<img src="https://www.dimakhconsultants.com/img/digital-marketing/Conversion-rate-optimization.png" alt=""/>
											<h5>Conversion Rate Optimization </h5>
										</a>							
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-12">
								<div class="services-box">
									<div class="service-warp wrap1">
										<a href="https://www.dimakhconsultants.com/digital-marketing/ppc-marketing-company-pune-india" class="service service4 bg-yellow">
											<img src="https://www.dimakhconsultants.com/img/digital-marketing/PPC-marketing.png" alt=""/>
											<h5>PPC Marketing </h5>
										</a>						
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-12">
								<div class="services-box">
									<div class="service-warp wrap1">
										<a href="https://www.dimakhconsultants.com/digital-marketing/ppc-marketing-company-pune-india" class="service service4 bg-yellow">
											<img src="https://www.dimakhconsultants.com/img/digital-marketing/PPC-marketing.png" alt=""/>
											<h5>PPC Marketing </h5>
										</a>						
									</div>
								</div>
							</div>									
							<div className="col-lg-2 col-md-12">
								<div class="services-box">
									<div class="service-warp wrap1">
										<a href="https://www.dimakhconsultants.com/digital-marketing/ppc-marketing-company-pune-india" class="service service4 bg-yellow">
											<img src="https://www.dimakhconsultants.com/img/digital-marketing/PPC-marketing.png" alt=""/>
											<h5>PPC Marketing </h5>
										</a>						
									</div>
								</div>
							</div>						
						</div>
						<div class="row">
							<div class="col-12">
								<h6 class="sec-head">Why Webure Technologies</h6>
								<p>We are a full service web based interactive marketing agency that develops world-class websites and online internet campaigns (Google Adwords). Our experts work in harmony to strategically integrate cutting-edge technology solutions with a sensible Internet marketing approach, providing superior brand and user experiences that deliver results to our global clients.</p>
								<p>Webure Technologies New York brings effective tools for making your website popular on the Internet with the help of a planned strategy for your web marketing efforts. Effective Web Marketing is a combination of many important aspects of the Web and Internet techniques. </p>
							</div>
							<br/><br/>
							<div class="col-12">
								<div className="col-lg-4 col-md-12">
									<div class="achievements-hex d-flex align-items-center justify-content-center font-color-white">
										<h4><strong>Our Work</strong></h4>
									</div>
								</div>

								<div class="col-6">
									<div class="achievement-col col_1 mr-lg-5 mb-5">
										<img src="https://www.dimakhconsultants.com/img/mobile-app/covid-kavach-app.webp" alt="" class="img-fluid"/>
										<h3 class="achievement-title">Kavach App</h3>
										<p class="achievement-info">Support Covid - successful implementation of COVID KAVACH An award winning app for clinical trial participants symptoms tracking.  </p>
									</div>
								</div>
								<div class="col-6">
									<div class="achievement-col col_1 mr-lg-5 mb-5">
										<img src="https://www.dimakhconsultants.com/img/mobile-app/covid-kavach-app.webp" alt="" class="img-fluid"/>
										<h3 class="achievement-title">Kavach App</h3>
										<p class="achievement-info">Support Covid - successful implementation of COVID KAVACH An award winning app for clinical trial participants symptoms tracking.  </p>
									</div>
								</div>
								<div class="col-6">
									<div class="achievement-col col_1 mr-lg-5 mb-5">
										<img src="https://www.dimakhconsultants.com/img/mobile-app/covid-kavach-app.webp" alt="" class="img-fluid"/>
										<h3 class="achievement-title">Kavach App</h3>
										<p class="achievement-info">Support Covid - successful implementation of COVID KAVACH An award winning app for clinical trial participants symptoms tracking.  </p>
									</div>
								</div>
								<div class="col-3">
									<div class="achievement-col col_1 mr-lg-5 mb-5">
										<img src="https://www.dimakhconsultants.com/img/mobile-app/covid-kavach-app.webp" alt="" class="img-fluid"/>
										<h3 class="achievement-title">Kavach App</h3>
										<p class="achievement-info">Support Covid - successful implementation of COVID KAVACH An award winning app for clinical trial participants symptoms tracking.  </p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
						<ContactForm />
					</div>
				</div>
				<br/><br/>
				<div class="row">
					<div className="col-lg-2 col-md-12">
						<div class="achievements-hex d-flex align-items-center justify-content-center font-color-white">
							<h4><strong>Our Client</strong></h4>
						</div>
					</div>
					<div className="col-lg-10 col-md-12">
						<p class="pt-lg-4">Our Work, Projects and Portfolio speaks for itself. With our strong global delivery model, we serve clients worldwide across USA, UK, Europe, Singapore, Australia, Canada, Dubai - UAE, Sri Lanka. Our spectrum of services include graphic designs, Social Media Designs and websites to highly complex database driven applications, mobile apps, digital marketing projects and global server hosting. Dimakh Consultants can design and build an end-to-end digital solutions that will work for you and your clients.</p>
					</div>
					<img src="https://www.dimakhconsultants.com/img/web-design/design-services/our-presence-map.png" alt="DCPL Presence Map" title="DCPL Presence Map" class="img-fluid mt-4"/>
					<div class="row">
						<div class="industries-serve text-center mt-5">
							<h4>Industries We Serve:</h4>
							<ul class="list-unstyled common-list">
								<li> Automobiles</li>
								<li> Banking</li>
								<li> Financial Services</li>
								<li> Infrastructure</li>
								<li> IT &amp; ITES</li>
								<li> Manufacturing</li>
								<li> Pharmaceuticals</li>
								<li> Power</li>
								<li> Real Estate</li>
								<li> Telecommunications</li>
								<li> Textiles</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </section>
    )
}

export default CareerDetailsContent