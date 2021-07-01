import React from 'react'
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
import ContactForm from './ContactForm'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'
import '../../assets/css/contactForm.css'

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
										<div class="col-md-8">
											<h1 class="font-size-6 mb-0"><strong>Product Designer</strong></h1>
											<div class="ahl"></div>
											<span class="font-size-3 text-gray line-height-2">Webure Technologies is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles.</span>
											<div class="col-md-12">
												<span class="font-size-3 text-gray line-height-2"><strong>Soft Skill</strong></span>
												<ul class="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Slack</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Basic English</li>
													<li class="bg-regent-opacity-15 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Communication Skill</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Well Organised</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Sketch</li>
												</ul>
											</div>
											<div class="col-md-12">
											<span class="font-size-3 text-gray line-height-2"><strong>Technical Skill</strong></span>
												<ul class="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Editing</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Wire-framing</li>
													<li class="bg-regent-opacity-15 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">XD</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">User Persona</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Sketch</li>
												</ul>
											</div>
										</div>
										<div class="col-md-4">
										<br/><br/>
											<div className="btn-box">
												<Link to="#" className="default-btn">
													<i className="flaticon-user"></i>APPLY NOW! <span></span>
												</Link>
											</div>	
											<br/>
											<div class="col-md-12">
												<span class="font-size-3 text-gray line-height-2"><strong>Type</strong></span><br/>
												<span class="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0 bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Full Time</span>
											</div>
											<br/><br/>
											<div class="col-md-12">
												<span class="font-size-3 text-gray line-height-2"><strong>Type</strong></span><br/>
												<span class="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0 bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Full Time</span>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
						
						<div class="col-12">
							<div class="card-btn-group">
								<br/>
								<h4 class="mb-4 font-size-4 text-gray"><strong>Job Description</strong></h4>
								<p class="font-size-4 text-black-2 mb-7">Webure is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles. </p>
								<h4 class="mb-4 font-size-4 text-gray"><strong>Your Role:</strong></h4>
								<p class="font-size-4 text-black-2 mb-7">We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life. </p>
								<p class="font-size-4 text-black-2 mb-7">We are serious about remote work. You can work for from anywhere. </p>
								<h4 class="mb-4 font-size-4 text-gray"><strong>What you will be doing:</strong></h4>							
								<ul class="list-unstyled">
									<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-2"><span class="d-inline-block mr-7">•</span>Contribute new controls or design improvements to our</li>
									<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Take ownership of the successful delivery of features</li>
									<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Help set and achieve quarterly goals</li>
									<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Ship a TON of product improvements and features</li>
								</ul>
							</div>
						</div>							
					</div>
					<div className="col-lg-4 col-md-12">
						<CareerSidebar />
						<br />

    <form>  
    <div class="row">
      <div class="col-12 mb-2 pb-1">         
          <input type="text" placeholder='Full Name'/>                  
      </div>
      <div class="col-12 mb-2 pb-1">                      
          <input type="email" placeholder='Email' />                 
      </div>
      <div class="col-12 mb-2 pb-1">                    
          <input type="tel" placeholder="Phone" />                      
      </div>

      <div class="col-12 mb-2 pb-1">          
          <input type="text" placeholder="Position for applying"  />
      </div>

      <div class="col-12 mb-1 pb-1">
          <input type="text" placeholder="Where did you heard about us?" />          
      </div>    

    </div> 

    <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0">Upload CV</h6>
              </div>
              <div class="col-md-9 pe-5">
              <div class="file-upload-wrapper">
                    <input type="file" id="input-file-now" class="file-upload" />
            </div>
             </div>
        </div> 
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-warning">Send</button>
    </div>

  </form>



					</div>
				</div>
			</div>
        </section>
    )
}

export default CareerDetailsContent