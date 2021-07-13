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
import details from '../../assets/images/events/events-details.webp'
import contact01 from '../../assets/images/contact-01.webp'
import contact02 from '../../assets/images/contact-02.webp'
import contact03 from '../../assets/images/contact-03.webp'
import contact04 from '../../assets/images/contact-04.webp'

const CareerCard = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
		    <div className="events-details-image">
                <img src={details} alt="details" />
            </div>
            <div className="container">
				<div class="row">
					<div class="col-12 col-md-7 d-flex flex-column justify-content-center">
						<div class="d-md-none pb-3">
							<img
								src="https://brandshark.in/wp-content/uploads/2020/06/career-min.png"
								class="customers-section-img"
							/>
						</div>
						<div class="et_pb_text_inner">
							<h2><strong>A Career <span class="contactopening">You Love</span></strong></h2>
						</div>
						<div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_text_align_center-tablet et_pb_bg_layout_light">
							<h4 class="font-size-3 text-gray line-height-2">Got the agility and flexibility to solve exciting real-world challenges? Be a part of our uber cool team in shaping the world for a digital future. Check out exciting career opportunities at Webure Technologies! Webure follows in the footsteps of those visionaries that combine determination, passion, loyalty and intuition to reach new horizons, overcoming obstacles or finding new paths. We are fully aware of the fact that “if you want something you never had before, you must do something you have never done before. We are fully aware of the fact that". Be a part of an upbeat, dynamic and fun-loving team that loves to make a difference in the way things work.</h4>
							<h4 class="font-size-3 text-gray line-height-2">A company’s success starts with the right and worthy people who can create value for the customers. Our company is constantly looking for creative, talented, and goal-oriented professionals. At Webure Technologies we provide an opportunity for you to learn and grow with us.</h4>
							<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_center et_pb_module ">
								<a class="et_pb_button_0" href="#web_development" data-et-has-event-already="true">Explore Opportunities</a>
							</div>	
						</div>												
					<div>						
			</div>
		</div>
					<div class="col-12 col-md-5 d-none d-md-block pb-3">
						<img
						src="https://brandshark.in/wp-content/uploads/2020/06/career-min.png"
						class="customers-section-img"
						/>
					</div>	
				</div>
			</div>
			<br />
			<br />
			
			<div className="container text-center">
                <div className="row">
					<div class="heading-content">
					<h1 class="title text-center"><i class="uplers-shape"></i><strong>Open Positions</strong></h1>
					<br />
					<h4 class="font-size-3 text-gray line-height-2 text-center">Experience creativity &amp; flexibility like never before. A paradise for performers, under-utilized potential, Webure is welcoming you to enter a new era of work-life freedom. Ready to get on board? So hop on and take a look at our open positions. With no limitations of location, we invite you to work from anywhere in the world. If you are a go-getter, dynamic, and willing to grab opportunities that come your way, Webure Technologies is the place to be and your playground where dreams take flight, ideas turn into innovations and every goal achieved is celebrated.</h4>
				</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
						<div class="single-events-box">
							<div class="card shadow_1">
								<div class="card-body">
									<div class="media mb-2">
										<div class="media-body">
											<p class="mb-1">People Management Team</p>
											<h4 class="fs-20 text-black">HR Manager</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">Best in Industry</span>
									<p class="fs-14">Looking for an HR Manager to oversee all aspects of human resources practices and processes.</p>
									<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_center et_pb_module d-flex align-items-center mt-4">
									<Link to="/career-details"><a class="et_pb_button_0">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad, India</span>
									</div>
								</div>
							</div>
						</div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
						<div class="single-events-box">
							<div class="card shadow_1">
								<div class="card-body">
									<div class="media mb-2">
										<div class="media-body">
											<p class="mb-1">Finance Team</p>
											<h4 class="fs-20 text-black">Account Manager</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">Best in Industry</span>
									<p class="fs-14">Monitor the day-to-day financial operations within the company (payroll, invoicing, and other transactions).</p>
									<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_center et_pb_module d-flex align-items-center mt-4">
									<Link to="/career-details"><a class="et_pb_button_0">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad, India</span>
									</div>
								</div>
							</div>
						</div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
						<div class="single-events-box">
							<div class="card shadow_1">
								<div class="card-body">
									<div class="media mb-2">
										<div class="media-body">
											<p class="mb-1">Development Team</p>
											<h4 class="fs-20 text-black">Backend Developer</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">Best in Industry</span>
									<p class="fs-14">As the leader of our Backend team, you’ll use your skills in advocating and unblocking to provide effective technical expertise</p>
									<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_center et_pb_module d-flex align-items-center mt-4">
									<Link to="/career-details"><a class="et_pb_button_0">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad, India</span>
									</div>
								</div>
							</div>
						</div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
						<div class="single-events-box">
							<div class="card shadow_1">
								<div class="card-body">
									<div class="media mb-2">
										<div class="media-body">
											<p class="mb-1">Development Team</p>
											<h4 class="fs-20 text-black">Server Executive</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">Best in Industry</span>
									<p class="fs-14">Hosting and Technical Support Specialist will be primarily responsible for maintenance, support and deployment of customer facing hosting solutions</p>
									<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_center et_pb_module d-flex align-items-center mt-4">
									<Link to="/career-details"><a class="et_pb_button_0">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad, India</span>
									</div>
								</div>
							</div>
						</div>
                    </div>			
                </div>
            </div>
			
			<br />
			<br />
			<div className="container text-center">
			<div class="row">
					<div class="col-12 col-md-7 d-flex flex-column justify-content-center">
						<div class="d-md-none pb-3">
							<img
								src="https://brandshark.in/wp-content/uploads/2020/06/career-min.png"
								class="customers-section-img"
							/>
						</div>
						<div class="et_pb_text_inner">
							<h2><strong>Life at <span class="contactopening">Webure</span></strong></h2>
							<br />
							<br />
						</div>
						<div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_text_align_center-tablet et_pb_bg_layout_light">
							<h4 class="font-size-3 text-gray line-height-2">Life here is a pretty sweet deal. From flexible PTO to paid parental leave to dogs in the office on Fido Fridays, we work hard to ensure that every employee feels supported and encouraged to have a healthy balance between work and home commitments. We believe rest and a full life outside of the office makes for a happier, healthier team.</h4>
							<h4 class="font-size-3 text-gray line-height-2">We’re a company regiment who care for employees and brings out the best in one another. Our growth is streamlining with synergic efforts to attain uncommon goals and deliver exceptional results.</h4>	
						</div>												
					<div>						
			</div>
		</div>
					<div class="col-12 col-md-5 d-none d-md-block pb-3">
						<img
						src="https://brandshark.in/wp-content/uploads/2020/06/career-min.png"
						class="customers-section-img"
						/>
					</div>	
			</div>
            </div>					
        </section>
    )
}

export default CareerCard