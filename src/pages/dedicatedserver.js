import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import DedicatedServerContent from '../components/ServiceDetails/DedicatedServerContent'
import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
			<br/><br/><br/><br/>
            <DedicatedServerContent />
			
			
			<section class="pt-xl  " data-scroll-target="addons" id="addons">
				<div class="l-page container align-center">
					<h2 class="align-center">Enhance your Freshchat experience</h2>
					<p>&nbsp;</p>
					<input type="hidden" class="product-key" data-product-key="fchat">
					<div class="vertical-tab-wrapper vertical-tab-pricing-wrapper tablist-container">
						<div class="row">
							<div class="col-md-5">
								<ul class="nav-tablist clearfix-md" id="myTabs" role="tablist">
									<li role="presentation" class=" active">
										<a href="#addon1" id="addon1-tab" class="" role="tab" data-toggle="tab" aria-controls="addon1" aria-expanded="true">
											<span class="pricing-pill-text">Freddy</span>
											<span class="add-on-tab-heading">Additional bot sessions</span>
											<span class="add-on-tab-desc"><i>Use chatbots with superior API connectors to automate the resolution of issues.</i></span>
										</a>
										<span class="down-arrow-rounded"></span>
									</li>
									<li role="presentation" class="">
										<a href="#addon2" id="addon2-tab" class="" role="tab" data-toggle="tab" aria-controls="addon2" aria-expanded="false">
											<span class="pricing-pill-text">Add-On</span>
											<span class="add-on-tab-heading">WhatsApp Business</span>
											<span class="add-on-tab-desc"><i>Leverage the power of WhatsApp. Bring all messages from WhatsApp to one Inbox to support and notify your customers.</i></span>
										</a>
										<span class="down-arrow-rounded"></span>
									</li>
									<li role="presentation" class="">
										<a href="#addon3" id="addon3-tab" class="" role="tab" data-toggle="tab" aria-controls="addon3" aria-expanded="false">
											<span class="pricing-pill-text">Add-On</span>
											<span class="add-on-tab-heading">Acquisition &amp; Engagement</span>
											<span class="add-on-tab-desc"><i>Acquire and engage customers using proactive campaigns, announcements, automated meeting scheduling and more</i></span>
										</a>
										<span class="down-arrow-rounded"></span>
									</li>
								</ul>
							</div>
							<div class="col-md-7">
								<div class="browser-mockup ">
									<div class="tab-content browser-content" id="myTabContent">
										<div class="tab-pane fade active in" role="tabpanel" id="addon1" aria-labelledby="addon1-tab">
											<div class="add-on-content-heading">
												<h3>Additional bot sessions</h3>
											</div>
											<div class="add-on-content-body">
												<div class="add-ons-plan-info-wrapper">
													<div class="add-ons-plan-info hide" data-currency="US">
														<p><span class="add-on-price">$100 for 1000</span> bot sessions/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="EU">
														<p><span class="add-on-price">€100 for 1000 bot</span>&nbsp;sessions/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="ZAR">
														<p><span class="add-on-price">R1500 for 1000</span> bot sessions/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="GB">
														<p><span class="add-on-price">£75&nbsp;for 1000</span> bot sessions/month</p>
													</div>
													<div class="add-ons-plan-info" data-currency="IN">
														<p><span class="add-on-price">₹7200 for 1000</span> bot sessions/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="AU">
														<p><span class="add-on-price">AUD145 for 1000</span> bot sessions/month</p>
													</div>
												</div>
												<div class="add-on-content">
													<p><em>Chatbots are available on all plans.</em></p>
													<p><em>All interactions between an end-user and a chatbot within 24 hours are counted as 1 bot session.&nbsp;For bots on other channels, check FAQs. The validity of sessions purchased aligns with your payment cycle.</em></p>
													<p class="hide-in-desktop"><span class="add-on-tab-desc"><i>Use chatbots with superior API connectors to automate the resolution of issues.</i></span></p>
													<div class="add-on-features-list">
													</div>
													<div class="add-ons-footer">
														<a title="" class="button button--ghost button--small " id="" target=""> Start Trial</a>
													</div>
												</div>
											</div>               
											<div class="pricing-table-mobile-view-options">
												<p class="view-features">See more</p>
												<p class="hide-features">Hide details</p>
												<i class="icon-arrow-down"></i>
											</div>
										</div>
										<div class="tab-pane fade" role="tabpanel" id="addon2" aria-labelledby="addon2-tab">
											<div class="add-on-content-heading">
												<h3>WhatsApp Business</h3>
											</div>
											<div class="add-on-content-body">
												<div class="add-ons-plan-info-wrapper">
													<div class="add-ons-plan-info hide" data-currency="US">
														<p><span class="add-on-price">$49 </span>flat fee/number/month. Free on Annual plans for 1st number</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="EU">
														<p><span class="add-on-price">€49&nbsp;</span>flat fee/number/month. Free on Annual plans for first number</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="ZAR">
														<p><span class="add-on-price">R729 </span>flat fee/number/month. Free on Annual plans for first number</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="GB">
														<p><span class="add-on-price">£37 </span>flat fee/number/month. Free on Annual plans for first number</p>
													</div>
													<div class="add-ons-plan-info" data-currency="IN">
														<p><span class="add-on-price">₹2799&nbsp;</span>flat fee/number/month. Free on Annual plans for first number</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="AU">
														<p><span class="add-on-price">AUD69 </span>flat fee/number/month. Free on&nbsp;Annual plans for first number</p>
													</div>
												</div>
												<div class="add-on-content">
													<p><em>Available from Garden plan</em></p>
													<p>The flat fee is waived off for the first 2 months.</p>
													<p>In addition to this, WhatsApp has an additional per message fee for Template messages that varies depending on volume and destination country.<br/> Freshworks doesn't levy any extra messaging fee on top of this.</p>
													<p class="hide-in-desktop"><span class="add-on-tab-desc"><i>Leverage the power of WhatsApp. Bring all messages from WhatsApp to one Inbox to support and notify your customers.</i></span></p>
													<div class="add-on-features-list">
														<div class="row">
															<div class="col-md-4">
																<p class="add-on-features-list-item">
																<i class="icon-check-mark"></i>Customer Care</p>
															</div>
															<div class="col-md-4">
																<p class="add-on-features-list-item">
																<i class="icon-check-mark"></i>Template Messages</p>
															</div>
														</div>
													</div>
													<div class="add-ons-footer">

													</div>
												</div>
											</div>
											<div class="pricing-table-mobile-view-options">
												<p class="view-features">See more</p>
												<p class="hide-features">Hide details</p>
												<i class="icon-arrow-down"></i>
											</div>
										</div>
										<div class="tab-pane fade" role="tabpanel" id="addon3" aria-labelledby="addon3-tab">
											<div class="add-on-content-heading">
												<h3>Acquisition &amp; Engagement</h3>
											</div>
											<div class="add-on-content-body">
												<div class="add-ons-plan-info-wrapper">
													<div class="add-ons-plan-info hide" data-currency="US">
														<p><span class="add-on-price">$19 </span>flat fee/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="EU">
														<p><span class="add-on-price">€19 </span>flat fee/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="ZAR">
														<p><span class="add-on-price">R229 </span>flat fee/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="GB">
														<p><span class="add-on-price">£15 </span>flat fee/month</p>
													</div>
													<div class="add-ons-plan-info" data-currency="IN">
														<p><span class="add-on-price">₹1399 </span>flat fee/month</p>
													</div>
													<div class="add-ons-plan-info hide" data-currency="AU">
														<p><span class="add-on-price">AUD29 </span>flat fee/month</p>
													</div>
												</div>
												<div class="add-on-content">
													<p><em>Available from Blossom plan</em></p>
													<p class="hide-in-desktop"><span class="add-on-tab-desc"><i>Acquire and engage customers using proactive campaigns, announcements, automated meeting scheduling and more</i></span></p>
													<div class="add-on-features-list">
														<div class="row">
															<div class="col-md-4">
																<p class="add-on-features-list-item">
																<i class="icon-check-mark"></i>Triggered Messages (unlimited)</p>
															</div>
															<div class="col-md-4">
																<p class="add-on-features-list-item"><i class="icon-check-mark"></i>Meetings</p>
															</div>
															<div class="col-md-4">
																<p class="add-on-features-list-item"><i class="icon-check-mark"></i>Targeted Messages (unlimited)</p>
															</div>
														</div>
														<div class="row">
															<div class="col-md-4">
																<p class="add-on-features-list-item"><i class="icon-check-mark"></i>E-mail Campaigns</p>
															</div>
															<div class="col-md-4">
																<p class="add-on-features-list-item"><i class="icon-check-mark"></i>Clearbit Reveal</p>
															</div>
															<div class="col-md-4">
																<p class="add-on-features-list-item"><i class="icon-check-mark"></i>Full Contact Integration</p>
															</div>
														</div>
													</div>
													<div class="add-ons-footer">

													</div>
												</div>
											</div>
											<div class="pricing-table-mobile-view-options">
												<p class="view-features">See more</p>
												<p class="hide-features">Hide details</p>
												<i class="icon-arrow-down"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div></div>
			</section>		
			<section class="os bg-blue super-p">
				<div class="wrap tac">
					<h2 class="white with-sub">AN OPERATING SYSTEM FOR EVERY PROJECT</h2> 
					<p class="white">Webure Technologies offers dozens of Operating Systems to choose from to ensure you have the right software available. You can find a variety of free linux options as well as Windows Server. Each OS will be immediately installed after checkout, or choose to install a custom OS using our Surge control panel.</p>
				</div>
			</section>
			
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details