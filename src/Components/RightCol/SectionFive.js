import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
//styles
import { StyledSection } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    opacity: 0;
    color: white;
`;

export default function SectionFive({ animate, formData }) {
    let containerRef = useRef(null);
    useEffect(() => {
        if (animate === "toS5") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
            });
        } else if (animate === "toS6") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        } else if (animate === "backS5") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
            });
        } else if (animate === "backS4") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        }
    });

    return (
        <Container ref={(el) => (containerRef = el)}>
            <h3>Before you submit the form, please check the details below..</h3>
            <div>
                <h2>Contact Details:</h2>
                <p>Name: {formData.fullname}</p>
                <p>Email: {formData.email}</p>
                <p>Contact: {formData.telephone}</p>
            </div>
            <div>
                <h2>Website Specification:</h2>
                <p>{formData.need === "new" ? "A new website" : "Upgrade on existing website"}</p>
                <p>
                    A {formData.purpose} website,{" "}
                    {formData.pages === "unsure"
                        ? "unsure on how many webpages"
                        : `with ${formData.pages} webpages`}
                </p>
            </div>
        </Container>
    );
}
