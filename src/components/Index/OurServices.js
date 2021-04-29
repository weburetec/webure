import React from 'react';
import {Link} from 'gatsby'

import ServiceIcon7 from '../../assets/images/services/service-icon7.webp'
import ServiceIcon8 from '../../assets/images/services/service-icon8.webp'
import ServiceIcon9 from '../../assets/images/services/service-icon9.webp'
import ServiceIcon10 from '../../assets/images/services/service-icon10.webp'
import ServiceIcon11 from '../../assets/images/services/service-icon11.webp'
import ServiceIcon12 from '../../assets/images/services/service-icon12.webp'
import ServiceShape4 from '../../assets/images/services/service-shape4.webp'

const Services = () => {
    return (
		<section class="servicesWrap section-padding d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row services">
                            <div class="col-12">
                                <div class="services-hex text-center">
                                    <h2 class="sec-title mb-5">Our<br/> Services</h2>
                                    <img src="img/services-line.jpg" alt="Services" title="Services" class="img-fluid">
                                </div>
                                <div class="nav flex-row nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link rounded-circle" id="tab1" data-toggle="pill" href="#digital-marketing" role="tab" aria-controls="tab1" aria-selected="false">
                                        <img src="img/icon/services/ecommerce-development.png" alt="">
                                        <span>Ecommerce <br> Development</span>
                                     </a>
                                    <a class="nav-link rounded-circle" id="tab2" data-toggle="pill" href="#website-maintenance" role="tab" aria-controls="tab2" aria-selected="false">                                       
                                        <img src="img/icon/services/website-maintenance-service.png" alt="">
                                        <span>Website<br> Maintenance</span>
                                    </a>
                                    <a class="nav-link rounded-circle active" id="tab3" data-toggle="pill" href="#content-management" role="tab" aria-controls="tab3" aria-selected="true">
                                        <img src="img/icon/services/aws-cloud-hotsing.png" alt="">
                                        <span>AWS Cloud <br>Hosting</span>
                                    </a>
                                    <a class="nav-link rounded-circle" id="tab4" data-toggle="pill" href="#web-hosting" role="tab" aria-controls="tab4" aria-selected="false">
                                        <img src="img/icon/services/google-ads.png" alt="">
                                        <span>Google <br> Ads</span>
                                    </a>
                                    <a class="nav-link rounded-circle" id="tab5" data-toggle="pill" href="#app-development" role="tab" aria-controls="tab5" aria-selected="false">
                                        <img src="img/icon/services/social-media-marketing.png" alt="">
                                        <span>Social Media<br> Marketing</span>
                                    </a>
                                    <a class="nav-link rounded-circle" id="tab6" data-toggle="pill" href="#seo" role="tab" aria-controls="tab6" aria-selected="false">
                                        <img src="img/icon/services/seo-service.png" alt="">
                                        <span>SEO &amp;<br>Analytics</span>
                                    </a>
                                </div>
                                <div class="tab-content" id="services-content">
                                    <div class="tab-pane fade" id="digital-marketing" role="tabpanel">
                                        <h1 class="service-name">Ecommerce Development</h1>
                                        <!-- <h5 class="service-info-head">Ecommerce Development</h5> -->
                                        <p class="pText">As a leading Ecommerce Development Company in Pune, we
                                            deliver
                                            projects with SEO services in woo commerce, wordpress, joomla and also
                                            build
                                            custom based ecommerce websites. Maintaining high coding standards we
                                            try to
                                            ensure bug free code. Our expert team focuses on successfully delivering
                                            exceptionally high quality web development servcies to our clients.

                                            <a href="web-solutions/e-commerce-website-devlopment-company-pune" class="ml-3 stretched-link link d-inline">
                                                <img src="img/icon/icon-arrow-right.png" alt="Icon arrow" title="">
                                            </a>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="seo" role="tabpanel">
                                        <h2 class="service-name">SEO &amp; Analytics</h2>                                        
                                        <p class="pText">As a BEST Search Engine Optimization Company In Pune,Dimakh
                                            Consultants focuses on highly effective and researched keywords that
                                            helps
                                            to boost lead generation . Being an affordable and cost effective SEO
                                            company in Pune, we focus on a result-oriented digital marketing
                                            strategy.
                                            Through organic search engine optimisation we help you achieve top
                                            google
                                            ranking for your website and beat your competition.
                                            <a href="digital-marketing/seo-marketing-company-pune-india/" class="ml-3 stretched-link link d-inline">
                                                <img src="img/icon/icon-arrow-right.png" alt="Icon arrow" title="">
                                            </a>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade active show" id="content-management" role="tabpanel">
                                        <h2 class="service-name">AWS Cloud Hosting</h2>
                                        <p class="pText">AWS cloud servers provides a virtual platform to load your
                                            online application and server space needs. Dimakh Consultants is an
                                            experienced,stable and secure web hosting company in pune providing
                                            flexible
                                            and cost-effective web hosting services, VPS, dedicated servers for all
                                            types of businesses.
                                            <a href="web-hosting/aws-hosting-company-pune-india/" class="ml-3 stretched-link link d-inline">
                                                <img src="img/icon/icon-arrow-right.png" alt="Icon arrow" title="">
                                            </a>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="web-hosting" role="tabpanel">
                                        <h2 class="service-name">Google Ads</h2>
                                        <p class="pText">Being a certified google partner, we help businesses plan
                                            their
                                            lead generation strategy with Google Ads, Google business pages, SEO,
                                            SMM
                                            and other Email Marketing services. Digital Marketing is a powerful and
                                            effective way of advertising than traditional resulting in high lead
                                            generations.
                                            <a href="digital-marketing/google-ads-management-company-pune-india/" class="ml-3 stretched-link link d-inline">
                                                <img src="img/icon/icon-arrow-right.png" alt="Icon arrow" title="">
                                            </a>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="app-development" role="tabpanel">
                                        <h2 class="service-name">Social Media Marketing</h2>
                                        <p class="pText">With ROI driven Strategic Social Media Marketing you can
                                            build
                                            your brand image and increase sales. Dimakh Consultants is the best
                                            Social
                                            Media Marketing Company that provides result-oriented content marketing
                                            processes through Facebook,Linkedin, Youtube and delivers cost-effective
                                            Online Reputation Management services for all your business needs.
                                            <a href="digital-marketing/social-media-marketing-company-pune-india/" class="ml-3 stretched-link link d-inline">
                                                <img src="img/icon/icon-arrow-right.png" alt="Icon arrow" title="">
                                            </a>
                                        </p>
                                    </div>
                                    <div class="tab-pane fade" id="website-maintenance" role="tabpanel">
                                        <h2 class="service-name">Website Maintenance</h2>
                                        <p class="pText">Dimakh Consultants is a trusted web design and website
                                            maintenance company in Pune India. Our offerings include complete
                                            website
                                            maintenance, modifications on hourly basis and provide customized
                                            website
                                            maintenance packages to suit your business requirements.Get in touch
                                            with
                                            our expert team for consultation and guidance.
                                            <a href="web-design/website-maintenance-services-pune-india/" class="ml-3 stretched-link link d-inline">
                                                <img src="img/icon/icon-arrow-right.png" alt="Icon arrow" title="">
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Services We Can Help You With</h2>
                    <p>We offer the same services that thousands of others do. But the real difference is in the execution. Choose any of these services and we’ll show you the difference between us and others. Turn your great ideas into profitable mobile and software products with our excellent services.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={ServiceIcon7} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Web Development
                                </Link>
                            </h3>
                            <p>We're motivated to scale and grow your business as we are more than just a web application development company. We're strong software development partner who is ready to cover all your tech needs.</p>
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={ServiceIcon8} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Mobile App Development
                                </Link>
                            </h3>
                            <p>Because Webure Technologies has expertise in both native and cross platform technologies, we always find the right balance among price, qaulity and project requirement.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={ServiceIcon9} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Consulting
                                </Link>
                            </h3>
                            <p>Technological advancements need hand holding by experts. Our experts create a cost-effective strategy with our Web, Mobile or Cloud Consulting services through as a full service digital agency.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item wow fadeInUp">
                            <div className="icon">
                                <img src={ServiceIcon10} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Game Development
                                </Link>
                            </h3>
                            <p>We are among leading game development companies in India and US aiming to craft games which offer exceptional gaming experience for players.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item wow fadeInUp">
                            <div className="icon">
                                <img src={ServiceIcon11} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Graphic Designing
                                </Link>
                            </h3>
                            <p>Discover how our iconic services connect the act of viewing with comprehension for artistic expression that shapes content, grow business and diversifies oppotunity.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item wow fadeInUp">
                            <div className="icon">
                                <img src={ServiceIcon12} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Digital Marketing
                                </Link>
                            </h3>
                            <p>In these days, most of the business entities are taking help of the digital marketing companies to get the desired results.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> Learn More
                            </Link>
                            <div className="shape">
                                <img src={ServiceShape4} alt="Service Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;