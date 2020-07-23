import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.section`
  border-color: #F6F6F4;
  border-width: 2px 2px 2px 2px; 
  border-style: solid;
  border-radius: 0px;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 40px;
  background-color: #F6F6F4;
  box-shadow: 0 0 5px #F6F6F4;
  text-align: center;
  min-height: 300px;
  height: 90%;
  @media screen and (max-width: 960px) {
      margin-left: 0px;
  }
`;
const Text = styled.p`
    font-size: 25px;
    padding: 10px;
`;
const TextHead = styled.h1`
    font-size: 25px;
    text-align: center;
`;

export default class Education extends Component {
    render() {
        return (
            <Wrapper>
            
            <Grid container >
                <Grid xs={12} sm={6} item>
                <TextHead>Edukacija</TextHead>
                <Text >2019 - Tehničko Veleučilište Zagreb Informatika</Text>
                <Text >2018 - Tehničko Veleučilište Zagreb Elektotehnika</Text>
                <Text>2013-2017 I. Tehnička Škola Tesla</Text>
                </Grid>
                <Grid xs={12} sm={6} item>
                <TextHead>Radno Iskustvo</TextHead>
                <Text>2017 - 2019 Rad u knjižari Znanje u Gajevoj 1</Text>
                <Text>2016 - Rad na APM web-stranici</Text>
                </Grid>
            </Grid>
            
            </Wrapper>
        )
    }
}
