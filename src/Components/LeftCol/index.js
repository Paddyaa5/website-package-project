import React from "react";
import styled from "styled-components";
//components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

const Container = styled.section`
    width: 100%;
    height: 100%;
    border-radius: 25px;
`;

export default function index({ section, setSection, formData, setFormData }) {
    return (
        <Container>
            {section === 1 && (
                <SectionOne
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
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
            {section === 5 && (
                <SectionFive
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </Container>
    );
}
