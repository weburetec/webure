import React, { Component } from "react";

class Callback extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>
        <form id="contact-form" method="post" enctype="multipart/form-data">
<input type="hidden" name="action" value="contact_form_ajax" />
<input type="hidden" name="enquiry_for" id="enquiry_for" value="General Inquiries" />
<input type="hidden" name="page_title" value="Contact" />
<div class="row">
    <div class="form-group col-md-12">
        <input type="text" name="full_name" placeholder="Name*" />
    </div>

    <div class="form-group col-md-12">
        <input type="email" name="email" placeholder="Work Email*" />
    </div>

    <div class="form-group col-md-12">
        <input type="number" name="phone" placeholder="Phone*" />
    </div>

    <div class="form-group col-md-12 field-general">
        <input type="text" name="company" placeholder="Company Website" />
    </div>

    <div class="form-group col-md-12 field-general">
        <input type="text" name="drop_line" placeholder="Drop a Line" />
    </div>

    <div class="form-group col-md-12 field-quote" style={{display: 'none'}}>
        <input type="text" name="services" placeholder="Services*" />
    </div>

    <div class="form-group col-md-12 field-quote" style={{display: 'none'}}>
        <input type="text" name="requirement" placeholder="Requirement" />
    </div>

    <div class="callback">
    <div class="form-group col-md-12 field-callback" style={{display: 'none'}}>
        <label for="callback_timeslots1"> Share 3 Time-Slots, we will email you for confirmation</label>
      </div>

    <div class="form-group col-md-12 field-callback" style={{display: 'none'}}>
        <input type="text" name="callback_timeslots1" id="callback_timeslots1" placeholder="Time Date Timezone Slot 1*" />
      </div>
    <div class="form-group col-md-12 field-callback" style={{display: 'none'}}>
        <input type="text" name="callback_timeslots2" id="callback_timeslots2" placeholder="Time Date Timezone Slot 2*" />
      </div>
    <div class="form-group col-md-12 field-callback" style={{display: 'none'}}>
        <input type="text" name="callback_timeslots3" id="callback_timeslots3" placeholder="Time Date Timezone Slot 3 (Optional) " />
      </div>
    </div>

      <div class="form-group col-md-12 field-careers" style={{display: 'none'}}>
        <input type="text" name="position_apply" placeholder="Position applying for" />
    </div>

    <div class="form-group col-md-12 field-careers" style={{display: 'none'}}>
        <input type="text" name="how_did_you_hear" placeholder="Where did you heard about us?" />
    </div>

    <div class="form-group col-md-12 field-careers" style={{display: 'none'}}>
        <div class="file-uploader" action="">
            <div class="file-chooser">
                <input id="fileupload" name="cv_file" class="file-chooser__input" type="file" />
              </div>
            <div class="file-uploader__message-area">
                <p>Select a file to upload</p>
              </div>
        </div>
    </div>
</div>
</form>
    </div>;
  }
}

export default Callback;