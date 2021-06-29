  import React from 'react'
import starIcon from '../../assets/images/star-icon.webp'
import howItWork from '../../assets/images/how-its-work.webp'

const WhyChooseUs = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                People Love Us
                            </span>
                            <h2>Why Choose Us?</h2>
                            <p>With the power of technology, data, and our team of professionals you will be able to bridge the gap between digital platforms and business sustainability. Our market focus spans a vast range of project types – each one demanding unique, client-focused solutions.</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Long Term Support</h3>
                                    <p>Our team believes in deploying solutions which are error free, while sustaining the client’s needs and wants. At the same time maintaining the systems so they stay up to date.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>Agile Development</h3>
                                    <p>Webure makes sure of on-time delivery of projects using agile methods and sprints across the entire technology development life cycle.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src={howItWork} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs