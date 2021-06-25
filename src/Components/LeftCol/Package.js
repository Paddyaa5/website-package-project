import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
//images
import Demo from "../../Assets/DEMO.png";
import Demo2 from "../../Assets/DEMO2.png";

const Container = styled.div`
    position: absolute;
    right: 60px;
    z-index: 10;
    height: 60%;
    width: 65%;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    .image-section {
        display: flex;
        align-items: flex-end;
        height: 100%;
        width: 45%;
        img {
            height: 80%;
            width: 100%;
            object-fit: contain;
        }
    }
    .header-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 50%;
        color: ${(props) => props.theme.highlight};
        h1 {
            font-size: 40px;
            margin-bottom: 20px;
            color: ${(props) => props.theme.secondary};
        }
        h3 {
            font-size: 18px;
            margin-bottom: 30px;
        }
        h6 {
            color: ${(props) => props.theme.lightestGray};
            font-size: 14px;
        }
    }
`;

export default function Package({ animate, formData }) {
    let containerRef = useRef(null);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    useEffect(() => {
        if (animate === "toS6") {
            gsap.to(containerRef, {
                opacity: 1,
                delay: 1.25,
                duration: 0.75,
            });
        }
    });
    useEffect(() => {
        console.log(parseInt(formData.budget));
        if (formData.need === "upgrade" && parseInt(formData.budget) > 1500) {
            setName("Upgrade Pro");
            setDesc(
                "Along with re-designing your website, this package aims to bring your SEO & security upto speed, and help increase the traffic generated to your business."
            );
        } else if (formData.need === "upgrade") {
            setName("Refresh");
            setDesc(
                "Is your design out of sync or feel like your websites gone stale? This is the package for you."
            );
        } else if (formData.purpose === "e-commerce" && parseInt(formData.budget) > 1500) {
            setName("Advanced Store");
            setDesc(
                "Perfect for larger stores that require more functions to allow for a smooth customer journey, generating more sales and increased customer security."
            );
        } else if (formData.purpose === "e-commerce") {
            setName("Starter Store");
            setDesc("The go to service for launching a new online store!");
        } else if (parseInt(formData.budget) > 1500) {
            setName("Design Pro");
            setDesc(
                "The package is focused on making your company stand out from your competitors.  "
            );
        } else {
            setName("Brand Starter");
            setDesc("Built to guide you through setting up your companies online presence.");
        }
    });

    return (
        <Container ref={(el) => (containerRef = el)}>
            <div className="image-section">
                {formData.purpose === "e-commerce" && <img src={Demo} alt="website-mockup" />}
                {formData.purpose !== "e-commerce" && <img src={Demo2} alt="website-mockup" />}
            </div>
            <div className="header-section">
                <h1>{name} Package</h1>
                <h3>{desc}</h3>
                <h6>
                    Full package details have been sent to the email address you have provided and
                    forwarded to our development team. Look forward to working with you, Morgan
                    Branding.
                </h6>
            </div>
        </Container>
    );
}
