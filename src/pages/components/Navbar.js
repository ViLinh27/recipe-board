import React from 'react';
import {
  AppBar,
  Button,
  Typography,
  Container,
  IconButton, 
  Toolbar,
  Box,
  Menu,
  MenuItem, 
  useState} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Link from 'gatsby';
import "../../sassyStyles.css";

const Navbar = () => {

  const navItems = ['Breakfast','Lunch','Dinner','Sides','Desserts','Snacks'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
          
          {/*Mobile View*/}
          <Box sx={{flexGrow:1, display:{xs:"flex",md:"none"}}}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup = "true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl = {anchorElNav}
              anchorOrigin = {{
                vertical:"bottom",
                horizontal:"left"
              }}
              keepMounted
              transformOrigin = {{
                vertical:"top",
                horizontal:"left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNaMenu}
              sx={{
                display:{xs:"block",md:"none"}
              }}
            >
              {navItems.map((item)=>(
                <MenuItem key={item} onClick={handleCloseNaMenu}>
                  <Typography textAlign="center">
                    {item}
                  </Typography>
                </MenuItem>
        
              ))}
            </Menu>
          </Box>

          {/*Desktop View*/}
          <Box sx={{flexGrow:1, display:{xs:"none",md:"flex"}}}>
              {navItems.map((item)=>(
                <Button 
                  key={item} 
                  class="navbar__buttons" 
                  onClick={handleCloseNaMenu}
                  sx={{my:2,color:"white",display:"block"}}>
                  <Typography textAlign="center">
                    {item}
                  </Typography>
                </Button>
              ))}
          </Box>
              
        </Toolbar>
      </Container>
      {/*xl window*/}
    </AppBar>
  );
};export default Navbar;