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

const Breakfast = () => {
    return(
       <main className="pageStyles">
        <title>Breakfast</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
            <Typography variant="h1" className="headingStyles">
                Breakfast
            </Typography>

            <Typography variant="body1" className="paragraphStyles">
                What should we eat in the morning? What's the most important meal of the day that would not make
                anyone too sleepy on a workday?
            </Typography>
        </div>
       </main>
    )
}
export default Breakfast