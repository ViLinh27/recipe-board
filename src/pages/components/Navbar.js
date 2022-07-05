import React from 'react';
import {AppBar,Container, Toolbar, useState} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import "../../sassyStyles.css";

const Navbar = () => {

  const navItems = ['Breakfast','Lunch','Dinner','Sides','Desserts','Snacks'];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) =>{
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNaMenu = (event) =>{
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static" class="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
              {navItems.map((item)=>(
                <Button key={item} class="navbar__buttons">
                  {item}
                </Button>
              ))}
        </Toolbar>
      </Container>
      {/*xl window*/}
    </AppBar>
  );
};export default Navbar;