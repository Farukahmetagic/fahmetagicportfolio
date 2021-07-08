import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

import MobileNavItems from './mobileNavItems';

function SideNavigationMobile() {
    const [showItems, setShowItems] = useState(false);

    const showItemsHandler = () => {
        setShowItems(!showItems)
        bodyOverflow()
    }

    const bodyOverflow = () => {
        let bodyStyle;
        if(!showItems){
            bodyStyle = 'hidden';
        }else{
            bodyStyle = '';
        }
        document.body.style.overflow = bodyStyle;
    }

    return (
        <>
            <div>
                <IconButton className="menuBtn" onClick={showItemsHandler}>
                    {showItems ? <CloseIcon className="iconBtn" fontSize="large"/> : <MenuIcon className="iconBtn" fontSize="large"/>}
                </IconButton>
            </div>
            <MobileNavItems showItems={{ showItems, showItemsHandler }} />

        </>
    );
}

export default SideNavigationMobile;