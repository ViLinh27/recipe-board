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

const Dinner = () => {
    return(
       <main className="pageStyles">
        <title>Dinner</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
             <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <Typography variant="h1" className="headingStyles">
                                Dinner
                            </Typography>

                            <Typography variant="body1" className="paragraphStyles">
                                The evening meal. It can be hearty. It shows the end of the day. Often a family affair if you live
                                back home with family.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            
            {/*recipes:*/}
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
export default Dinner