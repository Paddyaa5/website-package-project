import React from "react";
import styled from "styled-components";
//styles
import { StyledSection, StyledTextInput } from "../../Styles/CommonStyles";

const Container = styled(StyledSection)`
    section {
        color: ${(props) => props.theme.light};
        display: flex;
        flex-direction: column;
        select {
            width: 15%;
            background-color: ${(props) => props.theme.lightGray};
            color: ${(props) => props.theme.darkestOrange};
            height: 40px;
            outline: none;
            border-radius: 8px;
            margin: 4px 0;
            padding: 12px 10px;
        }
    }
`;

export default function SectionTwo({ section, setSection, formData, setFormData }) {
    return (
        <Container>
            <section className="enter-name">
                <h5>Full Name :</h5>
                <StyledTextInput type="text" className="name" id="name" />
            </section>
            <section className="enter-email">
                <h5>Email :</h5>
                <h6>This will only be used by us</h6>
                <StyledTextInput type="text" className="email" />
            </section>
            <section className="enter-number">
                <h5>Best Contact Number :</h5>
                <h6>Again, don't worry this will only be used by us</h6>
                <StyledTextInput type="text" className="number" />
            </section>
            <section className="business-owner">
                <h5>Are you the business owner?</h5>
                <select name="Y/N">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="n/a">n/a</option>
                </select>
            </section>
            <section className="business-type">
                <h5>Being as brief as you like, please describe the type of business</h5>
                <StyledTextInput type="text" className="type" />
            </section>
        </Container>
    );
}
