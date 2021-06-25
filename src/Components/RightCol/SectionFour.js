import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
//styles
import { StyledSection, StyledTextArea } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    opacity: 0;
    section {
        width: 100%;
        margin: 15px 0;
        color: ${(props) => props.theme.highlight};
        display: flex;
        flex-direction: column;
        .selections {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .item {
                height: 125px;
                width: 125px;
                border-radius: 25px;
                .true {
                    color: ${(props) => props.theme.secondary};
                    box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.15),
                        inset -3px -3px 5px rgba(0, 0, 0, 0.35);
                }
                .false {
                    background: rgba(27, 27, 27, 1);
                    color: ${(props) => props.theme.highlight};
                    box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15),
                        -3px -3px 5px rgba(0, 0, 0, 0.35);
                }
                label {
                    cursor: pointer;
                    height: 100%;
                    padding: 15px 0;
                    font-weight: 300;
                    border-radius: 25px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    font-size: 14px;
                    i {
                        font-size: calc(18px + 0.5vw);
                    }
                }
                input {
                    position: absolute;
                    z-index: 1;
                    right: 0;
                    opacity: 0;
                }
            }
        }
        .slider-container {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 100px;
            grid-gap: 20px;
            align-items: center;
            .slider {
                -webkit-appearance: none;
                height: 10px;
                border-radius: 3px;
                outline: none;
                background-color: rgba(0, 0, 0, 0.25);
                &::-webkit-slider-thumb {
                    position: relative;
                    appearance: none;
                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    background-color: ${(props) => props.theme.secondary};
                    border-radius: 50%;
                }
                &::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    background-color: ${(props) => props.theme.secondary};
                    border-radius: 50%;
                }
            }
            .value-box {
                height: 60px;
                width: 100px;
                background: rgba(27, 27, 27, 1);
                box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35);
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;

export default function SectionFour({ animate, formData, setFormData }) {
    let containerRef = useRef(null);
    useEffect(() => {
        if (animate === "toS4") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
            });
        } else if (animate === "toS5") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        } else if (animate === "backS4") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
            });
        } else if (animate === "backS3") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        }
    });
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCheckbox = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    return (
        <Container ref={(el) => (containerRef = el)}>
            <section className="extra-section">
                <h5>
                    Please use the section below to provide us with any extra information,
                    perferences you have.
                </h5>
                <h6>Example website design you like, existing branding of your company, etc.</h6>
                <StyledTextArea
                    name="designInfo"
                    value={formData.designInfo}
                    onChange={handleInput}
                />
            </section>
            <section className="services-section">
                <h5>Please select any addition MB services you'd like to add to the package.</h5>
                <h6>The cost of each will be broken down in your package summary.</h6>
                <div className="selections">
                    <div className="item">
                        <label htmlFor="logoDesign" className={formData.logoDesign.toString()}>
                            Logo Design
                            <i className="fas fa-dragon"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="logoDesign"
                            id="logoDesign"
                            onChange={handleCheckbox}
                            checked={formData.logoDesign}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="virtualTours" className={formData.virtualTours.toString()}>
                            Virtual Tours
                            <i className="far fa-eye"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="virtualTours"
                            id="virtualTours"
                            onChange={handleCheckbox}
                            checked={formData.virtualTours}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="photography" className={formData.photography.toString()}>
                            Photography
                            <i className="fas fa-camera-retro"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="photography"
                            id="photography"
                            onChange={handleCheckbox}
                            checked={formData.photography}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="copywriting" className={formData.copywriting.toString()}>
                            Copywriting
                            <i className="fas fa-spell-check"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="copywriting"
                            id="copywriting"
                            onChange={handleCheckbox}
                            checked={formData.copywriting}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="social" className={formData.social.toString()}>
                            Social Media
                            <i className="fab fa-instagram"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="social"
                            id="social"
                            onChange={handleCheckbox}
                            checked={formData.social}
                        />
                    </div>
                </div>
            </section>
            <section className="budget-section">
                <h5>Please use the slider to confirm your package budget.</h5>
                <div className="slider-container">
                    <input
                        type="range"
                        name="budget"
                        min={0}
                        max={3000}
                        step={50}
                        className="slider"
                        value={parseInt(formData.budget)}
                        onChange={handleInput}
                    />
                    <div className="value-box">
                        <h3>
                            {formData.budget == 3000 && `£${formData.budget}+`}
                            {formData.budget != 3000 && `£${formData.budget}`}
                        </h3>
                    </div>
                </div>
            </section>
        </Container>
    );
}
