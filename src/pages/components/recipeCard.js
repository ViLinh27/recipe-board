/*Basic card imports*/
import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@mui/material';

/*Additional imports*/
import "../../styles.css";
import "../../sassyStyles.css";
import { Link } from "gatsby";
import {
    Button,
    Typography} from '@material-ui/core';

export default function RecipeCard({imageLink, imageAlt, cardTitle, cardDescription, cardLink}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageLink}
        alt={imageAlt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Link to={cardLink}><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}
