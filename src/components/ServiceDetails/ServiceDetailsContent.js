import React from 'react'
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
import ContactForm from './ContactForm'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'

const CareerDetailsContent = () => {
    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
						<div class="mb-3">
							<a class="d-flex align-items-center ml-4" href="/"> 
								<i class="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
							</a>
						</div>
						
						<div class="col-12">
							<div class="card-btn-group">
								<h1 class="font-size-6 mb-0"><strong>Digital Marketing Company in Bengaluru, India</strong></h1>
								<div class="ahl"></div>
								<h4 class="font-size-3 text-gray line-height-2">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential.</h4>
								<br/>
							</div>
						</div>							
					</div>
					<div className="col-lg-4 col-md-12">
						<CareerSidebar />
						<br />
						<ContactForm />
					</div>
				</div>
			</div>
        </section>
    )
}

export default CareerDetailsContent