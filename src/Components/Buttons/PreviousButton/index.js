import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";

const PrevButton = styled(StyledButton)`
    bottom: 5vw;
    right: 25vw;
`;

export default function index({ section }) {
    return <PrevButton>Back</PrevButton>;
}
