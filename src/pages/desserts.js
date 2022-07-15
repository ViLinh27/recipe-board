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

import Recipe from "./components/recipeCard";

const Desserts = () => {
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
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink=""
                                imageAlt=""
                                cardTitle=""
                                cardDescription=""
                                cardLink=""
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
       </main>
    )
}
export default Desserts