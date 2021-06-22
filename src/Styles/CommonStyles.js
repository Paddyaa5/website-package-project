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
    padding: 30px 25px 100px 25px;
    display: grid;
    h5 {
        color: ${(props) => props.theme.light};
    }
    h6 {
        color: ${(props) => props.theme.lightestGray};
    }
`;
