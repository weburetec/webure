import React from 'react'
import icon1 from '../../assets/images/funfacts/fun-icon1.webp'
import icon2 from '../../assets/images/funfacts/fun-icon2.webp'
import icon3 from '../../assets/images/funfacts/fun-icon3.webp'
import icon4 from '../../assets/images/funfacts/fun-icon4.webp'

const Funfacts = () => {
    return (
        <div className="funfacts-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon1} alt="features" />
                            </div>
                            <h3>10 Years</h3>
                            <p>On the market</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon2} alt="features" />
                            </div>
                            <h3>10,000+</h3>
                            <p>Learners</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon3} alt="features" />
                            </div>
                            <h3>125+</h3>
                            <p>Course</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon4} alt="features" />
                            </div>
                            <h3>196+</h3>
                            <p>Countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funfacts