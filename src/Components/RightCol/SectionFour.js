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
    }
`;

export default function SectionFour({ section, setSection, formData, setFormData }) {
    const [data, setData] = useState({
        logoDesign: false,
        virtualTours: false,
        photography: false,
        copywriting: false,
        socialMedia: false,
    });

    useEffect(() => {
        console.log(data);
    }, [data]);
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
        setData({ ...data, [e.target.name]: e.target.checked });
    };

    return (
        <Container>
            <section className="extra-section">
                <h5>
                    Please use the section below to provide us with any extra information,
                    perferences you have.
                </h5>
                <h6>Example website design you like, existing branding of your company, etc.</h6>
                <StyledTextArea />
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
                <div className="slider">
                    <label></label>
                </div>
                <input type="range" name="budget" min="500" max="5000" />
                <output for="budget" onforminput="value = budget.valueAsNumber" />
            </section>
        </Container>
    );
}
