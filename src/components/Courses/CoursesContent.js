import React from 'react'
import {Link} from 'gatsby'
import course1 from '../../assets/images/courses/course1.webp'
import course2 from '../../assets/images/courses/course2.webp'
import course3 from '../../assets/images/courses/course3.webp'
import course4 from '../../assets/images/courses/course4.webp'
import course5 from '../../assets/images/courses/course5.webp'
import course6 from '../../assets/images/courses/course6.webp'
import user1 from '../../assets/images/user1.webp'
import user2 from '../../assets/images/user2.webp'
import user3 from '../../assets/images/user3.webp'
import user4 from '../../assets/images/user4.webp'
import user5 from '../../assets/images/user5.webp'
import user6 from '../../assets/images/user6.webp'
import shape from '../../assets/images/shape/vector-shape6.webp'

const CoursesContent = () => {
    return (
        <div className="courses-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course1} alt="about" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow free">Free</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user1} className="rounded-circle" alt="about" />
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
                                    <img src={course2} alt="about" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow">$49</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user2} className="rounded-circle" alt="about" />
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

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course3} alt="about" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow">$69</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user3} className="rounded-circle" alt="about" />
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
 
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course4} alt="about" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow">$39</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user4} className="rounded-circle" alt="about" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        The Data Science Course: Complete Data Science
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 3 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course5} alt="about" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow">$65</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user5} className="rounded-circle" alt="about" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        Java Programming Masterclass for Developers
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 3 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course6} alt="about" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                <div className="price shadow">$69</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user6} className="rounded-circle" alt="about" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        Machine Learning A-Z™: Hands-On Python
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

                    {/* Pagination */}
                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area text-center">
                            <Link to="#" className="prev page-numbers">
                                <i className='bx bx-chevrons-left'></i>
                            </Link>
                            <span className="page-numbers current">1</span>
                            <Link to="#" className="page-numbers">
                                2
                            </Link>
                            <Link to="#" className="page-numbers">
                                3
                            </Link>
                            <Link to="#" className="page-numbers">
                                4
                            </Link>
                            <Link to="#" className="next page-numbers">
                                <i className='bx bx-chevrons-right'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape6">
                <img src={shape} alt="about" />
            </div>
        </div>
    )
}

export default CoursesContent