import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.primary};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`
