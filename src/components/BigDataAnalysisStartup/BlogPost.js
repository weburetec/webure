import React from 'react';
import {Link} from 'gatsby'

import BlogImg4 from '../../assets/images/blog/blog-img4.webp'
import BlogImg5 from '../../assets/images/blog/blog-img5.webp'
import BlogImg6 from '../../assets/images/blog/blog-img6.webp'
import User1 from '../../assets/images/user1.webp'
import User2 from '../../assets/images/user2.webp'
import User3 from '../../assets/images/user3.webp'
import VectorShape1 from '../../assets/images/shape/vector-shape1.webp'
import VectorShape2 from '../../assets/images/shape/vector-shape2.webp'

const BlogPost = () => {
    return (
        <section className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Latest Valuable Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg4} alt="Blog" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src={User1} className="rounded-circle" alt="User" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 30, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                        Six Ways to Make Smarter Decisions
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg5} alt="Blog" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src={User2} className="rounded-circle" alt="User" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 28, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                        The Challenges to Tackle Before You Start With AI
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg6} alt="Blog" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src={User3} className="rounded-circle" alt="User" />
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 29, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                        Why Organisations Want an Analytics Platform
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape1">
                <img src={VectorShape1} alt="Vector Shape" />
            </div>
            <div className="vector-shape2">
                <img src={VectorShape2} alt="Vector Shape" />
            </div>
        </section>
    )
}

export default BlogPost;