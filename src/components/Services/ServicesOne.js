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

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>
            <div className="container">
                <div class="row">
					<div class="col-sm-3 menuBox">
						<div class="et_pb_column et_pb_column_1_2 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough">
							<div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
								<div class="et_pb_text_inner"><h1>Services</h1></div>
							</div> 
							<div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_text_align_center-tablet et_pb_bg_layout_light">
								<div class="et_pb_text_inner">As India’s leading digital marketing agency, we create digital products and experiences that meet great expectations. We provide various services to lift your brand off the ground quickly to attain visibility and growth.</div>
							</div>
							<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_center et_pb_module ">
								<a class="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href="#web_development" data-et-has-event-already="true">Learn More</a>
							</div>
							<div class="et_pb_module et_pb_image et_pb_image_0">
								<span class="et_pb_image_wrap ">
								<img src="https://brandshark.in/wp-content/uploads/2020/06/Path-16932.png" alt="Services" title="Services" height="auto" width="auto" class="wp-image-783 lazyloaded" />
								</span>
							</div>
						</div>
						
						<div class="et_pb_column et_pb_column_1_2 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_image et_pb_image_1">
				
				
				<span class="et_pb_image_wrap ">
					<img src="https://brandshark.in/wp-content/uploads/2020/06/Group-10237-min.png" alt="Services" title="Services" height="auto" width="auto" class="wp-image-771 lazyloaded" />
				</span>
			</div><div class="et_pb_module et_pb_image et_pb_image_2">
				
				
				<span class="et_pb_image_wrap "><img src="https://brandshark.in/wp-content/uploads/2020/06/services-min.png" alt="Services" title="Services" height="auto" width="auto" class="wp-image-2742 lazyloaded" data-pagespeed-url-hash="3435895109" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 879px, 100vw" srcset="https://brandshark.in/wp-content/uploads/2020/06/services-min.png 879w, https://brandshark.in/wp-content/uploads/2020/06/services-min-480x397.png 480w" data-ll-status="loaded" />
				</span>
			</div>
			</div>
						
						
					</div>				
				</div>
            </div>
        </section>
    )
}

export default ServicesOne