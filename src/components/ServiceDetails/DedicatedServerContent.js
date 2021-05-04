import React from 'react'
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
import ContactForm from './ContactForm'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'
import bannerhex from '../../assets/images/banner-hex.webp'

const DedicatedServerContent = () => {
    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
						<h2 class="font-size-6 mb-0"><strong>ROI Driven digital marketing agency  in Bengaluru, India</strong></h2>
						<div class="ahl"></div>
						<span class="font-size-3 text-gray line-height-2">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential.</span>
						<br/>				
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<h2 class="font-size-8 mb-0"><strong>Get more leads and sales with Digital Marketing</strong></h2>						
							</div>						
							<div className="col-lg-8 col-md-12">
								<span class="font-size-8 mb-0">Do you have an idea for an app and are looking for a trusted app design and development agency in India ? Look no further ! The experienced digital marketing professionals at Webure Technologies work with you to develop a media strategy, conduct media research, create a media plan and ultimately help you to launch and optimize your online digital campaign. Webure Technologies offers complete Digital Marketing package including web design , website development, Internet marketing. Our range of internet marketing services includes search engine optimization (SEO), Google Ads, email marketing solution etc.</span>						
							</div>						
						</div>
						<br/><br/>			
					</div>
					<div className="col-lg-4 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
						<div class="row">
						
						</div>
					</div>
				</div>
				
				<div class="row">

            <div className="membership-levels-area ptb-100">
                <div className="container">
                    <div className="membership-levels-table table-responsive">

<table class="table dedicated-table">
<thead>
<tr>
<th>Servers</th>
<th>CPU Cores/Speed</th>
<th>Memory</th>
<th>Storage</th>
<th>Bandwidth</th>
<th>Deployment Time</th>
<th>Monthly</th>
<th>&nbsp;</th>
</tr>
</thead>
<tbody>
<tr>
<td>Intel Xeon E3-1230 v2 </td>
<td>4x3.3GHz</td>
<td>16GB DDR3</td>
<td>1x 2TB HDD/240GB SSD</td>
<td>20TB</td>
<td><b>24 Hours</b></td>
<td><b>$48</b></td>
<td>								<button class="primary">
									Message
								</button></td>
</tr>
<tr>
<td>Intel Xeon E3-1270v3 </td>
<td>4x3.5GHz</td>
<td>16GB DDR3</td>
<td>1x 2TB HDD/240GB SSD</td>
<td>20TB</td>
<td><b>24 Hours</b></td>
<td><b>$65</b></td>
<td><button class="primary">
									Message
								</button></td>
</tr>
<tr>
<td>Intel Xeon E3-1230v5 </td>
<td>4x3.4GHz</td>
<td>16GB DDR4</td>
<td>1x 2TB HDD/500GB SSD</td>
<td>20TB</td>
<td><b>48 Hours</b></td>
<td><b>$99</b></td>
<td><button class="primary">
									Message
								</button></td>
</tr>
<tr>
<td>Intel Xeon E3-1275v5 </td>
<td>4x3.6GHz</td>
<td>16GB DDR4</td>
<td>1x 2TB HDD/500GB SSD</td>
<td>20TB</td>
<td><b>48 Hours</b></td>
<td><b>$119</b></td>
<td><button class="primary">
									Message
								</button></td>
</tr>
<tr>
<td>Intel Xeon E5-2637v2 </td>
<td>4x3.5GHz</td>
<td>32GB DDR3</td>
<td>1x 3TB HDD/500GB SSD</td>
<td>20TB</td>
<td><b>48 Hours</b></td>
<td><b>$189</b></td>
<td><button class="primary">
									Message
								</button></td>
</tr>
<tr>
<td>Intel Xeon E5-2630v3 </td>
<td>8x2.4GHz</td>
<td>32GB DDR3</td>
<td>2x 3TB HDD/500GB SSD</td>
<td>20TB</td>
<td><b>48 Hours</b></td>
<td><b>$249</b></td>
<td><button class="primary" onclick="window.location.href='/home'">
									Message
								</button></td>
</tr>
<tr>
<td>Intel Xeon E5-2630v4 </td>
<td>10x2.2GHz</td>
<td>32GB DDR4</td>
<td>2x 3TB HDD/500GB SSD</td>
<td>20TB</td>
<td><b>48 Hours</b></td>
<td><b>$299</b></td>
<td><button class="primary">
									Message
								</button></td>
</tr>
</tbody>
</table>

                    </div>
                </div>
            </div>

		
				</div>
					
				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-10">
						<img src="https://tistio.com/wp-content/uploads/2020/11/map-1024x655.png" alt="DCPL Presence Map" title="DCPL Presence Map" class="img-fluid mt-4"/>
					</div>
					<div class="col-lg-1"></div>
				</div>
			</div>
        </section>
    )
}

export default DedicatedServerContent