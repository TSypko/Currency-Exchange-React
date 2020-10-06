import { createGlobalStyle } from "styled-components"
import background from "./background.jpg";

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    background: url(${background});
    background-size: cover;
 
  }
  *, ::after, ::before {
        box-sizing: inherit;
  }

  body {
    background: hsla(195, 50%, 90%, 0.4);
    font-family: "Roboto Condensed", sans-serif;
    color: #222;
    font-size: 16px;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}`