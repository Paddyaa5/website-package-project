import styled from "styled-components";

export const StyledButton = styled.button`
    position: absolute;
    padding: 10px 30px;
    border: none;
    color: white;
    font-weight: 600;
    text-align: center;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    width: 120px;
    height: 40px;

    box-shadow: 2px 8px 10px 1px #000000;

    :hover {
        filter: brightness(120%);
        }

`;

export const StyledSection = styled.section`
    height: 100%;
    width: 100%;
    padding: 30px 4vw 100px 4vw;
    display: grid;
    h5 {
        color: ${(props) => props.theme.light};
        font-size: calc(10px + 0.4vw);
    }
    h6 {
        color: ${(props) => props.theme.lightestGray};
        font-size: calc(6px + 0.4vw);
    }
`;

export const StyledTextInput = styled.input`
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.lightGray};
    outline: none;
    width: 50%;
    background: none;
    color: ${(props) => props.theme.darkestOrange};
    height: 40px;
    transition: width 0.5s ease-in-out;
    margin: 4px 0;
    padding: 12px 10px;
    &:hover {
        border: 1px solid ${(props) => props.theme.light};
    }
    &:focus {
        width: 100%;
        border: 1px solid ${(props) => props.theme.darkestOrange};
    }
`;
export const StyledTextArea = styled.textarea`
    resize: none;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.lightGray};
    outline: none;
    width: 50%;
    background: none;
    color: ${(props) => props.theme.darkestOrange};
    height: 40px;
    transition: width 0.5s ease-in-out;
    margin: 4px 0;
    padding: 12px 10px;
    &:hover {
        border: 1px solid ${(props) => props.theme.light};
    }
    &:focus {
        width: 100%;
        border: 1px solid ${(props) => props.theme.darkestOrange};
    }
`;
