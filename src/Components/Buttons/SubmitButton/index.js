import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";
import gsap from "gsap";

const Button = styled(StyledButton)`
    bottom: 4vh;
    right: 4vw;
    background-image: linear-gradient(to right, #ef7e00, #e75a0d, #e75a0d, #ef7e00);
    background-size: 200%;
    background-position: right;
    transition: 500ms background-position ease-in-out, transform 250ms;
    color: #222222;
    opacity: 0;
    :hover {
        background-position: left;
        transform: scale(1.05);
    }
`;

export default function SubmitButton({ section, setSection, animate, setAnimate }) {
    let buttonRef = useRef(null);
    useEffect(() => {
        if (animate === "toS5") {
            gsap.to(buttonRef, {
                opacity: 1,
                duration: 1,
                delay: 0.5,
            });
        } else if (animate === "backS4") {
            gsap.to(buttonRef, {
                opacity: 0,
                duration: 0.4,
            });
        }
    });
    const updateHandler = () => {
        setAnimate("toS6");
        setTimeout(() => {
            let temp = section + 1;
            setSection(temp);
        }, 700);
    };

    return (
        <Button ref={(el) => (buttonRef = el)} onClick={updateHandler}>
            Submit
        </Button>
    );
}
