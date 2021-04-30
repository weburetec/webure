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
					</div>
					<div className="col-lg-4 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
						<ContactForm />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-12">
						<div class="achievements-hex d-flex align-items-center justify-content-center font-color-white">
							<h4><strong>Our Work</strong></h4>
						</div>
					</div>
					<div className="col-lg-4 col-md-12">
						<div class="achievement-col col_1 mr-lg-5 mb-5">
							<img src="https://www.dimakhconsultants.com/img/mobile-app/covid-kavach-app.webp" alt="" class="img-fluid"/>
							<h3 class="achievement-title">Kavach App</h3>
							<p class="achievement-info">Support Covid - successful implementation of COVID KAVACH An award winning app for clinical trial participants symptoms tracking.  </p>
						</div>
					</div>
					<div className="col-lg-4 col-md-12">
						<div class="achievement-col col_2 mr-lg-5 col_2 mb-5">
							<img src="https://www.dimakhconsultants.com/img/mobile-app/rotary-app.webp" alt="" class="img-fluid"/>
							<h3 class="achievement-title">Rotary App</h3>
							<p class="achievement-info">Best app for Rotary members - Stay connected with Rotary members, clubs, districts, Rotary events and projects. All in one place.</p>
						</div>
					</div>
                </div>
				<div className="row">
					<div className="col-lg-4 col-md-12">
					</div>
					<div className="col-lg-4 col-md-12">
						<div class="achievement-col col_3 mr-lg-5 mb-5">
							<img src="https://www.dimakhconsultants.com/img/mobile-app/gobazzar-app.webp" alt="" class="img-fluid"/>
							<h3 class="achievement-title">GoBazzar app</h3>
							<p class="achievement-info">Retailer Consumer connect App - Get all shop offers in one place at a single click. Best integrator app between shops and customers</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-12">
						<div class="achievement-col col_4 mr-lg-5">
							<img src="https://www.dimakhconsultants.com/img/mobile-app/iscout-cnc.webp" alt="" class="img-fluid"/>
							<h3 class="achievement-title">iScout CNC</h3>
							<p class="achievement-info">Control machines remotely - Track machine downtime, get timely alerts, monitor production output and track the CNC Machine line in your factory.</p>
						</div>
					</div>
                </div>
			</div>
        </section>
		
		<section class="presence-sec section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 ml-lg-5">
                    <h2 class="sec-head">Our Clients</h2>
                    <p class="pt-lg-4">Our Work, Projects and Portfolio speaks for itself. With our strong
                        global delivery model, we serve clients worldwide across USA, UK,
                        Europe, Singapore, Australia, Canada, Dubai - UAE, Sri Lanka. Our
                        spectrum of services include graphic designs, Social Media Designs
                        and websites to highly complex database driven applications,
                        mobile apps, digital marketing projects and global server hosting.
                        Dimakh Consultants can design and build an end-to-end digital
                        solutions that will work for you and your clients.</p>
                </div>
                <div class="col-lg-12 text-center">
                    <img src="https://www.dimakhconsultants.com/img/web-design/design-services/our-presence-map.png" alt="DCPL Presence Map" title="DCPL Presence Map" class="img-fluid mt-4"/>
                </div>
                <div class="col-lg-12 col-md-12 mx-auto">
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