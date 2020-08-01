import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family:sans-serif;
    box-sizing:border-box;
  }
  ol,ul,li{
    list-style:none;
  }
`;

export default GlobalStyles;
