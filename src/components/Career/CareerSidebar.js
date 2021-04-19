import React from 'react'
import {Link} from 'gatsby'
import payment1 from '../../assets/images/payment/payment1.webp'
import payment2 from '../../assets/images/payment/payment2.webp'
import payment3 from '../../assets/images/payment/payment3.webp'

const CareerSidebar = () => {
    return (
        <div className="events-details-info">
            <ul className="info">
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>JOB ID</span>
                        WT/BRLHYD/DEV/001
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Department</span>
                        Development
                    </div>
                </li>
            </ul>

            <div className="events-share">
                <div className="share-info">
                    <span>Share This Course <i className="flaticon-share"></i></span>

                    <ul className="social-link">
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-facebook'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-twitter'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-instagram'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-linkedin'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CareerSidebar