import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0px 5px;
    height: 40px;
    width: 100%;
    .stage {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        color: rgba(109, 103, 110, 0.5);
        font-size: 16px;
    }
    .bar {
        position: relative;
        z-index: 2;
        height: 3px;
        width: 100%;
        background-color: rgba(109, 103, 110, 0.5);
    }
    .bar-filler {
        position: absolute;
        height: 100%;
    }
`;

export default function ProgressBar({ animate, section, setSection, formData, setFormData }) {
    let number1 = useRef(null);
    let number2 = useRef(null);
    let number3 = useRef(null);
    let number4 = useRef(null);
    let number5 = useRef(null);
    let filler1 = useRef(null);
    let filler2 = useRef(null);
    let filler3 = useRef(null);
    let filler4 = useRef(null);
    let filler5 = useRef(null);

    useEffect(() => {
        if (animate === 0) {
            gsap.to(filler1, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number1, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
        } else if (animate === "toS2") {
            gsap.to(filler1, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "white",
                ease: "power4.out",
            });
            gsap.to(number1, {
                duration: 1.5,
                color: "white",
                ease: "power4.out",
            });
            gsap.to(filler2, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number2, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
        } else if (animate === "toS3") {
            gsap.to(filler2, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "white",
                ease: "power4.out",
            });
            gsap.to(number2, {
                duration: 1.5,
                color: "white",
                ease: "power4.out",
            });
            gsap.to(filler3, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number3, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
        } else if (animate === "toS4") {
            gsap.to(filler3, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "white",
                ease: "power4.out",
            });
            gsap.to(number3, {
                duration: 1.5,
                color: "white",
                ease: "power4.out",
            });
            gsap.to(filler4, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number4, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
        } else if (animate === "toS5") {
            gsap.to(filler4, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "white",
                ease: "power4.out",
            });
            gsap.to(number4, {
                duration: 1.5,
                color: "white",
                ease: "power4.out",
            });
            gsap.to(filler5, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number5, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
        } else if (animate === "backS4") {
            gsap.to(filler4, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number4, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(filler5, {
                width: "0%",
                duration: 1.5,
                backgroundColor: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
            gsap.to(number5, {
                duration: 1.5,
                color: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
        } else if (animate === "backS3") {
            gsap.to(filler3, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number3, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(filler4, {
                width: "0%",
                duration: 1.5,
                backgroundColor: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
            gsap.to(number4, {
                duration: 1.5,
                color: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
        } else if (animate === "backS2") {
            gsap.to(filler2, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number2, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(filler3, {
                width: "0%",
                duration: 1.5,
                backgroundColor: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
            gsap.to(number3, {
                duration: 1.5,
                color: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
        } else if (animate === "backS1") {
            gsap.to(filler1, {
                width: "100%",
                duration: 1.5,
                backgroundColor: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(number1, {
                duration: 1.5,
                color: "#E75A0D",
                ease: "power4.out",
            });
            gsap.to(filler2, {
                width: "0%",
                duration: 1.5,
                backgroundColor: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
            gsap.to(number2, {
                duration: 1.5,
                color: "rgba(109, 103, 110, 0.5)",
                ease: "power4.out",
            });
        }
    }, [animate]);

    return (
        <Container>
            <div className="stage">
                <h5 ref={(el) => (number1 = el)}>01</h5>
                <div className="bar">
                    <div className="bar-filler" ref={(el) => (filler1 = el)}></div>
                </div>
            </div>
            <div className="stage">
                <h5 ref={(el) => (number2 = el)}>02</h5>
                <div className="bar">
                    <div className="bar-filler" ref={(el) => (filler2 = el)}></div>
                </div>
            </div>
            <div className="stage">
                <h5 ref={(el) => (number3 = el)}>03</h5>
                <div className="bar">
                    <div className="bar-filler" ref={(el) => (filler3 = el)}></div>
                </div>
            </div>
            <div className="stage">
                <h5 ref={(el) => (number4 = el)}>04</h5>
                <div className="bar">
                    <div className="bar-filler" ref={(el) => (filler4 = el)}></div>
                </div>
            </div>
            <div className="stage">
                <h5 ref={(el) => (number5 = el)}>05</h5>
                <div className="bar">
                    <div className="bar-filler" ref={(el) => (filler5 = el)}></div>
                </div>
            </div>
        </Container>
    );
}
