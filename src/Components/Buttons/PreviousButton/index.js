import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";

const PrevButton = styled(StyledButton)`
    bottom: 6vw;
    right: 50vw;
    background-image: linear-gradient(to right, #212529, #343a40, #343a40, #212529);
    background-size: 200%;
    background-position: left;
    transition: 500ms background-position ease-in-out;
    color: #f8f9fa;
    :hover {
    background-position: right;
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
