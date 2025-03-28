import styled from "styled-components";
import { colors } from "../../styles";

import type { Props } from ".";

export const ButtonStyled = styled.button<Props>`
    position: ${(props) => (props.modal ? "absolut" : "100%")};
    width: ${(props) => (props.modal ? "300px" : "100%")};
    height: 24px;
    background-color: ${colors.secundary_bg_color};
    color:${colors.terceary_bg_color};
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    
    ${(props) =>
			props.modal &&
			`
        position: absolute;
        bottom: 50px;
        left: 350px;
    `}


    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.7;
    }
`;
