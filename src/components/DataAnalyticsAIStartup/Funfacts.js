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
                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon1} alt="banner" />
                            </div>
                            <h3>10 Years</h3>
                            <p>On the market</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon2} alt="banner" />
                            </div>
                            <h3>45+</h3>
                            <p>Team members</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon3} alt="banner" />
                            </div>
                            <h3>100%</h3>
                            <p>Satisfaction rate</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src={icon4} alt="banner" />
                            </div>
                            <h3>80%</h3>
                            <p>Senior scientist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funfacts