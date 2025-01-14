import React from 'react'
import starIcon from '../../assets/images/star-icon.webp'
import process1 from '../../assets/images/process/process1.webp'
import process2 from '../../assets/images/process/process2.webp'
import process3 from '../../assets/images/process/process3.webp'
import process4 from '../../assets/images/process/process4.webp'
import process5 from '../../assets/images/process/process5.webp'
import process6 from '../../assets/images/process/process6.webp'
import shape1 from '../../assets/images/shape/circle-shape1.webp'

const HowItWork = () => {
    return (
        <section className="process-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        How It's Work
                    </span>
                    <h2>The Data Science Process</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">1</div>
                            <div className="image">
                                <img src={process1} alt="banner" />
                            </div>
                            <h3>Frame the Problem</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">2</div>
                            <div className="image">
                                <img src={process2} alt="banner" />
                            </div>
                            <h3>Collect the Raw Data</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">3</div>
                            <div className="image">
                                <img src={process3} alt="banner" />
                            </div>
                            <h3>Process the Data</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box ">
                            <div className="number">4</div>
                            <div className="image">
                                <img src={process4} alt="banner" />
                            </div>
                            <h3>Explore the Data</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">5</div>
                            <div className="image">
                                <img src={process5} alt="banner" />
                            </div>
                            <h3>Perform In-depth Analysis</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">6</div>
                            <div className="image">
                                <img src={process6} alt="banner" />
                            </div>
                            <h3>Communicate Results</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default HowItWork