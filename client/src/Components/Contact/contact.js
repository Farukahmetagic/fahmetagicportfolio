import React, { useState } from 'react';
import emailjs, { send } from 'emailjs-com';
import { useForm } from "react-hook-form";

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact({ windowsWidth }) {
    const [successMsg, setSuccessMsg] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = 'service_ID';
    const templateID = 'template_ID';
    const userID = 'user_ZiBq5TRjtRyErI1b9DGRu';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phoneNumber: data.phoneNumber,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset()
        handleClick()

    }
    let showErr;
    const mediaQuery = () => {

        if (windowsWidth > 1000) {
            showErr = true
        }
        if (windowsWidth <= 1000) {
            showErr = false
        }
        return showErr
    }

    function sendEmail(serviceID, templateID, variables, userID) {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMsg("Message sent successfully! I'll contact you as soon as possible")
            }).catch(err => console.error(`Something went wrong ${err}`));
    }
    const handleClick = () => {
        window['scrollTo']({ top: 0, behavior: 'smooth' })
    }
    return (
        <>
            {mediaQuery()}
            <form className="contactContainer" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="ContactTitle">Contact Me</h2>
                <span className="success-msg">{successMsg}</span>
                <div className="inputsContainer">
                    <div className="inputFields">
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control inputs"
                            placeholder="Name*"
                            {...register('name', {
                                required: "Please enter your name",
                                maxLength: {
                                    value: 30,
                                    message: "Max 30 characters"
                                }
                            })
                            }                           
                        />
                        <span className="error-message">
                            {errors.phoneNumber && errors.phoneNumber.message}
                        </span>

                        <input
                            type="type"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="form-control inputs"
                            placeholder="Phone Number"
                            {...register('phoneNumber', {
                                maxLength: {
                                    value: 30,
                                    message: "Max 30 characters"
                                }
                            })
                            }
                           
                        />
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control inputs"
                            placeholder="Email*"
                            {...register('email', {
                                required: "Please enter your Email-address",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email"
                                }
                            })
                            }
                           
                        />
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control inputs"
                            placeholder="Subject*"
                            {...register('subject', {
                                required: "Please enter subject",
                                maxLength: {
                                    value: 30,
                                    message: "Max 30 characters"
                                }
                            })
                            }
                            
                        />
                    </div>
                    <div className="textField">
                        {!showErr ? <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                            : null
                        }
                        <textarea
                            id="description"
                            type="text"
                            className="form-control textArea"
                            placeholder="Type your message here *"
                            name="description"
                            {...register('description', {
                                required: "Message is required"
                            })
                            }
                        >
                        </textarea>
                        {showErr ? <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                            : null
                        }
                    </div>
                </div>
                <button className="contact-btn" type="submit">Send</button>
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
                        <LinkedInIcon className="dmLinkedIn" fontSize="large" /><p>https://www.linkedin.com/in/<wbr />faruk-ahmetagic-5b7a55203</p>
                    </div>
                    <div className="dmWh">
                        <GitHubIcon className="dmGitHub" fontSize="large" /><p>https://github.com<wbr />/Farukahmetagic</p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Contact;