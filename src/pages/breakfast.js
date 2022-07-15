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

const Breakfast = () => {
    return(
       <main className="pageStyles">
        <title>Breakfast</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
            <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={6} sm={12}>
                            <Typography variant="h1" className="headingStyles">
                                Breakfast
                            </Typography>

                            <Typography variant="body1" className="paragraphStyles">
                                What should we eat in the morning? What's the most important meal of the day that would not make
                                anyone too sleepy on a workday?
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
                                imageLink="https://assets.epicurious.com/photos/54ad4c516529d92b2c043ac5/master/w_960,c_limit/51200610_savory-oatmeal_1x1.jpg"
                                imageAlt="Savory Oatmeal with a Basted Egg"
                                cardTitle="Savory Oatmeal with a Basted Egg"
                                cardDescription="Looks like a good way to add more pizazz to oatmeal."
                                cardLink="https://www.epicurious.com/recipes/food/views/savory-oatmeal-with-a-basted-egg-51200610"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/582cc7af46bb53ee63488c6a/master/w_1280,c_limit/oat-apple-pancakes-with-yogurt-and-honey-BA-111616.jpg"
                                imageAlt="Oat and Apple Pancakes with Yogurt"
                                cardTitle="Oat and Apple Pancakes with Yogurt"
                                cardDescription="Recipe doesn't have the best rating but it seems interesting to tr anyway."
                                cardLink="https://www.epicurious.com/recipes/food/views/oat-and-apple-pancakes-with-yogurt"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/5aa01227bb8d8278146573f8/master/w_960,c_limit/savory-oatmeal-with-bacon-scallions-and-cheddar-slow-cooker-recipe-030718.jpg"
                                imageAlt="Slow Cooker Savory Oatmeal with Bacon, Scallions, and Cheddar"
                                cardTitle="Slow Cooker Savory Oatmeal with Bacon, Scallions, and Cheddar"
                                cardDescription="Slow cooker stuff is useful to know."
                                cardLink="https://www.epicurious.com/recipes/food/views/slow-cooker-savory-oatmeal-with-bacon-scallions-and-cheddar"
                            />
                        </Grid>
                        {/* <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink=""
                                imageAlt=""
                                cardTitle=""
                                cardDescription=""
                                cardLink=""
                            />
                            <Recipe
                                imageLink=""
                                imageAlt=""
                                cardTitle=""
                                cardDescription=""
                                cardLink=""
                            />
                            <Recipe
                                imageLink=""
                                imageAlt=""
                                cardTitle=""
                                cardDescription=""
                                cardLink=""
                            />
                        </Grid> */}
                    </Grid>
                </Container>
            </section>
           
        </div>
       </main>
    )
}
export default Breakfast