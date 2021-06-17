import { createGlobalStyle } from "styled-components";

export const Theme = {};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    overscroll-behavior-y: none;
}
a, button{
    outline: none;
    text-decoration: none;
    cursor: pointer;
}
/* h1,h2,h3{
    font-family: "Potta One", cursive;
} */

`;
