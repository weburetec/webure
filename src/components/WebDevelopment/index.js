import React, { Component } from 'react'
import './index.css'
import './source.css'

class WebDevelopment extends Component {
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
						    <p>We provide quicker turnaround time for Web development services and extend 24*5 support. Our support teams work round the clock in different time zones to accommodate our clients in every region. This allows enough time to provide on-time delivery, even with tight deadlines and extend assistance as and when needed.</p>
						</div>
						<div className="col-sm-6 order-1 order-sm-2 mt-5">
						    <figure data-bottom-top="transform:translateY(-100px);" data-top-bottom="transform:translateY(0);" className="skrollable skrollable-between" style={{transform: 'translateY(-39.7813px)'}}>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/tight-deadline1.png" alt="Tight Deadline"/>
							</figure>
						</div>
					</div>
				</div>

				<div className="testimonials-list">
					<div className="row">
						<div className="col-sm-6">
							<figure>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/tight-deadline2.png" alt="Tight Deadline"/>
							</figure>
						</div>
						<div className="col-sm-6">
							<blockquote>
								Developing websites is a time-consuming process. Just coding the HTML and CSS and uploading the same in FTP or PHP is not the end. There are nt bugs that have to be tested and fixed. The most difficult part is meeting deadlines while also delivering quality. Many fail in this scenario. The best thing about us is that we have a huge team so getting the development done while maintaining top-notch quality becomes feasible.
						    </blockquote>
						    <div className="author-info">
						    	<h4 className="name">Bhuvan Desai</h4>
						    	<div className="position">VP Technical Operations</div>
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
						    <p>We provide direct web development support to our clients, to manage their customers for their on-going requests, changes, training all on a white label in local timezones.</p>
						</div>
						<div className="col-sm-6 order-1 order-sm-2 mt-5">
						    <figure data-bottom-top="transform:translateY(-100px);" data-top-bottom="transform:translateY(0);" className="skrollable skrollable-between" style={{transform: 'translateY(-39.7813px)'}}>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/ease-of-customer-support1.png" alt="Tight Deadline"/>
							</figure>
						</div>
					</div>
				</div>

				<div className="testimonials-list">
					<div className="row">
						<div className="col-sm-6">
							<figure>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/ease-of-customer-support2.png" alt="Tight Deadline"/>
							</figure>
						</div>
						<div className="col-sm-6">
							<blockquote>
							I think when you are dealing with any project, it should be the priority to give attention to clients’ concerns. They delegate work to us and having questions and difficulties is probably normal. We have a complete team who assists with customer queries. Also, I myself take the lead if things are complex to understand on the client's end.	
						    </blockquote>
						    <div className="author-info">
						    	<h4 className="name">Krunal Bakraniya</h4>
						    	<div className="position">Sr. Manager Web Operations</div>
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
						    <p>We manage and develop multiple web development projects seamlessly, without hampering any deadlines, commitments through our pool of teams, following standardized best practices.</p>
						</div>
						<div className="col-sm-6 order-1 order-sm-2 mt-5">
						    <figure data-bottom-top="transform:translateY(-100px);" data-top-bottom="transform:translateY(0);" className="skrollable skrollable-between" style={{transform: 'translateY(-39.7813px)'}}>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/multiple-website-at-a-time1.png" alt="Tight Deadline"/>
							</figure>
						</div>
					</div>
				</div>

				<div className="testimonials-list">
					<div className="row">
						<div className="col-sm-6">
							<figure>
								<img className="h-w-h" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/tight-deadline2.png" alt="Tight Deadline"/>
							</figure>
						</div>
						<div className="col-sm-6">
							<blockquote>
							We value each client coming to us with their website development project. It's not that we are ignoring one client for another priority project. Everyone is equally important. What makes us competent to keep a balance between multiple website development requests is our team. We have a bandwidth that helps to personally take care of every project and get it done on time.
						    </blockquote>
						    <div className="author-info">
						    	<h4 className="name">Jaymin Bhuptani</h4>
						    	<div className="position">CEO</div>
						    </div>
						</div>
				   	</div>
				</div>
		    </div>
		)
	}

    render(){
		const {howWeWork} = this.state

		return (
        <div className="mt-5">
            <div className="container pt-5 pb-5">
                <div className="row align-items-center">
                        <div className="left-content col-sm-12 col-md-6">
                            <h1>Website Development Services</h1>
                            <h3>Coding &amp; developing splendid websites including static, customized and dynamic, following industry best practices.</h3>
                        </div>
                        <div className="right-form col-sm-12 col-md-6">
                            <div className="inner-common-form">
                                <h3 className="query-msg text-center">Inquire Now!</h3>
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
                                        <button type="submit">SCALE YOUR BUSINESS</button>
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
						<h3 className="box-bold-text">WordPress, WooCommerce, HubSpot, Shopify &amp; Other CMS</h3>
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
						<h2 className="title"><i className="uplers-shape"></i>How we can help</h2>
					</div>
					<div className="common-tabing">
						<div className="mainTabing">
							<div className="row justify-content-center">		
								<div className="col-sm-4">
									<ul className="detailTab">
										<li onClick={() => this.onClickHowWeWork('td')} className="tabing on-select-title" data-tab="tab-1"><h3 className="title">Tight Deadlines, On-time delivery<i className="long-arrow"></i></h3></li>
										<li onClick={() => this.onClickHowWeWork('ec')} className="tabing on-select-title" data-tab="tab-2"><h3 className="title">Ease of Customer Support<i className="long-arrow"></i></h3></li>
										<li onClick={() => this.onClickHowWeWork('mw')} className="tabing on-select-title" data-tab="tab-3"><h3 className="title">Multiple Websites, at a time<i className="long-arrow"></i></h3></li>
									</ul>		
								</div>
								<div className="col-sm-8">
									<div className="accMainDiv">
										{howWeWork === 'td' && this.howWeWork1()}
										{howWeWork === 'ec' && this.howWeWork2()}
										{howWeWork === 'mw' && this.howWeWork3()}
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
								<img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/thumb-icon.svg" alt="Thumb Icon" />
							</figure>
							<h3 className="icon-title">Follow industry best practices</h3>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>
			<section className="dark-counter">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="descbox">
								<h3 className="title"><span className="counter">150</span>+</h3>
								<p style={{color:"#ffffff"}}>Websites are developed every month on multiple CMS.</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="descbox">
								<h3 className="title"><span className="counter">70</span>%</h3>
								<p style={{color:"#ffffff"}}>Websites we develop are on WordPress CMS.</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="descbox">
								<h3 className="title"><span className="counter">24</span>x<span className="counter">5</span></h3>
								<p style={{color:"#ffffff"}}>Highly experienced and senior web development experts work to support clients from all over the world.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="develop-projects">
				<h2 className="section-title">Our Work</h2>
				<div className="inner-projects">
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/get-reminded.jpg" alt="Get Reminded" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>Get Reminded</h6>
						<span className="pro-category">Start-up</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">Get Reminded</h2>
					</div>
					</a>
				</div>
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/eating-fit.jpg" alt="Eating Fit" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>Eating Fit</h6>
						<span className="pro-category">Health &amp; Nutrition Industry</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">Eating Fit</h2>
					</div>
					</a>
				</div>
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/blinds-in-print.jpg" alt="Blinds in Print" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>Blinds In Print</h6>
						<span className="pro-category">Home Furnishing</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">Blinds In Print</h2>
					</div>
					</a>	
				</div>
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/zeus.jpg" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>Zeus Street Greek</h6>
						<span className="pro-category">Food &amp; Beverages</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">Zeus Street Greek</h2>
					</div>
					</a>
				</div>
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/hse.jpg" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>The Healthstyle Emporium</h6>
						<span className="pro-category">Health Programs</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">The Healthstyle Emporium</h2>
					</div>
					</a>
				</div>
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/stoke-reality.jpg" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>Stoke Realty</h6>
						<span className="pro-category">Real Estate</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">Stoke Realty</h2>
					</div>
					</a>
				</div>
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/sleep-score.jpg" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>Sleep Score</h6>
						<span className="pro-category">Start-up</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">Sleep Score</h2>
					</div>
					</a>	
				</div>
				<div className="single-projects">
					<a href="#" rel="noreferrer" target="_blank">
					<div className="default-content">
						<div className="project-thumb">
						<figure>
							<img className="max-img-width" alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/our-work/em-voices.jpg" />
						</figure>
						</div>
						<div className="overlay-content">
						<h6>EM Voices</h6>
						<span className="pro-category">Audio Recording</span>
						</div>
					</div>
					<div className="hover-content">
						<h2 className="pro-name">EM Voices</h2>
					</div>
					</a>
				</div>
				</div>
			</section>
			<section className="marketing-tools">
				<div className="container">
				<h2 className="section-title text-center ">We use the latest web development tools to better manage<br /> and organize projects with all our clients. </h2>
				<div className="logos">
					<ul>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/toybox.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/usersnap.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/slack.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/proofhub.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/zeplin.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/invision.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/asana.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/trello.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/xd.svg" />
						</figure>
					</li>
					<li>
						<figure>
						<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images/web-development/jira.svg" />
						</figure>
					</li>
					</ul>
				</div>
				</div>
			</section>
			<section className="services-main">
				<div className="inner-bg">
				<div className="container">
					<div className="heading-content">
					<h2 className="title"><i className="uplers-shape" />What We Do</h2>
					</div>
					<div className="row">
					<div className="col-12 services-title"><h4>Frontend</h4></div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">HTML5</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/html-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">AngularJS</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/angular-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">ReactJS</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/react-icon.png" />
						</div>
						</div>
					</div>
					</div>
					<div className="row">
					<div className="col-12 services-title"><h4>Backend</h4></div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">WordPress</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/wordpress-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">HubSpot</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/hubspot-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Drupal</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/drupal-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Joomla</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/joomla-icon.png" />
						</div>
						</div>
					</div>
					</div>
					<div className="row">
					<div className="col-12 services-title"><h4>E-Commerce</h4></div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Magento</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/magento-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Shopify</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/shopify-icon.png" />
						</div>
						</div>
					</div>
					</div>
					<div className="row">
					<div className="col-12 services-title"><h4>Landing Pages</h4></div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Unbounce</h2>
						<div className="icon">
							<img alt="" data-src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/unbounce-icon.svg" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/unbounce-icon.svg" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Salesforce</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/salesforce-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Marketo</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/marketo-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Pardot</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/pardot-icon.png" />
						</div>
						</div>
					</div>
					<div className="col-sm-4 col-lg-3 item">
						<div className="service-box">
						<h2 className="box-title">Optimizely</h2>
						<div className="icon">
							<img alt="" src="https://www.uplers.com/wp-content/themes/uplers/assets/images//web-development/optimizely-icon.png" />
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			<section className="way-to-work p-1 m-1">
				<div className="container">
					<div className="heading-content">
						<h2 className="title"><i className="uplers-shape" />How we can work</h2>
					</div>
					<div className="common-tabing">
					<div className="mainTabing">
					<div className="row">		
						<div className="col-12 rightpart">
							<div className="accMainDiv">
								<h2 className="resp-accordion" role="tab"><span className="resp-arrow" /></h2><h3 className="title">Project Based Support<i className="long-arrow" /></h3><div className="accoContain current in" id="way-tab-1">We majorly work on a project basis for web development services, where a fixed quote is accepted for a defined scope of work of a website or a task.</div>
								<h2 className="resp-accordion" role="tab"><span className="resp-arrow" /></h2><h3 className="title">Ad-hoc task support<i className="long-arrow" /></h3><div className="accoContain" id="way-tab-2">We provide support where the scope cannot be defined, requires research work and where our clients can pay as we work or implement the task</div>
								<h2 className="resp-accordion" role="tab"><span className="resp-arrow" /></h2><h3 className="title">Offshore Remote Teams<i className="long-arrow" /></h3><div className="accoContain" id="way-tab-3">Build a team Specializing in web development, digital marketing and marketing automation 100% dedicated to your business.</div>
							</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			<section className="section pt-5 pb-5 bg-comparison" style={{background:'#f7f7f7'}}>
				<div className="container">
					<div className="cms text-center pb-5 theme-white">
					<h2>Comparison</h2>
					</div>
					<div className="table-dark table-scroll p-2">
						<table  className="w-100">
							<thead>
								<tr>
									<th>Features</th>
									<th>Small Business</th>
									<th>Mid-Size Business</th>
									<th>Large Business</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Number of Pages</td>
									<td><span className="small text-center d-block pt-2">5 Pages</span></td>
									<td><span className="small text-center d-block pt-2">10 Pages</span></td>
									<td><span className="small text-center d-block pt-2">20 Pages</span></td>
								</tr>
								<tr>
									<td>Responsive Design</td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /></td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
								</tr>
								<tr>
									<td>Custom Homepage</td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /></td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
								</tr>
								<tr>
									<td>Logo Design</td>
									<td><img src="https://cdn.fatbit.com/close-icon.svg" alt="" /></td>
									<td><span className="small text-center d-block pt-2">2 Logo Design Drafts</span></td>
									<td><span className="small text-center d-block pt-2">3 Logo Design Drafts</span></td>
								</tr>
								<tr>
									<td>Contact Form</td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /></td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
								</tr>
								<tr>
									<td>Header Slideshow</td>
									<td><img src="https://cdn.fatbit.com/close-icon.svg" alt="" /></td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
									<td><img src="https://cdn.fatbit.com/blue-tick.svg" alt="" /> </td>
								</tr>
								<tr>
									<td>Deliverables</td>
									<td><span className="small text-center d-block pt-2">PSDs, HTML Pages</span></td>
									<td><span className="small text-center d-block pt-2">PSDs, HTML Pages</span></td>
									<td><span className="small text-center d-block pt-2">PSDs, HTML Pages</span></td>
								</tr>
								<tr>
									<td>Custom jQuery/Animation</td>
									<td><img src="https://cdn.fatbit.com/close-icon.svg" alt="" /></td>
									<td><img src="https://cdn.fatbit.com/close-icon.svg" alt="" /></td>
									<td><img src="https://cdn.fatbit.com/close-icon.svg" alt="" /></td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="small text-center pt-5">*Some open source or pre developed animations like image gallery, slide shows, menus etc. can be implemented. Acceptance of any custom animation development or any changes into ready jQuery scripts will be discussed and accepted for additional charge.</p>
				</div>
				</section>
		</div>
    )}
}

export default WebDevelopment
