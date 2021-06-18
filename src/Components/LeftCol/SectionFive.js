import React from "react";
import styled from "styled-components";

const Container = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dotted black;
`;

export default function SectionFive({ section, setSection, formData, setFormData }) {
    return <Container>{section}</Container>;
}
