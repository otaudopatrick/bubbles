import React from 'react';

import { Container, Bubble } from './styles';

function Bubbles() {
  return (
    <Container>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} width={'25px'} delay={'2s'} />
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} width={'50px'} delay={'1s'} />
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} width={'25px'} delay={'3s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} width={'50px'} delay={'4.5s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} width={'50px'} delay={'3s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} width={'20px'} delay={'6s'}/>
      <Bubble src={process.env.PUBLIC_URL + 'img/bubble.png'} width={'35px'} delay={'7s'}/>
    </Container>
  );
}

export default Bubbles;