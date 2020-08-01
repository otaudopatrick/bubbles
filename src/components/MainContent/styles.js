import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height: 100vh;
  background-image:url(${(props)=>props.pathImage});
  background-size:cover;
  background-position:center;
  position:relative;
  overflow:hidden;
`;
