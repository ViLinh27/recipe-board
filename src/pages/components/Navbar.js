import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'gatsby';
import "../../sassyStyles.css";

const Navbar = () => {

  const navItems = ['Breakfast','Lunch','Dinner','Sides','Desserts','Snacks'];
  return (
    <AppBar position="static" class="navbar">
      <Toolbar>
            {navItems.map((item)=>(
              <Button key={item} class="navbar__buttons">
                {item}
              </Button>
            ))}
      </Toolbar>
    </AppBar>
  );
};export default Navbar;