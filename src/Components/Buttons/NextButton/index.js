import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";

const NextButton = styled(StyledButton)`
    bottom: 5vw;
    right: 5vw;
`;

export default function index() {
    return <NextButton>Next</NextButton>;
}
