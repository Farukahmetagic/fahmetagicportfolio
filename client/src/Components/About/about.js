import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import ProgressBar from 'react-percent-bar';

function About() {
    const [progressWidth, setProgressWidth] = useState("350px");

    const setResponsiveness = () => {
        if (window.innerWidth <= 600) {
            setProgressWidth("150px");
        }
        if (window.innerWidth > 600) {
            setProgressWidth("350px");
        }
    }

    useEffect(() => { setResponsiveness() })

    return (
        <Container className="aboutcontainer">
            <div className="bio">
                <br />
                <h3 className="abouttitle">Bio</h3>
                <br />
                <p className="biotext">
                    I’m constantly striving to improve my techniques,
                    expand my skillset and find new opportunities to grow.
                    Each of my projects - both solo and collaborative -
                    have provided this growth and allowed me to establish
                    myself within this competitive industry.
                    Please enjoy my portfolio, and feel
                    free to get in touch with any questions.
                </p>
                <br />
                <br />
                <button className="btn-contact">Download CV</button>
                <br />
                <br />
                <br />
            </div>
            <div className="skillset">
                <br />
                <h3 className="abouttitle">Skills</h3>
                <br />
                <div className="bioprogressbar">
                    <p className="skillstext">JavaScript</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={90}
                        className="progressbar"
                        height="22px"
                        width={progressWidth}
                    />
                    <p className="skillstext">90%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">HTML&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={87}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">87%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={85}
                        className="progressbar"
                        height="22px"
                        width={progressWidth}
                    />
                    <p className="skillstext">85%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">React.js&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={75}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">75%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">Redux&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={60}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">60%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">jQuery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={95}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">95%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">Bootstrap&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={95}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">95%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">Node.js&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={75}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">75%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">Express.js&nbsp;</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={75}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">75%</p>
                </div>
                <div className="bioprogressbar">
                    <p className="skillstext">MongoDB</p>
                    <ProgressBar
                        colorShift={true}
                        fillColor="rgba(255, 255, 255, 0.6)"
                        percent={60}
                        className="progressbar"
                        height="22px"
                        width={progressWidth} />
                    <p className="skillstext">60%</p>
                </div>

            </div>
        </Container>
    );
}

export default About;