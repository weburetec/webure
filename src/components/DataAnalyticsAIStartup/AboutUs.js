import React from 'react'
import { Link } from 'gatsby'
import img10 from '../../assets/images/about/about-img10.webp'
import shape1 from '../../assets/images/about/about-shape1.webp'
import shape2 from '../../assets/images/our-mission/our-mission-shape2.webp'
import starIcon from '../../assets/images/star-icon.webp'

const AboutUs = () => {
    return (
        <div className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={img10} alt="banner" />
                            <div className="shape">
                                <img src={shape1} alt="banner" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
                                    About Us
                                </span>
                                <h2>Business Analytics For Data-Driven Solutions</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Big Data
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Visualization
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Warehousing
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Management
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Business Intelligence
                                        <img src={shape2} alt="banner" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Business Intelligence
                                        <img src={shape2} alt="banner" />
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    More About Us <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs