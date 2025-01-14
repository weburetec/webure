import React from 'react'
import {Link} from 'gatsby'
import serviceIcon7 from '../../assets/images/services/service-icon7.webp'
import serviceIcon8 from '../../assets/images/services/service-icon8.webp'
import serviceIcon9 from '../../assets/images/services/service-icon9.webp'
import serviceIcon10 from '../../assets/images/services/service-icon10.webp'
import serviceIcon11 from '../../assets/images/services/service-icon11.webp'
import serviceIcon12 from '../../assets/images/services/service-icon12.webp'
import serviceShape4 from '../../assets/images/services/service-shape4.webp'

const OurServices = () => {
    return (
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={serviceIcon7} alt="services" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Target Analysis
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> 
                                Learn More
                            </Link>
                            <div className="shape">
                                <img src={serviceShape4} alt="services" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={serviceIcon8} alt="services" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Keyword Research
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> 
                                Learn More
                                
                            </Link>
                            <div className="shape">
                                <img src={serviceShape4} alt="services" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item ">
                            <div className="icon">
                                <img src={serviceIcon9} alt="services" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Continuous Testing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> 
                                Learn More
                                
                            </Link>
                            <div className="shape">
                                <img src={serviceShape4} alt="services" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={serviceIcon10} alt="services" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Marketing Analysis
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> 
                                Learn More
                            </Link>
                            <div className="shape">
                                <img src={serviceShape4} alt="services" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={serviceIcon11} alt="services" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Content Optimization
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> 
                                Learn More
                            </Link>
                            <div className="shape">
                                <img src={serviceShape4} alt="services" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={serviceIcon12} alt="services" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Email Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            <Link to="/service-details" className="learn-more-btn">
                                <i className="flaticon-right"></i> 
                                Learn More
                            </Link>
                            <div className="shape">
                                <img src={serviceShape4} alt="services" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices