import React from 'react'
import client1 from '../../assets/images/user1.webp'
import client2 from '../../assets/images/user2.webp'
import client3 from '../../assets/images/user3.webp'
import shape9 from '../../assets/images/shape/vector-shape9.webp'
import shape10 from '../../assets/images/shape/vector-shape10.webp'
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
        <section className="testimonials-area bg-23173a pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>What Our Clients are Saying?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-testimonials-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client1} alt="testimonial" />
                                <div className="title">
                                    <h3>Alex Maxwell</h3>
                                    <span>CEO at EnvyTheme</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client2} alt="testimonial" />
                                <div className="title">
                                    <h3>David Warner</h3>
                                    <span>CEO at Envato</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client3} alt="testimonial" />
                                <div className="title">
                                    <h3>Sarah Taylor</h3>
                                    <span>CEO at ThemeForest</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>

            <div className="vector-shape9">
                <img src={shape9} alt="shape" />
            </div>
            <div className="vector-shape10">
                <img src={shape10} alt="shape" />
            </div>
        </section>
    )
}

export default Testimonials