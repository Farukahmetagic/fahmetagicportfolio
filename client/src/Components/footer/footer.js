import React from 'react';
import { Container } from 'react-bootstrap';

import logo from '../../styles/images/logo.png'

function Footer() {
    return (
        <div className="footerdiv">
            <Container className="footercontainer">
                {<img src={logo} alt={""} style={{width: "120px" }} />}
                <div className="copyright">
                    © Faruk Ahmetagic
                </div>
            </Container>
        </div>
    );
}

export default Footer;