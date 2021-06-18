import React from "react";
import styled from "styled-components";
//components
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

const Container = styled.section`
    display: none;
    width: 100%;
    height: 100%;
`;

export default function index({ section, setSection, formData, setFormData }) {
    return (
        <Container>
            {section === 2 && (
                <SectionTwo
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {section === 3 && (
                <SectionThree
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {section === 4 && (
                <SectionFour
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </Container>
    );
}
