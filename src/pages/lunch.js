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

const Lunch = () => {
    return(
       <main className="pageStyles">
        <title>Lunch</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
            <Typography variant="h1" className="headingStyles">
                Lunch
            </Typography>

            <Typography variant="body1" className="paragraphStyles">
                The mid-day meal, a break from the monotony of a workday or just an enjoyable meal. It can't be 
                too filling or suffer the time lost of a midday nap.
            </Typography>
        </div>
       </main>
    )
}
export default Lunch