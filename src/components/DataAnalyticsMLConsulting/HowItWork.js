import React from 'react';

import StarIcon from '../../assets/images/star-icon.webp'
import HowitsWork from '../../assets/images/how-its-work.webp'

const HowItWork = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={StarIcon} alt="image" /> 
                                How It's Work
                            </span>
                            <h2>The Data Science Process</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Data for All Your People</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>A New Breed of AI</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>Analytics Business</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src={HowitsWork} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork;