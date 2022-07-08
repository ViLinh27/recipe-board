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

const Dinner = () => {
    return(
       <main className="pageStyles">
        <title>Dinner</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
            <Typography variant="h1" className="headingStyles">
                Dinner
            </Typography>

            <Typography variant="body1" className="paragraphStyles">
                intro text
            </Typography>
        </div>
       </main>
    )
}
export default Dinner