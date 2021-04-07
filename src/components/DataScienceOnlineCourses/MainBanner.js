import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerShape1 from '../../assets/images/main-banner/banner-three/banner-three-shape1.webp'
import bannerShape2 from '../../assets/images/main-banner/banner-three/banner-three-shape2.webp'
import bannerShape3 from '../../assets/images/main-banner/banner-three/banner-three-shape3.webp'
import bannerShape4 from '../../assets/images/main-banner/banner-three/banner-three-shape4.webp'
import bannerShape5 from '../../assets/images/main-banner/banner-three/banner-three-shape5.webp'
import bannerShape6 from '../../assets/images/main-banner/banner-three/banner-three-shape6.webp'
import bannerShape7 from '../../assets/images/main-banner/banner-three/banner-three-shape7.webp'
import bannerShape8 from '../../assets/images/main-banner/banner-three/banner-three-shape8.webp'
import bannerShape9 from '../../assets/images/main-banner/banner-three/banner-three-shape9.webp'
import bannerShape10 from '../../assets/images/main-banner/banner-three/banner-three-shape10.webp'
import bannerImg from '../../assets/images/main-banner/banner-three/banner-three-main-img.webp'
import shape7 from '../../assets/images/shape/vector-shape7.webp'
import shape8 from '../../assets/images/shape/vector-shape8.webp'

const MainBanner = () => {
    return (
        <div className="hero-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="hero-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Learn Data Science</h1>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Keeping your skills up to date is essential and learning Data Science including oportunites on Big Data can drive you to become extraordinary professionals.</p>
                            </ReactWOW>
                    
                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/events" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Explore Bootcamps <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="hero-banner-animation-image">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src={bannerShape1} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src={bannerShape2} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src={bannerShape3} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={bannerShape4} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src={bannerShape5} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={bannerShape6} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={bannerShape7} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={bannerShape8} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={bannerShape9} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                <img src={bannerShape10} alt="features" />
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src={bannerImg} alt="features" />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape7">
                <img src={shape7} alt="features" />
            </div>
    
            <div className="vector-shape8">
                <img src={shape8} alt="features" />
            </div>
        </div>
    )
}

export default MainBanner