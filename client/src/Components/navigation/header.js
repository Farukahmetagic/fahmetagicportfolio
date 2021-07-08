import React from 'react';
import { Link } from 'react-router-dom';

import SideNavigation from './sideNavigation';
import SideNavigationMobile from './sideNavigationMobile';

function Header({windowsWidth}) {
  let text;
  const textChanger = () => {
    
    if(windowsWidth>900){
      text = "faruk ahmetagic"
    }
    if(windowsWidth<=900){
      text = "f a"
    }
    return text
  }
  return (
    <>
      <nav className="navbar" style={{background:"transparent"}}>
        <Link to="/" className="navbarbrand d-flex align-items-center" style={{ fontFamily: "Roboto", color: "#fff", textDecoration: "none" }}>
          {textChanger()}
        </Link>
        {text==="faruk ahmetagic"?<SideNavigation />:<SideNavigationMobile/>}
        
      </nav>
    </>
  );
}

export default Header;