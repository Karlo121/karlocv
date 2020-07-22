import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


const HeadButton = styled(Button)`
  color: black;
  border-color: black;
  border-width: 0 2px 2px 0; 
  border-style: solid;
  border-radius: 0px;
  width: 300px;
  height: 100px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 25px;
  pointer-events: none;

  @media screen and (max-width: 600px) {
      width: 100%;
      margin-left: 0px;
      border-width: 0px 0px 2px 0px;
  }
`;

export default class Header extends Component {
    render() {
        return (
            <div>
            <HeadButton>Karlo Balon</HeadButton>
            </div>
        
        )
    }
}
