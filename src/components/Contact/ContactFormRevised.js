import React from 'react'
import starIcon from '../../assets/images/star-icon.webp'
import contact from '../../assets/images/contact.webp'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ContactFormRevised = () => {
    const paperStyle = { padding: '30px 20px', width: 700, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (

		<div class="inner-common-form">
							
							<div class="contact-cat">
								<ul>
									<li class="active"><a href="#" data-reason="General Inquiries">General Inquiries</a></li>
									<li class=""><a href="#" data-reason="Request a Callback">Request a Callback</a></li>
									<li class=""><a href="#" data-reason="Request a Quote">Request a Quote</a></li>
									<li class=""><a href="#" data-reason="Careers">Careers</a></li>
								</ul>
							</div>
							<form id="contact-form" method="post" enctype="multipart/form-data">
								<input type="hidden" name="action" value="contact_form_ajax">
								<input type="hidden" name="enquiry_for" id="enquiry_for" value="General Inquiries">
								<input type="hidden" name="page_title" value="Contact">
								<div class="row">									
									<div class="form-group col-md-12">
										<input type="text" name="full_name" placeholder="Name*">
									</div>

									<div class="form-group col-md-12">
										<input type="email" name="email" placeholder="Work Email*">
									</div>

									<div class="form-group col-md-12">
										<input type="number" name="phone" placeholder="Phone*">
									</div>

									<div class="form-group col-md-12 field-general">
										<input type="text" name="company" placeholder="Company Website">
									</div>

									<div class="form-group col-md-12 field-general">
										<input type="text" name="drop_line" placeholder="Drop a Line">
									</div>

									<div class="form-group col-md-12 field-quote" style="display: none;">
										<input type="text" name="services" placeholder="Services*">
																			</div>

									<div class="form-group col-md-12 field-quote" style="display: none;">
										<input type="text" name="requirement" placeholder="Requirement">
									</div>

									<div class="form-group col-md-12 field-callback" style="display: none;">
										<label for="callback_timeslots1"> Share 3 Time-Slots, we will email you for confirmation</label>
  									</div>
									<div class="form-group col-md-12 field-callback" style="display: none;">
										<input type="text" name="callback_timeslots1" id="callback_timeslots1" placeholder="Time Date Timezone Slot 1*">
  									</div>
									<div class="form-group col-md-12 field-callback" style="display: none;">
										<input type="text" name="callback_timeslots2" id="callback_timeslots2" placeholder="Time Date Timezone Slot 2*">
  									</div>
									<div class="form-group col-md-12 field-callback" style="display: none;">
										<input type="text" name="callback_timeslots3" id="callback_timeslots3" placeholder="Time Date Timezone Slot 3 (Optional) ">
  									</div>

  									<div class="form-group col-md-12 field-careers" style="display: none;">
										<input type="text" name="position_apply" placeholder="Position applying for">
									</div>

									<div class="form-group col-md-12 field-careers" style="display: none;">
										<input type="text" name="how_did_you_hear" placeholder="Where did you heard about us?">
									</div>								

									<div class="form-group col-md-12 field-careers" style="display: none;">
										<div class="file-uploader" action="">
											<div class="file-chooser">
										    	<div class="file-upload-wrapper"><input id="fileupload" name="cv_file" class="file-chooser__input custom-file-upload-hidden" type="file" tabindex="-1" style="position: absolute; left: -9999px;"><input type="text" class="file-upload-input" placeholder="Drag &amp; Drop to upload" disabled=""><button type="button" class="file-upload-button" tabindex="-1">Select a File</button></div>
										  	</div>
										    <div class="file-uploader__message-area">
										    	<p>Select a file to upload</p>
										  	</div>
										</div>
									</div>

									<div class="submit-btn text-center">
										<input type="submit" name="submitBtn" value="Send">
										<div class="form-loader" style="display: none;"><img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/loader.svg" alt="loader"></div>									</div>

									<div class="ajax-message"></div>

								</div>
							</form>
						</div>
    )
}

export default ContactFormRevised