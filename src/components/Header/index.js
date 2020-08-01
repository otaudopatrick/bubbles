import React from 'react';
import Button from '../Button';
import { Container, Logo } from './styles';

function Header() {
  const imageStyle = {
    width: '100px',
    cursor: 'pointer',
  }
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + '/img/logo.png'} style={imageStyle} />
      <Button
        type={"button"}
        name={'Sign up'}
      />
    </Container>
  );
}

export default Header;