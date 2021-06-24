import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
//styles
import { StyledSection } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    opacity: 0;
    color: ${(props) => props.theme.light};
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    grid-template-rows: 100px 1fr 180px;
    gap: 10px 10px;
    grid-template-areas:
        "header header"
        "user website"
        "extra extra";
    .header {
        grid-area: header;
        display: flex;
        align-items: center;
    }
    .user-section {
        grid-area: user;
    }
    .website-section {
        grid-area: website;
    }
    .extra-section {
        grid-area: extra;
        .extra-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            height: 50%;
            .extra-add {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                i {
                    font-size: 40px;
                }
            }
        }
    }
    h2 {
        margin: 2vh 0;
        color: ${(props) => props.theme.darkestOrange};
    }
    p,
    li {
        margin: 1vh 0;
    }
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
            <div className="header">
                <h1>
                    Almost done.. Before you submit the form, please check the package details
                    below.
                </h1>
            </div>
            <div className="user-section">
                <h2>Contact Details</h2>
                <p>Name: {formData.fullname}</p>
                <p>Email: {formData.email}</p>
                <p>Contact: {formData.telephone}</p>
                <p>Company: {formData.description}</p>
            </div>
            <div className="website-section">
                <h2>Website Specification</h2>
                <ul>
                    {formData.need === "new" && (
                        <li>You require a new website to be designed and produced.</li>
                    )}
                    {formData.need === "upgrade" && (
                        <li>You require an existing website to be updated/re-designed.</li>
                    )}
                    {formData.purpose === "unsure" || formData.purpose === "" ? (
                        ""
                    ) : (
                        <li>
                            The main purpose of the site will be as an {formData.purpose} website.
                        </li>
                    )}
                    {formData.pages === "unsure" || formData.pages === "" ? (
                        ""
                    ) : (
                        <li>The website will require {formData.pages} pages.</li>
                    )}
                    {formData.time === "unsure" || formData.time === "" ? (
                        ""
                    ) : (
                        <li>
                            You are looking for the website to be completed within {formData.time}.
                        </li>
                    )}
                    <li>You budget for the full package is £{formData.budget}.</li>
                </ul>
            </div>
            <div className="extra-section">
                <h2>Extras</h2>
                <div className="extra-grid">
                    {formData.logoDesign === true && (
                        <div className="extra-add">
                            <h5>Logo Design</h5>
                            <i className="fas fa-dragon"></i>
                        </div>
                    )}
                    {formData.virtualTours === true && (
                        <div className="extra-add">
                            <h5>Virtual Tours</h5>
                            <i className="far fa-eye"></i>
                        </div>
                    )}
                    {formData.photography === true && (
                        <div className="extra-add">
                            <h5>Photography</h5>
                            <i className="fas fa-camera-retro"></i>
                        </div>
                    )}
                    {formData.copywriting === true && (
                        <div className="extra-add">
                            <h5>Copywriting</h5>
                            <i className="fas fa-spell-check"></i>
                        </div>
                    )}
                    {formData.social === true && (
                        <div className="extra-add">
                            <h5>Social Media</h5>
                            <i className="fab fa-instagram"></i>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}
