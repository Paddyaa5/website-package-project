import React from "react";
import styled from "styled-components";
import { StyledSection, StyledTextArea } from "../../Styles/CommonStyles";
import gsap from "gsap";

const Container = styled(StyledSection)`
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
    .lookingForSelection{
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 5vh;
            box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.15), -3px -3px 5px rgba(0, 0, 0, 0.35);
            border-radius: 50px;
            padding: 0 20px
            
    }

    input[type="radio"] {
        display: none;
    }
    label {
        padding: 10px;
        height: 5vh;
        border-radius: 40px;
    }

    input[type="radio"]: checked + label {
       box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 5px rgba(0, 0, 0, 0.35);
       color: #EE7B00;
}
`;

export default function SectionThree({ section, setSection, formData, setFormData }) {

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
    return <Container>

            <section className="looking-for">
                
               <h5>Are you looking to....</h5>
               <div className="lookingForSelection">
                <label for="new">Launch a new website</label>
                    <input type="radio"
                           name="new"
                           id="new" />
                <label for="upgrade">Upgrade an existing website</label>
                    <input type="radio"
                           name="upgrade"
                           id="upgrade" />
                  </div>
            </section>

           <section className="website-use">
                <h5>What will be the main purpose of your website?</h5>
                <select name="">
                    <option value="e-commerce">E-Commerce</option>
                    <option value="advertising">Advertising your Company/Services</option>
                    <option value="landing">Landing Pages</option>
                    <option value="blog">Blog</option>
                    <option value="notSure">Still Unsure (we can help you with that)</option>
                </select>
            </section>

            <section className="services-section">
                <h5>Ideally, how many pages would you like your site to have?</h5>
                
                <div className="selections">
                    <div className="item">
                        <label htmlFor="0-3" className="0-3">
                            0 - 3
                        </label>
                        <input
                            type="checkbox"
                            name="0-3"
                            id="0-3"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="3-5" className="3-5">
                            3 - 5
                            
                        </label>
                        <input
                            type="checkbox"
                            name="3-5"
                            id="3-5"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="5-7" className="5-7">
                            5 - 7
                            
                        </label>
                        <input
                            type="checkbox"
                            name="5-7"
                            id="5-7"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="7-10" className="7-10">
                            7 - 10 +
                            
                        </label>
                        <input
                            type="checkbox"
                            name="7-10"
                            id="7-10"
                            onChange={handleCheckbox}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="unsure" className="unsure">
                            Unsure
                            
                        </label>
                        <input
                            type="checkbox"
                            name="unsure"
                            id="unsure"
                            onChange={handleCheckbox}
                        />
                    </div>
                </div>
            </section>
    </Container>;
}
