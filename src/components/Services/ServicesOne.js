import React from 'react'
import {Link} from 'gatsby'
import details from '../../assets/images/events/events-details.webp'
import green_shape from '../../assets/images/green_shape.png'
import icon1 from '../../assets/images/services/icon1.jpg'
import icon2 from '../../assets/images/services/icon2.jpg'
import icon3 from '../../assets/images/services/icon3.jpg'
import icon4 from '../../assets/images/services/icon4.jpg'
import icon5 from '../../assets/images/services/icon5.jpg'
import icon6 from '../../assets/images/services/icon6.jpg'
import icon7 from '../../assets/images/services/icon7.jpg'
import icon8 from '../../assets/images/services/icon8.jpg'
import icon12 from '../../assets/images/services/icon12.jpg'
import icon13 from '../../assets/images/services/icon13.jpg'
import service1 from '../../assets/images/services/service1.png'
import service2 from '../../assets/images/services/service2.png'
import service3 from '../../assets/images/services/service3.png'
import service4 from '../../assets/images/services/service4.png'
import service5 from '../../assets/images/services/service5.png'
import service6 from '../../assets/images/services/service6.png'

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>
            <div className="container">
                <div class="row">
					<div class="col-sm-6">
						<div class="blk1">
							<div class="col-sm-4">
								<img src={green_shape} class="img-responsive" alt="Android &amp; iOS application" />
								<img src={service1} class="img-responsive service_img" alt="Android &amp; iOS application" />
							</div>
							<div class="col-sm-8">
								<h3>Android &amp; iOS<br /><span>Applications</span></h3>
								<div class="greenline"></div>
								<p>Mobile devices &amp; smartphones have become increasingly...</p>
							</div>
							<div class="clearfix"></div>
							<hr />
							<ul>
								<li><img src={icon1} class="img-responsive" alt="android" /></li>
								<li><img src={icon2} class="img-responsive" alt="ios" /></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="blk1">
							<div class="col-sm-4">
								<img src={green_shape} class="img-responsive" alt="Web App Development" />
								<img src={service2} class="img-responsive service_img" alt="Web App Development" />
							</div>
							<div class="col-sm-8">
								<h3>Web App <br /><span>Development</span></h3>
								<div class="greenline"></div>
								<p>LBM has been promptly delivering professional Web solutions...</p>
							</div>
							<div class="clearfix"></div>
							<hr />
							<ul>
								<li><img src={icon3} class="img-responsive" alt="php" /></li>
								<li><img src={icon4} class="img-responsive" alt="java" /></li>
								<li><img src={icon5} class="img-responsive" alt="dot net" /></li>
							</ul>
						</div>
					</div>
					<a href="webdesign.html">
						<div class="col-sm-6">
							<div class="blk1">
								<div class="col-sm-4"> 
									<img src={green_shape} class="img-responsive" alt="Graphics &amp; Web Designing" /> 
									<img src={service3} class="img-responsive service_img" alt="Graphics &amp; Web Designing" /> 
								</div>
								<div class="col-sm-8">
									<h3>Graphics &amp; Web <br /><span>Designing</span></h3>
									<div class="greenline"></div>
									<p>Our design approach offers the flexibility of accommodating... </p>
								</div>
								<div class="clearfix"></div>
								<hr />
								<ul>
									<li><img src={icon6} class="img-responsive" alt="photoshop" /></li>
									<li><img src={icon7} class="img-responsive" alt="html5" /></li>
									<li><img src={icon8} class="img-responsive" alt="artificial intelligence" /></li>
								</ul>
							</div>
						</div>
					</a>
					<a href="content-management.html">
						<div class="col-sm-6">
							<div class="blk1">
								<div class="col-sm-4">
									<img src={green_shape} class="img-responsive" alt="Content Management System" />
									<img src={service4} class="img-responsive service_img" alt="Content Management System" />
								</div>
								<div class="col-sm-8">
									<h3>Content <br /><span>Management System</span></h3>
									<div class="greenline"></div>
									<p>A content management system is a software system rendering... </p>
								</div>
								<div class="clearfix"></div>
								<hr />
								<ul>
									<li><img src={icon3} class="img-responsive" alt="php" /></li>
									<li><img src={icon5} class="img-responsive" alt="dot net" /></li>
									<li><img src={icon12} class="img-responsive" alt="wordpress" /></li>
									<li><img src={icon13} class="img-responsive" alt="magento" /></li>
								</ul>
							</div>
						</div>
					</a>
					<a href="e-commerce.html">
						<div class="col-sm-6">
							<div class="blk1">
								<div class="col-sm-4"> 
									<img src={green_shape} class="img-responsive" alt="E-commerce Development" /> 
									<img src={service5} class="img-responsive service_img" alt="E-commerce Development" /> 
								</div>
								<div class="col-sm-8">
									<h3>E-commerce <br /><span>Development</span></h3>
									<div class="greenline"></div>
									<p>Our expertise in delivering high end and feature rich ecommerce... </p>
								</div>
								<div class="clearfix"></div>
								<hr />
								<ul>
									<li><img src={icon12} class="img-responsive" alt="wordpress" /></li>
									<li><img src={icon13} class="img-responsive" alt="magento" /></li>
								</ul>
							</div>
						</div>
					</a>
					<a href="erp.html">
						<div class="col-sm-6">
							<div class="blk1">
								<div class="col-sm-4"> 
									<img src={green_shape} class="img-responsive" alt="ERP &amp; CRM Softwares" /> 
									<img src={service6} class="img-responsive service_img" alt="ERP &amp; CRM Softwares" /> 
								</div>
								<div class="col-sm-8">
									<h3>ERP &amp; CRM <br /><span>Softwares </span></h3>
									<div class="greenline"></div>
									<p>ERP are transforming business activities and re-defining... </p>
								</div>
								<div class="clearfix"></div>
								<hr />
								<ul>
									<li><img src={icon3} class="img-responsive" alt="php" /></li>
									<li><img src={icon4} class="img-responsive" alt="java" /></li>
								</ul>
							</div>
						</div>
					</a>
				</div>
            </div>
        </section>
    )
}

export default ServicesOne