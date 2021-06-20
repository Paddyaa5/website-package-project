import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

const Container = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: ${(props) => props.theme.dark};
`;

export default function LeftColumn({ animate, section, setSection, formData, setFormData }) {
    let containerRef = useRef(null);

    useEffect(() => {
        if (animate === "backS1") {
            gsap.to(containerRef, {
                width: "100%",
                duration: 1,
            });
        } else if (animate === "toS2") {
            gsap.to(containerRef, {
                width: "35%",
                duration: 1,
            });
        } else if (animate === "toS5") {
            gsap.to(containerRef, {
                width: "100%",
                duration: 1,
            });
        } else if (animate === "backS4") {
            gsap.to(containerRef, {
                width: "30vw",
                duration: 1,
            });
        }
    }, [animate]);

    return (
        <Container ref={(el) => (containerRef = el)}>
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
