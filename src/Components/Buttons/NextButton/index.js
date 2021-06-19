import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";

const NextButton = styled(StyledButton)`
    bottom: 5vw;
    right: 5vw;
`;

export default function index({ section, setSection, animate, setAnimate }) {
    const updateHandler = () => {
        if (section === 1) {
            setAnimate("toS2");
        } else if (section === 2) {
            setAnimate("toS3");
        } else if (section === 3) {
            setAnimate("toS4");
        } else if (section === 4) {
            setAnimate("toS5");
        }
        setTimeout(() => {
            let temp = section + 1;
            setSection(temp);
        }, 500);
    };

    return <NextButton onClick={updateHandler}>Next</NextButton>;
}
