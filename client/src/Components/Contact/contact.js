import React from 'react';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    return (
        <div className="contactContainer">
            <h2 className="ContactTitle">Contact Me</h2>
            <div className="inputsContainer">
                <div className="inputFields">
                    <form className="inputsForm">
                        <input type="text" id="name" name="name" className="form-control inputs" placeholder="Name" />
                        <hr className="inputDivider" />
                        <input type="text" id="phoneNumber" name="phoneNumber" className="form-control inputs" placeholder="Phone Number" />
                        <hr className="inputDivider" />
                        <input type="email" id="email" name="email" className="form-control inputs" placeholder="Email" />
                        <hr className="inputDivider" />
                        <input type="text" id="subject" name="subject" className="form-control inputs" placeholder="Subject" />
                        <hr className="inputDivider" />
                    </form>
                </div>
                <div className="textField">
                    <textarea
                        id="description"
                        type="text"
                        className="form-control textArea"
                        placeholder="Type your message here"
                    >
                    </textarea>
                </div>
            </div>
            <button className="contact-btn">Send</button>
            <hr className="inputsDivider inputsDividerMobile" />
            <div className="dmContainer">
                <h3 className="dmTitle">Or send me dm on:</h3>
                <div className="dmInfo">
                    <div className="dmWh">
                        <WhatsAppIcon className="dmWhatsapp" fontSize="large" /><p>+43 676 4523701</p>
                    </div>
                    <div className="dmWh">
                        <MailOutlineIcon className="dmGmail" fontSize="large" /><p>farukahmetagic94@gmail.com</p>
                    </div>
                </div>
                <div className="dmWh">
                    <LinkedInIcon className="dmLinkedIn" fontSize="large" /><p>https://www.linkedin.com/in/<wbr/>faruk-ahmetagic-5b7a55203</p>
                </div>
                <div className="dmWh">
                    <GitHubIcon className="dmGitHub" fontSize="large" /><p>https://github.com<wbr/>/Farukahmetagic</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;