import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="footer text-center">
                <h4 className="">Get in Touch</h4>
                    <a href="https://www.facebook.com/" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>   
                    <a href="https://www.google.com/" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a> 
                    <a href="https://www.twitter.com/" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>  
                    <a href="https://www.youtube.com/" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>  
                    <p className="text-white text-secondary mt-3">Deluwar Hussen Tanvir © 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;