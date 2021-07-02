import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServicesOne from '../components/Services/ServicesOne'
import StartProject from '../components/Common/StartProject'
import details from '../../assets/images/events/events-details.webp'

const Services = () => {
    return (
	    <Layout>
            <Navbar />
			<br />
			<br />
			<section className="events-details-area pb-100">
				<div className="events-details-image">
					<img src={details} alt="details" />
				</div>
				<div class="container">
					<div class="full-width">						
						<div class="row">
							<div class="col-sm-12">
								<article id="post-14808" class="post-14808 page type-page status-publish hentry">
									<header class="entry-header allot-position sticky-ready">
										<h1 class="entry-title">ISMS Policy</h1>
									</header>
									<div class="entry-content">
										<p>At Webure Technologies OPC Private Limited, Information Security Management System is voluntary effort and we are committed to identify, evaluate and access the risk for all critical information covering all business processes with consideration of statutory &amp; regulatory requirements and prepare and follow the risk treatment plan to meet the information security management requirements.</p>
										<p>We are committed to implement the dynamic ISMS with the aim of continual improvement. We shall ensure business continuity and safeguard the confidentiality, integrity and availability of people, process and technology of the business and its customers.</p>
										<p>We shall continuously provide training and awareness improve the Information Security Management System to reduce business risks and management is committed to provide all resources to protect customer information and safeguard information asset. We are committed to identify and comply all legal / regulatory and contractual obligation related to ISMS.</p>
										<p>&nbsp;</p>
									</div>
								</article>
							</div>
						</div>						
					</div>
				</div>
			</section>
            <Footer />
        </Layout>
    );
}

export default Services