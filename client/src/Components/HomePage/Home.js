import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

function Home() {
   return (
      <Container className="homepagediv">
         <br />
         <h3 className="hptitle">SOFTWARE AND WEB DEVELOPMENT</h3><br />
         <Typed className="hptext" strings={["Web Apps", "Mobile Apps", "MERN Stack", "Responsive Design", "Software Engineering"]} typeSpeed={50} backSpeed={70} backDelay={800} loop></Typed>
         <br />
         <br />
         <br />
         <br />
         <Link to="/contact" className="btn-contact">Contact me</Link>
         <br />
         <br />
         <br />
      </Container>
   );
}

export default Home;