import React from 'react';
import { Link } from 'react-router-dom';

import SideNavigation from './sideNavigation';
import SideNavigationMobile from './sideNavigationMobile';
import JS from '../../styles/images/javascript.png'
import ReactImg from '../../styles/images/react.png'
import Python from '../../styles/images/python.png'
import CSharp from '../../styles/images/csharp.png'
import Java from '../../styles/images/java.png'

function Header({ windowsWidth }) {
  let text;
  const textChanger = () => {

    if (windowsWidth > 900) {
      text = true
    }
    if (windowsWidth <= 900) {
      text = false
    }
    return text
  }
  
  return (
    <>
      {textChanger()}
      <nav className="navbar bg-dark">
        <Link to="/" className="navbarbrand d-flex align-items-center" style={{ fontFamily: "Roboto", color: "#fff", textDecoration: "none" }}>
          <img src={JS} alt="error" className="jsImg" />
          <img src={ReactImg} alt="error" className="jsImg" />
          <img src={Python} alt="error" className="jsImg" />
          <img src={CSharp} alt="error" className="jsImg" />
          <img src={Java} alt="error" className="jsImg" />
        </Link>
        {text ? <SideNavigation /> : <SideNavigationMobile />}
      </nav>
    </>
  );
}

export default Header;