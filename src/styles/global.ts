import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    color: ${({ theme }) => theme['base-text']};
    background: ${({ theme }) => theme['base-background']};
  }

  img {
    display: block;
    width: 100%;
  }
`
