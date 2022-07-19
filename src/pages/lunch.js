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
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/55c399f8a9c6a0784e28f683/master/w_1280,c_limit/56389909_sweet-potato-avocado-burger_6x4.jpg"
                                imageAlt="Sweet Potato Avocado Burger"
                                cardTitle="Sweet Potato Avocado Burger"
                                cardDescription="I enjoy burgers, sweet potato, and avocado, so this looks like a must to try."
                                cardLink="https://www.epicurious.com/recipes/food/views/sweet-potato-avocado-burger-56389909"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            
        </div>
       </main>
    )
}
export default Lunch