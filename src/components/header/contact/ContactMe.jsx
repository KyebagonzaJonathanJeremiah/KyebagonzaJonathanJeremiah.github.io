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
      <div className="contactTitle">
        <h2>Contact Me</h2>
      </div>
      <div className="row contactContainer">
            <div className="col-lg-6 contactShow">
                <div className="contactShowTop">
                    <img src="images/header1.jpg" 
                         alt="" className="contactShowImg" />
                    <div className="contactShowTopTitle">
                        <span className="contactShowUsername">Kyebagonza Jonathan Jeremiah</span>
                        <span className="contactShowUserTitle">Developer</span>
                    </div>
                </div>
                <div className="contactShowBottom">
                    <div className="contactShowInfo">
                        <CalendarToday className="contactShowIcon"/>
                        <span>10.09.1998</span>
                    </div>
                    <div className="contactShowInfo">
                        <PhoneAndroid className="contactShowIcon"/>
                        <span>+256 7898 678</span>
                    </div>
                    <div className="contactShowInfo">
                        <MailOutline className="contactShowIcon"/>
                        <span>jeremiahjkyebagonza@boymentorship.africa</span>
                    </div>
                    <div className="contactShowInfo">
                        <LocationSearching className="contactShowIcon"/>
                        <span>Kla|UG</span>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 contactUpdate">
                <span className="contactUpdateTitle">Send me a message!</span>
                <form className="contactUpdateForm" id="contact-form" onSubmit={handleSubmit}>
                        <div className="userUpdateItem">
                            <label htmlFor="name">Full name</label>
                            <input type="text" placeholder="" id="name" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="email" >Email</label>
                            <input type="email" placeholder="" id="email" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="message">Message</label>
                            <textarea rows="5" id="message"></textarea>
                        </div>
                        <button className="userUpdateButton" type="submit">{status}</button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default ContactMe;
