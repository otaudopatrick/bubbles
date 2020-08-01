import React from 'react';
import { Container } from './styles';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Bubbles from '../Bubbles';

function MainContent() {
  return (
    <Container pathImage = {process.env.PUBLIC_URL + 'img/background.png'}>
      <Header/>
      <Main/>
      <Sidebar/>
      <Bubbles/>
    </Container>
  );
}

export default MainContent;