import React from 'react'
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



			<section class="os bg-blue super-p rowbackground">
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
			<section class="os bg-blue super-p rowbackground">
				<div class="wrap tac">
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
														<img src={partner4} alt="partner" />
													</div>
												</div>
											</ReactWOW>
										</div>

										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.5s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={partner5} alt="partner" />
													</div>
												</div>
											</ReactWOW>
										</div>

										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={partner6} alt="partner" />
													</div>
												</div>
											</ReactWOW>
										</div>
										<div className="col-lg-2 col-6 col-sm-4 col-md-4">
											<ReactWOW delay='.6s' animation='fadeInUp'>
												<div className="single-partner-item">
													<div className="single-partner-item">
														<img src={partner7} alt="partner" />
													</div>
												</div>
											</ReactWOW>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						
						
						
						
						
						
						
						<div class="content col-md-6">
							<img class="pcontentbox" src={serverclientpartner1} alt="serverclientpartner1" />
							<img class="pcontentbox" src={serverclientpartner2} alt="serverclientpartner2" />
							<img class="pcontentbox" src={serverclientpartner3} alt="serverclientpartner3" />
							<img class="pcontentbox" src={serverclientpartner4} alt="serverclientpartner4" />
							<img class="pcontentbox" src={serverclientpartner5} alt="serverclientpartner5" />
							<img class="pcontentbox" src={serverclientpartner6} alt="serverclientpartner6" />
							<img class="pcontentbox" src={serverclientpartner7} alt="serverclientpartner7" />
							<img class="pcontentbox" src={serverclientpartner8} alt="serverclientpartner8" />
							<img class="pcontentbox" src={serverclientpartner9} alt="serverclientpartner9" />
							<img class="pcontentbox" src={serverclientpartner10} alt="serverclientpartner10" />
							<img class="pcontentbox" src={serverclientpartner11} alt="serverclientpartner11" />
							<img class="pcontentbox" src={serverclientpartner12} alt="serverclientpartner12" />
						</div>
						<div class="content col-md-3"></div>
					</div>
				</div>
			</section>
			
			
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details