import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-size: 87.5%; */
  }

  body {
    background: #FAFAFA;
    font-size: 2.4rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;

    -webkit-font-smoothing: antialiased;


  }

  body {

  }

  @media (max-width: 600px) {
    * {
    font-size: 87.5%;
    }
  }

`
