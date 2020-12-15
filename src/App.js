import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import RecipeReviewCard from './Components/Card';
import DataSelect from './Components/DataSelect';
import CustomizedButtons from './Components/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  project: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '23px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: '#000000',
  },
  circle: {
    width: '10px',
    height: '10px',
    // borderRadius: '15px',
    background: '#F64D40'
  },
  content: {
    maxWidth: '1280px'
  },
  footer: {
    direction: 'row',
    maxWidth: '1280px',
    height: '529px',
    background: '#005EF3'
  }
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <main>
        <Container >
          <Grid container className={classes.content} spacing={3}>
            <Grid item lg={12}>
              <Paper className={classes.paper}><Avatar className={classes.circle}></Avatar><Typography className={classes.project} variant="h3" component="h3" gutterBottom>
                проекты, которым необходимо помочь
      </Typography></Paper>
            </Grid>
            <Grid item lg={4} sm={6}>
              <Paper className={classes.paper}><RecipeReviewCard /></Paper>
            </Grid>
            <Grid item lg={4} sm={6}>
              <Paper className={classes.paper}><RecipeReviewCard /></Paper>
            </Grid>
            <Grid item lg={4} sm={6}>
              <Paper className={classes.paper}><RecipeReviewCard /></Paper>
            </Grid>
            <Grid item lg={12} sm={6}>
              <Paper className={classes.paper}>
                <Grid container className={classes.footer}>
                  <Grid item lg={3} sm={3}>
                    <Paper className={classes.paper}><DataSelect /></Paper>
                  </Grid>
                  <Grid item lg={9} sm={9}>
                    <Paper className={classes.paper}><Typography className={classes.project} variant="h3" component="h3" gutterBottom>
                      один из пяти столпов ислама, обязательный ежегодный налог в исламском праве, выплачиваемый с различного вида доходов и имущества (движимого и недвижимого) всеми самостоятельными, свободными, дееспособными и взрослыми мусульманами в пользу нуждающихся единоверцев. Согласно шариату, его выплата означает, что полученные доходы и нажитое богатство не являются греховными. Точные размеры закята, как и то на какие виды собственности он распространяется, являются предметом дискуссий среди знатоков мусульманского права
      </Typography><CustomizedButtons /></Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    </>
  );
}

export default App;
