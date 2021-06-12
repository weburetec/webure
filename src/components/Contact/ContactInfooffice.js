import React from 'react'
import contact01 from '../../assets/images/contact-01.webp'
import contact02 from '../../assets/images/contact-02.webp'
import contact03 from '../../assets/images/contact-03.webp'
import contact04 from '../../assets/images/contact-04.webp'
import ContactFormRevised from './ContactFormRevised'

const ContactInfooffice = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
				<div class="row">
					<div class="col-lg-4 col-sm-6">
						<hr class="new1" />
						<br />
						<h2><strong>We have a list of<br /> <span class="contactopening">openings</span></strong></h2>
					</div>
					<div class="col-lg-8 col-sm-6">
						<div class="row">
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>UI/UX Designer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>Flutter Developer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>People Manager</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>Business Manager</p>
								</div>					
							</div>	
						</div>
						<div class="row">
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>UI/UX Designer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>Flutter Developer</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>People Manager</p>
								</div>					
							</div>
							<div class="col-lg-3 col-sm-6">
								<div className="single-career-box">
									<p>Business Manager</p>
								</div>					
							</div>	
						</div>
					</div>
				</div>
				<br />
				<br />
				
				<div class="row">
					<div class="col-lg-4 col-sm-6">
						<hr class="new1" />
						<br />
						<h2><strong>Help us get in touch <br /> <span class="contactopening">with you</span></strong></h2>
					</div>
					<div class="col-lg-8 col-sm-6">
						<div class="row">
							<ContactFormRevised />
						</div>
					</div>
				</div>			
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact01} alt="contact01" />
							</div>
							<h3><a href="/service-details">New Zealand</a></h3>
							<p>Level 26, HSBC Tower, 188 Quay Street</p>
							<p>Auckland, AUK 1010 New Zealand</p>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact02} alt="contact02" />
							</div>
							<h3><a href="/service-details">New York </a></h3>
							<p>One World Trade Center, 285 Fulton Street Suite 8500</p>
							<p>New York City NY 10007, USA</p>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact03} alt="contact03" />
							</div>
							<h3><a href="/service-details">Canada </a></h3>
							<p>155-2 King Street West Unit #145 Hamilton</p>
							<p>ON L8P 4S0 Canada</p>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact04} alt="contact04" />
							</div>
							<h3><a href="/service-details">India Office</a></h3>
							<p>#310G, Whitefield, Bangalore</p>
							<p>560103, India</p>
						</div>
					</div>
				</div>
			
            </div>
        </div>
    )
}

export default ContactInfooffice