import React from 'react'
import { Link } from 'gatsby'
import aboutImage from '../../assets/images/about/about-img5.webp'
import starIcon from '../../assets/images/star-icon.webp'
import icon4 from '../../assets/images/icons/icon4.webp'
import icon5 from '../../assets/images/icons/icon5.webp'
import icon6 from '../../assets/images/icons/icon6.webp'
import icon7 from '../../assets/images/icons/icon7.webp'
import shape1 from '../../assets/images/shape/circle-shape1.webp'
import bannerhex from '../../assets/images/banner-hex.webp'
import details from '../../assets/images/events/events-details.webp'
 
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
						<h4 class="font-size-3 text-gray line-height-2">We are a Digital Marketing and Technology Agency in India that provide complete end-to-end digital media solutions with higher scope on Brand Strategy, Creating uncontested market space and Analytics. <br /><br /> Our R&D team are in the process of creating breakthrough technologies to make advertising more engaging and converting for businesses.</h4>						
						<br/>			
						<hr>
						<div className="row">
							<div className="col-lg-7 col-md-12">
							
							</div>
						</div>
						<div className="row">	
							<div class="vc_column-inner">
								<div class="wpb_wrapper">
									<div class="gel-counter gel-1c1abcad4fe8ad7cf0c4a18dd9b5fcbf">
										<span class="counterup counter-value" data-start="0" data-end="975" data-decimals="0" data-duration="0" data-separator="" data-decimal=",">975</span>
									</div>

									<div class="gel-heading gel-heading-style-01 text-left">
										<h2 class="gel-heading-title gel-3a8e8f7a394db94fe302850bf5118fd4">Litres of Beer Drunk	</h2>
									</div>
								<div class="gel-space gel-d5ce6661addcd85ccc9635905ae2dec2"></div>
							</div>
						</div>							
							
						<br/><br/>						
						<div class="row">
							<div class="col-12">
								<h6 class="sec-head">Why Webure Technologies</h6>
								<p>We are a full service web based interactive marketing agency that develops world-class websites and online internet campaigns (Google Adwords). Our experts work in harmony to strategically integrate cutting-edge technology solutions with a sensible Internet marketing approach, providing superior brand and user experiences that deliver results to our global clients.</p>
								<p>Webure Technologies New York brings effective tools for making your website popular on the Internet with the help of a planned strategy for your web marketing efforts. Effective Web Marketing is a combination of many important aspects of the Web and Internet techniques. </p>
							<br/><br/>
							</div>						
						</div>			
					</div>
					<div className="col-lg-5 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
						<div class="row">
						
						</div>
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
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
                                    About Us
                                </span>
                                <h2>Drive Digital Revolution Through Data Science</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
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
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our History</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Activate Listening</li>
                                    <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                    <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                    <li><i className="flaticon-tick"></i> Branding it better!</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our Mission</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                    <li><i className="flaticon-tick"></i> Expect more</li>
                                    <li><i className="flaticon-tick"></i> Good thinking</li>
                                    <li><i className="flaticon-tick"></i> In real we trust</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="about-text">
                                <h3>Who we are</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                    <li><i className="flaticon-tick"></i> We have you covered</li>
                                    <li><i className="flaticon-tick"></i> We turn heads</li>
                                    <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                </ul>
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