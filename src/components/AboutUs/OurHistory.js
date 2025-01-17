import React from 'react'
import starIcon from '../../assets/images/star-icon.webp'
import history1 from '../../assets/images/history/history1.webp'
import history2 from '../../assets/images/history/history2.webp'
import history3 from '../../assets/images/history/history3.webp'
import history4 from '../../assets/images/history/history4.webp'

const OurHistory = () => {
    return (
        <section className="history-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        Our History
                    </span>
                    <h2>History Begins in 2010</h2>
                </div>

                <ol className="timeline history-timeline">
                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2010</span>
                            February 20
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Founded</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history1} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2013</span>
                            January 14
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Global Success</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history2} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2016</span>
                            March 25
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Founded Data Center</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history3} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2020</span>
                            December 10
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>International Award</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history4} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default OurHistory