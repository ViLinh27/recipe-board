import React from 'react';

import "../styles.css";
import "../sassyStyles.css";

import Navbar from "./components/Navbar";
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

const Sides = () => {
    return(
       <main className="pageStyles">
        <title>Sides</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
            <Typography variant="h1" className="headingStyles">
                Sides
            </Typography>

            <Typography variant="body1" className="paragraphStyles">
                Smaller serving dishes paired with main dishes. Can be served on their own probably.
            </Typography>
        </div>
       </main>
    )
}
export default Sides