import React from 'react'
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
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
						<div class="mb-9">
							<div class="bg-white rounded-4 border border-mercury shadow-9">
								<div class="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
									<div class="row">
										<div class="col-md-6">
											<h1 class="font-size-6 mb-0"><strong>Product Designer</strong></h1>
											<span class="font-size-3 text-gray line-height-2">AirBnb</span>
											<div class="col-md-3">
												<span class="font-size-3 text-gray line-height-2">Soft Skill</span>
												<ul class="list-unstyled">
													<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-2"><span class="d-inline-block mr-7">•</span>Slack</li>
													<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Basic English</li>
													<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Well Organized</li>
												</ul>
											</div>
											<div class="col-md-9">
												<span class="font-size-3 text-gray line-height-2">Technical Skill</span>
												<ul class="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Editing</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Wire-framing</li>
													<li class="bg-regent-opacity-15 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">XD</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">User Persona</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Sketch</li>
												</ul>
											</div>

										</div>
										<div class="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
											<div class="media justify-content-md-end">
												<p class="font-size-4 text-gray mb-0">19 June 2020</p>
											</div>
											<div className="btn-box">
												<Link to="#" className="default-btn">
													<i className="flaticon-user"></i>APPLY NOW! <span></span>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card-btn-group">
								<hr/>
								<h4 class="mb-4 font-size-4 text-gray"><strong>Job Description</strong></h4>
								<p class="font-size-4 text-black-2 mb-7">Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles. </p>
								<span class="font-size-4 font-weight-semibold text-black-2 mb-7">Your Role:</span>
								<p class="font-size-4 text-black-2 mb-7">We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life. </p>
								<p class="font-size-4 text-black-2 mb-7">We are serious about remote work. You can work for from anywhere. </p>
								<span class="font-size-4 font-weight-semibold text-black-2 mb-7">What you will be doing:</span>								
									<ul class="list-unstyled">
										<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-2"><span class="d-inline-block mr-7">•</span>Contribute new controls or design improvements to our</li>
										<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Take ownership of the successful delivery of features</li>
										<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Help set and achieve quarterly goals</li>
										<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Ship a TON of product improvements and features</li>
									</ul>
								<div className="btn-box">
									<Link to="#" className="default-btn">
										<i className="flaticon-user"></i>APPLY NOW! <span></span>
									</Link>
								</div>
							</div>
						</div>							
					</div>
					<div className="col-lg-4 col-md-12">
						<CareerSidebar />
					</div>
				</div>
			</div>
        </section>
    )
}

export default CareerDetailsContent