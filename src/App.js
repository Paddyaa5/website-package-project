import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./Styles/GlobalStyle";
//components
import LeftColumn from "./Components/LeftCol";
import RightColumn from "./Components/RightCol";
import Buttons from "./Components/Buttons";

const AppContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    padding: 5vw;
`;

const App = () => {
    const [section, setSection] = useState(5);
    const [formData, setFormData] = useState({});

    const nextSection = () => {
        let temp = section + 1;
        setSection(temp);
    };
    const prevSection = () => {
        let temp = section - 1;
        setSection(temp);
    };

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <AppContainer>
                <LeftColumn
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                ></LeftColumn>
                <RightColumn
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                ></RightColumn>
                <Buttons section={section} />
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
