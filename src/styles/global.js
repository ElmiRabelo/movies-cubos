import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background-color: ${colors.white};
    font-family: 'Lato', sans-serif;
    color: ${colors.dark};
  }
  p {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    
    font-family: 'Abel', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${colors.dark};
    &:visited {
      color: ${colors.dark};
    }
  }
`;
