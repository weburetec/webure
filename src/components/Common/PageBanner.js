import React from 'react'
import {Link} from 'gatsby'
import shape1 from '../../assets/images/shape/shape1.svg'
import shape2 from '../../assets/images/shape/shape2.webp'
import shape3 from '../../assets/images/shape/shape3.webp'

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2 className='text-left'>{pageTitle}</h2>
                    <ul>
                        <li>
                            <Link to={homePageUrl}>
                                {homePageText}
                            </Link>
                        </li>
                        <li>{activePageText}</li>
                    </ul>
                </div>
            </div>

            <div className="shape-img1">
                <img src={shape1} alt="banner" />
            </div>
            <div className="shape-img2">
                <img src={shape2} alt="banner" />
            </div>
            <div className="shape-img3">
                <img src={shape3} alt="banner" />
            </div>
        </div>
    )
}

export default PageBanner;