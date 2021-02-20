import React from 'react';
import emailjs from 'emailjs-com';


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
    <form className="contact-form" onSubmit={sendEmail}>
        Name
        <input name="message" placeholder="Name"/>
        Contact
        <input name="message" placeholder="Contact"/>
        Message
        <textarea name="message" placeholder="Message"/>
        <input type="submit" value="Send" />
    </form>
    );
}