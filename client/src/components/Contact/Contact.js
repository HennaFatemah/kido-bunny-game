import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss'

export default function ContactUs() {

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gydf4uu', 'template_u87p4gg', e.target, 'user_IDRRYmFoYhELqewXYxXus')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
    <form className="contact__card" onSubmit={sendEmail}>
        <h2 className="contact__label">Contact The Creator</h2>
        <label className="contact__label contact__label--name">Name<input className="contact__main" name="message" placeholder="Full Name"/></label>
        <label className="contact__label">Contact<input className="contact__main" name="message" placeholder="Email"/></label>
        <label className="contact__label contact__label--message">Message<textarea className="contact__main" name="message" placeholder="Type your review or message here"/></label>
        
        <input  className="contact__btn" type="submit" value="Send" />
    </form>
    );
}