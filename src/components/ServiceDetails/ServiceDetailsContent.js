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
							<br/><br/>
							</div>
														
							<div class="row">
								<div class="col-md-6">
									<div class="card-container">
										<span class="pro">PRO</span>
										<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
										<h3>Ricky Park</h3>
										<h6>New York</h6>
										<p>User interface designer and <br/> front-end developer</p>
										<div class="buttons">
											<button class="primary">
												Message
											</button>
											<button class="primary ghost">
												Following
											</button>
										</div>
										<div class="skills">
											<h6>Skills</h6>
											<ul>
												<li>UI / UX</li>
												<li>Front End Development</li>
												<li>HTML</li>
												<li>CSS</li>
												<li>JavaScript</li>
												<li>React</li>
												<li>Node</li>
											</ul>
										</div>
									</div>
								</div>
								
								<div class="col-md-6">
									<div class="card-container">
										<span class="pro">PRO</span>
										<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
										<h3>Ricky Park</h3>
										<h6>New York</h6>
										<p>User interface designer and <br/> front-end developer</p>
										<div class="buttons">
											<button class="primary">
												Message
											</button>
											<button class="primary ghost">
												Following
											</button>
										</div>
										<div class="skills">
											<h6>Skills</h6>
											<ul>
												<li>UI / UX</li>
												<li>Front End Development</li>
												<li>HTML</li>
												<li>CSS</li>
												<li>JavaScript</li>
												<li>React</li>
												<li>Node</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
						<div class="row">
							<div class="card">
  <div class="header">
    <h2>Drop us a line...</h2>
    <p>Drop us a message and we will contact you back shortly</p>
   <svg version="1.1" id="Layer"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 113 120" xml:space="preserve" preserveAspectRatio="none">
<style type="text/css">
	.st0{fill:  #fff; stroke: rgba(0,0,0,0.2); stroke-width: 2px;}
</style>
<g>
	<path class="st0" d="M93.8,87.4c16.7-28.2,23.9-51,11.5-70.9C100.1,8.2,92.4,4.3,84,2.7c6.1,12.9,6.3,28.3-0.4,41.7
		c5,2.6,8.3,7.9,8.3,13.9c0,8.7-7,15.7-15.7,15.7c-4.3,0-8.2-1.7-11.1-4.6l-19,14.8c0.7,1.4,0.4,3.1-0.9,4.1l-4,3.1
		c-1.4,1.1-3.5,0.8-4.5-0.6l-0.1-0.1c-1.1-1.4-0.8-3.5,0.6-4.5l4-3.1c1.3-1,3-0.9,4.2,0.2l18.9-14.8c-2.4-2.8-3.8-6.4-3.8-10.3
		c0-8.7,7-15.7,15.7-15.7c0.5,0,1,0,1.5,0.1c6.9-13.1,6.2-28.5-1-40.7c-10-0.5-20.3,1.2-28.4,2.2C31,6.2,26.8,1,26.8,1
		c-3.8,11.5,5.9,17,5.9,17s1.7-0.8-2.4,4.2c-4.1,5.1-5.2,15.6-5.8,18.4c-0.6,2.8,1.6,2.7,2.3,5.8c0.7,3.1-9.2,16.4-10.2,19.7
		c-1,3.3,8.1,6.9,8.1,6.9l-1.4,4.5c0.7,2.5,13.9,2,13.9,2c-2.8,4.2-10.5,3.7-10.5,3.7l-2.3,1.6c0,0,1.3,1.7,2.4,2.7
		c1.1,1,1.1,6.2,1.1,6.2c-1.3,8.6,1,10.3,5.9,12.5s12.6-3.1,12.6-2.1c0,1-0.1,19.8-0.1,19.8c29.7,14.6,51.4-6.4,51.4-6.4
		C95,109.8,93.8,87.4,93.8,87.4z"/>
</g>
</svg>


  </div>
  <form class="form-wrap" id="md-form" autocomplete="off" method="get">
    <div class="input-wrap">

      <i class="material-icons">person</i>
      <label for="a">Name</label>
      <input class="input" type="text" id="a" placeholder="First and Last name" value="" />

    </div>

    <div class="input-wrap">
      <i class="material-icons">email</i>
      <label for="b">E-mail</label>
      <input class="input" type="email" id="b" placeholder="email@mail.com" value="" />

    </div>


    <div class="input-wrap">
      <i class="material-icons">mic</i>
      <label for="c">Message</label>
      <textarea class="input" id="c" placeholder="Write what you feel" /></textarea>
    </div>

    <div class="input-wrap">
      <input type="checkbox" id="d">
      <label for="d">You agree on our terms and conditions</label>
    </div>

    <div class="input-wrap">
      <button id="confirm" type="submit">Submit</button>
    </div>

  </form>

  <div class="ending">
    <div>
      <i class="material-icons">check</i>
    </div>

    <div>
      <h2>Your Message has been sent successfuly</h2>
    </div>

  </div>
  <!-- end of ending -->

</div>
<!-- end of Card -->
						</div>
					</div>
				</div>
				<br/><br/>
				<div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="achievements-hex d-flex align-items-center justify-content-center">
                        <h2>Our Work</h2>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="achievement-col col_1 mr-lg-5 mb-5">
                        <img src="img/mobile-app/covid-kavach-app.webp" alt="" class="img-fluid"/>
                        <h3 class="achievement-title">Covid Kavach App</h3>
                        <p class="achievement-info">Support Covid - successful implementation of COVID KAVACH An award winning app for clinical trial participants symptoms tracking.  </p>
                    </div>
                    <div class="achievement-col col_2 mr-lg-5 col_2 mb-5">
                        <img src="img/mobile-app/rotary-app.webp" alt="" class="img-fluid"/>
                        <h3 class="achievement-title">Rotary App</h3>
                        <p class="achievement-info">Best app for Rotary members - Stay connected with Rotary members, clubs, districts, Rotary events and projects. All in one place.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="achievement-col col_3 mr-lg-5 mb-5">
                        <img src="img/mobile-app/gobazzar-app.webp" alt="" class="img-fluid"/>
                        <h3 class="achievement-title">BuyAt/ GoBazzar app</h3>
                        <p class="achievement-info">Retailer Consumer connect App - Get all shop offers in one place at a single click. Best integrator app between shops and customers</p>
                    </div><br class="d-none d-lg-block"/><br class="d-none d-lg-block"/>
                    <div class="achievement-col col_4 mr-lg-5">
                        <img src="img/mobile-app/iscout-cnc.webp" alt="" class="img-fluid"/>
                        <h3 class="achievement-title">iScout CNC</h3>
                        <p class="achievement-info">Control machines remotely - Track machine downtime, get timely alerts, monitor production output and track the CNC Machine line in your factory.</p>
                    </div>
                </div>


				</div>
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