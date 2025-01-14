import React from 'react'
import {Link} from 'gatsby'
import course1 from '../../assets/images/courses/course1.webp'
import course2 from '../../assets/images/courses/course2.webp'
import course3 from '../../assets/images/courses/course3.webp'
import shape from '../../assets/images/shape/vector-shape6.webp'
import user1 from '../../assets/images/user1.webp'
import user2 from '../../assets/images/user2.webp'
import user3 from '../../assets/images/user3.webp'

const Courses = () => {
    return (
        <section className="courses-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <h2>Online Data Science Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course1} alt="features" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow free">Free</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user1} className="rounded-circle" alt="features" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        Introduction to Quantitative Methods
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 8 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box ">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course2} alt="features" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow">$49</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user2} className="rounded-circle" alt="features" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        Introduction to Linear Models and Matrix Algebra
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 7 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course3} alt="features" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow">$69</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user3} className="rounded-circle" alt="features" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        Data Science: Inference and Modeling
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 2 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion <Link to="/profile-authentication">Join Free Now</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape6">
                <img src={shape} alt="features" />
            </div>
        </section>
    )
}

export default Courses