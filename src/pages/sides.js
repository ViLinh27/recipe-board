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

import GarlicBeans from "../images/garlic-green-beans.jpg";

const Sides = () => {
    return(
       <main className="pageStyles">
        <title>Sides</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
             <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <Typography variant="h1" className="headingStyles">
                                Sides
                            </Typography>

                            <Typography variant="body1" className="paragraphStyles">
                                Smaller serving dishes paired with main dishes. Can be served on their own probably.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            {/*recipe: */}
             {/* <section className="section header">
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
            </section> */}
            <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={6} sm={12}>
                            <Typography variant="h4" className="headingStyles" id="instagram-sides">
                                Instagram
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink={GarlicBeans}
                                imageAlt="Garlic Green Beans"
                                cardTitle="Garlic Green Beans"
                                cardDescription="Can't go wrong with adding garlic to something"
                                cardLink="https://www.instagram.com/p/CTpcPbrJfvt/"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            
        </div>
       </main>
    )
}
export default Sides