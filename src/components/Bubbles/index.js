import React from 'react';

import { Container, Bubble } from './styles';

function Bubbles() {
  const style = {
    width: '50px',
  }
  return (
    <Container>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} style={style} delay={'2s'} />
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} style={style} delay={'1s'} />
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} style={style} delay={'3s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} style={style} delay={'4.5s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} style={style} delay={'3s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} style={style} delay={'6s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} style={style} delay={'7s'}/>
    </Container>
  );
}

export default Bubbles;