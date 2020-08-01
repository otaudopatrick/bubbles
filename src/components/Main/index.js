import React from 'react';
import Button from '../Button';

import { Container,Small,Title,Br} from './styles';

function Main() {
  return (
    <Container>
      <Small>Welcome to our</Small>
      <Title>World's <Br/>Creative Studio</Title>
      <Button name={'Take a tour'}/>
    </Container>
  );
}

export default Main;