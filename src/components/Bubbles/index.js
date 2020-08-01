import React from 'react';

import { Container,Bubble } from './styles';

function Bubbles() {
  const style = {
    width:'50px',
  }
  return (
    <Container>
      <Bubble src = {process.env.PUBLIC_URL + 'img/bubble.png'} style={style}/>
      <Bubble src = {process.env.PUBLIC_URL + 'img/bubble.png'} style={style}/>
      <Bubble src = {process.env.PUBLIC_URL + 'img/bubble.png'} style={style}/>
      <Bubble src = {process.env.PUBLIC_URL + 'img/bubble.png'} style={style}/>
      <Bubble src = {process.env.PUBLIC_URL + 'img/bubble.png'} style={style}/>
      <Bubble src = {process.env.PUBLIC_URL + 'img/bubble.png'} style={style}/>
      <Bubble src = {process.env.PUBLIC_URL + 'img/bubble.png'} style={style}/>
    </Container>
  );
}

export default Bubbles;