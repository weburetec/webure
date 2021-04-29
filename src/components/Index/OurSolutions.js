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
				<br/>
				<br/>
				<br/>				
			    <div className="section-title">
                    <h2>Ready to Grow Business?</h2>
                    <p>Targeted Leads :: New Business Opportunities :: New Clients</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <h4>Technologies Partners</h4>
                                <ul className="features-list">
                                    <li>
                                        <img src={icon4} alt="banner" />
                                        <h3>Stripe</h3>
                                        <p>Accounting and Payment System</p>
                                    </li>
                                    <li>
                                        <img src={icon5} alt="banner" />
                                        <h3>Razorpay</h3>
                                        <p>Payment Systems</p>
                                    </li>
                                    <li>
                                        <img src={icon6} alt="banner" />
                                        <h3>Slack</h3>
                                        <p>Project Collaboration Tool</p>
                                    </li>
                                    <li>
                                        <img src={icon7} alt="banner" />
                                        <h3>Marketo</h3>
                                        <p>Marketing Automation</p>
                                    </li>
                                </ul>
								<br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <h4>Content Partners</h4>
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
								<br />
                            </div>
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

    )
}

export default OurSolutions;