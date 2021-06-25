import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./Styles/GlobalStyle";
//components
import LeftColumn from "./Components/LeftCol";
import RightColumn from "./Components/RightCol";
import Buttons from "./Components/Buttons";

const AppContainer = styled.div`
    position: relative;
    min-height: 600px;
    height: 100vh;
    width: 100vw;
    padding: 3vw;
    background-image: linear-gradient(to bottom right, #6c757d, #343a40, #212529);
    .inner-container {
        position: relative;
        height: 100%;
        width: 100%;
    }
`;

const App = () => {
    const [theme, setTheme] = useState("dark");
    const [animate, setAnimate] = useState(0);
    const [section, setSection] = useState(1);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        telephone: "",
        owner: "Yes",
        description: "",
        need: "",
        purpose: "e-commerce",
        pages: "",
        time: "",
        designInfo: "",
        logoDesign: false,
        virtualTours: false,
        photography: false,
        copywriting: false,
        social: false,
        budget: 1500,
    });

    const themeToggler = (e) => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }

        // theme === 'dark' ? setTheme('light') : setTheme ('dark')
        console.log(theme);
    };

    const handleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSection(1);
    //     }, 50);
    // }, []);

    // useEffect(() => {},[theme])
    console.log("hi");

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <AppContainer>
                <div className="inner-container">
                    <LeftColumn
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                        formData={formData}
                        setFormData={setFormData}
                        handleTheme={handleTheme}
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
                </div>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
