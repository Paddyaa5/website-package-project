import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./Styles/GlobalStyle";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import SectionFive from "./Components/SectionFive";

const AppContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    padding: 5vw;
`;
const NextButton = styled.button`
    position: absolute;
    bottom: 5vw;
    right: 5vw;
    padding: 10px 30px;
`;
const PrevButton = styled.button`
    position: absolute;
    bottom: 5vw;
    right: 25vw;
    padding: 10px 30px;
`;

const App = () => {
    const [section, setSection] = useState(1);
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
                {section === 1 && (
                    <>
                        <SectionOne
                            section={section}
                            setSection={setSection}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <NextButton onClick={nextSection}>Next</NextButton>
                    </>
                )}
                {section === 2 && (
                    <>
                        <SectionTwo
                            section={section}
                            setSection={setSection}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <PrevButton onClick={prevSection}>Previous</PrevButton>
                        <NextButton onClick={nextSection}>Next</NextButton>
                    </>
                )}
                {section === 3 && (
                    <>
                        <SectionThree
                            section={section}
                            setSection={setSection}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <PrevButton onClick={prevSection}>Previous</PrevButton>
                        <NextButton onClick={nextSection}>Next</NextButton>
                    </>
                )}
                {section === 4 && (
                    <>
                        <SectionFour
                            section={section}
                            setSection={setSection}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <PrevButton onClick={prevSection}>Previous</PrevButton>
                        <NextButton onClick={nextSection}>Next</NextButton>
                    </>
                )}
                {section === 5 && (
                    <>
                        <SectionFive
                            section={section}
                            setSection={setSection}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <PrevButton onClick={prevSection}>Previous</PrevButton>
                    </>
                )}
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
