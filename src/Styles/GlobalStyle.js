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
    font-family: 'Open Sans', sans-serif;
}
a, button{
    outline: none;
    text-decoration: none;
    cursor: pointer;
}
h1,h2,h3{
    font-weight: 800
}
h4,h5{
    font-weight: 600
}
p{
    font-weight: 400
}
h6{
    font-weight: 300
}

`;
