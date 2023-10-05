import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import "../styles/ContactSectionStyle.css";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bjq4qbf",
        "template_6qmkhka",
        form.current,
        "LDtAEmIilvSXPccym"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="ContactSection">
      <div className="pagetitle">
        <p>CONTACT US</p>
      </div>
      <div className="form_space">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              required
              placeholder="Enter Your Name"
              type="text"
              name="user_name"
            />
            <label>Email</label>
            <input
              placeholder="Enter your Email Address"
              type="email"
              name="user_email"
            />
            <label>Message</label>
            <textarea
              required
              placeholder="Enter your message"
              name="message"
            />
            <input
              required
              className="submitButton"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <div className="illustration">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-application-form-4472034-3748858.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
