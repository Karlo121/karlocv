import React, { Component } from 'react'
import styled from 'styled-components'  

const Wrapper = styled.section`
  /*border-color: rgb(204,146,116);*/
  border-color: #F6F6F4;
  border-width: 2px 2px 2px 2px; 
  border-style: solid;
  border-radius: 0px;
  color: black;
  background-color: #F6F6F4;
  box-shadow: 0 0 5px #F6F6F4;
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

export default class About extends Component {
    render() {
        return (
            <Wrapper>
            
            <TextHead>O meni</TextHead>
            <div>
            <Text>Redovni student prve godine Tehničkog Veleučilišta u Zagrebu, smjer Informatika.</Text>
            </div>
            <div>
            <Text>Oduvijek zainteresiran u web-tehnologije. Kroz djetinjsvo i tinejđerske godine radio razne male blogove i web-stranice za zabavu.</Text>
            </div>
            <div>
            <Text>U 3. razredu srednje škole za praksu radio na web-stranici od APM-a (Algoritam-Profil-Mozaik).</Text>
            </div>
            <div>
            <Text>Ove godine sam pohađao kolegij "Primjena HTML i CSS tehnologija u razvoju mrežnih stranica". Na kolegiju shvatio koliko još mogu i trebam naučiti. To me motiviralo da pronađem posao u ovom polju.</Text>
            </div>
            </Wrapper>
        )
    }
}
