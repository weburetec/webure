import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.webp'
import serviceIcon1 from '../../assets/images/services/service-icon1.webp'
import serviceIcon2 from '../../assets/images/services/service-icon2.webp'
import serviceIcon3 from '../../assets/images/services/service-icon3.webp'

const FeaturedServices = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="features" /> 
                        Our Services
                    </span>
                    <h2>Our Featured Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon1} alt="features" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Marketing Analysis
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Read More 
                                <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon2} alt="features" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Email Marketing
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Read More 
                                <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon3} alt="features" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Website Optimization
                                </Link>
                            </h3>
 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Read More 
                                <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedServices