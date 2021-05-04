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
				
				<div class="dedicated-servers-table">
					<div class="table-header">
						<div class="locations-wrap grid">
							<p class="title"><b>Dedicated</b> Servers</p> 
								<div class="locations">
									<div class="loc active">
										<span>All locations</span></div>
										<div class="loc"><span>New York</span></div>
										<div class="loc"><span>Los Angeles</span></div>
										<div class="loc"><span>Dallas</span></div>
										<div class="loc"><span>Amsterdam</span></div>
										<div class="loc"><span>London</span></div>
										<div class="loc"><span>Auckland</span></div>
										<div class="loc"><span>Buffalo</span></div>
										<div class="loc"><span>Montreal</span></div>
										</div></div> 
										<div class="filters-wrap">
											<div class="filters"><div>
												<h6>PROCESSOR TYPE</h6> 
												<label><input type="checkbox">Single Processors</label>
												<label><input type="checkbox">Dual Processors</label>
											</div> 
											<div>
												<h6>CPU cores</h6> 
													<div class="vue-slider vue-slider-ltr" label="CPU cores" units="cores" background="0095cd" prefix="" style="padding: 7.5px 0px; width: 100%; height: 2px;">
														<div class="vue-slider-rail">
															<div class="vue-slider-process" style="height: 100%; top: 0px; left: 0%; width: 100%; transition-property: width, left; transition-duration: 0.5s;"></div>
																<div aria-valuetext="4" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="4" aria-valuemin="4" aria-valuemax="48" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 0%; transition: left 0.5s ease 0s;">
																	<div class="vue-slider-dot-handle"></div>
																	<div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top">
																	<div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top">
																		<span class="vue-slider-dot-tooltip-text">4</span>
																	</div>
																	</div>
																</div>
																<div aria-valuetext="48" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="48" aria-valuemin="4" aria-valuemax="48" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 100%; transition: left 0.5s ease 0s;"><div class="vue-slider-dot-handle"></div><div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"><div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"><span class="vue-slider-dot-tooltip-text">48</span></div></div></div></div></div> <div class="range-values"><span>4 cores</span> <span>48 cores</span></div></div> <div><h6>MEMORY</h6> <div class="vue-slider vue-slider-ltr" label="MEMORY" units="GB" background="0095cd" prefix="" style="padding: 7.5px 0px; width: 100%; height: 2px;"><div class="vue-slider-rail"><div class="vue-slider-process" style="height: 100%; top: 0px; left: 0%; width: 100%; transition-property: width, left; transition-duration: 0.5s;"></div><div aria-valuetext="8" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 0%; transition: left 0.5s ease 0s;"><div class="vue-slider-dot-handle"></div><div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"><div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"><span class="vue-slider-dot-tooltip-text">8</span></div></div></div><div aria-valuetext="256" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="256" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 100%; transition: left 0.5s ease 0s;"><div class="vue-slider-dot-handle"></div><div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"><div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"><span class="vue-slider-dot-tooltip-text">256</span></div></div></div></div></div> <div class="range-values"><span>8 GB</span> <span>256 GB</span></div></div> <div><h6>STORAGE</h6> <div class="vue-slider vue-slider-ltr" label="STORAGE" units="" background="0095cd" prefix="" style="padding: 7.5px 0px; width: 100%; height: 2px;"><div class="vue-slider-rail"><div class="vue-slider-process" style="height: 100%; top: 0px; left: 0%; width: 100%; transition-property: width, left; transition-duration: 0.5s;"></div><div aria-valuetext="120 GB" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="120 GB" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 0%; transition: left 0.5s ease 0s;"><div class="vue-slider-dot-handle"></div><div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"><div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"><span class="vue-slider-dot-tooltip-text">120 GB</span></div></div></div><div aria-valuetext="16 TB" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="16 TB" aria-valuemin="0" aria-valuemax="100" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 100%; transition: left 0.5s ease 0s;"><div class="vue-slider-dot-handle"></div><div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"><div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"><span class="vue-slider-dot-tooltip-text">16 TB</span></div></div></div></div></div> <div class="range-values"><span>120 GB </span> <span>16 TB </span></div></div> <div><h6>DRIVE TYPE</h6> <label><input type="checkbox">HDD
  </label>
  <label><input type="checkbox">SSD</label></div> <div><h6>PRICE/MONTH</h6> <div class="vue-slider vue-slider-ltr" label="PRICE/MONTH" units="" background="0095cd" prefix="$" style="padding: 7.5px 0px; width: 100%; height: 2px;"><div class="vue-slider-rail"><div class="vue-slider-process" style="height: 100%; top: 0px; left: 0%; width: 100%; transition-property: width, left; transition-duration: 0.5s;"></div><div aria-valuetext="0" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="0" aria-valuemin="0" aria-valuemax="1400" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 0%; transition: left 0.5s ease 0s;"><div class="vue-slider-dot-handle"></div><div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"><div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"><span class="vue-slider-dot-tooltip-text">0</span></div></div></div><div aria-valuetext="1400" class="vue-slider-dot vue-slider-dot-hover" role="slider" aria-valuenow="1400" aria-valuemin="0" aria-valuemax="1400" aria-orientation="horizontal" tabindex="0" style="width: 15px; height: 15px; transform: translate(-50%, -50%); top: 50%; left: 100%; transition: left 0.5s ease 0s;"><div class="vue-slider-dot-handle"></div><div class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"><div class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"><span class="vue-slider-dot-tooltip-text">1400</span></div></div></div></div></div> <div class="range-values"><span>$0 </span> <span>$1400 </span></div></div></div> <div class="dd-link"><span class="link"><i class="icon icon-nav-arrow"></i>SHOW ADVANCED FILTERS</span></div></div> <!----></div> <div class="servers-table grid"><div class="head grid"><div>CPU</div> <div>Cores</div> <div>RAM</div> <div>Storage</div> <div>Cloud Backup</div> <div>Setup time</div> <div>Monthly</div> <div class="sort">
  Sort:
  <span>Price: Low to High</span> <!----></div></div> <div class="servers-wrap"><div class="layer"><!----></div> <!----> <div id="servers" class="servers"><div class="server grid"><div class="name"><!----> <!----><b>Intel E3 1270 V6</b></div> <div>4 x 3.8 GHz</div> <div>32 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$129</b></div> <div><a href="https://order.servermania.com/configure/98?options=1345%7C3717," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><div class="flag sale"></div> <!----><b>Xeon E-2146G</b></div> <div>6 x 3.5 GHz</div> <div>32 GB</div> <div><div>500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><del>$159</del><b>$149</b></div> <div><a href="https://order.servermania.com/configure/290?options=1345%7C3717," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><!----> <!----><b>Intel Xeon W-2125</b></div> <div>4 x 4.0 GHz</div> <div>32 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 24h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$159</b></div> <div><a href="https://order.servermania.com/configure/170?options=1345%7C3718," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><div class="flag sale"></div> <!----><b>Xeon E-2246G</b></div> <div>6 x 3 .6 Ghz</div> <div>64 GB</div> <div><div>500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><del>$179</del><b>$169</b></div> <div><a href="https://order.servermania.com/configure/356?options=1345%7C3995," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><!----> <!----><b>AMD Ryzen 3950X</b></div> <div>16 x 3.5 Ghz</div> <div>128 GB</div> <div><div>1 TB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$209</b></div> <div><a href="https://order.servermania.com/configure/337?options=1345%7C3719," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><!----> <span>2x </span><b>Intel E5 2620 V4</b></div> <div>16 x 2.1 GHz</div> <div>64 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$209</b></div> <div><a href="https://order.servermania.com/configure/177?options=1345%7C3717," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><!----> <!----><b>Intel Xeon Silver 4210</b></div> <div>10 x 2 .2 Ghz</div> <div>64 GB</div> <div><div>500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$219</b></div> <div><a href="https://order.servermania.com/configure/288?options=1345%7C3719," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><!----> <span>2x </span><b>Intel E5 2695 V2</b></div> <div>24 x 2.4 GHz</div> <div>64 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$219</b></div> <div><a href="https://order.servermania.com/configure/338?options=1345%7C3995," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><!----> <span>2x </span><b>Intel E5 2630 V4</b></div> <div>20 x 2.2 GHz</div> <div>64 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$289</b></div> <div><a href="https://order.servermania.com/configure/203?options=1345%7C3717," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><!----> <span>2x </span><b>Intel Xeon Silver 4210</b></div> <div>20 x 2 .2 Ghz</div> <div>64 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><!----><b>$329</b></div> <div><a href="https://order.servermania.com/configure/287?options=1345%7C3719," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><div class="flag drop"></div> <span>2x </span><b>Intel E5 2690 V4</b></div> <div>28 x 2.6 GHz</div> <div>64 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 48h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><del>$529</del><b>$429</b></div> <div><a href="https://order.servermania.com/configure/87?options=1345%7C3719," class="btn btn-info">Customize</a></div></div><div class="server grid"><div class="name"><div class="flag drop"></div> <span>2x </span><b>Intel E5 2699 V4</b></div> <div>44 x 2.2 GHz</div> <div>64 GB</div> <div><div>2 x 500 GB SSD</div></div> <div>50 GB</div> <div class="hours"><span>Setup in 8h</span> <div class="d-link">
      Details
    </div> <!----></div> <div class="price-curr"><del>$929</del><b>$729</b></div> <div><a href="https://order.servermania.com/configure/194?options=1345%7C3718," class="btn btn-info">Customize</a></div></div></div></div></div></div>
				
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