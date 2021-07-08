import React from 'react';
import { ListItem, ListItemText, Box, List } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

function MobileNavItems({ showItems }) {

    return (
        <Box component="nav" aria-label="main mailbox folders" className={showItems.showItems ? "nav-menu active" : "nav-menu"}>
            <List>
                <ListItem button component={RouterLink} to="/" className="navitem" onClick={showItems.showItemsHandler}>
                    <ListItemText primary="Home" className="navtext" />
                </ListItem>
                <ListItem button component={RouterLink} to="/about" className="navitem" onClick={showItems.showItemsHandler}>
                    <ListItemText primary="About" className="navtext" />
                </ListItem>
                <ListItem button component={RouterLink} to="/services" className="navitem" onClick={showItems.showItemsHandler}>
                    <ListItemText primary="Services" className="navtext" />
                </ListItem>
                <ListItem button component={RouterLink} to="/projects" className="navitem" onClick={showItems.showItemsHandler}>
                    <ListItemText primary="Projects" className="navtext" />
                </ListItem>
                <ListItem button component={RouterLink} to="/contact" className="navitem" onClick={showItems.showItemsHandler}>
                    <ListItemText primary="Contact" className="navtext" />
                </ListItem>
            </List>
        </Box>
    );
}

export default MobileNavItems;