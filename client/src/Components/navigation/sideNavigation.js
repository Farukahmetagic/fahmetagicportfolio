import React from 'react';
import { ListItem, ListItemText, Box } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

function SideNavigation() {
    return (
        <Box component="nav" aria-label="main mailbox folders" display="flex">
            <ListItem button component={RouterLink} to="/" className="navitem">
                <ListItemText primary="Home"  className="navtext"/>
            </ListItem>
            <ListItem button component={RouterLink} to="/about" className="navitem">
                <ListItemText primary="About" className="navtext"/>
            </ListItem>
            <ListItem button component={RouterLink} to="/services" className="navitem">
                <ListItemText primary="Services" className="navtext"/>
            </ListItem>
            <ListItem button component={RouterLink} to="/projects" className="navitem">
                <ListItemText primary="Projects" className="navtext"/>
            </ListItem>
            <ListItem button component={RouterLink} to="/contact" className="navitem">
                <ListItemText primary="Contact" className="navtext"/>
            </ListItem>
        </Box>
    );
}

export default SideNavigation;