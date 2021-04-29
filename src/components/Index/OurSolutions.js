import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.webp'
import serviceb1 from '../../assets/images/b1.webp'
import serviceb2 from '../../assets/images/b2.webp'
import serviceb3 from '../../assets/images/b3.webp'
import serviceb4 from '../../assets/images/b4.webp'
import serviceb5 from '../../assets/images/b5.webp'
import serviceb6 from '../../assets/images/b6.webp'
import serviceb7 from '../../assets/images/b7.webp'
import serviceb8 from '../../assets/images/b8.webp'
import icon4 from '../../assets/images/icon4.webp'
import icon5 from '../../assets/images/icon5.webp'
import icon6 from '../../assets/images/icon6.webp'
import icon7 from '../../assets/images/icon7.webp'
import aboutImage from '../../assets/images/about/about-img5.webp'

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutImage} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <h2>Drive Digital Revolution Through Webure Technologies</h2>
                                <p>Utilizing technology to drive efficiency, enable scale, encourage engagement and facilitate ease of use.</p>
                                
                                <ul className="features-list">
                                    <li>
                                        <img src={icon4} alt="banner" />
                                        <h3>7 Years</h3>
                                        <p>On the market</p>
                                    </li>
                                    <li>
                                        <img src={icon5} alt="banner" />
                                        <h3>15+</h3>
                                        <p>Team members</p>
                                    </li>
                                    <li>
                                        <img src={icon6} alt="banner" />
                                        <h3>100%</h3>
                                        <p>Satisfaction rate</p>
                                    </li>
                                    <li>
                                        <img src={icon7} alt="banner" />
                                        <h3>300+</h3>
                                        <p>Projects Completed</p>
                                    </li>
                                </ul>
                                <p>Provides Different Web Services and Web Solutions Like web development, web design, logo design, web hosting, data processing, graphics designing, mobile application development, e-commerce website development.</p>
                                
                                <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i>More About Us<span></span>
                                </Link>
								<br />
                            </div>
                        </div>
                    </div>
                </div>
					
			    <div className="section-title">
                    <span className="sub-title">
                        Our Solutions
                    </span>
                    <h2>Ready to Grow Business?</h2>
                    <p>Targeted Leads :: New Business Opportunities :: New Clients</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb1} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb2} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb3} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb4} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb5} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb6} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb7} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-solutions-box">
							<span className="sub-title">
								<img src={serviceb8} alt="Service" class="lazyload"/> 
							</span>
                        </div>
                    </div>
				</div>

                <div className="section-title">
                    <span className="sub-title"> 
                        Our Solutions
                    </span>
                    <h2>We are different from others Why should you Choose Us</h2>
                    <p>Webure a Full Service Agency that help our clients expand their digital reach.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Consult
                                </Link>
                            </h3>
                            <p>Webure gathers the complete requirement and assigns a dedicated person for the project who gives you regular updates with the project to customer.</p>

                            <Link to="/service-details" className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Create
                                </Link>
                            </h3>

                            <p>We start the designing and development of the project based on the requirement and our dedicated Account Manager defines the timelines.</p>
                            
                            <Link to="/service-details" className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Collaborate
                                </Link>
                            </h3> 

                            <p>Collaborating our services and web application under mobile friendly web interface to ensure seamless collaboration as your extended team for technology.</p>
                            
                            <Link to="/service-details" className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

		<section class="home__discover st-80">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2 class="sl--heading sl--darkGrey aos-init aos-animate" data-aos-easing="ease" data-aos="fade-up">Explore technologies and companies</h2>
						<p class="sl-subTitle sl--lightGrey sl-marginT20 aos-init aos-animate" data-aos-easing="ease" data-aos="fade-up">Gain insights about products, services, partners, and competitors.</p>
					</div>
					<div class="col-12  elements--plus">
						<div class="discover__inputWrap search_bar">
							<div class="discover__input">
								<input class="" id="autoguggestion-input" placeholder="Search for technologies and companies by name or domain">
								<span class="search__icon"></span>
								<div id="embed_search_autosuggestion" class="company_autosuggestion unified_search_autosuggestion" style="display: none;">
									<div class="suggestion_block">
										<ul id="technology_autosuggestion">
										</ul>
										<ul id="company_autosuggestion">
										</ul>
									</div>
									<div class="embed_result_block">
										<p class="text-primary">See all results</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row sl-marginT80">
					<div class="col-lg-6 col-md-12">
						<div class="horizontal-line"></div>
							<h2 class="discover__techText">Technologies</h2>
							<div class="row discover__techWrap sl--marginR20">
								<div class="col-md-6 col-sm-12">
									<a href="/tech/analytics/segment-market-share">
									<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
										<div class="media">
											<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga0.imgix.net/logo/o/101273-1497950693-535848?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png">
											<div class="media-body">
												<h5 class="mt-0">Segment</h5>
												<p>Business Intelligence &amp; Analytics-Analytics</p>
											</div>
										</div>
									</div>
									</a>
								</div>
								<div class="col-md-6 col-sm-12">
									<a href="/tech/marketing-automation/marketo-market-share">
									<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
										<div class="media">
											<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga0.imgix.net/logo/o/990-1500306114-455972?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png">
											<div class="media-body">
												<h5 class="mt-0">Marketo</h5>
												<p>Marketing-Marketing Automation</p>
											</div>
										</div>
									</div>
									</a>
								</div>
								<div class="col-md-6 col-sm-12">
									<a href="/tech/domain-name-services/microsoft-azure-dns-market-share">
									<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
									<div class="media">
									<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://sm.pcmag.com/t/pcmag_in/review/m/microsoft-/microsoft-azure_18sd.640.jpg" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://sm.pcmag.com/t/pcmag_in/review/m/microsoft-/microsoft-azure_18sd.640.jpg">
									<div class="media-body">
									<h5 class="mt-0">Microsoft Azure DNS</h5>
									<p>Computer networks-Domain Name Services</p>
									</div>
									</div>
									</div>
									</a>
								</div>
								<div class="col-md-6 col-sm-12">
									<a href="/tech/contact-management/salesforce-crm-market-share">
									<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
									<div class="media">
									<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga1.imgix.net/logo/o/90378-1427725601-6725419?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png">
									<div class="media-body">
									<h5 class="mt-0">Salesforce CRM</h5>
									<p>Sales-Contact Management</p>
									</div>
									</div>
									</div>
									</a>
								</div>
								<div class="col-md-6 col-sm-12">
									<a href="/tech/lead-capture/pardot-market-share">
									<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
									<div class="media">
									<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga0.imgix.net/logo/o/8294-1523873904-9495888?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://ga0.imgix.net/logo/o/8294-1523873904-9495888?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format">
									<div class="media-body">
									<h5 class="mt-0">Pardot</h5>
									<p>Sales-Lead Capture</p>
									</div>
									</div>
									</div>
									</a>
								</div>
								<div class="col-md-6 col-sm-12">
								<a href="/tech/display-advertising/quantcast-market-share">
								<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
								<div class="media">
								<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga1.imgix.net/logo/o/100557-1526929372-1868749?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://ga1.imgix.net/logo/o/100557-1526929372-1868749?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format">
								<div class="media-body">
								<h5 class="mt-0">Quantcast</h5>
								<p>Marketing-Display Advertising</p>
								</div>
								</div>
								</div>
								</a>
								</div>
								</div>
								</div>
								<div class="col-lg-6 col-md-12">
								<div class="horizontal-line"></div>
								<h2 class="discover__techText">Companies</h2>
								<div class="row discover__techWrap">
								<div class="col-md-6 col-sm-12">
								<a href="/company/5c3b014ad55ae49f1b77a3a4/ericsson">
								<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
								<div class="media">
								<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/yeq894qkzzyhl9mygnjc" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/yeq894qkzzyhl9mygnjc">
								<div class="media-body">
								<h5 class="mt-0">Ericsson</h5>
								<p>ericsson.com</p>
								</div>
								</div>
								</div>
								</a>
								</div>
								<div class="col-md-6 col-sm-12">
								<a href="/company/5c3b0152d55ae49f1b77af06/roblox">
								<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
								<div class="media">
								<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/gg7hnk7vv8e8wudbq7pr" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/gg7hnk7vv8e8wudbq7pr">
								<div class="media-body">
								<h5 class="mt-0">Roblox</h5>
								<p>roblox.com</p>
								</div>
								</div>
								</div>
								</a>
								</div>
								<div class="col-md-6 col-sm-12">
								<a href="/company/5b8915897c866675e50ff666/nvidia">
								<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
								<div class="media">
								<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1502744943/jhowtgkdwv2aa1eodg2b.png" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1502744943/jhowtgkdwv2aa1eodg2b.png">
								<div class="media-body">
								<h5 class="mt-0">Nvidia</h5>
								<p>nvidia.com</p>
								</div>
								 </div>
								</div>
								</a>
								</div>
								<div class="col-md-6 col-sm-12">
								<a href="/company/5b8916f97c866675e51166c3/lending-club">
								<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
								<div class="media">
								<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/fnyd5qggryugrcynulkf" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/fnyd5qggryugrcynulkf">
								<div class="media-body">
								<h5 class="mt-0">Lending Club</h5>
								<p>lendingclub.com</p>
								</div>
								</div>
								</div>
								</a>
								</div>
								<div class="col-md-6 col-sm-12">
								<a href="/company/5b8916d17c866675e5114a03/usertesting">
								<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
								<div class="media">
								<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/z3sir9m7gabp16zf3esy" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/z3sir9m7gabp16zf3esy">
								<div class="media-body">
								<h5 class="mt-0">Usertesting</h5>
								<p>usertesting.com</p>
								</div>
								</div>
								</div>
								</a>
								</div>
								<div class="col-md-6 col-sm-12">
								<a href="/company/5c3b00a4d55ae49f1b76bfe9/twitter">
								<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
								<div class="media">
								<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1397180207/d242197edc3ff044620cf2d8ff39d6b3.jpg" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1397180207/d242197edc3ff044620cf2d8ff39d6b3.jpg">
								<div class="media-body">
								<h5 class="mt-0">Twitter</h5>
								<p>twitter.com</p>
								</div>
								</div>
								</div>
								</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

<section class="home-contact elements--ellipse">
<div class="container">
<div class="row justify-content-center">
<div class="col-12">
<h2 class="sl--heading sl--darkGrey sl--marginT100 text-center aos-init aos-animate" data-aos-easing="ease" data-aos="fade-up" data-aos-offset="0" data-aos-delay="500">Identify potential buyers in your market</h2>
</div>
</div>
<div class="row flex-column-reverse flex-lg-row st-150">
<div class="col-lg-4 col-md-12 order-md-12 order-2">
<div class="media contact-media">
<img class="" src="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/home/contact_group_1.svg" alt="Competitor Intelligence">
<div class="media-body">
<h5 class="sl-header">Competitor Intelligence</h5>
<ul class="contact-list list-unstyled">
<li>Market Share</li>
<li>New/Expiring Contracts</li>
</ul>
</div>
</div>
<div class="media contact-media">
<img class="" src="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/home/contact_group_2.svg" alt="Buying Patterns">
<div class="media-body">
<h5 class="sl-header">Buying Patterns</h5>
<ul class="contact-list list-unstyled">
<li>Technology Stacks</li>
<li>Upcoming Renewals</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-4 col-md-12 order-md-12 order-3">
<div class="home-contact__svg" id="home_contact_svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 984" width="600" height="984" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_7"><rect width="600" height="984" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_37"><path fill="#ffffff" clip-rule="nonzero" d=" M1259.06201171875,780 C1259.06201171875,780 1170,780 1170,780 C1170,780 1170,875.0549926757812 1170,875.0549926757812 C1170,875.0549926757812 1259.06201171875,875.0549926757812 1259.06201171875,875.0549926757812 C1259.06201171875,875.0549926757812 1259.06201171875,780 1259.06201171875,780" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_40"><path fill="#ffffff" clip-rule="nonzero" d=" M1163.06201171875,780 C1163.06201171875,780 1074,780 1074,780 C1074,780 1074,875.0549926757812 1074,875.0549926757812 C1074,875.0549926757812 1163.06201171875,875.0549926757812 1163.06201171875,875.0549926757812 C1163.06201171875,875.0549926757812 1163.06201171875,780 1163.06201171875,780" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_43"><path fill="#ffffff" clip-rule="nonzero" d=" M1063.06201171875,780 C1063.06201171875,780 974,780 974,780 C974,780 974,875.0549926757812 974,875.0549926757812 C974,875.0549926757812 1063.06201171875,875.0549926757812 1063.06201171875,875.0549926757812 C1063.06201171875,875.0549926757812 1063.06201171875,780 1063.06201171875,780" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_73"><path fill="#ffffff" clip-rule="nonzero" d=" M1255.83203125,786.968994140625 C1255.83203125,786.968994140625 1169,786.968994140625 1169,786.968994140625 C1169,786.968994140625 1169,875.0079956054688 1169,875.0079956054688 C1169,875.0079956054688 1255.83203125,875.0079956054688 1255.83203125,875.0079956054688 C1255.83203125,875.0079956054688 1255.83203125,786.968994140625 1255.83203125,786.968994140625" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_76"><path fill="#ffffff" clip-rule="nonzero" d=" M1160.83203125,786.968994140625 C1160.83203125,786.968994140625 1074,786.968994140625 1074,786.968994140625 C1074,786.968994140625 1074,875.0079956054688 1074,875.0079956054688 C1074,875.0079956054688 1160.83203125,875.0079956054688 1160.83203125,875.0079956054688 C1160.83203125,875.0079956054688 1160.83203125,786.968994140625 1160.83203125,786.968994140625" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_79"><path fill="#ffffff" clip-rule="nonzero" d=" M1068.83203125,786.968994140625 C1068.83203125,786.968994140625 982,786.968994140625 982,786.968994140625 C982,786.968994140625 982,875.0079956054688 982,875.0079956054688 C982,875.0079956054688 1068.83203125,875.0079956054688 1068.83203125,875.0079956054688 C1068.83203125,875.0079956054688 1068.83203125,786.968994140625 1068.83203125,786.968994140625" fill-opacity="1"></path></clipPath><clipPath id="__lottie_element_82"><path d="M0,0 L2240,0 L2240,984 L0,984z"></path></clipPath><clipPath id="__lottie_element_86"><path fill="#ffffff" clip-rule="nonzero" d=" M1116.7030029296875,-60 C1116.7030029296875,-60 -72,-60 -72,-60 C-72,-60 -72,1024.531005859375 -72,1024.531005859375 C-72,1024.531005859375 1116.7030029296875,1024.531005859375 1116.7030029296875,1024.531005859375 C1116.7030029296875,1024.531005859375 1116.7030029296875,-60 1116.7030029296875,-60" fill-opacity="1"></path></clipPath><filter id="__lottie_element_87" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feGaussianBlur in="SourceAlpha" result="drop_shadow_1" stdDeviation="20"></feGaussianBlur><feOffset dx="17.20729309053138" dy="24.574561328669756" in="drop_shadow_1" result="drop_shadow_2"></feOffset><feFlood flood-color="#5e81f4" flood-opacity="0.15" result="drop_shadow_3"></feFlood><feComposite in="drop_shadow_3" in2="drop_shadow_2" operator="in" result="drop_shadow_4"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><clipPath id="__lottie_element_89"><path fill="#ffffff" clip-rule="nonzero" d=" M2304,-52 C2304,-52 1111.81201171875,-52 1111.81201171875,-52 C1111.81201171875,-52 1111.81201171875,1024.875 1111.81201171875,1024.875 C1111.81201171875,1024.875 2304,1024.875 2304,1024.875 C2304,1024.875 2304,-52 2304,-52" fill-opacity="1"></path></clipPath><filter id="__lottie_element_90" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feGaussianBlur in="SourceAlpha" result="drop_shadow_1" stdDeviation="20"></feGaussianBlur><feOffset dx="-27.1892336110995" dy="12.678547852220985" in="drop_shadow_1" result="drop_shadow_2"></feOffset><feFlood flood-color="#5e81f4" flood-opacity="0.15" result="drop_shadow_3"></feFlood><feComposite in="drop_shadow_3" in2="drop_shadow_2" operator="in" result="drop_shadow_4"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g clip-path="url(#__lottie_element_7)"><g clip-path="url(#__lottie_element_82)" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><g class="ai" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_21.png"></image></g><g class="ai" clip-path="url(#__lottie_element_89)" filter="url(#__lottie_element_90)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_20.png"></image></g><g class="ai" clip-path="url(#__lottie_element_86)" filter="url(#__lottie_element_87)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_20.png"></image></g></g><g class="ai" clip-path="url(#__lottie_element_79)" style="display: block;" transform="matrix(1,0,0,1,-820,3.031005859375)" opacity="1"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_19.png"></image></g><g class="ai" clip-path="url(#__lottie_element_76)" style="display: block;" transform="matrix(1,0,0,1,-820,3.031005859375)" opacity="1"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_19.png"></image></g><g class="ai" clip-path="url(#__lottie_element_73)" style="display: block;" transform="matrix(1,0,0,1,-820,3.031005859375)" opacity="1"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_19.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_18.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_17.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_16.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_15.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_14.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_13.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_12.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_11.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="1" style="display: block;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_10.png"></image></g><g class="ai" clip-path="url(#__lottie_element_43)" style="display: none;" transform="matrix(1,0,0,1,-820,4)" opacity="0.04513999999994894"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_9.png"></image></g><g class="ai" clip-path="url(#__lottie_element_40)" style="display: none;" transform="matrix(1,0,0,1,-820,4)" opacity="0.04513999999994894"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_9.png"></image></g><g class="ai" clip-path="url(#__lottie_element_37)" style="display: none;" transform="matrix(1,0,0,1,-820,4)" opacity="0.04513999999994894"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_9.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_8.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_7.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_6.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_5.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_4.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_3.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_2.png"></image></g><g class="ai" transform="matrix(1,0,0,1,-820,0)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_1.png"></image></g><g class="ai" transform="matrix(0.04513999819755554,0,0,0.04513999819755554,249.44320678710938,106.94430541992188)" opacity="0.04513999999994894" style="display: none;"><image width="2240px" height="984px" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/animation_data/home_section2/images/img_0.png"></image></g></g></svg></div>
</div>
<div class="col-lg-4 col-md-12 order-md-12 order-1">
<div class="media contact-media">
<img class="" src="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/home/contact_group_3.svg" alt="Buyers personas">
<div class="media-body">
<h5 class="sl-header">Buyers personas</h5>
<ul class="contact-list list-unstyled">
<li>Contact Information</li>
<li>Detailed Profiles</li>
</ul>
</div>
</div>
<div class="media contact-media">
<img class="" src="https://d3ml3b6vywsj0z.cloudfront.net/website/v2/home/contact_group_4.svg" alt="Market Intelligence">
<div class="media-body">
<h5 class="sl-header">Market Intelligence</h5>
<ul class="contact-list list-unstyled">
<li>Funding and Financial Alerts</li>
<li>Keyword Tracking</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

    )
}

export default OurSolutions;