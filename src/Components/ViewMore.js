import React from 'react';
import { mens } from './SliderData';
import {Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
    marginTop: '10px'
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '10px'
  },
  images: {
    position: 'relative',
    width: '100%',
    height: '200px',
    objectFit: 'contain'
  }
}));

const ViewMore = () => {
  const {productId} = useParams()
  console.log(productId)
  const classes = useStyles();
  return (
          <Grid container spcaing={2} className={classes.grid}>
            
          {mens.map((men) => {
              return <Grid item xs={12} md={3} sm={4}><Link to="/:productId"><Paper className={classes.paper} key={men}><img src={men.img} alt="hello" className={classes.images} />
              <h4>{men.title}</h4>
              <span>Upto {men.discount}% off.</span>
              <p>{men.brand}</p>
            </Paper></Link></Grid>
            })}
            </Grid>
  )
}

export default ViewMore;
