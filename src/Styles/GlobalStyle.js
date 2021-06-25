import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    
    secondary: "#ee7b00",
    darkest: "#212529",
    lightGray: "#343a40",
    lightestGray: "#6c757d",
    highlight: "#f8f9fa",
    primary: "#222222",
    bg1: "#6c757d",
    bg2: "#343a40",
    bg3: "#212529",
    toggleBorder: "#f8f9fa",

};

export const lightTheme = {
    
    
    secondary: "#222222",
    darkest: "#212529",
    lightGray: "#343a40",
    lightestGray: "#6c757d",
    highlight: "#ee7b00",
    primary: "#f8f9fa",
    bg1: "#FAAE00",
    bg2: "#FAAE00",
    bg3: "#EF7E00",
};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.5s;
    
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
textarea, input, p{
    font-family: 'Open Sans', sans-serif;
    font-weight: 400
}
h6{
    font-weight: 300
}

`;
