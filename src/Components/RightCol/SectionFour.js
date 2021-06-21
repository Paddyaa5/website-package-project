import React from "react";
import styled from "styled-components";
//styles
import { StyledSection } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    section {
        width: 100%;
        margin: 10px 0;
        color: ${(props) => props.theme.light};
        display: flex;
        flex-direction: column;
        .slider {
            margin: 20px 0;
            width: 80%;
            align-self: center;
        }
    }
`;

export default function SectionFour({ section, setSection, formData, setFormData }) {
    return (
        <Container>
            <section className="budget-section">
                <h5>Please use the slider to confirm your package budget.</h5>
                <h6>This should be the based on all features, not just website design.</h6>
                <input type="range" className="slider" />
            </section>
            <section className="services-section">
                <h5>Please use the slider to confirm your package budget.</h5>
                <h6>This should be the based on all features, not just website design.</h6>
            </section>
            <section className="extra-section">
                <h5>Please use the slider to confirm your package budget.</h5>
                <h6>This should be the based on all features, not just website design.</h6>
            </section>
        </Container>
    );
}
