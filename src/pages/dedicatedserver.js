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
						<h3>Connect Globally</h3>
						<div class="desc">
							<p>We blend a best-in-class network mesh and mirror it across all our datacenter worldwide. With multiple transit providers connected to each datacenter and tied together to form one globally unified network.</p>
						</div>					
						<h3>Connect Globally</h3>
						<div class="desc">
							<p>We blend a best-in-class network mesh and mirror it across all our datacenter worldwide. With multiple transit providers connected to each datacenter and tied together to form one globally unified network.</p>
						</div>
						<h3>Connect Globally</h3>
						<div class="desc">
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
					<h2 class="intro text-center">AN OPERATING SYSTEM FOR EVERY PROJECT</h2> 
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
							<div class="content col-md-1">
								<img src={serverclientpartner1} alt="serverclientpartner1" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner2} alt="serverclientpartner2" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner3} alt="serverclientpartner3" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner4} alt="serverclientpartner4" />
							</div>							
							<div class="content col-md-1">
								<img src={serverclientpartner5} alt="serverclientpartner5" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner6} alt="serverclientpartner6" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner7} alt="serverclientpartner7" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner8} alt="serverclientpartner8" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner9} alt="serverclientpartner9" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner10} alt="serverclientpartner10" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner11} alt="serverclientpartner11" />
							</div>
							<div class="content col-md-1">
								<img src={serverclientpartner12} alt="serverclientpartner12" />
							</div>
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