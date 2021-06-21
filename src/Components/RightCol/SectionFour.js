import React, { useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
//styles
import { StyledSection, NeomorphBox } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    section {
        width: 100%;
        margin: 15px 0;
        color: ${(props) => props.theme.light};
        display: flex;
        flex-direction: column;
        .slider {
            margin: 20px 0;
            width: 80%;
            align-self: center;
        }
        .text-area {
            margin-top: 10px;
            height: 35px;
            resize: none;
        }
        .selections {
            display: flex;
            justify-content: space-evenly;
            margin-top: 20px;
            .item {
                height: 80px;
                width: 120px;
                label {
                    height: 100%;
                    width: 100%;
                    box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15),
                        -3px -3px 5px rgba(0, 0, 0, 0.35);
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 10px;
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
    });

    useEffect(() => {
        console.log(data);
    }, [data]);
    const handleCheckbox = (e) => {
        e.target.checked
            ? gsap.to(`.${e.target.name}`, {
                  boxShadow:
                      "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
              })
            : gsap.to(`.${e.target.name}`, {
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
                <textarea type="text" className="text-area" />
            </section>
            <section className="services-section">
                <h5>Please select any addition MB services you'd like to add to the package.</h5>
                <h6>The cost of each will be broken down in your package summary.</h6>
                <div className="selections">
                    <div className="item">
                        <label htmlFor="logoDesign" className="logoDesign">
                            Logo Design
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
                        </label>
                        <input
                            type="checkbox"
                            name="copywriting"
                            id="copywriting"
                            onChange={handleCheckbox}
                        />
                    </div>
                </div>
            </section>
            <section className="budget-section">
                <h5>Please use the slider to confirm your package budget.</h5>
                <h6>This should be the based on all features, not just website design.</h6>
                <input type="range" className="slider" />
            </section>
        </Container>
    );
}
