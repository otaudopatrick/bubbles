import React from 'react';
import { Container } from './styles';
import Header from '../Header';
function MainContent() {
  return (
    <Container pathImage = {process.env.PUBLIC_URL + 'img/background.png'}>
      <Header/>
    </Container>
  );
}

export default MainContent;