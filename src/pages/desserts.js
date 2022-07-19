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
                                imageLink="https://assets.epicurious.com/photos/54ad779119925f464b3b88b1/master/w_1280,c_limit/51186410_kiwi-lime-pie_1x1.jpg"
                                imageAlt="Kiwi Lime Pie"
                                cardTitle="Kiwi Lime Pie"
                                cardDescription="Lime is a good flavor in pie, so kiwi seems like an interesting addition to it."
                                cardLink="https://www.epicurious.com/recipes/food/views/kiwi-lime-pie-51186410"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/54b1d8e99a93d64c380ada24/master/w_1280,c_limit/394670_bacon-oatmeal-raisin-cookies_1x1.jpg"
                                imageAlt="Bacon, Oatmeal, and Raisin Cookies"
                                cardTitle="Bacon, Oatmeal, and Raisin Cookies"
                                cardDescription="Looks like a fun way to make oatmeal cookies more intereseting"
                                cardLink="https://www.epicurious.com/recipes/food/views/bacon-oatmeal-and-raisin-cookies-394670"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/54b411712413537c0d45aab4/master/w_1280,c_limit/388712_moon-pies_1x1.jpg"
                                imageAlt="Chocolate-Oatmeal Moon Pies"
                                cardTitle="Chocolate-Oatmeal Moon Pies"
                                cardDescription="Looks like a fun way to make moon pies more interesting"
                                cardLink="https://www.epicurious.com/recipes/food/views/chocolate-oatmeal-moon-pies-388712"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/553e61a7ff11a7f13ba7cf9b/master/w_1280,c_limit/56389498_raspberry-oat-cheesecake_6x4.jpg"
                                imageAlt="Raspberry, Whiskey and Oat Cheesecake"
                                cardTitle="Raspberry, Whiskey and Oat Cheesecake"
                                cardDescription="An interesting looking  cheesecake recipe"
                                cardLink="https://www.epicurious.com/recipes/food/views/raspberry-whiskey-oat-cheesecake-56389498"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/5aafe42b218b9d588303ccaf/1:1/w_1280,c_limit/Chocolate-Chip-Cookies-I-Didn't-Like-My-Family-Cookie-Recipe-So-I-Improved-It-13032018.jpg"
                                imageAlt="Salted-Butter Oatmeal Chocolate Chip Cookies"
                                cardTitle="Salted-Butter Oatmeal Chocolate Chip Cookies"
                                cardDescription="Can't go wrong with chocolate chip cookies"
                                cardLink="https://www.epicurious.com/recipes/food/views/salted-butter-oatmeal-chocolate-chip-cookies"
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