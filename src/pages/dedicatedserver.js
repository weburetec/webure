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
			<section class="pt-xl" data-scroll-target="addons" id="addons">
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
						</div>
					</div>
				</div>
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