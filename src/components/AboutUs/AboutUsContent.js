import React from 'react'
import { Link } from 'gatsby'
import aboutImage from '../../assets/images/about/about-img5.webp'
import starIcon from '../../assets/images/star-icon.webp'
import icon4 from '../../assets/images/icons/icon4.webp'
import icon5 from '../../assets/images/icons/icon5.webp'
import icon6 from '../../assets/images/icons/icon6.webp'
import icon7 from '../../assets/images/icons/icon7.webp'
import shape1 from '../../assets/images/shape/circle-shape1.webp'
import bannerhex from '../../assets/images/about/about-img-6.webp'
import details from '../../assets/images/events/events-details.webp'
import UpcomingEventTimer from './UpcomingEventTimer'

const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />
            </div>
			
			
			<div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
						<hr class="new1" />
						<br />
						<h2><strong>About <span class="contactopening">Webure</span></strong></h2>
						<h4 class="font-size-3 text-gray line-height-2">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential.</h4>
						<h4 class="font-size-3 text-gray line-height-2">We are a Digital Marketing and Technology Agency in India that provide complete end-to-end digital media solutions with higher scope on Brand Strategy, Creating uncontested market space and Analytics. <br />Our R&D team are in the process of creating breakthrough technologies to make advertising more engaging and converting for businesses.<br /><br /><br /></h4>						
						<div class="row">
							<div class="col-12">
								<h6 class="sec-head"></h6>
							</div>						
						</div>						
					</div>
					<div className="col-lg-5 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
					</div>
				</div>
			</div>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutImage} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">			
								<div className="row">
									<div className="col-lg-7 col-md-12">
										<hr class="new1" />
										<br />
										<h2><strong>Driving Digital <span class="contactopening">Revolution</span></strong></h2>					
									</div>
								</div>
                                <p>Webure helps brands increase their revenues for today and generations to come by creating uncontested market spaces, empowering clients with data and building scalable products.</p>
                                
                                <ul className="features-list">
                                    <li>
                                        <img src={icon4} alt="banner" />
                                        <h3>10 Years</h3>
                                        <p>On the market</p>
                                    </li>
                                    <li>
                                        <img src={icon5} alt="banner" />
                                        <h3>45+</h3>
                                        <p>Team members</p>
                                    </li>
                                    <li>
                                        <img src={icon6} alt="banner" />
                                        <h3>100%</h3>
                                        <p>Satisfaction rate</p>
                                    </li>
                                    <li>
                                        <img src={icon7} alt="banner" />
                                        <h3>80%</h3>
                                        <p>Senior scientist</p>
                                    </li>
                                </ul>
                                <p>Our transformation solutions will help your organization build a future-ready sustainable business model with a digital-first approach!.</p>
                                
                                <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i>More About Us<span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
							<div class="wpb_wrapper">
								<div class="gel-heading gel-heading-style-01 text-left">
									<h2 class="gel-heading-title">Why Webure</h2>
								</div>
								<div class="gel-space gel-0d24495c733dc19f8f479f3a2eb22fa3"></div>
								<div class="gel-image-box img-default img-size-origin gel-image-box-style-04">
									<div class="imageweb1">
										<img alt="Innovation_and_passion" data-src="https://digiligo.com/wp-content/uploads/2021/06/Innovation_and_passion.png" class=" lazyloaded" src="https://digiligo.com/wp-content/uploads/2021/06/Innovation_and_passion.png" />
										<noscript><img alt="Innovation_and_passion" src="https://digiligo.com/wp-content/uploads/2021/06/Innovation_and_passion.png" /></noscript>
									</div>
									<div class="content-box">
										<h4 class="title"><a href="#"><strong>Innovation &amp; Passion</strong></a></h4>
										<div class="description">
											<p>We might not be a 100 year old experienced company, but we guarantee you practical ideas and solutions with young minds executing the entire project. The passion is what drives our team!</p>
										</div>
									</div>
								</div>
								<div class="gel-space gel-d5666620ba5d859b8f7502dd414e4870"></div>
								<div class="gel-image-box img-default img-size-origin gel-image-box-style-04">
									<div class="imageweb1">
										<img alt="Personalised Process" data-src="https://digiligo.com/wp-content/uploads/2021/06/Personalised-Process.png" class=" lazyloaded" src="https://digiligo.com/wp-content/uploads/2021/06/Personalised-Process.png" />
										<noscript><img alt="Personalised Process" src="https://digiligo.com/wp-content/uploads/2021/06/Personalised-Process.png" /></noscript>
									</div>
									<div class="content-box">
										<h4 class="title"><a href="#"><strong>Personalised Process</strong></a></h4>
										<div class="description">
											<p>We don’t work with a “one size fits all” approach, instead we believe in personalisation.</p>
										</div>
									</div>
								</div>
								<div class="gel-space gel-d5666620ba5d859b8f7502dd414e4870"></div>
								<div class="gel-image-box img-default img-size-origin gel-image-box-style-04">
									<div class="imageweb1">
										<img alt="Transparency" data-src="https://digiligo.com/wp-content/uploads/2021/06/Transparency.png" class=" lazyloaded" src="https://digiligo.com/wp-content/uploads/2021/06/Transparency.png" />
										<noscript><img alt="Transparency" src="https://digiligo.com/wp-content/uploads/2021/06/Transparency.png" /></noscript>		
									</div>
									<div class="content-box">
										<h4 class="title"><a href="#"><strong>Transparency</strong></a></h4>
										<div class="description">
											<p>Strategy, ideas, reports and action plan is shared with the client at every stage of the business.</p>
										</div>
									</div>
								</div>
								<div class="gel-space gel-2047cedd8149d6eedf2220f04c828d1e"></div>
							</div>
                        </div>
    
                        <div className="col-lg-6 col-md-6 col-sm-6">
							<div class="wpb_wrapper">
								<div class="gel-heading gel-heading-style-01 text-left">
									<h2 class="gel-heading-title">Our Mission &amp; Vision</h2>
								</div>
								<div class="gel-space gel-0d24495c733dc19f8f479f3a2eb22fa3"></div>
								<div class="wpb_text_column wpb_content_element ">
									<div class="wpb_wrapper">
										<p><strong>Our Mission</strong> is to empower our clients to be future ready through tailored digital first approaches.</p>
										<p><strong>Our Vision</strong> is to create impactful and meaningful applications, digital platforms, marketing solutions and enterprise systems that will help clients, customers and the general public become digital savvy for today and generations to come!</p>
										<p>We will achieve this by doing the below:</p>
									</div>
								</div>
								<div class="gel-list gel-list-style-01 gel-60c9d0d8d666e gel-60c9d0d8d6679">
									<ul class="content-list circle-type">
										<li class="item-list gel-list-item">Make our clients digital ready, so they are able to create an internal ecosystem that is sustainable.                                    </li>
                                        <li class="item-list gel-list-item">Enable digital transformation for clients of all sizes, be it an MNC or a startup.                                      </li>
                                        <li class="item-list gel-list-item">Build systems and applications that will change the way our clients do business.                                     </li>
                                        <li class="item-list gel-list-item">Empower every human being with the endless possibilities of digital, even in rural areas across the world.                                    </li>
									</ul>
								</div>
								<div class="gel-space gel-0fae9c719603b15e5d955a9603debdfc"></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default AboutUsContent;