import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section className="contact-section text-center" id="contact">
            <div className="container">
                <h2 className="mb-5">Contact Me</h2>
                <form>
                    <input className="inputs" type="text" required placeholder="Your Name"></input>
                    <br></br>
                    <input className="inputs" type="text" required placeholder="Your Email"></input>
                    <br></br>
                    <textarea required placeholder="Your Message"></textarea>
                    <br></br>
                    <input type="submit" className="send-message-button" value="Send Message"></input>
                </form>
            </div>
        </section>
    );
};

export default Contact;