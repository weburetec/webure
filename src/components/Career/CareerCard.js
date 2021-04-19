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
import Bangalore from '../../assets/images/Melbourne.webp'
import UpcomingEventTimer from './UpcomingEventTimer'

const CareerCard = () => {
    return (
        <div className="events-area pt-100 pb-70">
		    <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>
            <div className="container">
				<div className="row">
					<div className="col-lg-6 col-sm-6 col-md-6">
						<h2 class="fs-20 text-black">We are Webure</h2>
						<h4 class="fs-14">Webure follows in the footsteps of those visionaries that combine determination, passion, loyalty and intuition to reach new horizons, overcoming obstacles or finding new paths. We are fully aware of the fact that “if you want something you never had before, you must do something you have never done before.”</h4>
					</div>
					<div className="col-lg-6 col-sm-6 col-md-6">
						<div className="row">
							<div class="col-lg-3 col-sm-6">						
								<img src={Bangalore} alt="Bangalore" />
							</div>
							<div class="col-lg-3 col-sm-6">						
								<img src={Bangalore} alt="Bangalore" />
							</div>
						</div>
					</div>
				</div>
			</div>

            <div className="container">
				<br/><br/>
				<h4 class="fs-20 text-black">Offices</h4><br/>
				<h2 class="fs-20 text-black">Our Global Footprints</h2><br/>
				<div className="row">
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact01} alt="contact01" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact01} alt="contact01" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact01} alt="contact01" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact01} alt="contact01" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
						</div>
					</div>
				</div>
			</div>
			
			
            <div className="container">
				<div className="row"><br/><br/>
					<h4 align="center" class="fs-20 text-black">What to expect when you join us</h4><br/><br/>
					<div className="row">
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div class="single-events-box">
								<div class="card shadow_1">
									<div class="card-body">
										<div class="media mb-2">
											<div class="media-body">
												<img src={details} alt="details" />
											</div>
										</div>
										<h4 align="center" class="fs-20 text-black">Global Exposure</h4>
										<p class="fs-14">With numerous events happening across the world, get a chance to showcase your talent at the International level. We believe in taking risks and innovating and not get bogged by processes.</p>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div class="single-events-box">
								<div class="card shadow_1">
									<div class="card-body">
										<div class="media mb-2">
											<div class="media-body">
												<img src={details} alt="details" />
											</div>
										</div>
										<h4 align="center" class="fs-20 text-black">Global Exposure</h4>
										<p class="fs-14">With numerous events happening across the world, get a chance to showcase your talent at the International level. We believe in taking risks and innovating and not get bogged by processes.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6 col-md-6">
							<div class="single-events-box">
								<div class="card shadow_1">
									<div class="card-body">
										<div class="media mb-2">
											<div class="media-body">
												<img src={details} alt="details" />
											</div>
										</div>
										<h4 align="center" class="fs-20 text-black">Global Exposure</h4>
										<p class="fs-14">With numerous events happening across the world, get a chance to showcase your talent at the International level. We believe in taking risks and innovating and not get bogged by processes.</p>
									</div>
								</div>
							</div>
						</div>		
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div class="single-events-box">
								<div class="card shadow_1">
									<div class="card-body">
										<div class="media mb-2">
											<div class="media-body">
												<img src={details} alt="details" />
											</div>
										</div>
										<h4 align="center" class="fs-20 text-black">Global Exposure</h4>
										<p class="fs-14">With numerous events happening across the world, get a chance to showcase your talent at the International level. We believe in taking risks and innovating and not get bogged by processes.</p>
									</div>
								</div>
							</div>
						</div>
					</div><br/><br/>						
					<h2 align="center" class="fs-20 text-black">Be a part of an upbeat, dynamic and fun-loving team that loves to make a difference in the way things work.</h2><br/><br/>
				</div>
			</div>
			
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
						<div class="single-events-box">
							<div class="card shadow_1">
								<div class="card-body">
									<div class="media mb-2">
										<div class="media-body">
											<p class="mb-1">Maximoz Team</p>
											<h4 class="fs-20 text-black">Database Progammer</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
									<p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									<div class="d-flex align-items-center mt-4">
									<Link to="/event-details"><a class="btn btn-primary light btn-rounded mr-auto">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London, England</span>
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
											<p class="mb-1">Maximoz Team</p>
											<h4 class="fs-20 text-black">Database Progammer</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
									<p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									<div class="d-flex align-items-center mt-4">
									<Link to="/event-details"><a class="btn btn-primary light btn-rounded mr-auto">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London, England</span>
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
											<p class="mb-1">Maximoz Team</p>
											<h4 class="fs-20 text-black">Database Progammer</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
									<p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									<div class="d-flex align-items-center mt-4">
									<Link to="/event-details"><a class="btn btn-primary light btn-rounded mr-auto">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London, England</span>
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
											<p class="mb-1">Maximoz Team</p>
											<h4 class="fs-20 text-black">Database Progammer</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
									<p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									<div class="d-flex align-items-center mt-4">
									<Link to="/event-details"><a class="btn btn-primary light btn-rounded mr-auto">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London, England</span>
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
											<p class="mb-1">Maximoz Team</p>
											<h4 class="fs-20 text-black">Database Progammer</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
									<p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									<div class="d-flex align-items-center mt-4">
									<Link to="/event-details"><a class="btn btn-primary light btn-rounded mr-auto">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London, England</span>
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
											<p class="mb-1">Maximoz Team</p>
											<h4 class="fs-20 text-black">Database Progammer</h4>
										</div>
										<svg class="ml-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3"></path>
										<path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3"></path>
										<path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF"></path>
										<path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white"></path>
										</svg>
									</div>
									<span class="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
									<p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
									<div class="d-flex align-items-center mt-4">
									<Link to="/event-details"><a class="btn btn-primary light btn-rounded mr-auto">APPLY NOW!</a></Link>
										<span class="location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London, England</span>
									</div>
								</div>
							</div>
						</div>
                    </div>					
					
                </div>
            </div>
        </div>
    )
}

export default CareerCard