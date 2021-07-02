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
			
			<section>
			<div class="mrth-mncntr" id="vpsCpanel">
<div class="htwo-prime1">Choose Your Control Panel</div>
<div class="prrty-mndsc">
<p>Server management is never a trouble with our broad variety of powerful control panels available. We have partnered with best-in-class web-based control panels like cPanel, Plesk and Webuzo for you to manage your bare metal dedicated server with ease. If you have choosen CentOs for your dedicated server then you can pick cPanel, or Plesk for CentOS, Debian, Ubuntu operating systems while Webuzo is the right fit for CentOS and Ubuntu.</p>
</div>
<div class="mrth-mnwrapr" id="ManagementPanel">
<div class="mrth-mncol">
<table class="mrth-tbl">
<thead>
<tr>
<td colspan="2" class="mrth-thdr">
Webuzo <i class="fas fa-info-circle" rel="tooltip" title="A single user control panel to deploy web apps or system apps. It cannot be used to resell."></i>
</td>
</tr>
</thead>
<tbody data-mrth-bg="webuzo">
<tr>
<td><i class="fas fa-check"></i> 1 Account</td>
<td class="tbl-valign-cntr">
<div class="mrth-pric-wrapr"> <i class="fas fa-rupee-sign"></i> <b>560</b> <u>/mo</u> </div>
</td>
</tr>
</tbody>
</table>
<table class="mrth-tbl">
<thead>
<tr>
<td colspan="2" class="mrth-thdr">
One-click installer <i class="fas fa-info-circle" rel="tooltip" title="Install apps like WordPress, Joomla, Drupal and over 400 more such apps with Softaculous one-click installer but cPanel is mandatory"></i>
</td>
</tr>
</thead>
<tbody data-mrth-bg="softaculous">
<tr>
<td><i class="fas fa-check"></i> Softaculous</td>
<td class="tbl-valign-cntr">
<div class="mrth-pric-wrapr"> <i class="fas fa-rupee-sign"></i> <b>560</b> <u>/mo</u> </div>
</td>
</tr>
</tbody>
</table>
</div>
<div class="mrth-mncol">
<table class="mrth-tbl">
<thead>
<tr>
<td colspan="2" class="mrth-thdr">
cPanel WHM <i class="fas fa-info-circle" rel="tooltip" title="It lets you automate server management tasks while giving your clients the tools they need to manage the site."></i>
</td>
</tr>
</thead>
<tbody data-mrth-bg="cpanel">
<tr>
<td><i class="fas fa-check"></i> 1 Account</td>
<td class="tbl-valign-cntr">
<div class="mrth-pric-wrapr"> <i class="fas fa-rupee-sign"></i> <b>990</b> <u>/mo</u> </div>
</td>
</tr>
<tr>
<td><i class="fas fa-check"></i> 100 Accounts</td>
<td class="tbl-valign-cntr">
<div class="mrth-pric-wrapr"> <i class="fas fa-rupee-sign"></i> <b>3000</b> <u>/mo</u> </div>
</td>
</tr>
</tbody>
</table>
</div>
<div class="mrth-mncol">
<table class="mrth-tbl">
<thead>
<tr>
<td colspan="2" class="mrth-thdr">
Plesk <i class="fas fa-info-circle" rel="tooltip" title="A popular web hosting control panel for administration &amp; automation. Pick the one that fits your needs."></i>
</td>
</tr>
</thead>
<tbody data-mrth-bg="plesk">
<tr>
<td colspan="2" class="mrth-thdr">
Web Admin <i class="fas fa-info-circle" rel="tooltip" title="A simple management tool for basic site and domain. You can even manage the databases. "></i>
</td>
</tr>
<tr>
<td><i class="fas fa-check"></i> 10 domains</td>
<td rowspan="2" class="tbl-valign-cntr">
<div class="mrth-pric-wrapr"> <i class="fas fa-rupee-sign"></i> <b>910</b> <u>/mo</u> </div>
</td>
</tr>
<tr>
<td><i class="fas fa-check"></i> WordPress Toolkit SE</td>
</tr>
</tbody>
<tbody>
<tr data-mrth-tr="yes">
<td colspan="2" class="mrth-thdr">
Web Pro <i class="fas fa-info-circle" rel="tooltip" title="Best for web developers and designers who need full flexibility to create, secure and operate highly optimized websites and provide end-user control panel access to users. "></i>
</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> 30 domains</td>
<td rowspan="4" class="tbl-valign-cntr">
<div class="mrth-pric-wrapr"> <i class="fas fa-rupee-sign"></i> <b>1400</b> <u>/mo</u> </div>
</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> WordPress Toolkit SE</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> Subscription Management</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> Account Management</td>
</tr>
</tbody>
<tbody>
<tr data-mrth-tr="yes">
<td colspan="2" class="mrth-thdr">
Web Host <i class="fas fa-info-circle" rel="tooltip" title="For webmaster who wants to operate as a full-fledge hosting business. Ability to create reseller accounts and give end-user control panel access."></i>
</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> Unlimited domains</td>
<td rowspan="5" class="tbl-valign-cntr">
<div class="mrth-pric-wrapr"> <i class="fas fa-rupee-sign"></i> <b>3850</b> <u>/mo</u> </div>
</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> WordPress Toolkit</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> Subscription Management</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> Account Management</td>
</tr>
<tr style="display: none;">
<td><i class="fas fa-check"></i> Reseller Management</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="mrth-footr-one">
<p>You can buy the above control panel at the time of <span class="jump-to-plans">checkout</span>.</p>
</div>
</div>
			</section>




			
			

            <Footer />
        </Layout>
    );
}

export default Details