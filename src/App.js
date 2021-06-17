import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./Styles/GlobalStyle";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <h1>WEBSITE PACKAGE PROJECT</h1>
        </ThemeProvider>
    );
};

export default App;
