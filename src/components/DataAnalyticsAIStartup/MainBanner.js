import React from 'react'
import ReactWOW from 'react-wow'
import ModalVideo from 'react-modal-video'
import { Link } from 'gatsby'

import img1 from '../../assets/images/main-banner/banner-two/banner-two-shape1.webp'
import img2 from '../../assets/images/main-banner/banner-two/banner-two-shape2.webp'
import img3 from '../../assets/images/main-banner/banner-two/banner-two-shape3.webp'
import img4 from '../../assets/images/main-banner/banner-two/banner-two-shape4.webp'
import img5 from '../../assets/images/main-banner/banner-two/banner-two-shape5.webp'
import img6 from '../../assets/images/main-banner/banner-two/banner-two-shape6.webp'
import img7 from '../../assets/images/main-banner/banner-two/banner-two-shape7.webp'
import img8 from '../../assets/images/main-banner/banner-two/banner-two-shape8.webp'
import img9 from '../../assets/images/main-banner/banner-two/banner-two-shape9.webp'
import img10 from '../../assets/images/main-banner/banner-two/banner-two-shape10.webp'
import img11 from '../../assets/images/main-banner/banner-two/banner-two-shape11.webp'
import img12 from '../../assets/images/main-banner/banner-two/banner-two-shape12.webp'
import img13 from '../../assets/images/main-banner/banner-two/banner-two-main-img.webp'

const MainBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="banner-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h1>Data Analytics Consulting Services</h1>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>World leading reliable research & AI based Data Analytics solutions for Big Data companies and consumer business products. Drive your success without stress!</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <div className="btn-box">
                                        <Link to="/about-us" className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            About Us <span></span>
                                        </Link>

                                        <Link 
                                            to="#"
                                            onClick={e => {e.preventDefault(); openModal()}}
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="flaticon-google-play"></i> Watch Video
                                        </Link>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="banner-animation-image">
                            <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img1} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img2} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img3} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img4} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInUp'>
                                    <img src={img5} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img6} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img7} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img8} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img9} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img10} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src={img11} alt="banner" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <img src={img12} alt="banner" />
                                </ReactWOW>

                                <img src={img13} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainBanner