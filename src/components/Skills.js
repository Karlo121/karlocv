import React, { Component } from 'react'
import styled from 'styled-components'
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import figma from '../img/figma.png';
import python from '../img/python.png';
import csharp from '../img/csharp.svg';
import c from '../img/c.png';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.section`
  border-color: #F6F6F4;;
  border-width: 2px 2px 2px 2px; 
  border-style: solid;
  border-radius: 0px;
  margin-top: 30px;
  height: 90%;
  margin-bottom: 30px;
  color: black;
  background-color: #F6F6F4;
  box-shadow: 0 0 5px #F6F6F4;
  min-height: 300px;
  @media screen and (max-width: 700px) {
      width: 100%;
      margin-left: 0px;
      border-width: 2px 0px 2px 0px;
  }
}
`;
const Text = styled.p`
    font-size: 25px;
    padding: 10px;
    text-align: center;
`;
const TextHead = styled.h1`
    font-size: 25px;
    text-align: center;

`;

const Margin = styled.p`
margin-left: 20px;
padding: 20px;
`;

export default class Skills extends Component {
    render() {
        return (
            <Wrapper>
            <TextHead>Vještine</TextHead>
            <Grid style={{justifyContent: 'space-evenly'}} container>
                <Margin><Grid item xs={12} sm={4}><img height="100" src={html} alt="html" /></Grid></Margin>  
                <Margin><Grid item xs={12} sm={4}><img height="100" src={css} alt="css" /></Grid></Margin>
                <Margin><Grid xs={12} sm={4}><img height="100" src={js} alt="js" /></Grid></Margin>
                <Margin><Grid xs={12} sm={4}><img height="100" src={figma} alt="figma" /></Grid></Margin>
                <Margin><Grid xs={12} sm={4}><img height="100" src={python} alt="python" /></Grid></Margin>
                <Margin><Grid xs={12} sm={4}><img height="100" src={csharp} alt="c#" /></Grid></Margin>
                <Margin><Grid xs={12} sm={4}><img height="100" src={c} alt="c" /></Grid></Margin>
                <Grid xs={12} sm={12}><Text>Upoznat sa Git-om.</Text></Grid>
                <Grid xs={12} sm={12}><Text>Izvrsno znanje engleskog jezika.</Text></Grid>
                
                
                
                
            </Grid>
            </Wrapper>
        )
    }
}
