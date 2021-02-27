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
            <label name="name" className="contact__label contact__label--name">Name</label>
            <input htmlFor="name" className="contact__main" name="message" placeholder="Full Name"/>
            <label name="contact" className="contact__label">Contact</label>
            <input htmlFor="contact" className="contact__main" name="message" placeholder="Email"/>
            <label name="message" className="contact__label contact__label--message">Message</label>
            <textarea htmlFor="message" className="contact__main" name="message" placeholder="Type your review or message here"/>
            <input  className="contact__btn" type="submit" value="Send" />
        </form>
    );
}