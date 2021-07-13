import React from 'react'
import {Link} from 'gatsby'
import details from '../../assets/images/events/events-details.webp'
import green_shape from '../../assets/images/services/green_shape.png'
import icon1 from '../../assets/images/services/icon1.jpg'
import icon2 from '../../assets/images/services/icon2.jpg'
import icon3 from '../../assets/images/services/icon3.jpg'
import icon4 from '../../assets/images/services/icon4.jpg'
import icon5 from '../../assets/images/services/icon5.jpg'
import icon6 from '../../assets/images/services/icon6.jpg'
import icon7 from '../../assets/images/services/icon7.jpg'
import icon8 from '../../assets/images/services/icon8.jpg'
import icon12 from '../../assets/images/services/icon12.jpg'
import icon13 from '../../assets/images/services/icon13.jpg'
import service1 from '../../assets/images/services/service1.png'
import service2 from '../../assets/images/services/service2.png'
import service3 from '../../assets/images/services/service3.png'
import service4 from '../../assets/images/services/service4.png'
import service5 from '../../assets/images/services/service5.png'
import service6 from '../../assets/images/services/service6.png'
import UpcomingEventTimer from './UpcomingEventTimer'

const ServicesTwo = () => {
    return (
        <section className="solutions-area pt-100 pb-5">
            <div className="events-details-image">
                <img src={details} alt="details" />
            </div>
            <div className="container">

				<div class="row">
					<div class="col-12 col-md-5 d-none d-md-block pb-3">
						<img
						src="https://brandshark.in/wp-content/uploads/2020/06/our-agency-1.png"
						class="customers-section-img"
						/>
					</div>
					<div class="col-12 col-md-7 d-flex flex-column justify-content-center">
						<div class="d-md-none pb-3">
							<img
								src="https://brandshark.in/wp-content/uploads/2020/06/our-agency-1.png"
								class="customers-section-img"
							/>
						</div>
						<div class="et_pb_text_inner">
							<h2><strong>Website <span class="contactopening">Development</span></strong></h2>
						</div>
						<div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_text_align_center-tablet et_pb_bg_layout_light">
							<h4 class="font-size-3 text-gray line-height-2">In this technologically driven world, achieving a lasting online presence is an aim that businesses need to pursue. Webure’s skilled team of web designers and developers employ their years of experience and expertise in building high-performing, feature-packed, secure and scalable websites. We provide tailor-made website development services to meet your specific industry needs.</h4>
							<h4 class="font-size-3 text-gray line-height-2"><strong>Webure Technologies</strong> is a leading web development company. Our expert team of Website Developers & Digital Strategists combine intelligent architecture and web-friendly practices to create interactive business and e-commerce websites.</h4>
							<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_center et_pb_module pb-5">
								<a class="et_pb_button_0" href="#web_development" data-et-has-event-already="true">Learn More</a>
							</div>	
						</div>												
					<div>						
				</div>

			</div>
		</div>	
        </section>
    )
}

export default ServicesTwo