import React from "react";
import styled from "styled-components";

const Container = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function SectionFour({ section, setSection, formData, setFormData }) {
    return <Container>{section}</Container>;
}
