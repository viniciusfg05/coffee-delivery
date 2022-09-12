import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-size: 87.5%; */
  }

  body {
    background: ${(props) => props.theme.background};
    font-size: 2.4rem;
    /* color: ${(props) => props.theme['base-text']}; */
  }

  /* :focus {
    outline: 0;
    box-shadow: 0 0 0 2px;

  } */

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;

    -webkit-font-smoothing: antialiased;


  }

  body {

  }

`
