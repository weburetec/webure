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
						<h2 class="font-size-6 mb-0"><strong>Cheapest Enterprise-Grade Dedicated Servers</strong></h2>
						<div class="ahl"></div>
						<span class="font-size-12 text-gray line-height-2">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential.</span>
						<br/>				
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<h2 class="font-size-8 mb-0"><strong>Get more leads and sales with Digital Marketing</strong></h2>						
							</div>						
							<div className="col-lg-8 col-md-12">
								<span class="font-size-12 mb-0">Webure Technologies guarantees you the best price in the market. If you find a better offer, contact us and we will match your price and offer 25% additional discount on it or offer a free month upgrade.*.</span>
								<span class="font-size-12 mb-0">If You Have Any Questions About Choosing A Server Or A Location, Our Experts Are Ready To Help. Contact Us To Discuss Your Business Requirements, And We Will Create A Perfect Bespoke Solution To Cater Your Demands.</span>								
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
											<td>1x 2TB HDD</td>
											<td>20TB</td>
											<td><b>24 Hours</b></td>
											<td><b>$48</b></td>
											<td><button class="primary">Message</button></td>
										</tr>
										<tr>
											<td>Intel Xeon E3-1270v3 </td>
											<td>4x3.5GHz</td>
											<td>16GB DDR3</td>
											<td>1x 2TB HDD</td>
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
											<td>1x 2TB HDD</td>
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
											<td>1x 2TB HDD</td>
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
											<td>1x 3TB HDD</td>
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
											<td>2x 3TB HDD</td>
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
											<td>2x 3TB HDD</td>
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
				<br/>
				<br/>
				<div className="row ah2">
					<div className="col-lg-12">
						<h2 class="intro text-center"><strong>On The Edge Technology and Affordable Prices</strong></h2>
						<p class="intro text-center">Expand your Network Globally!</p>								
					</div>
				</div>
			</div>
        </section>
    )
}

export default DedicatedServerContent