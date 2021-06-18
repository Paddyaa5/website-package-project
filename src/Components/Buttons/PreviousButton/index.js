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

export default function index({ section }) {
    return <PrevButton>Back</PrevButton>;
}
