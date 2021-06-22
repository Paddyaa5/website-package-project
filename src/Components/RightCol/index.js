import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//components
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

const Container = styled.section`
    position: absolute;
    opacity: 0;
    right: 0;
    width: 60vw;
    height: 100%;
    border-radius: 25px;
    background-color: ${(props) => props.theme.dark};
    box-shadow: 5px 15px 35px 1px #000000;
`;

export default function RightColumn({ animate, section, setSection, formData, setFormData }) {
    let containerRef = useRef(null);

    useEffect(() => {
        if (animate === "backS1") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        } else if (animate === "toS2") {
            gsap.to(containerRef, {
                opacity: 1,
                delay: 1,
                duration: 0.5,
            });
        } else if (animate === "toS6") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 1,
            });
        } else if (animate === "backS5") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 1,
                delay: 1,
            });
        }
    }, [animate]);

    return (
        <Container ref={(el) => (containerRef = el)}>
            {section === 2 && (
                <SectionTwo
                    animate={animate}
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {section === 3 && (
                <SectionThree
                    animate={animate}
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {section === 4 && (
                <SectionFour
                    animate={animate}
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {section === 5 && (
                <SectionFive
                    animate={animate}
                    section={section}
                    setSection={setSection}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </Container>
    );
}
