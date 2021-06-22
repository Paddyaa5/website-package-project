import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.div`
    display: flex;
    overflow: hidden;
    height: 250px;
    width: 100%;
    opacity: 0;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    h1 {
        display: flex;
        width: 100%;
        align-items: center;
        overflow: hidden;
        margin: 0;
        color: ${(props) => props.theme.light};
        font-size: calc(20px + 2vw);
    }
`;

export default function ProgressText({ animate, section }) {
    let containerRef = useRef(null);
    const text = [
        [""],
        ["Lets", "Get", "Started"],
        ["Tell us", "a little bit", "about you"],
        ["What website", "are you", "looking for?"],
        ["Lets work", "on the finer", "details!"],
        ["Your", "Package", "Summary"],
    ];
    const [activeText, setActiveText] = useState(text[section]);

    useEffect(() => {
        setActiveText(text[section]);
    }, [section]);

    useEffect(() => {
        let tl = gsap.timeline();
        if (animate === 0) {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
                delay: 0.25,
            });
        } else {
            tl.to(".hide", { y: "-100%", duration: 0.5, stagger: 0.05 })
                .set(".hide", { y: "100%" })
                .to(".hide", { y: 0, duration: 0.5, stagger: 0.1 });
        }
    }, [animate]);

    return (
        <Container ref={(el) => (containerRef = el)}>
            {activeText.map((text, id) => (
                <h1 key={id}>
                    <span className="hide">{text}</span>
                </h1>
            ))}
        </Container>
    );
}
