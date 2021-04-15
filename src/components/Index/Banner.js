import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'
import bannerImg from '../../assets/images/banner-img1.webp'

const Banner = () => {
    return (
        <div className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Webure a<strong> Full Service Digital Agency</strong></h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>That helps clients expand their digital reach.</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Get Started <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="main-banner-image">
                                <img src={bannerImg} alt="banner" class="lazyload" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner