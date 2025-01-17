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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src={ServiceIcon7} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Big Data Analysis
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>

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
                                    Robust Analytics
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            
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
                                    Marketing Analytics
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            
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
                                    Data Visualization
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            
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
                                    Securities Research
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            
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
                                    Data Governance
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                            
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