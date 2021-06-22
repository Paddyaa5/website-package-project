import React, { useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
//styles
import { StyledSection, StyledTextArea } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    section {
        width: 100%;
        margin: 15px 0;
        color: ${(props) => props.theme.light};
        display: flex;
        flex-direction: column;
        .selections {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .item {
                height: 100px;
                width: 100px;
                border-radius: 25px;
                label {
                    height: 100%;
                    padding: 15px 0;
                    font-weight: 300;
                    border-radius: 25px;
                    width: 100%;
                    box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15),
                        -3px -3px 5px rgba(0, 0, 0, 0.35);
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    i {
                        font-size: 22px;
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
                    background-color: ${(props) => props.theme.darkestOrange};
                    border-radius: 50%;
                }
                &::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    background-color: ${(props) => props.theme.darkestOrange};
                    border-radius: 50%;
                }
            }
            .value-box {
                height: 60px;
                width: 100px;
                box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35);
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;

export default function SectionFour({ formData, setFormData }) {
    const [sliderValue, setSliderValue] = useState(5000);

    const handleText = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSlider = (e) => {
        setSliderValue(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCheckbox = (e) => {
        e.target.checked
            ? gsap.to(`.${e.target.name}`, {
                  color: "#EE7B00",
                  boxShadow:
                      "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
              })
            : gsap.to(`.${e.target.name}`, {
                  color: "white",
                  boxShadow:
                      "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
              });
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <Container>
            <section className="extra-section">
                <h5>
                    Please use the section below to provide us with any extra information,
                    perferences you have.
                </h5>
                <h6>Example website design you like, existing branding of your company, etc.</h6>
                <StyledTextArea name="design-info" onChange={handleText} />
            </section>
            <section className="services-section">
                <h5>Please select any addition MB services you'd like to add to the package.</h5>
                <h6>The cost of each will be broken down in your package summary.</h6>
                <div className="selections">
                    <div className="item">
                        <label htmlFor="logoDesign" className="logoDesign">
                            Logo Design
                            <i className="fas fa-dragon"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="logoDesign"
                            id="logoDesign"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="virtualTours" className="virtualTours">
                            Virtual Tours
                            <i className="far fa-eye"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="virtualTours"
                            id="virtualTours"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="photography" className="photography">
                            Photography
                            <i className="fas fa-camera-retro"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="photography"
                            id="photography"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="copywriting" className="copywriting">
                            Copywriting
                            <i className="fas fa-spell-check"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="copywriting"
                            id="copywriting"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="social" className="social">
                            Social Media
                            <i className="fab fa-instagram"></i>
                        </label>
                        <input
                            type="checkbox"
                            name="social"
                            id="social"
                            onChange={handleCheckbox}
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
                        max={10000}
                        step={10}
                        className="slider"
                        value={sliderValue}
                        onChange={handleSlider}
                    />
                    <div className="value-box">
                        <h3>£{sliderValue}</h3>
                    </div>
                </div>
            </section>
        </Container>
    );
}
