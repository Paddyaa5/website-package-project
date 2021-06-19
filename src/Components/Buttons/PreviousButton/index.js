import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";

const PrevButton = styled(StyledButton)`
    bottom: 5vw;
    right: 25vw;
`;

export default function index({ section, setSection, animate, setAnimate }) {
    const updateHandler = () => {
        if (section === 2) {
            setAnimate("backS1");
        } else if (section === 3) {
            setAnimate("backS2");
        } else if (section === 4) {
            setAnimate("backS3");
        } else if (section === 5) {
            setAnimate("backS4");
        }
        setTimeout(() => {
            let temp = section - 1;
            setSection(temp);
        }, 500);
    };

    return <PrevButton onClick={updateHandler}>Back</PrevButton>;
}
