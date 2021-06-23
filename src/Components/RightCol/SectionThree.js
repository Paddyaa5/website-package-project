import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledSection } from "../../Styles/CommonStyles";
import gsap from "gsap";

const Container = styled(StyledSection)`
    opacity: 0;
    section {
        color: ${(props) => props.theme.light};
        display: flex;
        flex-direction: column;
        select {
            width: 100%;
            background-color: ${(props) => props.theme.darkest};
            color: ${(props) => props.theme.darkestOrange};
            height: 40px;
            outline: none;
            border-radius: 8px;
            margin: 4px 0;
            padding: 12px 10px;
        }
        .selections {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .radio {
                height: 100px;
                width: 100px;
                border-radius: 25px;
                label {
                    height: 100%;
                    padding: 15px 0;
                    font-weight: 600;
                    border-radius: 25px;
                    width: 100%;
                    box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15),
                        -3px -3px 5px rgba(0, 0, 0, 0.35);
                    width: 100%;
                    font-size: 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;
                    cursor: pointer;
                }
                input {
                    position: absolute;
                    display: none;
                    z-index: 1;
                    opacity: 0;
                }
            }
        }

        .lookingForSelection {
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width:100%;
              /* box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35);   */
            border-radius: 50px;
             
            label {
                display: flex;
                justify-content: space-around;
                padding: 10px;
                height: 6vh;
                border-radius: 35px;
                cursor: pointer;
                align-items: center;
                width: 45%;
                box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15),
                        -3px -3px 5px rgba(0, 0, 0, 0.35);
            }

            input[type="radio"] {
                display: none;
            }

            input[type="radio"]:checked {
                box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35);
                color: #ee7b00;
            }
        }
    }
`;

export default function SectionThree({ animate, formData, setFormData }) {
    let containerRef = useRef(null);
    useEffect(() => {
        if (animate === "toS3") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
            });
        } else if (animate === "toS4") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        } else if (animate === "backS3") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
            });
        } else if (animate === "backS2") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        }
    });
    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCheckbox = (e) => {
        if (e.target.value === "option1") {
            gsap.to("#option1", {
                color: "#EE7B00",
                boxShadow:
                    "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            gsap.to(["#option2", "#option3", "#option4", "#option5"], {
                color: "white",
                boxShadow:
                    "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
        } else if (e.target.value === "option2") {
            gsap.to("#option2", {
                color: "#EE7B00",
                boxShadow:
                    "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            gsap.to(["#option1", "#option3", "#option4", "#option5"], {
                color: "white",
                boxShadow:
                    "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
        } else if (e.target.value === "option3") {
            gsap.to("#option3", {
                color: "#EE7B00",
                boxShadow:
                    "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            gsap.to(["#option1", "#option2", "#option4", "#option5"], {
                color: "white",
                boxShadow:
                    "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
        } else if (e.target.value === "option4") {
            gsap.to("#option4", {
                color: "#EE7B00",
                boxShadow:
                    "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            gsap.to(["#option1", "#option2", "#option3", "#option5"], {
                color: "white",
                boxShadow:
                    "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
        } else if (e.target.value === "option5") {
            gsap.to("#option5", {
                color: "#EE7B00",
                boxShadow:
                    "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            gsap.to(["#option1", "#option2", "#option3", "#option4"], {
                color: "white",
                boxShadow:
                    "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOption = (e) => {
        if (e.target.value === "new") {
            gsap.to("#new", {
                color: "#EE7B00",
                boxShadow:
                    "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            gsap.to("#upgrade", {
                color: "white",
                boxShadow:
                    "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
        } else if (e.target.value === "upgrade") {
            gsap.to("#upgrade", {
                color: "#EE7B00",
                boxShadow:
                    "inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            gsap.to("#new", {
                color: "white",
                boxShadow:
                    "3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35)",
            });
            
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        console.log(formData);
    });
    return (
        <Container ref={(el) => (containerRef = el)}>
            <section className="looking-for">
                <h5>Are you looking to....</h5>
                <div className="lookingForSelection">
                <label id="new">Launch a new website
                    <input type="radio" name="need" value="new" onChange={handleOption} />
                    </label>
                    <label id="upgrade"> Upgrade an existing website
                    <input type="radio" name="need" value="upgrade" onChange={handleOption} />
                    </label>
                </div>
            </section>
            <section className="website-use">
                <h5>What will be the main purpose of your website?</h5>
                <select name="purpose" onChange={handleInput}>
                    <option value="e-commerce">E-Commerce</option>
                    <option value="advertising">Advertising your Company/Services</option>
                    <option value="landing">Landing Pages</option>
                    <option value="blog">Blog</option>
                    <option value="notSure">Still Unsure (we can help you with that)</option>
                </select>
            </section>
            <section className="services-section">
                <h5>Ideally, how many pages would you like your site to have?</h5>
                <h6>Example webpages are; Homepage, About, Services, Contact, etc.</h6>
                <div className="selections">
                    <div className="radio">
                        <label id="option1">
                            <input
                                type="radio"
                                value="option1"
                                name="pages"
                                onChange={handleCheckbox}
                            />
                            0-3
                        </label>
                    </div>
                    <div className="radio">
                        <label id="option2">
                            <input
                                type="radio"
                                value="option2"
                                name="pages"
                                onChange={handleCheckbox}
                            />
                            3-5
                        </label>
                    </div>
                    <div className="radio">
                        <label id="option3">
                            <input
                                type="radio"
                                value="option3"
                                name="pages"
                                onChange={handleCheckbox}
                            />
                            5-7
                        </label>
                    </div>
                    <div className="radio">
                        <label id="option4">
                            <input
                                type="radio"
                                value="option4"
                                name="pages"
                                onChange={handleCheckbox}
                            />
                            7-10+
                        </label>
                    </div>
                    <div className="radio">
                        <label id="option5">
                            <input
                                type="radio"
                                value="option5"
                                name="pages"
                                onChange={handleCheckbox}
                            />
                            Unsure
                        </label>
                    </div>
                </div>
            </section>
        </Container>
    );
}
    
