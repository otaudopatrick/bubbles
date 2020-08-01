import styled from 'styled-components';
import { keyframes } from 'styled-components'

export const Container = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-around;
  position:absolute;
  bottom: -70px;
`;

const bubbleAnimation = keyframes`
  0%{
    transform:translateY(0);
    opacity:0;
  }50%{
    opacity:1;
  }70%{
    opacity:1;
  }100%{
    transform:translateY(-80vh);
    opacity:0;
  }
  
`;
export const Bubble = styled.img` 
  animation-name: ${bubbleAnimation};
  animation-duration: 7s;
  animation-timing-function:linear;
  animation-delay:${props=>props.delay};
  animation-iteration-count: infinite;
`;

