import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//components
import ProgressBar from "./ProgressBar";
import StartButton from "../Buttons/StartButton";
import ProgressNumber from "./ProgressNumber";
import ProgressText from "./ProgressText";
//images
import logo from "../../Assets/MB_LOGO.png";

const Container = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: ${(props) => props.theme.dark};
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 5px 15px 35px 1px #000000;
    a{
        width:75px;
    }
    .logo {
        height: 75px;
        width: 75px;
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.8s;
         &:hover {
           filter: brightness(120%);
           transform: scale(1.3)
           }
          
         
    }
`;

export default function LeftColumn({
    animate,
    setAnimate,
    section,
    setSection,
    formData,
    setFormData,
}) {
    let containerRef = useRef(null);

    useEffect(() => {
        if (animate === "backS1") {
            gsap.to(containerRef, {
                width: "100%",
                padding: "40px 60px",
                duration: 1,
                ease: "circ.inOut",
                delay: 0.5,
            });
        } else if (animate === "toS2") {
            gsap.to(containerRef, {
                width: "30vw",
                padding: "40px 20px",
                duration: 1,
                ease: "circ.inOut",
            });
        } else if (animate === "toS6") {
            gsap.to(containerRef, {
                width: "100%",
                padding: "40px 60px",
                duration: 1,
                delay: 0.5,
            });
        } else if (animate === "backS5") {
            gsap.to(containerRef, {
                width: "30vw",
                padding: "40px 20px",
                duration: 1,
            });
        }
    }, [animate]);

    return (
        <Container ref={(el) => (containerRef = el)}>
            <a href="https://www.morganbranding.co.uk/" target="_blank">
            <img src={logo} alt="Morgan-Branding-Logo" className="logo" /></a>
            <ProgressNumber animate={animate} section={section} />
            <ProgressText animate={animate} section={section} />
            <ProgressBar
                animate={animate}
                section={section}
                setSection={setSection}
                formData={formData}
                setFormData={setFormData}
            />
            <StartButton
                animate={animate}
                setAnimate={setAnimate}
                section={section}
                setSection={setSection}
            />
        </Container>
    );
}
