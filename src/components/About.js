import React, { Component } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import orange from '@material-ui/core/colors/orange';
import { positions } from '@material-ui/system';


const Wrapper = styled.section`
  border-color: black;
  border-width: 2px 0px 0px 2px; 
  border-style: solid;
  border-radius: 0px;
  margin-top: 30px;
  @media screen and (max-width: 600px) {
      width: 100%;
      margin-left: 0px;
      border-width: 2px 0px 2px 0px;
  }
`;
const Text = styled.p`
    font-size: 25px;
    margin-left: 35px;

`;
const TextHead = styled.h1`
    font-size: 30px;
    margin-left: 35px;

`;

export default class About extends Component {
    render() {
        return (
            <Wrapper>
            
            <TextHead> <AccountCircleIcon style={{fontSize: 30 , color: orange[500], position: 'bottom'}} /> O meni</TextHead>
            <Text>Fusce aliquam, dolor a convallis fringilla, odio nibh tempus risus, quis hendrerit risus eros vel risus. Integer id urna at arcu consequat venenatis consectetur ut odio. Aliquam dignissim volutpat diam. Sed quis consectetur urna. In vel felis vel ligula consectetur efficitur. Praesent quis metus hendrerit, vulputate libero vitae, luctus massa. Sed lacus augue, hendrerit eget diam at, iaculis venenatis sem. Pellentesque finibus diam in ligula molestie, sed tempus leo ultrices. Suspendisse vitae semper orci. Vestibulum vel nibh vel nibh faucibus posuere a quis sem. Aenean a odio justo. Mauris elementum ligula ac semper eleifend.</Text>
            </Wrapper>
        )
    }
}
