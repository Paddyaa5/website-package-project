import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledSection } from "../../Styles/CommonStyles";
import gsap from "gsap";

const Container = styled(StyledSection)`
    opacity: 0;
    section {
        color: ${(props) => props.theme.highlight};
        display: flex;
        flex-direction: column;
        select {
            width: 100%;
            background-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.secondary};
            height: 50px;
            outline: none;
            border-radius: 8px;
            margin-top: 10px;
            padding: 12px 10px;
        }
        .selections {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .radio {
                height: 5vh;
                width: 8vw;
                border-radius: 25px;
                label {
                    height: 100%;
                    padding: 20px 0;
                    font-weight: 400;
                    border-radius: 25px;
                    width: 100%;
                    font-size: 14px;
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
            width: 100%;
            border-radius: 50px;
            label {
                display: flex;
                justify-content: space-around;
                padding: 10px;
                font-size: 14px;
                height: 60px;
                border-radius: 25px;
                cursor: pointer;
                align-items: center;
                width: 45%;
            }
            input[type="radio"] {
                display: none;
            }
        }
        .active {
            color: ${(props) => props.theme.secondary};
            box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.15),
                inset -3px -3px 5px rgba(0, 0, 0, 0.35);
            transition: 0.5s ease-in-out;
        }
        .not-active {
            color: ${(props) => props.theme.highlight};
            background: rgba(27, 27, 27, 1);
            box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35);
            transition: 0.5s ease-in-out;
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

    useEffect(() => {
        console.log(formData);
    });

    return (
        <Container ref={(el) => (containerRef = el)}>
            <section className="looking-for">
                <h5>Are you looking to....</h5>
                <div className="lookingForSelection">
                    <label id="new" className={formData.need === "new" ? "active" : "not-active"}>
                        Launch a new website
                        <input type="radio" name="need" value="new" onChange={handleInput} />
                    </label>
                    <label
                        id="upgrade"
                        className={formData.need === "upgrade" ? "active" : "not-active"}
                    >
                        Upgrade an existing website
                        <input type="radio" name="need" value="upgrade" onChange={handleInput} />
                    </label>
                </div>
            </section>
            <section className="website-use">
                <h5>What will be the main purpose of your website?</h5>
                <select name="purpose" onChange={handleInput} value={formData.purpose}>
                    <option value="e-commerce">E-Commerce</option>
                    <option value="brochure">Brochure</option>
                    <option value="booking management">Booking Management</option>
                    <option value="landing">Landing Page</option>
                    <option value="blog">Blog</option>
                    <option value="unsure">Still unsure (We can help you with that!)</option>
                </select>
            </section>
            <section className="pages-section">
                <h5>Ideally, how many pages would you like your site to have?</h5>
                <h6>Example webpages are; Homepage, About, Services, Contact, etc.</h6>
                <div className="selections">
                    <div className="radio">
                        <label
                            id="option1"
                            className={formData.pages === "0-3" ? "active" : "not-active"}
                        >
                            <input type="radio" value="0-3" name="pages" onChange={handleInput} />
                            0-3
                        </label>
                    </div>
                    <div className="radio">
                        <label
                            id="option2"
                            className={formData.pages === "4-5" ? "active" : "not-active"}
                        >
                            <input type="radio" value="4-5" name="pages" onChange={handleInput} />
                            4-5
                        </label>
                    </div>
                    <div className="radio">
                        <label
                            id="option3"
                            className={formData.pages === "6-7" ? "active" : "not-active"}
                        >
                            <input type="radio" value="6-7" name="pages" onChange={handleInput} />
                            6-7
                        </label>
                    </div>
                    <div className="radio">
                        <label
                            id="option4"
                            className={formData.pages === "8+" ? "active" : "not-active"}
                        >
                            <input type="radio" value="8+" name="pages" onChange={handleInput} />
                            8+
                        </label>
                    </div>
                    <div className="radio">
                        <label
                            id="option5"
                            className={formData.pages === "unsure" ? "active" : "not-active"}
                        >
                            <input
                                type="radio"
                                value="unsure"
                                name="pages"
                                onChange={handleInput}
                            />
                            Unsure
                        </label>
                    </div>
                </div>
            </section>
            <section className="time-section">
                <h5>When would you be hoping to get you website completed?</h5>
                <h6>
                    This is just an estimate and we can work on this with you in more detail if
                    needed.
                </h6>
                <div className="selections">
                    <div className="radio">
                        <label
                            id="opn1"
                            className={formData.time === "1 month" ? "active" : "not-active"}
                        >
                            <input
                                type="radio"
                                value="1 month"
                                name="time"
                                onChange={handleInput}
                            />
                            1 month
                        </label>
                    </div>
                    <div className="radio">
                        <label
                            id="opn2"
                            className={formData.time === "1-3 months" ? "active" : "not-active"}
                        >
                            <input
                                type="radio"
                                value="1-3 months"
                                name="time"
                                onChange={handleInput}
                            />
                            1-3 months
                        </label>
                    </div>
                    <div className="radio">
                        <label
                            id="opn3"
                            className={formData.time === "3-6 months" ? "active" : "not-active"}
                        >
                            <input
                                type="radio"
                                value="3-6 months"
                                name="time"
                                onChange={handleInput}
                            />
                            3-6 months
                        </label>
                    </div>

                    <div className="radio">
                        <label
                            id="opn5"
                            className={formData.time === "unsure" ? "active" : "not-active"}
                        >
                            <input type="radio" value="unsure" name="time" onChange={handleInput} />
                            Unsure
                        </label>
                    </div>
                </div>
            </section>
        </Container>
    );
}
