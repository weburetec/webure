import React from 'react'
import {Link} from 'gatsby'
import icon1 from '../../assets/images/services/service-icon1.webp'
import icon2 from '../../assets/images/services/service-icon2.webp'
import icon3 from '../../assets/images/services/service-icon3.webp'

const RelatedProjects = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <h2>More Services You Might Like</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box ">
                            <div className="icon">
                                <img src={icon1} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Data Analytics
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon2} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    AI & ML Development
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon3} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Data Science
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedProjects