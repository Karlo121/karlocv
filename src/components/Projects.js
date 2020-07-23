import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';  
import themepong1 from '../img/themepong1.png';
import themepong2 from '../img/themepong2.png';
import themepong3 from '../img/themepong3.png'

const Wrapper = styled.section`
  /*border-color: rgb(204,146,116);*/
  border-color: #F6F6F4;
  border-width: 2px 2px 2px 2px; 
  border-style: solid;
  border-radius: 0px;
  margin-bottom: 20px;
  color: black;
  background-color: #F6F6F4;
  box-shadow: 0 0 5px #F6F6F4;
  @media screen and (max-width: 600px) {
      width: 100%;
      margin-left: 0px;
      border-width: 2px 0px 2px 0px;
  }
`;
const Text = styled.p`
    font-size: 25px;
    padding: 10px;
    text-align: center;
`;
const TextHead = styled.h1`
    font-size: 30px;
    text-align: center;
`;

const TextHead2 = styled.h2`
    font-size: 25px;
    text-align: center;
`;

export default class Projects extends Component {
    render() {
        return (
            <Wrapper>
            <TextHead>Ostali projekti</TextHead>
            <Text> Par igri u Unity programu pomoću C# jezika. Igre izgubljene na starom računalu.</Text>
            <TextHead2>Theme Pong</TextHead2>
            <Text>Jedina sačuvana igra. Inspirirana DX Ball-om, pitao prijatelje koja je prva riječ koja im padne na pamet, pa sam dizajnirao levele po tim riječima.</Text>
            <Grid style={{justifyContent: 'space-evenly'}} container>
                <Grid align="center" item xs={12} sm={4}><img height="300" src={themepong1} alt="tp1" /></Grid>  
                <Grid align="center" item xs={12} sm={4}><img height="300" src={themepong2} alt="tp2" /></Grid>
                <Grid align="center" xs={12} sm={4}><img height="300" src={themepong3} alt="tp3" /></Grid> 
            </Grid>
            </Wrapper>
        )
    }
}
