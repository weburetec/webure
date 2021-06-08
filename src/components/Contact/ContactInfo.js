import React from 'react'
import ContactForm from './ContactForm'

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
				<div class="row">
					<div class="col-lg-4 col-sm-6">
						<h2><strong>GET IN TOUCH <mark>WITH US</mark></strong></h2>
						<h5>
							<span>Fill out this simple form and our team</span>
							<br />
							<span>will contact you shortly.</span>
						</h5>
						
						<p class="queris_hr wow fadeInDown"><strong>For Enquiries &amp; Sales :</strong><br />
						Contact [India] : +91 – 9886528400<br />Contact [New Zealand] : +64 – 9999359997</p>
						
					</div>
					<div class="col-lg-8 col-sm-6">
						<ContactForm />
					</div>
				</div>				

				<div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Our Address</h3>
                            <p>175 5th Ave, New York, NY 10010, United States</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contact</h3>
                            <p>Mobile: <a href="tel:+44457895789">(+44) - 45789 - 5789</a></p>
                            <p>E-mail: <a href="mailto:hello@rewy.com">hello@rewy.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Hours of Operation</h3>
                            <p>Monday - Friday: 09:00 - 20:00</p>
                            <p>Sunday & Saturday: 10:30 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo