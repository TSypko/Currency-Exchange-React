import { createGlobalStyle } from "styled-components"
import background from "./background.jpg";

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    background: url(${background});
 
  }
  *, ::after, ::before {
        box-sizing: inherit;
  }

  body {

    background-size: cover;
    background: hsla(200, 100%, 20%, 0.5);
    font-family: "Roboto Condensed", sans-serif;
    color: #222;
    font-size: 16px;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}`