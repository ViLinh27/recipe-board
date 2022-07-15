import React from 'react';

import "../styles.css";
import "../sassyStyles.css";

import Navbar from "./components/Navbar";
import {
  AppBar,
  Button,
  Typography,
  Container,
  Grid,
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
            <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <Typography variant="h1" className="headingStyles">
                                Lunch
                            </Typography>

                            <Typography variant="body1" className="paragraphStyles">
                                The mid-day meal, a break from the monotony of a workday or just an enjoyable meal. It can't be 
                                too filling or suffer the time lost of a midday nap.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            
            {/*recipes: */}
            <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>

                        </Grid>
                    </Grid>
                </Container>
            </section>
            
        </div>
       </main>
    )
}
export default Lunch