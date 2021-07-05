import React from 'react'
import Detailsform from './details'
import contact01 from '../../assets/images/get-in-touchmin.webp'

const ContactInfo = () => {
	const imgstyle = {width: 300 , margin: "20px"}
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
				<div class="row">
					<div class="col-12 col-md-6">
						<br />
						<hr class="new1" />
						<br />
						<h2><strong>GET IN TOUCH <span class="contactopening">WITH US</span></strong></h2>
						<h5>
							<span>Fill out this simple form and our team</span>
							<br />
							<span>will contact you shortly.</span>
						</h5>
						<p class="queris_hr wow fadeInDown"><strong>For Enquiries &amp; Sales :</strong><br />
						Contact [India] : +91-40-4917-0108<br />Contact [New Zealand] : +64 9 889 3406<br />Contact [New York] : +1 917 675 3086</p>
						<div class="row">						
													
						<img style={imgstyle} src={contact01} alt="get-in-touchmin" />
						</div>
					</div>
					<div class="col-12 col-md-6">						
						<Detailsform/>
					</div>
				</div>				
            </div>
        </div>
    )
}

export default ContactInfo