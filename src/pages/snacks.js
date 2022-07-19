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
        <title>Snacks</title>

        <div className="navbar">
        <Navbar/>
        </div>

        <div className="mainbody">
             <section className="section header">
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <Typography variant="h1" className="headingStyles">
                                Snacks
                            </Typography>

                            <Typography variant="body1" className="paragraphStyles">
                                Could be evening snack before the big meal. Could be just because you're not hungry enough for
                                a whole meal. Who knows.
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
                                imageLink="https://assets.epicurious.com/photos/592460f0f0fad567624a162a/master/w_1280,c_limit/Eggless-Cookie-Dough-with-Variations-18052017.jpg"
                                imageAlt="Edible Cookie Dough with Variations"
                                cardTitle="Edible Cookie Dough with Variations"
                                cardDescription="Don't really like the idea of eating raw cookie dough. But this recipe looks fun to at least try."
                                cardLink="https://www.epicurious.com/recipes/food/views/eggless-edible-cookie-dough-with-variations"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://assets.epicurious.com/photos/5b16fb0e3674e370f3a0ce11/master/w_960,c_limit/cinnamon-oat-peach-crisp-recipe-BA-060518.jpg"
                                imageAlt="Cinnamon-Oat Peach Crisp"
                                cardTitle="Cinnamon-Oat Peach Crisp"
                                cardDescription="Peaches are always good."
                                cardLink="https://www.epicurious.com/recipes/food/views/cinnamon-oat-peach-crisp"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink="https://i0.wp.com/www.angsarap.net/wp-content/uploads/2021/08/Rose-Tteokbokki.jpg?resize=720%2C1080&ssl=1"
                                imageAlt="Rose Tteokbokki"
                                cardTitle="Rose Tteokbokki"
                                cardDescription="A delicious variant to an already great snack"
                                cardLink="https://www.angsarap.net/2021/10/11/rose-tteokbokki/"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            
        </div>
       </main>
    )
}
export default Breakfast