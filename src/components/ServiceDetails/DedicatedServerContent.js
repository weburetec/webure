import React from 'react'
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
import ContactForm from './ContactForm'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'
import bannerhex from '../../assets/images/banner-hex.webp'

const DedicatedServerContent = () => {
    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
						<h2 class="font-size-6 mb-0"><strong>ROI Driven digital marketing agency  in Bengaluru, India</strong></h2>
						<div class="ahl"></div>
						<span class="font-size-3 text-gray line-height-2">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential.</span>
						<br/>				
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<h2 class="font-size-8 mb-0"><strong>Get more leads and sales with Digital Marketing</strong></h2>						
							</div>						
							<div className="col-lg-8 col-md-12">
								<span class="font-size-8 mb-0">Do you have an idea for an app and are looking for a trusted app design and development agency in India ? Look no further ! The experienced digital marketing professionals at Webure Technologies work with you to develop a media strategy, conduct media research, create a media plan and ultimately help you to launch and optimize your online digital campaign. Webure Technologies offers complete Digital Marketing package including web design , website development, Internet marketing. Our range of internet marketing services includes search engine optimization (SEO), Google Ads, email marketing solution etc.</span>						
							</div>						
						</div>
						<br/><br/>			
					</div>
					<div className="col-lg-4 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
						<div class="row">
						
						</div>
					</div>
				</div>
				
				<div class="row">

            <div className="membership-levels-area ptb-100">
                <div className="container">
                    <div className="membership-levels-table table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="price">$500</span>
                                        <span className="title">Silver Membership</span>
                                        <span className="desc">You can view few features</span>
                                    </th>
                                    <th>
                                        <span className="price">$1,000</span>
                                        <span className="title">Gold Membership</span>
                                        <span className="desc">You can view most features</span>
                                    </th>
                                    <th>
                                        <span className="price">$1,500</span>
                                        <span className="title">Diamond Membership</span>
                                        <span className="desc">You can view all features</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Number of features</td>
                                    <td>4</td>
                                    <td>8</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Investment Fundamentals & Data Analytics
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Hands-On Python & R In Data Science
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Complete Data Science Bootcamp
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Programming MasterclassName for Developers
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Hands-On Artificial Neural Networks
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            PRINCE2® Practitioner Certification Training
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            PMI-RMP® Certification Training
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            PRINCE2® Foundation Certification Training
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            PMP® Plus
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            PMP® Renewal Pack
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Digital Project Manager
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Agile Project Management; Agile Delivery
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Vue JS 2 - The Complete Guide
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Everything You Need to Program in Python
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Mathematical Foundation For Machine Learning
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Drawing Course - Beginner to Advanced
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Deep Learning and Artificial Intelligence
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Information About UI/UX Design Degree
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Photography Photo modify and Beautiful
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            Professional IT Expert Certificate Course
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link to="#" className="select-btn">
                                            Get it now
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="#" className="select-btn">
                                            Get it now
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="#" className="select-btn">
                                            Get it now
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

		
				</div>
				
				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-10">
						<img src="https://tistio.com/wp-content/uploads/2020/11/map-1024x655.png" alt="DCPL Presence Map" title="DCPL Presence Map" class="img-fluid mt-4"/>
					</div>
					<div class="col-lg-1"></div>
				</div>
			</div>
        </section>
    )
}

export default DedicatedServerContent