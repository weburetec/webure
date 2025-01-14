import React from 'react'
import {Link} from 'gatsby'
import event1 from '../../assets/images/events/event1.webp'
import event2 from '../../assets/images/events/event2.webp'
import event3 from '../../assets/images/events/event3.webp'
import event4 from '../../assets/images/events/event4.webp'
import event5 from '../../assets/images/events/event5.webp'
import event6 from '../../assets/images/events/event6.webp'
import event7 from '../../assets/images/events/event7.webp'
import event8 from '../../assets/images/events/event8.webp'
import event9 from '../../assets/images/events/event9.webp'

const EventsCard = () => {
    return (
        <div className="events-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event1} alt="event" />
                                </Link>
                                <span className="date">Wed, 20 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        Global Conference on Business Management
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Vancover, Canada
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event2} alt="event" />
                                </Link>
                                <span className="date">Tue, 19 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        International Conference on Teacher Education
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Sydney, Australia
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event3} alt="event" />
                                </Link>
                                <span className="date">Mon, 18 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        International Conference on Special Needs Education
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Istanbul, Turkey
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event4} alt="event" />
                                </Link>
                                <span className="date">Sun, 17 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        International Conference on Literacy Teaching
                                    </Link>
                                </h3>

                                <span className="location">
                                    <i className="bx bx-map"></i> Athens, Greece
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event5} alt="event" />
                                </Link>
                                <span className="date">Sat, 16 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        International Conference on Educational Administration
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Rome, Italy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event6} alt="event" />
                                </Link>
                                <span className="date">Fri, 15 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        International Conference on Education and Pedagogy
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Athens, Greece
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event7} alt="event" />
                                </Link>
                                <span className="date">Thu, 14 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        Research Conference Aims and Objectives
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Tokyo, Japan
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event8} alt="event" />
                                </Link>
                                <span className="date">Wed, 13 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        Conference on Gender Discrimination in Education
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Oslo, Norway
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event9} alt="event" />
                                </Link>
                                <span className="date">Tue, 12 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        Quality and Improvement in Education Conference
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Tokyo, Japan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsCard