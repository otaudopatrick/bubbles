import React from 'react';

import { ButtonStyle } from './styles';

function Button(prosp) {
  return (
  <ButtonStyle>{prosp.name}</ButtonStyle>
  );
}

export default Button;