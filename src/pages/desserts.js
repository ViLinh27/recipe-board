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

const Breakfast = () => {
    return(
       <main className="pageStyles">
        <title>Desserts</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
           
             <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <Typography variant="h1" className="headingStyles">
                                Desserts
                            </Typography>

                            <Typography variant="body1" className="paragraphStyles">
                                Sweets. After dinner. Often the best part of the meal :D .
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/*recipe: */}
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
export default Breakfast