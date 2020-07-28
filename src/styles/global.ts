import { createGlobalStyle } from 'styled-components';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FCFCFD;
    color: #170C3A;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
  }

  border-style, input, button {
    font-family: 'Source Sans Pro', serif;
    font-size: 20px;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 26px;
  }

  h5 {
    font-size: 24px;
  }
`;
