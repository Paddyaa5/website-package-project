import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//components
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

const Container = styled.section`
    position: absolute;
    opacity: 0;
    right: 0;
    width: 60vw;
    height: 100%;
    border-radius: 25px;
    background-color: ${(props) => props.theme.darkest};
    box-shadow: 5px 15px 35px 1px #000000;
`;

export default function RightColumn({ animate, section, setSection, formData, setFormData }) {
    let containerRef = useRef(null);

    useEffect(() => {
        if (animate === "backS1") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 1,
            });
        } else if (animate === "toS2") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 1,
            });
        } else if (animate === "toS5") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 1,
            });
        } else if (animate === "backS4") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 1,
            });
        }
    }, [animate]);

    return (
        <Container ref={(el) => (containerRef = el)}>
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
