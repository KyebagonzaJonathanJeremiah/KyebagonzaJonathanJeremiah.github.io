import React, { useState } from 'react';
import './contactMe.css';
import { CalendarToday, LocationSearching, MailOutline, 
         PhoneAndroid } from "@material-ui/icons"



const ContactMe = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

  return (
    <div className="contact">
      <div className="contact-title">
        <h2>Contact Me</h2>
      </div>
      <div className="row contact-container">
            <div className="col-lg-6 contact-show">
                <div className="contact-show-top">
                    <img src="images/header1.jpg" 
                         alt="" className="contact-show-img" />
                    <div className="contact-show-top-title">
                        <span className="contact-show-username">Kyebagonza Jonathan Jeremiah</span>
                        <span className="contact-show-user-title">Developer</span>
                    </div>
                </div>
                <div className="contact-show-bottom">
                    <div className="contact-show-info">
                        <CalendarToday className="contact-show-icon"/>
                        <span>10.09.1998</span>
                    </div>
                    <div className="contact-show-info">
                        <PhoneAndroid className="contact-show-icon"/>
                        <span>+256 7898 678</span>
                    </div>
                    <div className="contact-show-info">
                        <MailOutline className="contact-show-icon"/>
                        <span>jeremiahjkyebagonza@boymentorship.africa</span>
                    </div>
                    <div className="contact-show-info">
                        <LocationSearching className="contact-show-icon"/>
                        <span>Kla|UG</span>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 contact-update">
                <span className="contact-update-title">Send me a message!</span>
                <form className="contact-update-form" id="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-update-item">
                            <label htmlFor="name">Full name</label>
                            <input type="text" placeholder="" id="name" className="contact-update-input" />
                        </div>
                        <div className="contact-update-item">
                            <label htmlFor="email" >Email</label>
                            <input type="email" placeholder="" id="email" className="contact-update-input" />
                        </div>
                        <div className="contact-update-item">
                            <label htmlFor="message">Message</label>
                            <textarea rows="5" id="message"></textarea>
                        </div>
                        <button className="contact-update-button" type="submit">{status}</button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default ContactMe;
