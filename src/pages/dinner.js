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

import KoreanCurryRice from "../images/korean-style-curry-fried-rice.jpg";
import VeganButterChicken from "../images/vegan-butter-fried-chicken.jpg";
import TomatoPasta from "../images/creamy-tomato-pasta.jpg";

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
                                imageLink={TomatoPasta}
                                imageAlt="Creamy Tomato Pasta"
                                cardTitle="Creamy Tomato Pasta"
                                cardDescription="Can't go wrong with creamy tomato sauce"
                                cardLink="https://www.instagram.com/p/CcfVtgtD436/"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink={KoreanCurryRice}
                                imageAlt="Korean Style Curry Fried Rice"
                                cardTitle="Korean Style Curry Fried Rice"
                                cardDescription="Curry fried rice is a classic staple for easy enough and delicious recipes."
                                cardLink="https://www.instagram.com/p/CcecbV8jEpn/"
                            />
                        </Grid>
                        <Grid item xl={3} lg={4} md={6} sm={12}>
                            <Recipe
                                imageLink={VeganButterChicken}
                                imageAlt="Vegan Butter Chicken"
                                cardTitle="Vegan Butter Chicken"
                                cardDescription="Tofu instead of chicken"
                                cardLink="https://www.instagram.com/p/CdLe_eXqmiW/"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            
        </div>
       </main>
    )
}
export default Dinner