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

import EggSandwitch from "../images/high_protein_egg_sandwich.jpg";
import EggAndTomato from "../images/Stir-fried-egg-and-tomatoes.jpg";
import CarbonaraUdon from "../images/carbonara-udon.jpg";
import KimchiFriedRice from "../images/kimchi-fried-rice.jpg";

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
            <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={6} sm={12}>
                            <Typography variant="h4" className="headingStyles">
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
                                imageLink={EggSandwitch}
                                imageAlt="High Protein Egg Sandwitch"
                                cardTitle="High Protein Egg Sandwitch"
                                cardDescription="Eggs are always a good source of protein!"
                                cardLink="https://www.instagram.com/p/CcGvQ51jDBb/"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink={EggAndTomato}
                                imageAlt="Stir-fried egg and tomatoes"
                                cardTitle="Stir-Fried Egg and Tomatoes"
                                cardDescription="Eggs are always a good source of protein!"
                                cardLink="https://www.instagram.com/p/CR1uknLj4x5/"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink={CarbonaraUdon}
                                imageAlt="Carbonara Udon"
                                cardTitle="Carbonara Udon"
                                cardDescription="An interesting use of udon noodles"
                                cardLink="https://www.instagram.com/p/CRcAArgDP8Y/"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink={KimchiFriedRice}
                                imageAlt="Kimchi Fried Rice"
                                cardTitle="Kimchi Fried Rice"
                                cardDescription="A classic recipe!"
                                cardLink="https://www.instagram.com/p/CRMgdwWjyaH/"
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