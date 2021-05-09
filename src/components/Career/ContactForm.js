import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from "react";
import starIcon from '../../assets/images/star-icon.webp'
import contact from '../../assets/images/contact.webp'

export default function ContactUs() {

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
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactForm