import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { DateRange } from '@styled-icons/material-sharp/DateRange'
import { HouseUser } from '@styled-icons/fa-solid/HouseUser'
import { Email } from '@styled-icons/material/Email'
import { Phone } from '@styled-icons/boxicons-solid/Phone'

const Daterange = styled(DateRange)`
  font-size: 10px;
`
const HeadButton = styled(Button)`
  border-color: #F6F6F4;
  border-width: 0 2px 2px 0; 
  border-radius: 0px;
  border-color: #F6F6F4;
  background-color: #F6F6F4;
  box-shadow: 0 0 5px #F6F6F4;
  width: 100%;
  height: 50px;
  font-size: 25px;
  pointer-events: none;

  @media screen and (max-width: 600px) {
      width: 100%;
      margin-left: 0px;
      border-width: 0px 0px 2px 0px;
  }
`;

const ButtonText = styled.h1`
  color: black;
  font-size: 30px;
`;

const InfoWrapper = styled.section`
  color: black;
  font-size: 15px;
  background-color: #F6F6F4;
  margin: 0 auto;
  width: 33%;
  border-color: rgb(204,146,116);
  border-width: 0 2px 2px 0; 
  border-radius: 0px;
  border-color: #F6F6F4;
  box-shadow: 0 0 5px #F6F6F4;
  padding: 10px;
  min-width: 400px;
  text-align: center;
  margin-bottom: 25px;
`;

export default class Header extends Component {
    render() {
        return (
            <div>
            <HeadButton>
            <ButtonText>
            Karlo Balon
            </ButtonText>
            </HeadButton>
            <InfoWrapper>
            <p><Daterange size="23" /> 04.05.1998 <Daterange size="23" /></p>
            <p><HouseUser size="23" /> Ulica Dragutina Domjanića 15 <HouseUser size="23" /></p>
            <p><Email size="23" /> karlo-121@hotmail.com <Email size="23" /></p>
            <p><Phone size="23" /> 0953700655 <Phone size="23" /></p>
            </InfoWrapper>
            </div>   
        )
    }
}
