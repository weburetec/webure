import React from 'react'
import UpcomingEventTimer from './UpcomingEventTimer'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'

const CareerDetailsContent = () => {
    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
						<div class="row justify-content-center">
							<div class="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts">
								<div class="mb-9">
									<a class="d-flex align-items-center ml-4" href="/"> 
										<i class="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
									</a>
								</div>
							</div>
							<div class="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
								<div class="bg-white rounded-4 border border-mercury shadow-9">
									<div class="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
										<div class="row">
											<div class="col-md-6">
												<div class="media align-items-center">
													<div class="square-72 d-block mr-8">
														<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAAXNSR0IB2cksfwAAAZtQTFRFAAAA/1de/lpf/llf/llf/1VV/Vlf/llf/Vpf/1pe/llf/1pe/llg/llf/2No/36D/2dt/8PF//z8/////2tx/+rr/+zs/2tw/1pg/9fY/+fo/3uA/1lf/3t//5KW//j4/291/1th/6uu/5md//Ly/2Fn/11j/6Sn/5yg/+/w/19l/+/v/+zt/6Gk/52h/+7u/15k/6Cj/5yf/+7v/1lg/3p+/5aa/1xi/6Gl/4GF/+Pk/5ic//Dw/4aK//f3/9PV/+fn/6Wp/8nL/2Np//P0/42R/+3u/+Dh/6yu/7/B/6yv/4mN/2Vq/66x/7q8/7W3/5ue/9TV/36C//v8/3R5//v7/2Rp/8rM/8DC/+Lj/6Wo/3F2//7+///+//Hx/2Jo/7W4/8/R/+bn/7i6/4yQ/4eL/4SI/4aL/4uQ/2Vr/2Bm/72//21y//v6/2Bl//79/mtw/9DR/9rb/6ms/8vN//r6/5SY//n5/9DS/2Fm/2pv//X1/4OI/2Jn/9na/290/56h/9nb/25z/32C/Vhg/Vpg/1th/Vhf/llesOcjNQAAAIl0Uk5TAEnN7/8Dhv6DQf1EuOj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////iIAqnOCIJ0SbAAACvUlEQVR4nO2Y6VPaYBCHo8Zab+VXENKIgmepB3ghivHWWvBAQUVBq7a2Kl4o3ret+mf3DTHgh4QBki/tsB+yu5nZJzv77m4yoSgqKzuHViQ52VkUReW+y1OG4SXvfS6VrxxDpKCQKlIFRBdRxeqAiil1ODSdAWVAGdD/ByopLS1RAVRWrgE05WVKQR+0gE4HaCuUgfQGMB9ZtpKBQa8IZERVNa+rq2BUAjIxMAuWGYxJAagGtXWCVVeLmvRB9Vo0iHYDtPVpgxrxySLals9oTBdU34TmuNeMpkQpJQK1oNUa96ytaEkPRBKyvfVtCVNKAGpDO59QR2dXV2cHn1I72tIB2bXoJsrRAyI9DmJ2Q2tPA9QLJzmyPg24/n4Omj5ycE70pg4yDWAwWuGhYZoeHorWfRADsu0tCzJihDT1KMaiB2cdwyhp7xH5iZMDseP4QvMjNiH4E9Gh+4pxNkWQC5ybqElMCf4UJsnVzcGVGog1YJrXM/BEU2A9mOH1NAwyKcmAZjEXXYle+OZ5Pe+Dl9cVc5hNCbSARSETP5Z4vQS/4C9iIRXQciDoFawarKzS9OqKuI28wcByCqBvWHu17OvYYNkNrIs9vSYULzkQq8N30f6BwOZmAD9F/xd0kuWWBG0huB2D7sDpxE4seDuIraRBIezGn7rnB/x78Wx3EUoaZNnHQcyxHwKH8ak/wL5FKka6RmEcibb1GJEIjmOr8gjh5GtEn+C0UuibUBgRlyuCcEjwK09xIhkiDdKfgbOd0/SFmcPlFcteXYIzX9D0uY3DmfS7W6azrz2AjyEfD7i55f3bG2LqGB/guZaOkJt+0x1DQgP3xtfn6433AXKDuZPbbPKrln1wPLrf3nA/Oh7kttE/+g2ZAWVAGZAaINV++6j2I6qwQA1OQT5F/VYD9Ici8vT8oozy8vxEUX8BJ+GtiNko4HIAAAAASUVORK5CYII=" alt="">
													</div>
												<div>
												<h3 class="font-size-6 mb-0">Product Designer</h3>
												<span class="font-size-3 text-gray line-height-2">AirBnb</span>
											</div>
										</div>
									</div>
									<div class="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
										<div class="media justify-content-md-end">
											<p class="font-size-4 text-gray mb-0">19 June 2020</p>
										</div>
									</div>
								</div>
								<div class="row pt-9">
									<div class="col-12">
										<div class="card-btn-group">
											<a class="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5" href="/#">Apply to this job</a>
											<a class="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5" href="/#">
											<i class="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i> Save job</a>
										</div>
									</div>
								</div>
							</div>
							<div class="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
								<div class="row mb-7">
									<div class="col-md-4 mb-md-0 mb-6">
										<div class="media justify-content-md-start">
											<div class="image mr-5">
												<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48Zz48Zz48cGF0aCBmaWxsPSIjMDBiMDc0IiBkPSJNMTIgMTJhLjUuNSAwIDAgMCAwLTFIOGEyLjUgMi41IDAgMCAxIDAtNWgxVjRoMnYyaDIuNXYySDhhLjUuNSAwIDAgMCAwIDFoNGEyLjUgMi41IDAgMCAxIDAgNWgtMXYySDl2LTJINi41di0yem04LTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMwIDQuNDc3IDAgMTBzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTB6Ii8+PC9nPjwvZz48L3N2Zz4=" alt=""/>
											</div>
											<p class="font-weight-semibold font-size-5 text-black-2 mb-0">80-90K PLN</p>
										</div>
									</div>
									<div class="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
										<div class="media justify-content-md-start">
											<div class="image mr-5">
												<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48Zz48Zz48cGF0aCBmaWxsPSIjMDBiMDc0IiBkPSJNNyAydjJoNlYyek01IDRWMWExIDEgMCAwIDEgMS0xaDhhMSAxIDAgMCAxIDEgMXYzaDRhMSAxIDAgMCAxIDEgMXY1aC03VjhIN3YySDBWNWExIDEgMCAwIDEgMS0xem00IDZoMnYzSDl6bS0yIDJ2M2g2di0zaDd2N2ExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMXYtN3oiLz48L2c+PC9nPjwvc3ZnPg==" alt=""/>
											</div>
											<p class="font-weight-semibold font-size-5 text-black-2 mb-0">Full-Time</p>
										</div>
									</div>
									<div class="col-md-4 pl-lg-0">
										<div class="media justify-content-md-start">
											<div class="image mr-5">
												<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDE4IDIyIj48Zz48Zz48cGF0aCBmaWxsPSIjMDBiMDc0IiBkPSJNNyA5YTIgMiAwIDEgMSA0IDAgMiAyIDAgMCAxLTQgMHptOC4zNjQgNi4zNjRhOSA5IDAgMSAwLTEyLjcyOCAwTDkgMjEuNzI4bDYuMzY0LTYuMzY0eiIvPjwvZz48L2c+PC9zdmc+" alt=""/>
											</div>
											<p class="font-size-5 text-gray mb-0">777 Brockton Avenue, <br class="d-md-none d-lg-block d-block">Abington MA 2351</p>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-4 mb-lg-0 mb-10">
										<div class="">
											<span class="font-size-4 d-block mb-4 text-gray">Career Level</span>
											<h6 class="font-size-5 text-black-2 font-weight-semibold mb-9">Project Manangement</h6>
										</div>
										<div class="tags">
											<p class="font-size-4 text-gray mb-0">Soft Skill</p>
											<ul class="list-unstyled mr-n3 mb-0">
												<li class="d-block font-size-4 text-black-2 mt-2"><span class="d-inline-block mr-2">•</span>Slack</li>
												<li class="d-block font-size-4 text-black-2 mt-2"><span class="d-inline-block mr-2">•</span>Basic English</li>
												<li class="d-block font-size-4 text-black-2 mt-2"><span class="d-inline-block mr-2">•</span>Well Organized</li>
											</ul>
										</div>
									</div>
									<div class="col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8">
										<div class="">
											<span class="font-size-4 d-block mb-4 text-gray">Type of corporation</span>
											<h6 class="font-size-5 text-black-2 font-weight-semibold mb-9">B2B &amp; B2C</h6>
										</div>
										<div class="tags">
											<p class="font-size-4 text-gray mb-3">Technical Skill</p>
											<ul class="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
												<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Editing</li>
												<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Wire-framing</li>
												<li class="bg-regent-opacity-15 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">XD</li>
												<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">User Persona</li>
												<li class="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">Sketch</li>
											</ul>
										</div>
									</div>
									<div class="col-md-4 pl-lg-0">
										<div class="">
											<span class="font-size-4 d-block mb-4 text-gray">Company size</span>
											<h6 class="font-size-5 text-black-2 font-weight-semibold mb-0">11-50 employees</h6>
										</div>
									</div>
								</div>
							</div>
							<div class="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
								<div class="row">
									<div class="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
										<div class="">
											<p class="mb-4 font-size-4 text-gray">Job Description</p>
											<p class="font-size-4 text-black-2 mb-7">Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles. </p>
										</div>
										<div class="">
											<span class="font-size-4 font-weight-semibold text-black-2 mb-7">Your Role:</span>
											<p class="font-size-4 text-black-2 mb-7">We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life. </p>
											<p class="font-size-4 text-black-2 mb-7">We are serious about remote work. You can work for from anywhere. </p>
											<span class="font-size-4 font-weight-semibold text-black-2 mb-7">What you will be doing:</span>
												<ul class="list-unstyled">
													<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-2"><span class="d-inline-block mr-7">•</span>Contribute new controls or design improvements to our</li>
													<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Take ownership of the successful delivery of features</li>
													<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Help set and achieve quarterly goals</li>
													<li class="d-block font-size-4 text-black-2 d-flex flex-row mt-1"><span class="d-inline-block mr-7">•</span>Ship a TON of product improvements and features</li>
												</ul>
												<a class="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6" href="/#">Apply to this job</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

                    <div className="col-lg-4 col-md-12">
                        <CareerSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareerDetailsContent