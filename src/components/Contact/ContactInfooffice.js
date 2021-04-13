import React from 'react'
import contact01 from '../../assets/images/contact-01.webp'
import contact02 from '../../assets/images/contact-02.webp'
import contact03 from '../../assets/images/contact-03.webp'
import contact04 from '../../assets/images/contact-04.webp'

const ContactInfooffice = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact01} alt="contact01" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact02} alt="contact02" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact03} alt="contact03" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="single-solutions-box">
							<div class="icon">
								<img src={contact04} alt="contact04" />
							</div>
							<h3><a href="/service-details">New York Office</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
						</div>
					</div>
				</div>
			
            </div>
        </div>
    )
}

export default ContactInfooffice