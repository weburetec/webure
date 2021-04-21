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