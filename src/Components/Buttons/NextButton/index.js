import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";

const NextButton = styled(StyledButton)`
    bottom: 6vw;
    right: 6vw;
    background-image: linear-gradient(to right, #FBBF00, #F49D00, #F49D00, #FBBF00);
    background-size: 200%;
    background-position: right;
    transition: 500ms background-position ease-in-out;
    color: #464c51;

    :hover {
    background-position: left;
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
