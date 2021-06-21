import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";

const NextButton = styled(StyledButton)`
    bottom: 45px;
    right: 1vw;
    background-image: linear-gradient(to right, #EF7E00, #E75A0D, #E75A0D, #EF7E00);
    background-size: 200%;
    background-position: right;
    transition: 500ms background-position ease-in-out, transform 250ms;
    color: #222222;

    :hover {
    background-position: left;
    transform: scale(1.05)
    }
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
