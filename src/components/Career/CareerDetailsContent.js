import React from 'react'
import ReactDom from 'react-dom';
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
import ContactForm from './ContactForm'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'
import '../../assets/css/contactForm.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
									<div class="row figure1">
										<div class="col-md-8">
											<h1 class="font-size-6 mb-0"><strong>HR Manager</strong></h1>
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
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">HRM KNOWLEDGE</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">ADVISING</li>
													<li class="bg-regent-opacity-15 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">RECRUITMENT</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">INTERCULTURAL SENSTIVITY</li>
													<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">ANALYTICS DRIVEN</li>
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
								<hr class="new1" />
								<br />
								<h4 class="font-size-3 text-gray line-height-2 gappweb66"><strong>Why<span class="contactopening">Webure</span></strong></h4>
								<p class="font-size-3 text-gray line-height-2 gappweb55">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential. We are a Digital Marketing and Technology Agency in India that provide complete end-to-end digital media solutions with higher scope on Brand Strategy, Creating uncontested market space and Analytics. Our R&D team are in the process of creating breakthrough technologies to make advertising more engaging and converting for businesses.</p>
								<hr class="new1" />
								<br />
								<h4 class="font-size-3 text-gray line-height-2 gappweb66"><strong>Your<span class="contactopening">Role</span></strong></h4>
								<p class="font-size-3 text-gray line-height-2 gappweb55">You will determines or is assigned the duties and job responsibilities that are required by the senior management team to meet the needs of their workforce management. We are serious about remote work. You can work for from anywhere. </p>
								<hr class="new1" />
								<br />
								<h4 class="font-size-3 text-gray line-height-2 gappweb66"><strong>What you will<span class="contactopening">be doing</span></strong></h4>							
								<ul class="list-unstyled">
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Recruiting, training and developing staff</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Making sure that staff get paid correctly and on time</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Pensions and benefits administration</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Approving job descriptions and advertisements</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Looking after the health, safety and welfare of all employees</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Organising staff training sessions and activities</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Monitoring staff performance and attendance</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Advising line managers and other employees on employment law and the employer's own employment policies and procedures</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Ensuring candidates have the right to work at the organisation</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Negotiating salaries, contracts, working conditions or redundancy packages with staff and representatives.</li>
								</ul>
								<hr class="new1" />
								<br />
								<h4 class="font-size-3 text-gray line-height-2 gappweb66"><strong>Qualification<span class="contactopening">required:</span></strong></h4>							
								<ul class="list-unstyled">
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>A degree or a professional qualification in HR Management or in a relevant subject.</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Relevant experience of atleast 2 years in HR management services is a must</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Effective organisational skills</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Ability to form working relationships with people at all levels</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Teamwork skills</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Interpersonal skills</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Meticulous attention to detail</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>Numerical skills</li>
									<li class="font-size-3 text-gray line-height-2"><span class="d-inline-block mr-7">•</span>IT skills</li>
								</ul>								
							</div>
						</div>							
					</div>
					<div className="col-lg-4 col-md-12">
						<div className="events-details-info">
							<ul className="info">
								<li>
									<div className="d-flex justify-content-between align-items-center">
										<span>JOB ID</span>
										WT/BLRHYD/HRM/001
									</div>
								</li>
								<li>
									<div className="d-flex justify-content-between align-items-center">
										<span>Department</span>
										People Team
									</div>
								</li>
							</ul>
						</div>
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
									<select placeholder="Objective">
										<option value="">Select the position</option>
										<option value="">HR Manager</option>
										<option value="">HR Executive</option>
										<option value="">HR Specialist</option>
									</select>
								</div>
								<div class="col-12 mb-1 pb-1">
									<TextField id="standard-multiline-static" multiline rows={4} placeholder="Objective To make money. To kill time. To get popular. Sorry, not interested. Next  To learn and learn more. To take up a challenging role. To grow with growing organization. Great"/>
								</div> 

								<div class="col-12 mb-1 pb-1">
									<TextField id="standard-multiline-static" multiline rows={4} placeholder="Experience - Experienced and all set to march a different beat? Yes please! - No or little experience, but game for trying out new things and ready for an adventurous trip? HOP IN!"/>         
								</div> 

								<div class="col-12 mb-1 pb-1">
									<TextField id="standard-multiline-static" multiline rows={4} placeholder="Education - Anything above higher secondary is a plus. We focus more on the skill set and potential of an individual than degrees and certificates."/>        
								
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