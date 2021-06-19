import React, { useState, useEffect } from "react";
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
    const [animate, setAnimate] = useState(0);
    const [section, setSection] = useState(0);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setSection(1);
        }, 50);
    }, []);

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <AppContainer>
                <LeftColumn
                    animate={animate}
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                ></LeftColumn>
                <RightColumn
                    animate={animate}
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                ></RightColumn>
                <Buttons
                    section={section}
                    setSection={setSection}
                    animate={animate}
                    setAnimate={setAnimate}
                />
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
