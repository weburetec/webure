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
			<div class="container">
<div class="row">
<div class="col-12">
<h2 class="sl--heading sl--darkGrey aos-init aos-animate" data-aos-easing="ease" data-aos="fade-up">Explore technologies and companies</h2>
<p class="sl-subTitle sl--lightGrey sl-marginT20 aos-init aos-animate" data-aos-easing="ease" data-aos="fade-up">Gain
insights about products, services, partners, and competitors.</p>
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
<a href="/tech/payment-management/stripe-market-share">
<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
<div class="media">
<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga0.imgix.net/logo/o/91015-1485358248-1568973?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://ga0.imgix.net/logo/o/91015-1485358248-1568973?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format">
<div class="media-body">
<h5 class="mt-0">Stripe</h5>
<p>Finance and Accounting-Payment Management</p>
</div>
</div>
</div>
</a>
</div>
<div class="col-md-6 col-sm-12">
<a href="/tech/project-collaboration/slack-market-share">
<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
<div class="media">
<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga0.imgix.net/logo/o/91563-1523890522-2133787?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png">
<div class="media-body">
<h5 class="mt-0">Slack</h5>
<p>Collaboration-Project Collaboration</p>
</div>
</div>
</div>
</a>
</div>
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
<a href="/tech/online-meetings/zoom-market-share">
<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
<div class="media">
<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://ga1.imgix.net/logo/o/111633-1515416413-259357?ixlib=rb-1.0.0&amp;ch=Width%2CDPR&amp;auto=format" alt="Generic placeholder image" onerror="this.onerror=null;this.src='https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png';" src="https://d3ml3b6vywsj0z.cloudfront.net/website/technology_icon.png">
<div class="media-body">
<h5 class="mt-0">Zoom</h5>
<p>Communications-Online Meetings</p>
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
</div>
</div>
<div class="col-lg-6 col-md-12">
<div class="horizontal-line"></div>
<h2 class="discover__techText">Companies</h2>
<div class="row discover__techWrap">
<div class="col-md-6 col-sm-12">
<a href="/company/5b89165a7c866675e510c378/coursera">
<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
<div class="media">
<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1502210913/rlanonwmo1mgrwuvacv9.png" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1502210913/rlanonwmo1mgrwuvacv9.png">
<div class="media-body">
<h5 class="mt-0">Coursera</h5>
<p>coursera.org</p>
</div>
</div>
</div>
</a>
</div>
<div class="col-md-6 col-sm-12">
<a href="/company/5b8915857c866675e50ff26e/juniper-networks">
<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
<div class="media">
<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1397190585/a258e2c803afdf25787ab01d53744ac6.gif" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1397190585/a258e2c803afdf25787ab01d53744ac6.gif">
<div class="media-body">
<h5 class="mt-0">Juniper Networks</h5>
<p>juniper.net</p>
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
<div class="col-md-6 col-sm-12">
<a href="/company/5b8915707c866675e50fdbec/xerox">
<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
<div class="media">
<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1397188986/a79a667532e561f2e9ab5f0d999241a9.png" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1397188986/a79a667532e561f2e9ab5f0d999241a9.png">
<div class="media-body">
<h5 class="mt-0">Xerox</h5>
<p>xerox.com</p>
</div>
</div>
</div>
</a>
</div>
<div class="col-md-6 col-sm-12">
<a href="/company/5c3b0155d55ae49f1b77b308/freshworks">
<div class="discover__tech aos-init aos-animate" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease" data-aos-delay="1000">
 <div class="media">
<img class="align-self-center mr-3 discover__techImg lazyloaded" data-src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/lmvkrk1etrborilzp8yb" alt="Generic placeholder image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/lmvkrk1etrborilzp8yb">
<div class="media-body">
<h5 class="mt-0">Freshworks</h5>
<p>freshworks.com</p>
</div>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
			
        </section>

    )
}

export default OurSolutions;