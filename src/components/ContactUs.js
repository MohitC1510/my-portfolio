import React from 'react';
import emailjs from "emailjs-com";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ufmbiil', 'template_2tbd7tt', e.target, 'user_OZ4YOQgcagHIxAA3lpC8C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <section>

            <div className="container">
                <div className="contactInfo">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src="/images/location.png" /></span>
                                <span>G-130 Ravindra Bhawan<br />
                                    IIT Roorkee, UK<br />
                                    247667</span>
                            </li>
                            <li>
                                <span><img src="/images/mail.png" /></span>
                                <span>mohitc.1510@gmail.com</span>
                            </li>
                            <li>
                                <span><img src="/images/call.png" /></span>
                                <span>8077897456</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                        <li><a href="https://github.com/MohitC1510" target="_blank" style={{ color: 'white' }} >
                            <FaGithub size={30} />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/mohit-chaukiker-41138517a/" target="_blank" style={{ color: 'white' }} >
                            <FaLinkedin size={30} />
                        </a></li>
                        <li><a href="https://www.instagram.com/__mojito_._/" target="_blank" style={{ color: 'white' }} >
                            <FaInstagram size={30} />
                        </a></li>
                        <li><a href="https://www.facebook.com/mohit.chaukiker.1/" target="_blank" style={{ color: 'white' }} >
                            <FaFacebook size={30} />
                        </a></li>
                    </ul>
                </div>
                <div className="contactForm">
                    <h2>Send a Message</h2>
                    <form onSubmit={sendEmail} >
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="inputBox w50">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="inputBox w50">
                                <input type="text" className="form-control" placeholder="Any Querry" name="subject" />
                            </div>
                            <div className="inputBox w100">
                                <textarea cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
};

export default Contact;