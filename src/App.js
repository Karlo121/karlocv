import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

//components
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
      <Header />
      </Grid>
      <Grid item container>
        <Grid xs={0} sm={0} md={2}></Grid>
        <Grid xs={12} sm={12} md={8}><About /></Grid>
        <Grid xs={0} sm={0} md={2}></Grid>
      </Grid>
      <Grid item container>
        <Grid xs={0} sm={0} md={2}></Grid>
        <Grid xs={12} sm={12} md={4}><Skills /></Grid>
        <Grid xs={12} sm={12} md={4}><Education /></Grid>
        <Grid xs={0} sm={0} md={2}></Grid>
      </Grid>
      <Grid item container>
        <Grid xs={0} sm={0} md={2}></Grid>
        <Grid xs={12} sm={12} md={8}><Projects /></Grid>
        <Grid xs={0} sm={0} md={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
