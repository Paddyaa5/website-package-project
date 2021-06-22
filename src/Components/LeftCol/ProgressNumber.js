import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.h1`
    display: flex;
    overflow: hidden;
    color: ${(props) => props.theme.darkestOrange};
    font-size: calc(30px + 2vw);
    opacity: 0;
`;

export default function ProgressNumber({ animate, section }) {
    let containerRef = useRef(null);
    let numberRef = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline();
        if (animate === 0) {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
                delay: 0.25,
            });
        } else if (animate === "toS2") {
            tl.to(numberRef, { y: "-100%", duration: 0.5, delay: 1, ease: "circ.inOut" })
                .set(numberRef, { y: "100%" })
                .to(numberRef, { y: 0, duration: 0.5, ease: "circ.inOut" });
        } else {
            tl.to(numberRef, { y: "-100%", duration: 0.5, ease: "circ.inOut" })
                .set(numberRef, { y: "100%" })
                .to(numberRef, { y: 0, duration: 0.5, ease: "circ.inOut" });
        }
    }, [animate]);

    return (
        <Container ref={(el) => (containerRef = el)}>
            <span>0</span>
            <span ref={(el) => (numberRef = el)}>{section}</span>
        </Container>
    );
}
