import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/CommonStyles";
import gsap from "gsap";

const Button = styled(StyledButton)` 
    bottom: 100px;
    right: 65px;
    background-image: linear-gradient(to right, #EF7E00, #E75A0D, #E75A0D, #EF7E00);
    background-size: 200%;
    background-position: right;
    transition: 500ms background-position ease-in-out, transform 250ms;
    color: #222222;
    opacity: 0;
    :hover {
    background-position: left;
    transform: scale(1.05)
    }
`;

export default function StartButton ({ section, setSection, animate, setAnimate }) {
    let buttonRef = useRef(null)
    useEffect(() => {
         if (animate === 0) {
             gsap.to(buttonRef, {
                 opacity: 1,
                 duration: 0.5,
                 delay: 0.4
             })

         } else if (animate === "toS2") {
            gsap.to(buttonRef, {
                opacity: 0,
                duration: 0.5,
                delay: 0.25
            })
        } else if (animate === "backS1") {
            gsap.to(buttonRef, {
                opacity: 1,
                duration: 0.5,
                delay: 0.4
            })
        }


    })
    const updateHandler = () => {
        setAnimate("toS2") 
        setTimeout(() => {
            let temp = section + 1;
            setSection(temp);
        }, 900);
    };

    return <Button ref={el => buttonRef = el} onClick={updateHandler}>Start</Button>;
}