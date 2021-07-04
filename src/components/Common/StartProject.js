import React from 'react'
import { Link } from 'gatsby'
import start1 from '../../assets/images/project-start1.webp'
import shape9 from '../../assets/images/shape/vector-shape9.webp'
import shape10 from '../../assets/images/shape/vector-shape10.webp'

const StartProject = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src={start1} alt="about" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
							<h2><strong>We would like to start<span class="contactopening">your project with us</span></strong></h2>
                            <h2>We Like to Start Your Project With Us</h2>
                            <h4 class="font-size-3 text-gray line-height-2">Our digital marketing team is always ready to help. Give us a call, drop us an email, or just fill in the form below to instantly schedule a call with us.</h4>

                            <Link to="/contact" className="default-btn">
                                <i className="flaticon-web"></i> 
                                Get Started 
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape9">
                <img src={shape9} alt="about" />
            </div>
            <div className="vector-shape10">
                <img src={shape10} alt="about" />
            </div>
        </div>
    )
}

export default StartProject