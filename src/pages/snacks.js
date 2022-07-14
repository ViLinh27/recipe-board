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
        <title>Snacks</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
            <Typography variant="h1" className="headingStyles">
                Snacks
            </Typography>

            <Typography variant="body1" className="paragraphStyles">
                Could be evening snack before the big meal. Could be just because you're not hungry enough for
                a whole meal. Who knows.
            </Typography>
        </div>
       </main>
    )
}
export default Breakfast