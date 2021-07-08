import React from 'react';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import DevicesIcon from '@material-ui/icons/Devices';
import FeaturedVideoOutlinedIcon from '@material-ui/icons/FeaturedVideoOutlined';

function Services() {
    return (
        <div className="servicescontainer">
            <h1 className="serviceTitle">Services</h1>
            <div className="serText">
                <p>
                    I´m Full-Stack Developer.
                    Technologies I use is MERN
                    (MongoDB, Express, ReactJS and NodeJS).
                    I create responsive websites that are
                    displayed on all devices desktops and
                    smartphones, also mobile apps, mini
                    games etc. Of course, before I begin
                    developing any app, Landing Page,
                    Business Website or E-commerce, I need
                    to have a ready made project layout
                    (sketch). And i´m ready to do this
                    for you.
                </p>
            </div>
            <div className="typesOfServiceCol-1 typesOfServiceCol-2 typesOfServiceCol-3">
                <div className="service">
                    <div className="iconContainer">
                        <DesktopWindowsIcon fontSize="large" className="serviceIcon" />
                    </div>
                    <p>
                        MERN stack<br />
                        Single-Page
                        Application Concept<br/>
                        Mobile-Friendly Design
                    </p>
                    <h5 className="sTitle">Websites</h5>
                </div>
                <div className="service">
                    <div className="iconContainer">
                        <MobileFriendlyIcon fontSize="large" className="serviceIcon" />
                    </div>
                    <p>
                        React Native<br />
                        Cordova
                    </p>
                    <h5 className="sTitle">Mobile Apps</h5>
                </div>
                <div className="service">
                    <div className="iconContainer">
                        <DevicesIcon fontSize="large" className="serviceIcon" />
                    </div>
                    <p>
                        Progressive Web Apps<br/><br/>
                        Your website will be built with proven, reliable technologies
                    </p>
                    <h5 className="sTitle">PWA</h5>
                </div>
                <div className="service">
                    <div className="iconContainer">
                        <FeaturedVideoOutlinedIcon fontSize="large" className="serviceIcon" />
                    </div>
                    <p>
                        Search Engine Optimization<br/><br/>
                        A mandatory marketing tactic
                    </p>
                    <h5 className="sTitle">SEO</h5>
                </div>
            </div>
        </div>
    );
}

export default Services;