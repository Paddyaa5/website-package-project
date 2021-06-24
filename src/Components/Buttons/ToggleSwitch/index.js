import React from 'react'
import styled from "styled-components";


const StyledToggle = styled.div` 
	input[type="checkbox"] {
		visibility: hidden;
		&:checked + label {
			transform: rotate(360deg);
			background-color: ${(props) => props.theme.dark};
			&:before {
				transform: translateX(2.4vw);
				background-color: ${(props) => props.theme.darkestOrange};;
				border-color: ${(props) => props.theme.light};
			}
		}
	}

	
		label {display: flex;
		width: 4.26vw;
		height:  3.46vh;
		border: 0.5vh solid;
		border-radius: 100em;
		position: relative;
		transition: transform .75s ease-in-out;
		transform-origin: 50% 50%;
		cursor: pointer;
		
		&:before {
			transition: transform .75s ease;
			transition-delay: .5s;
			content: "";
			display: block;
			position: absolute;
			width: 1.21vw;
			height: 2.30vh;
			background-color: ${(props) => props.theme.lightGray};;
			border-radius: 50%;
			
		}
}
`;


export default function Toggle ({handleTheme}) {
    return (
		<StyledToggle>
			 <input type="checkbox" id="toggle" onChange={handleTheme}/> 
			<label htmlFor="toggle"></label> 
			
		</StyledToggle>
    )
}

;