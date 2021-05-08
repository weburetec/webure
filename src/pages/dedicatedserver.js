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
			
			
			<section class="dedicated-pricing">
				<div class="container">
					<h4 class="table-header">Single Processor - Intel Xeon E Series Processor Family</h4>
					<div id="dual-processor" class="table-responsive">
						<table class="table dedicated-table">
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th>Servers</th>
									<th>CPU Cores/Speed</th>
									<th>Memory</th>
									<th>Storage</th>
									<th>Bandwidth</th>
									<th>Deployment Time</th>
									<th>Monthly</th>
									<th>&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><img src="https://serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E31230v2 </td>
									<td>4x3-3GHz</td>
									<td>16GB DDR3</td>
									<td>1x 2TB HDD/240GB SSD</td>
									<td>20TB</td>
									<td><b>24 Hours</b></td>
									<td><b>$48</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E3-1270v3 </td>
									<td>4x3.5GHz</td>
									<td>16GB DDR3</td>
									<td>1x 2TB HDD/240GB SSD</td>
									<td>20TB</td>
									<td><b>24 Hours</b></td>
									<td><b>$65</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E3-1230v5 </td>
									<td>4x3.4GHz</td>
									<td>16GB DDR4</td>
									<td>1x 2TB HDD/500GB SSD</td>
									<td>20TB</td>
									<td><b>48 Hours</b></td>
									<td><b>$99</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
									<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E3-1275v5 </td>
									<td>4x3.6GHz</td>
									<td>16GB DDR4</td>
									<td>1x 2TB HDD/500GB SSD</td>
									<td>20TB</td>
									<td><b>48 Hours</b></td>
									<td><b>$119</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2637v2 </td>
									<td>4x3.5GHz</td>
									<td>32GB DDR3</td>
									<td>1x 3TB HDD/500GB SSD</td>
									<td>20TB</td>
									<td><b>48 Hours</b></td>
									<td><b>$189</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2630v3 </td>
									<td>8x2.4GHz</td>
									<td>32GB DDR3</td>
									<td>2x 3TB HDD/500GB SSD</td>
									<td>20TB</td>
									<td><b>48 Hours</b></td>
									<td><b>$249</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2630v4 </td>
									<td>10x2.2GHz</td>
									<td>32GB DDR4</td>
									<td>2x 3TB HDD/500GB SSD</td>
									<td>20TB</td>
									<td><b>48 Hours</b></td>
									<td><b>$299</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
							</tbody>
						</table>
					</div>
					<h4 class="table-header">Dual Processor - Intel Xeon E Series &amp; Scalable Processor Family</h4>
					<div id="single-processor" class="table-responsive">
						<table class="table dedicated-table">
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th>Servers</th>
									<th>CPU Cores/Speed</th>
									<th>Memory</th>
									<th>Hard Drive(s)</th>
									<th>Bandwidth</th>
									<th>Deployment Time</th>
									<th>Monthly</th>
									<th>&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><img src="https://serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2637v2</td>
									<td>8x3.5GHz</td>
									<td>64GB DDR3</td>
									<td>2x 3TB HDD/500GB SSD</td>
									<td>20TB</td>
									<td><b>08 Hours</b></td>
									<td><b>$249</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2680v2</td>
									<td>20x2.8GHz</td>
									<td>64GB DDR3</td>
									<td>2x 4TB HDD/1TB SSD</td>
									<td>20TB</td>
									<td><b>08 Hours</b></td>
									<td><b>$289</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2637v3</td>
									<td>8x3.5GHz</td>
									<td>64GB DDR3</td>
									<td>2x 3TB HDD/500GB SSD</td>
									<td>20TB</td>
									<td><b>08 Hours</b></td>
									<td><b>$359</b></td>
									<td><a style="color:#85c342" href="https://my.serverhub.com/cart.php?a=add&amp;pid=750">Configure</a></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2660v2</td>
									<td>20x2.2GHz</td>
									<td>128GB DDR3</td>
									<td>4x 4TB HDD/1TB SSD</td>
									<td>20TB</td>
									<td><b>--</b></td>
									<td><b>$369</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon E5-2670v2</td>
									<td>20x2.7GHz</td>
									<td>128GB DDR3</td>
									<td>6x 512GB SSD</td>
									<td>20TB</td>
									<td><b>--</b></td>
									<td><b>$389</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon Silver 4114</td>
									<td>20x3.0GHz</td>
									<td>64GB DDR4</td>
									<td>2x 1TB NVMe</td>
									<td>20TB</td>
									<td><b>--</b></td>
									<td><b>$399</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon Gold 5118</td>
									<td>24x2.3GHz</td>
									<td>64GB DDR4</td>
									<td>2x 1TB NVMe</td>
									<td>20TB</td>
									<td><b>--</b></td>
									<td><b>$599</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
								<tr>
									<td><img src="https://www.serverhub.com/themes/serverhub/assets/img/xeon.png"> </td>
									<td>Intel Xeon Gold 6148</td>
									<td>40x2.4GHz</td>
									<td>128GB DDR4</td>
									<td>2x 1TB NVMe</td>
									<td>20TB</td>
									<td><b>--</b></td>
									<td><b>$999</b></td>
									<td><button class="primary">
									Message
								</button></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>



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