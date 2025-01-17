import React from 'react'
import ReactWOW from 'react-wow'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import DedicatedServerContent from '../components/ServiceDetails/DedicatedServerContent'
import RelatedServices from '../components/ServiceDetails/RelatedServices'
import serverclientpartner1 from '../assets/images/ServerClientPartner-1.png'
import serverclientpartner2 from '../assets/images/ServerClientPartner-2.png'
import serverclientpartner3 from '../assets/images/ServerClientPartner-3.png'
import serverclientpartner4 from '../assets/images/ServerClientPartner-4.png'
import serverclientpartner5 from '../assets/images/ServerClientPartner-5.png'
import serverclientpartner6 from '../assets/images/ServerClientPartner-6.png'
import serverclientpartner7 from '../assets/images/ServerClientPartner-7.png'
import serverclientpartner8 from '../assets/images/ServerClientPartner-8.png'
import serverclientpartner9 from '../assets/images/ServerClientPartner-9.png'
import serverclientpartner10 from '../assets/images/ServerClientPartner-10.png'
import serverclientpartner11 from '../assets/images/ServerClientPartner-11.png'
import serverclientpartner12 from '../assets/images/ServerClientPartner-12.png'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
			<br/><br/><br/><br/>
            <DedicatedServerContent />
			<section class="ah2 os bg-blue super-p rowbackground">
				<br />	
				<h1 class="intro text-center">One Global Network, Geographically Diverse</h1>
				<p class="intro text-center">An optimized network around the globe, with up to 40G single Backbone Uplinks</p>
				<div class="row  ">
					<div class="content col-md-1"></div>
					<div class="content col-md-4">
						<div class="desc pcontentbox">
							<h3>Connect Globally</h3>
							<p>We blend a best-in-class network mesh and mirror it across all our datacenter worldwide. With multiple transit providers connected to each datacenter and tied together to form one globally unified network.</p>
						</div>	
						<br/>
						<div class="desc pcontentbox">
							<h3>Connect Globally</h3>
							<p>We blend a best-in-class network mesh and mirror it across all our datacenter worldwide. With multiple transit providers connected to each datacenter and tied together to form one globally unified network.</p>
						</div>
					</div>
					<div class="col-lg-6">
						<img class="" src="https://tistio.com/wp-content/uploads/2020/11/map-1024x655.png" alt=""/>
					</div>
					<div class="content col-md-1"></div>
				</div>
			</section>
			<section class="ah2 os bg-blue super-p rowbackground">
				<div class="wrap tac">
					<br/><br/>
					<h2 class="intro text-center">Clients & Partners</h2> 
					<div class="row">
						<div class="content col-md-2"></div>
						<div class="content col-md-8">
							<p class="intro text-center">Webure Technologies offers dozens of Operating Systems to choose from to ensure you have the right software available. You can find a variety of free linux options as well as Windows Server. Each OS will be immediately installed after checkout, or choose to install a custom OS using our Surge control panel.</p>					
						</div>
						<div class="content col-md-2"></div>
					</div>
					<div class="row">
						<div class="content col-md-3"></div>
						<div class="content col-md-6">
							<div className="partner-area pt-100 pb-70">
								<div className="container">
									<div className="row align-items-center">
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.1s' animation='fadeInUp'>
												<div className="single-partner-item">
													<img class="pcontentbox" src={serverclientpartner1} alt="serverclientpartner1" />
												</div>
											</ReactWOW>
										</div>

										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.3s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img class="pcontentbox" src={serverclientpartner2} alt="serverclientpartner2" />
													</div>
												</div>
											</ReactWOW>
										</div>

										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.4s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner3} alt="serverclientpartner3" />
													</div>
												</div>
											</ReactWOW>
										</div>

										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.5s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner4} alt="serverclientpartner4" />
													</div>
												</div>
											</ReactWOW>
										</div>

										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner5} alt="serverclientpartner5" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner6} alt="serverclientpartner6" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner7} alt="serverclientpartner7" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner8} alt="serverclientpartner8" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner9} alt="serverclientpartner9" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner10} alt="serverclientpartner10" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner11} alt="serverclientpartner11" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={serverclientpartner12} alt="serverclientpartner12" />
													</div>
												</div>
											</ReactWOW>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="content col-md-3"></div>
					</div>
				</div>
			</section>
			<section class="pt-xl  " data-scroll-target="" id="">
				<div class="l-page container">
					<div class="l-section-heading">
						<h2>Frequently Asked Questions</h2>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">How does the 21-day free trial work?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>When you sign up, you instantly get access to our fully-loaded Garden plan for 21&nbsp;days. We will alert you before your trial expires. You can then select a plan and pay by credit card to continue using the product. If you choose not to continue, your account will be suspended.</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">Can I upgrade or downgrade my subscription?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Yes, you can choose to upgrade your subscription instantly. If you wish to downgrade or cancel your subscription, you can do so at the end of your term. Click on ‘Billing’ in your Freshchat account to modify your subscription details.</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
						</div>
						<div class="col-md-6">
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">How does the 21-day free trial work?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>When you sign up, you instantly get access to our fully-loaded Garden plan for 21&nbsp;days. We will alert you before your trial expires. You can then select a plan and pay by credit card to continue using the product. If you choose not to continue, your account will be suspended.</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">Can I upgrade or downgrade my subscription?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Yes, you can choose to upgrade your subscription instantly. If you wish to downgrade or cancel your subscription, you can do so at the end of your term. Click on ‘Billing’ in your Freshchat account to modify your subscription details.</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
							<div class="accordion-wrapper accordion-85">
								<div class="accordion-float-wrapper">
									<h3 class="accordion-heading">What are contacts and how does pricing work for it?</h3>
									<div class="accordion-expand"></div>
								</div>
								<div class="accordion-content">
									<div class="accordion-text">
										<p>Contacts are leads and users you chat with. With Freshchat, get unlimited contacts on any plan — save and access their data without pay anything extra</p>
									</div>
								</div>   
							</div>
						</div>
					</div>
				</div>
			</section>
            <Footer />
        </Layout>
    );
}

export default Details