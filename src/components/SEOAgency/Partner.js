import React from 'react'
import partner1 from '../../assets/images/partner/partner1.webp'
import partner2 from '../../assets/images/partner/partner2.webp'
import partner3 from '../../assets/images/partner/partner3.webp'
import partner4 from '../../assets/images/partner/partner4.webp'
import partner5 from '../../assets/images/partner/partner5.webp'
import partner6 from '../../assets/images/partner/partner6.webp'

const Partner = () => {
    return (
        <div className="partner-area ptb-70 bg-fafafb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner1} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner2} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner3} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner4} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner5} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner6} alt="partner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner