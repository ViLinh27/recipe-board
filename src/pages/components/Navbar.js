import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>Navbar</Toolbar>
    </AppBar>
  );
};export default Navbar;