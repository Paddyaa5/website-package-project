import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import ProgressBar from "./ProgressBar";
import StartButton from "../Buttons/StartButton"

const Container = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: ${(props) => props.theme.dark};
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export default function LeftColumn({ animate, section, setSection, formData, setFormData }) {
    let containerRef = useRef(null);

    useEffect(() => {
        if (animate === "backS1") {
            gsap.to(containerRef, {
                width: "100%",
                padding: "40px 60px",
                duration: 1,
            });
        } else if (animate === "toS2") {
            gsap.to(containerRef, {
                width: "30vw",
                padding: "40px 20px",
                duration: 1,
            });
        } else if (animate === "toS5") {
            gsap.to(containerRef, {
                width: "100%",
                padding: "40px 60px",
                duration: 1,
            });
        } else if (animate === "backS4") {
            gsap.to(containerRef, {
                width: "30vw",
                padding: "40px 20px",
                duration: 1,
            });
        }
    }, [animate]);

    return (
        <Container ref={(el) => (containerRef = el)}>
            <ProgressBar
                animate={animate}
                section={section}
                setSection={setSection}
                formData={formData}
                setFormData={setFormData}
            />
            <StartButton
                animate={animate}
                section={section}
                setSection={setSection}
            />
        </Container>
    );
}
