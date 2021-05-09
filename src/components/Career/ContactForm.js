import React from 'react'
import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js';


const ContactForm = () => {
	
	function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm('service_1j0jnpc', 'template_3wshj9r', e.target, 'user_Mi95JS4Z2zPcTdA39Z0l9')
		.then((result) => {
		console.log(result.text);
	}, (error) => {
		console.log(error.text);
	});
	}
	
    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <h4>Apply Job</h4>
                </div>

                <div className="row">
                        <div className="contact-form">
                            <form id="contactForm" onsubmit>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required placeholder="Your email address" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" required placeholder="Your phone number" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="Objective" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="Experience" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="- To make money. To kill time. To get popular. Sorry, not interested. Next!  To learn and learn more. To take up a challenging role. To grow with growing organization. Great!!!" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="Write your message..." />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">
                                            <i className="flaticon-tick"></i> 
                                            Send Message <span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm