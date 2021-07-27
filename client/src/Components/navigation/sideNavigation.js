import React from 'react';
import { ListItem, ListItemText, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function SideNavigation() {

    return (
        <Box component="nav" aria-label="main mailbox folders" display="flex">
            <ul className="navbar">
                <li className="listItem">
                    <Link to="/" className="navitem">Home</Link>
                </li>
                <li className="listItem">
                    <Link to="/about" className="navitem">About</Link>
                </li>
                <li className="listItem">
                    <Link to="/services" className="navitem">Services</Link>
                </li>
                <li className="listItem">
                    <Link to="/projects" className="navitem">Projects</Link>
                </li>
                <li className="listItem">
                    <Link to="/contact" className="navitem">Contact</Link>
                </li>
            </ul>
        </Box>
    );
}

export default SideNavigation;