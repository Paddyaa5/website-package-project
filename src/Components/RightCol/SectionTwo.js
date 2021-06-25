import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
//styles
import { StyledSection, StyledTextInput, StyledTextArea } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    opacity: 0;
    section {
        color: ${(props) => props.theme.highlight};
        display: flex;
        flex-direction: column;
        select {
            width: 15%;
            background-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.secondary};
            height: 50px;
            outline: none;
            border-radius: 8px;
            margin: 4px 0;
            padding: 12px 10px;
            
        }

        input.type {
            &:focus {
        height:10vh;
        transition: height 1s, width 1s ease-in-out;
        
            }
        }
    }
`;

export default function SectionTwo({ animate, formData, setFormData }) {
    let containerRef = useRef(null);
    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        if (animate === "toS2") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
            });
        } else if (animate === "toS3") {
            gsap.to(containerRef, {
                opacity: 0,
                duration: 0.5,
            });
        } else if (animate === "backS2") {
            gsap.to(containerRef, {
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
            });
        }
    });
    useEffect(() => {
        console.log(formData);
    });

    return (
        <Container ref={(el) => (containerRef = el)}>
            <section className="enter-name">
                <h5>Full Name :</h5>
                <StyledTextInput
                    type="text"
                    className="name"
                    id="name"
                    value={formData.fullname}
                    name="fullname"
                    onChange={handleInput}
                />
            </section>
            <section className="enter-email">
                <h5>Email :</h5>
                <h6>This will only be used by us</h6>
                <StyledTextInput
                    type="text"
                    className="email"
                    value={formData.email}
                    name="email"
                    onChange={handleInput}
                />
            </section>
            <section className="enter-number">
                <h5>Best Contact Number :</h5>
                <h6>Again, don't worry this will only be used by us</h6>
                <StyledTextInput
                    type="text"
                    className="number"
                    value={formData.telephone}
                    name="telephone"
                    onChange={handleInput}
                />
            </section>
            <section className="business-owner">
                <h5>Are you the business owner?</h5>
                <select name="Y/N" name="owner" value={formData.owner} onChange={handleInput}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="n/a">n/a</option>
                </select>
            </section>
            <section className="business-type">
                <h5>Being as brief (or detailed) as you like, please describe the type of business</h5>
                <StyledTextArea
                    type="text"
                    className="type"
                    name="description"
                    onChange={handleInput}
                    value={formData.description}
                />
            </section>
        </Container>
    );
}
