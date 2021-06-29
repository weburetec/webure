import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.webp'
import client1 from '../../assets/images/testimonials/client1.webp'
import client2 from '../../assets/images/testimonials/client2.webp'
import client3 from '../../assets/images/testimonials/client3.webp'
import shape from '../../assets/images/shape/shape1.svg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="testimonials-area bg-f1f8fb">
            <div className="container">
                <div className="section-title">
					<br />
					<br />
                    <h2>What Our Clients are Saying?</h2>
                    <p>Start by doing what's necessary then do what's possible and suddenly you are doing the impossible.</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-testimonials-item">
                        <p>Webure Technologies had answers for everything, a testament to their deep technical knowledge. They came up with great solutions that would've been impossible without the depth and breadth of their team's skills. The process was smooth and easy.</p>

                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client1} alt="about" />
                                <div className="title">
                                    <h3>Dominika Brown</h3>
                                    <span>Chief Marketing Officer, Heynz Digitals</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>Webure Technologies Private Limited delivered an app that's received over 2800 downloads. It's doubled the number of inquiries that the client receives, and has automated many of their critical processes. The team was exceptionally proactive in incorporating feedback and providing frequent updates.</p>

                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client2} alt="about" />
                                <div className="title">
                                    <h3>Aaman Kothari</h3>
                                    <span>Director Business Development, Aspirava Solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>The real deal, they have a great team with aggressive execution strategies. Webure has grown our revenues by 30X in the last few years we have worked with them</p>
                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client3} alt="about" />
                                <div className="title">
                                    <h3>Ashwin Baburao</h3>
                                    <span>CFO at Calista Interiors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}

                <div className="testimonials-view-btn text-center">
                    <Link to="/testimonials" className="default-btn">
                        <i className="flaticon-view"></i> 
                        Check Out All Reviews <span></span>
                    </Link>
                </div>
            </div>

            <div className="shape-img1">
                <img src={shape} alt="about" />
            </div>
        </section>
    )
}

export default Testimonials