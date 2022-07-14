import React from 'react';

import "../styles.css";
import "../sassyStyles.css";

import Navbar from "./components/Navbar";
import {
  AppBar,
  Button,
  Typography,
  Container,
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
            <Typography variant="h1" className="headingStyles">
                Breakfast
            </Typography>

            <Typography variant="body1" className="paragraphStyles">
                What should we eat in the morning? What's the most important meal of the day that would not make
                anyone too sleepy on a workday?
            </Typography>

            <Recipe
                imageLink="https://assets.epicurious.com/photos/54ad4c516529d92b2c043ac5/master/w_960,c_limit/51200610_savory-oatmeal_1x1.jpg"
                imageAlt="Savory Oatmeal with a Basted Egg"
                cardTitle="Savory Oatmeal with a Basted Egg"
                cardDescription=""
                cardLink="https://www.epicurious.com/recipes/food/views/savory-oatmeal-with-a-basted-egg-51200610"
            />
        </div>
       </main>
    )
}
export default Breakfast