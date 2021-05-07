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
				</div>
			</section>
			
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details