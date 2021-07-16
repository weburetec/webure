import React, { Component } from 'react'
import img1 from './digitallinkimg/01.jpeg'
import img2 from './digitallinkimg/02.jpeg'
import img3 from './digitallinkimg/03.jpeg'
import img4 from './digitallinkimg/04.jpeg'
import img5 from './digitallinkimg/05.jpeg'
import img6 from './digitallinkimg/06.jpeg'
import img7 from './digitallinkimg/07.jpeg'
import img8 from './digitallinkimg/08.jpeg'
import img9 from './digitallinkimg/09.jpeg'
import img10 from './digitallinkimg/10.jpeg'
import './digital.css'
import './source.css'

export default class DigitalMarket extends Component {
    state = {
		howWeWork: 'td'
	}

	onSubmitWebDevReq = (e) =>{
		e.preventDefault()
	}

	onClickHowWeWork = (index) => {
		this.setState({howWeWork: index})
	}
	
	howWeWork1 = () => {
		return(
			<div className="accoContain" id="tab-1">
				<div className="commonlistbox">
					<div className="row">
						<div className="col-sm-6 order-2 order-sm-1">
						    <p>We are a one-stop digital marketing agency having the bandwidth and strength that helps us to execute campaigns very fast and at scale. Our strategies and approach are well-defined and focused such to minimize the time to returns.</p>
						</div>
						<div className="col-sm-6 order-1 order-sm-2 mt-5">
						    <figure data-bottom-top="transform:translateY(-100px);" data-top-bottom="transform:translateY(0);" className="skrollable skrollable-between" style={{transform: 'translateY(-39.7813px)'}}>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Quick-Implementattion1.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
					</div>
				</div>

				<div className="testimonials-list">
					<div className="row">
						<div className="col-sm-6">
							<figure>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Quick-Implementattion2.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
						<div className="col-sm-6">
							<p>
                            Executing results-driven digital campaigns needs thorough analysis, in-depth competitor research, and strategizing. It takes time to understand a trend and implement it for higher results. But, deadlines are important. We are lucky to accomplish our goal and implement digital campaigns fast and effectively because we have a great team with us, where everyone is responsibly fulfilling their tasks within the stipulated time.
                            </p>
						    <div className="author-info">
						    	<h4 className="name">Darshan Modi</h4>
						    	<div className="position">Sr. Manager Digital Operations</div>
						    </div>
						</div>
				   	</div>
				</div>
		    </div>
			)
	}

	howWeWork2 = () => {
		return(
			<div className="accoContain" id="tab-1">
				<div className="commonlistbox">
					<div className="row">
						<div className="col-sm-6 order-2 order-sm-1">
						    <p>We’ve all been in situations with unrealistic expectations from our clients, which demands ample of time and resources. We are lucky enough to always have backups, which has enabled us to help our agency partners to fulfil their commitments, without any double thoughts.</p>
						</div>
						<div className="col-sm-6 order-1 order-sm-2 mt-5">
						    <figure data-bottom-top="transform:translateY(-100px);" data-top-bottom="transform:translateY(0);" className="skrollable skrollable-between" style={{transform: 'translateY(-39.7813px)'}}>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Fulfilling-Commitments1.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
					</div>
				</div>

				<div className="testimonials-list">
					<div className="row">
						<div className="col-sm-6">
							<figure>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Fulfilling-Commitments2.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
						<div className="col-sm-6">
							<p>Outsourcing is complex. We are answerable to our agency partners, they are answerable to their client’s marketing team, and their marketing team is answerable to their management. If we fail to fulfil our commitments, the entire chain suffers.It’s funny, most of the outsourcing agencies underestimate their importance or potential to fail so many people. Haha. </p>
						    <div className="author-info">
						    	<h4 className="name">Rahul Doshi</h4>
						    	<div className="position">VP of Digital Operations. He is known for his commitments</div>
						    </div>
						</div>
				   	</div>
				</div>
		    </div>
			)
	}

	howWeWork3 = () => {
		return(
			<div className="accoContain" id="tab-1">
				<div className="commonlistbox">
					<div className="row">
						<div className="col-sm-6 order-2 order-sm-1">
						    <p>We thrive to innovate and remain on top of the market trends, which helps us to work through unique techniques, tools and procedures, helping us better manage our campaigns and provide lasting outcomes from our digital marketing services. We also share our knowledge with all our partner agencies.</p>
						</div>
						<div className="col-sm-6 order-1 order-sm-2 mt-5">
						    <figure data-bottom-top="transform:translateY(-100px);" data-top-bottom="transform:translateY(0);" className="skrollable skrollable-between" style={{transform: 'translateY(-39.7813px)'}}>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Ahead-of-the-learning-curve1.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
					</div>
				</div>

				<div className="testimonials-list">
					<div className="row">
						<div className="col-sm-6">
							<figure>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Ahead-of-the-learning-curve2.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
						<div className="col-sm-6">
							<p>Most of our clients had experienced some kind of trouble with their previous agency partner with regard to technology, tools, or procedures. We are glad to say that we are ahead of this curve. We evolve, innovate, and keep ourselves ahead of the industry trends to deliver work through unique techniques, tools, and procedures.</p>
						    <div className="author-info">
						    	<h4 className="name">Nital Shah</h4>
						    	<div className="position">COO</div>
						    </div>
						</div>
				   	</div>
				</div>
		    </div>
		)
	}
    howWeWork4 = () => {
		return(
			<div className="accoContain" id="tab-1">
				<div className="commonlistbox">
					<div className="row">
						<div className="col-sm-6 order-2 order-sm-1">
						    <p>We have the bandwidth and technology support to manage multiple digital marketing campaigns for search & email for multiple clients at the same time and at one place.</p>
						</div>
						<div className="col-sm-6 order-1 order-sm-2 mt-5">
						    <figure data-bottom-top="transform:translateY(-100px);" data-top-bottom="transform:translateY(0);" className="skrollable skrollable-between" style={{transform: 'translateY(-39.7813px)'}}>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Multiple-services1.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
					</div>
				</div>

				<div className="testimonials-list">
					<div className="row">
						<div className="col-sm-6">
							<figure>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/Multiple-services2.jpg" alt="Tight Deadline"/>
							</figure>
						</div>
						<div className="col-sm-6">
							<p>Managing multiple campaigns at a time and maintaining quality in all becomes a challenge. Many of our clients had bad experience in this, previously. Our huge team makes it easy to run and deploy multiple digital campaigns at a time without hampering their quality.</p>
						    <div className="author-info">
						    	<h4 className="name">Aayush Gupta</h4>
						    	<div className="position">Sr. Manager, Brand & Marketing</div>
						    </div>
						</div>
				   	</div>
				</div>
		    </div>
		)
	}
    render() {
        const {howWeWork} = this.state
        return (
            <div className="mt-5">
            <div className="container pt-5 pb-5">
                <div className="row align-items-center">
                        <div className="left-content col-sm-12 col-md-6">
                            <h1 className="text-left" style={{fontWeight:"700",fontSize:"35px"}}>Digital Marketing Service Agency</h1>
                            <h3>Combining expert analysis, user insights, and research to lay the groundwork for web presence and boost digital marketing efforts.</h3>
                        </div>
                        <div className="right-form col-sm-12 col-md-6">
                            <div className="inner-common-form">
                                <h3 className="query-msg text-center" style={{fontWeight:"700"}}>Inquire Now!</h3>
                                <form id="dedicated-form" onSubmit={this.onSubmitWebDevReq}>
                                    <div className="form-group">
                                        <input type="text" name="full_name" placeholder="Name*"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="Email" name="email" placeholder="Work Email*"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="tel" name="phone" placeholder="Phone*"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="Company" placeholder="Company*"/>
                                    </div>

                                    <div className="form-group">
                                        <textarea placeholder="Notes*" name="message"></textarea>
                                    </div>

                                    <div className="submit-btn text-center">
                                        <button type="submit" style={{fontWeight:"500"}}>SCALE YOUR BUSINESS</button>
                                    </div>

                                    <div className="ajax-message"></div>
                                </form>
                            </div>					
                        </div>
                </div>
            </div>
            <section className="blackIcon-section">
			<div className="blacklist">
				<div className="listrow">
					<div className="container d-md-flex align-items-center">
						<div className="iconbox">
							<figure>
								<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/experties-icon.svg" alt="Our Expertise"/>
							</figure>
						</div>
						<h2 className="box-title">Our Expertise</h2>
						<h3 className="box-bold-text">Search & Social Marketing, Email Marketing & Automation.</h3>
					</div>
				</div>
				<div className="listrow">
					<div className="container d-md-flex  align-items-center">
						<div className="iconbox">
							<figure>
								<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/approach-icon.svg" alt="Our Approach"/>
							</figure>
						</div>
						<h2 className="box-title">Our Approach</h2>
						<h3 className="box-bold-text">Process Driven.</h3>
					</div>
				</div>
				<div className="listrow">
					<div className="container d-md-flex align-items-center">
						<div className="iconbox">
							<figure>
								<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/objective-icon.svg" alt="Our Objective"/>
							</figure>
						</div>
						<h2 className="box-title">Our Objective</h2>
						<h3 className="box-bold-text">To save time, energy and money.</h3>
					</div>
				</div>
			</div>
		</section>
            <section className="reasons-to-work">
				<div className="container">
					<div className="heading-content">
						<h2 className="title" style={{fontWeight:"700" ,fontSize:"25px"}}><i className="uplers-shape"></i>How we can help</h2>
					</div>
					<div className="common-tabing">
						<div className="mainTabing">
							<div className="row justify-content-center">		
								<div className="col-sm-4">
									<ul className="detailTab">
										<li onClick={() => this.onClickHowWeWork('td')} className="tabing btn on-select-title" data-tab="tab-1"><h3 className="title">Quick Implementation<i className="long-arrow"></i></h3></li>
										<li onClick={() => this.onClickHowWeWork('ec')} className="tabing btn on-select-title" data-tab="tab-2"><h3 className="title">Fulfilling Commitments<i className="long-arrow"></i></h3></li>
										<li onClick={() => this.onClickHowWeWork('mw')} className="tabing btn on-select-title" data-tab="tab-3"><h3 className="title">Ahead of the learning curve<i className="long-arrow"></i></h3></li>
                                        <li onClick={() => this.onClickHowWeWork('wm')} className="tabing btn on-select-title" data-tab="tab-3"><h3 className="title">Multiple Services, Multiple Campaigns, One Place<i className="long-arrow"></i></h3></li>
									</ul>		
								</div>
								<div className="col-sm-8">
									<div className="accMainDiv">
										{howWeWork === 'td' && this.howWeWork1()}
										{howWeWork === 'ec' && this.howWeWork2()}
										{howWeWork === 'mw' && this.howWeWork3()}
                                        {howWeWork === 'wm' && this.howWeWork4()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="reasons-to-rely">
				<div className="container">
					<div className="heading-content">
						<h2 className="title"><i className="uplers-shape" />Why us</h2>
					</div>
					<div className="icon-listing">
						<div className="row">
							<div className="col-12 col-sm-6">
								<div className="iconbox w-100">
								<figure>
									<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/agreement-icon.svg" alt="Agreement Icon" />
								</figure>
								<h3 className="icon-title">White Labelling following <br />strict Non-disclosure Agreement</h3>
								</div>
							</div>
							<div className="col-12 col-sm-6">
								<div className="iconbox w-100">
								<figure>
									<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/contact-icon.svg" alt="Contact Icon" />
								</figure>
								<h3 className="icon-title">Account Manager for single<br /> point of contact</h3>
								</div>
							</div>
							<div className="col-12 col-sm-6">
								<div className="iconbox w-100">
								<figure>
									<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/exprience-icon.svg" alt="Exprience Icon" />
								</figure>
								<h3 className="icon-title">15 years of industry experience</h3>
								</div>
							</div>
							<div className="col-12 col-sm-6">
							<div className="iconbox w-100">
							<figure>
								<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/no-contract-icon.svg" alt="Thumb Icon" />
							</figure>
							<h3 className="icon-title">No Contracts</h3>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>
			<section className="dark-counter">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<div className="descbox">
								<h3 className="title">$30M</h3>
								<p style={{color:"#ffffff"}}>Media spend is something that we manage monthly for ads on different platforms and social networking sites.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="descbox">
								<h3 className="title">3,000</h3>
								<p style={{color:"#ffffff"}}>Email templates we produce every month, from clients all over the world.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="descbox">
								<h3 className="title">5,000+</h3>
								<p style={{color:"#ffffff"}}>Keywords we optimise every month for Google, for hundreds of our agency partners and their clients.</p>
							</div>
						</div>
                        <div className="col-sm-3">
							<div className="descbox">
								<h3 className="title">1,000+</h3>
								<p style={{color:"#ffffff"}}>Campaigns we schedule every month for our clients with 99.9% accuracy.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
            <section class="commonlisting pt-3">
			<div class="container">
				<h2 class="title section-title" style={{fontWeight:"700",fontSize:"35px"}}>Our Case Studies</h2>
				<div class="row">
					<div class="col-lg-4 col-sm-6 listbox ">
						<h3 class="box-title"><a href="https://www.uplers.com/case-studies/airtasker/">Airtasker</a></h3>
						<figure class="ratio-img">
							<a href="https://www.uplers.com/case-studies/airtasker/">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/case-studies/airtasker.jpg"/>
								<span class="view">View</span>
							</a>
						</figure>
						<div class="box-info">
							<h4 class="box-sub-title">How we increased Airtasker’s traffic by 7,251% in 10 months</h4>
						</div>
					</div>

					<div class="col-lg-4 col-sm-6 listbox ">
						<h3 class="box-title"><a href="https://www.uplers.com/case-studies/red-soda/">Red Soda</a></h3>
						<figure class="ratio-img">
							<a href="https://www.uplers.com/case-studies/red-soda/">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/case-studies/musical-function.jpg"/>
								<span class="view">View</span>
							</a>
						</figure>
						<div class="box-info">
							<h4 class="box-sub-title">How we increased Sydney based wedding band's conversions by 750% in 10 months</h4>
						</div>
					</div>
					
					<div class="col-lg-4 col-sm-6 listbox ">
						<h3 class="box-title"><a href="https://www.uplers.com/case-studies/survival-emergency-solutions/">Survival Emergency Solutions</a></h3>
						<figure class="ratio-img">
							<a href="https://www.uplers.com/case-studies/survival-emergency-solutions/">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/case-studies/survival-emergency-solutions.jpg"/>
								<span class="view">View</span>
							</a>
						</figure>
						<div class="box-info">
							<h4 class="box-sub-title">How we put Survival on the first page of Google in 6 months</h4>
						</div>
					</div>
				</div>
			</div>
		</section>

            <section className="marketing-tools">
				<div className="container">
				<h2 className="section-title text-center " style={{fontWeight:"700",fontSize:"35px"}}>We use the latest marketing tools<br /> to execute campaigns.</h2>
				<div className="logos">
					<ul>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/sem-cush-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/moz-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/majestic-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/screming-frog-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/ahrefs-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/three-pipe-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/hubspot-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/salesforce-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/marketo-logo.png" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/ads-logo.png" />
						</figure>
					</li>
                    <li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/mailchimp.svg" />
						</figure>
					</li>
                    <li>
                        <div className="w-50">
						    <figure>
						        <img  alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/adobe-2.svg" />
						    </figure>
                        </div>
					</li>
                    <li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/digital-marketing/campaig-monitor.svg" />
						</figure>
					</li>
                    
					</ul>
				</div>
				</div>
			</section>
			<section className="services-main1">
				<div className="inner-bg">
				<div className="container">
					<div className="heading-content">
					<h2 className="title" style={{fontWeight:"700",fontSize:"35px"}}><i className="uplers-shape" />Industries We Have Served</h2>
					</div>
                    <div className="row">
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/food-beverages.svg"/>
                            <h1 className="pt-3">Food & Beverages</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/retail-businesses.svg"/>
                            <h1 className="pt-3">Retail Businesses</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/real-estate.svg"/>
                            <h1 className="pt-3">Real Estate </h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/insurance.svg"/>
                            <h1 className="pt-3">Insurance</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/financial-services.svg"/>
                            <h1 className="pt-3">Financial Services</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/hospitality.svg"/>
                            <h1 className="pt-3">Hospitality</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/travel-tourism.svg"/>
                            <h1 className="pt-3">Travel & Tourism</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/healthcare.svg"/>
                            <h1 className="pt-3">Healthcare</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/online-gaming.svg"/>
                            <h1 className="pt-3">Online-gaming</h1>
                        </div>
                        <div className="col-5 col-md-2  text-center m-3">
                            <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/fitness-nutrition.svg"/>
                            <h1 className="pt-3">fitness-nutrition</h1>
                        </div>
                        
                    </div>
				</div>
				</div>
			</section>
            <section className="services-main">
				<div className="">
				<div className="container">
					<div className="heading-content">
					<h2 className="title" style={{fontWeight:"700",fontSize:"35px"}}><i className="uplers-shape" />What We Do</h2>
					</div>
					<div class="row justify-content-center">
					<div class="col-sm-4 col-lg-3 item">
						<a href="https://www.uplers.com/seo-services/" class="service-box">
							<h2 class="box-title">Search Engine Optimization</h2>
							<div class="box-link">Learn More</div>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-search-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box">
							<h2 class="box-title">Blogger Outreach / Link Building</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-link-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box">
							<h2 class="box-title">Google Maps Optimization</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-g-map-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="https://www.uplers.com/search-engine-marketing/" class="service-box">
							<h2 class="box-title">Google Ads</h2>
							<div class="box-link">Learn More</div>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-ads-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box">
							<h2 class="box-title">Facebook Ads</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-fb-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box">
							<h2 class="box-title">Instagram Ads</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-insta-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box">
							<h2 class="box-title">LinkedIn Ads</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-linkdien-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box">
							<h2 class="box-title">Twitter Ads</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-twitter-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="https://www.uplers.com/email-marketing/" class="service-box no-box-link">
							<h2 class="box-title">Email Marketing</h2>
							<div class="box-link">Learn More</div>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/vec-email-icon.svg"/>
							</div>
						</a>
					</div>
					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box no-box-link">
							<h2 class="box-title">Email Automation &amp; Journey</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/Email-Automation.svg"/>
							</div>
						</a>
					</div>

					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box no-box-link">
							<h2 class="box-title">Email Template Production</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/Email-Template-Production.svg"/>
							</div>
						</a>
					</div>

					<div class="col-sm-4 col-lg-3 item">
						<a href="javascript:void(0)" class="service-box no-box-link">
							<h2 class="box-title">Campaign Management</h2>
							<div class="icon">
								<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//digital-marketing/Campaign-Management.svg"/>
							</div>
						</a>
					</div>
				</div>
				</div>
				</div>
			</section>    
        </div>

        )
    }
}
