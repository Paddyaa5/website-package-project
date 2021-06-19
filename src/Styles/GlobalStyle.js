import { createGlobalStyle } from "styled-components";

export const Theme = {
    orange: "#FBBF00",
    lightOrange: "#FFCA00",
    darkOrange: "#F49D00",
    darkest: "#212529",
    lightGray: "#343a40",
    lightestGray: "#6c757d",
    light: "#f8f9fa",
    dark: "#222222",
};

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
